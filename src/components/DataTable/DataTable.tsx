import { useEffect, useState } from "react";
import "./DataTable.css";
import DataTableItem from '../DataTableItem/DataTableItem'
import {connect, useSelector} from 'react-redux'
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { loadavg } from "os";

const DataTable = () => {
  const {team, isLoading}= useTypedSelector(state => state.teamState)
  const [teamId, setTeamId] = useState(0)
  const [isLoaded, setIsLoaded] = useState(true)
  console.log('team inside component -',team);
  const [isError, setIsError] = useState(false)

  // useEffect(() => {
  //   console.log('team inside useEffect -',team);
  //   // setTeamId(team.teamId)
  //   //setIsLoaded(isLoading)
  // }, [team])

  if (!isLoading) {
    return (
      <div className="DataTable">
        <div className="DataTable-team">
          <img className="teamLogo" src={team.teamLogo} alt={team.teamName} />
          <div className="teamname">
            {team.teamName} ({team.teamId})
          </div>
        </div>
        <div className="DataTable-items">
          {team.squad.map(
            (item: any) => <DataTableItem item={item} key={item.player_id}/>
          )}
        </div>
      </div>
    );
  } else {
      if(isError) {
        return <div className='DataTable-service-message error-message'>BACKEND ERROR</div>
      } else {
          if(team.teamId === 0) {
            return <div className='DataTable-service-message'>Choose Team by using <strong>teamID</strong></div>
          } else { 
            return <div className='DataTable-service-message'>LOADING . . .</div>
          }
      }
  }
}

// const mapStateToProps = (state: any) => {
//   return {
//     teamId: state.team.teamID
//   }
// }

export default DataTable
// export default connect(mapStateToProps, null)(DataTable)

