import { combineReducers } from "redux";
import { playerStatsReducer } from "./playerStats/playerStatsReducer";
import { teamReducer } from "./team/teamReducer";


export const rootReducer = combineReducers({
    teamState: teamReducer,
    playerState: playerStatsReducer
})