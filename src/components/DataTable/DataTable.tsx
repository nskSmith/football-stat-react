import { useEffect, useState } from "react";
import "./DataTable.css";
import DataTableItem from '../DataTableItem/DataTableItem'
import {connect} from 'react-redux'

const DataTable = ({ teamId }: any) => {
  const token: String =
    "ddBdib3AWXwtnbo18xA67V6ETp6TIMhDXAyqyHRSoaMl0sngoNb5oQZfbBao";

  const [isLoaded, setIsLoaded] = useState(false)
  const [teamName, setTeamName] = useState("default Name")
  const [teamLogo, setTeamLogo] = useState("path")
  const [squad, setSquad] = useState([])
  const [isError, setIsError] = useState(false)

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };  

  useEffect(() => {
    setIsLoaded(false)
    setIsError(false)
    if(teamId) {
      fetch("https://soccer.sportmonks.com/api/v2.0/teams/" + teamId + "?include=squad.player&api_token=" + token, requestOptions as any)
        .then((response) => response.json())
        .then(
          json_res => {
            const data = json_res.data;
            setIsLoaded(true)
            setTeamName(data.name)
            setTeamLogo(data.logo_path)
            setSquad(data.squad.data)
        })
        .catch(
          error => {
            setIsLoaded(false)
            setIsError(true)
            console.log("error", error)
            console.log('is error? - ',isError)
            console.log('is loaded? - ', isLoaded)
          }
        );
    }
  }, [teamId])

  if (isLoaded) {
    return (
      <div className="DataTable">
        <div className="DataTable-team">
          <img className="teamLogo" src={teamLogo} alt={teamName} />
          <div className="teamname">
            {teamName} ({teamId})
          </div>
        </div>
        <div className="DataTable-items">
          {squad.map(
            (item: any) => <DataTableItem item={item} key={item.player_id}/>
          )}
        </div>
      </div>
    );
  } else {
      if(isError) {
        return <div className='DataTable-service-message error-message'>BACKEND ERROR</div>
      } else {
          console.log('team ID ==== ', teamId);
          if(teamId === 0) {
            return <div className='DataTable-service-message'>Choose Team by using <strong>teamID</strong></div>
          } else { 
            return <div className='DataTable-service-message'>LOADING . . .</div>
          }
      }
  }
}

const mapStateToProps = (state: any) => {
  return {
    teamId: state.team.teamID
  }
}

export default connect(mapStateToProps, null)(DataTable)

