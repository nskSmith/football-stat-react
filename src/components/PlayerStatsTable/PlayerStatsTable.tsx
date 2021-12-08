import { useState } from "react";
import "./PlayerStatsTable.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const PlayerStatsTable = () => {
  const {team, isLoading}= useTypedSelector(state => state.teamState)
  const [teamId, setTeamId] = useState(0)
  const [isLoaded, setIsLoaded] = useState(true)
  const [isError, setIsError] = useState(false)

    return (
      <div className="PlayerStatsTable">
          <img className="teamLogo" src={team.teamLogo} alt={team.teamName} />
          <div className="teamname">
            PlayerStatsTable
          </div>
      </div>
    );
}

export default PlayerStatsTable
