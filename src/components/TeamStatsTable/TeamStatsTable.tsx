import { useState } from "react";
import "./TeamStatsTable.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const TeamStatsTable = () => {
  const {team, isLoading}= useTypedSelector(state => state.teamState)
  const [teamId, setTeamId] = useState(0)
  const [isLoaded, setIsLoaded] = useState(true)
  const [isError, setIsError] = useState(false)

    return (
      <div className="TeamStatsTable">
          <img className="teamLogo" src={team.teamLogo} alt={team.teamName} />
          <div className="teamname">
            TeamStatsTable
          </div>
      </div>
    );
}

export default TeamStatsTable
