import { useState } from "react";
import "./Tabs.css";
import { teamActionCreators } from "../../store/reducers/team/teamActions";
import { Link } from "react-router-dom";

const Tabs = () => {
    // const [teamID, setTeamId] = useState('')
    // const dispatch = useDispatch()
    // const submitHandler = (event: any) => {
    //     event.preventDefault()
    //     console.log(Number(teamID))
    //     dispatch(teamActionCreators.getTeamByTeamId(Number(teamID)))
    //     setTeamId('')
    // }

    // const onChangeHandler = (event: any) => {
    //     const value = event.target.value
    //     setTeamId(value)
    // }

    return (
        <div className="Tabs">
            <Link className="Tabs-link" to="/team-squad">
                <button className="Tabs-button">
                    TEAM SQUAD
                </button>
            </Link>
            <Link className="Tabs-link" to="/player-stats">
                <button className="Tabs-button">
                    PLAYER STATS
                </button>
            </Link>
            <Link className="Tabs-link" to="/team-stats">
                <button className="Tabs-button">
                    TEAM STATS
                </button>
            </Link>
        </div>
    )
}

export default Tabs