import { throws } from "assert";
import React, { useEffect, useState } from "react";
import "./DataTable.css";
import {DataTableItem} from '../DataTableItems/DataTableItem'

export function DataTable() {
  const token: String =
    "ddBdib3AWXwtnbo18xA67V6ETp6TIMhDXAyqyHRSoaMl0sngoNb5oQZfbBao";
  const teamID: String = "53";

  const [isLoaded, setIsLoaded] = useState(false)
  const [teamName, setTeamName] = useState("default Name")
  const [countryId, setCountryId] = useState("default Country")
  const [teamLogo, setTeamLogo] = useState("path")
  const [squad, setSquad] = useState([])

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://soccer.sportmonks.com/api/v2.0/teams/" + teamID + "?include=squad.player&api_token=" + token, requestOptions as any)
      .then((response) => response.json())
      .then(
        (json_res) => {
          const data = json_res.data;
          setIsLoaded(true)
          setTeamName(data.name)
          setCountryId(data.country_id)
          setTeamLogo(data.logo_path)
          setSquad(data.squad.data)
        },
        (error) => {
          setIsLoaded(true)
          console.log("error", error)
        }
      );
  }, [])

    if (isLoaded) {
      return (
        <div className="DataTable">
          <div className="DataTable-team">
            <img className="teamLogo" src={teamLogo} alt={teamName} />
            <div className="teamname">
              {teamName} ({countryId})
            </div>
          </div>
          <div className="DataTable-items">
            {squad.map(
              (item: any) => <DataTableItem item={item}/>
            )}
          </div>
        </div>
      );
    } else {
      return <div>LOADING . . .</div>;
    }
}
