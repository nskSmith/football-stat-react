import { combineReducers } from "redux";
import { teamReducer } from "./team/teamReducer";


export const rootReducer = combineReducers({
    teamState: teamReducer
})