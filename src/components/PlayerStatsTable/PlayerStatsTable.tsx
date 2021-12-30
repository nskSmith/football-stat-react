import { useState } from "react";
import "./PlayerStatsTable.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import PlayerStats from "./PlayerStats";

const PlayerStatsTable = () => {
  const {player, isLoading}= useTypedSelector(state => state.playerState)
  const [teamId, setTeamId] = useState(0)
  const [isLoaded, setIsLoaded] = useState(true)
  const [isError, setIsError] = useState(false)
  
  if (!isLoading) { 
    return (
      <div className="PlayerStatsTable">
        <div className="PlayerStatsTable-player">
          <p className="PlayerStatsTable-photo"><img src={player.image_path} alt={player.playerName} /></p>
          <p className='PlayerStatsTable-name'>{player.playerName}</p>
        </div>
        <div className='PlayerStatsTable-stats'>
            <div className="PlayerStatsTable-header">
              <p className='PlayerStats-season'>season</p>
              <p className='PlayerStats-league'>league</p>
              <p className='PlayerStats-team'>team</p>
              <p className='PlayerStats-value'>games</p>
              <p className='PlayerStats-value'>goals</p>
              <p className='PlayerStats-value'>assists</p>
              <p className='PlayerStats-value'>yellow cards</p>
              <p className='PlayerStats-value'>red cards</p>
           </div>
          {player.stats.map(
            (item: any) => <PlayerStats stats={item} key={item.season}/>
          )}
        </div>
      </div>
      );
  }
  else {
    return (
      <div className="PlayerStatsTable">
        <div className="PlayerStatsTable-player">
          <div className="loader"></div>
        </div>
      </div>
    );
  }
  
}

export default PlayerStatsTable
