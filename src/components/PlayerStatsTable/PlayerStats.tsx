import { POSITION } from "../../types/types";
import "./PlayerStats.css";

function getPositionName(num: number): String {
    return POSITION[num - 1];
  }

const PlayerStats = (props: {
  stats: {
    team_id: number,
    league_id: number,
    season_id: number,
    appearences: number, 
    lineups: number, 
    substitute_in: number, 
    goals: number,
    assists: number, 
    saves: number, 
    interceptions: number, 
    yellowcards: number,
    redcards: number, 
  }}) => {
    return (
      <div className="PlayerStats-stats">
        <p className='PlayerStats-season'>{props.stats.season_id}</p>
        <p className='PlayerStats-league'>{props.stats.league_id}</p>
        <p className='PlayerStats-team'>{props.stats.team_id}</p>
        <p className='PlayerStats-value'>{props.stats.appearences}</p>
        <p className='PlayerStats-value'>{props.stats.goals}</p>
        <p className='PlayerStats-value'>{props.stats.assists}</p>
        <p className='PlayerStats-value'>{props.stats.yellowcards}</p>
        <p className='PlayerStats-value'>{props.stats.redcards}</p>
      </div>
  )            
}

export default PlayerStats
