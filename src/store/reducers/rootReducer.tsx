import { combineReducers } from "redux";
import { teamReducer } from "./teamReducer";


export const rootReducer = combineReducers({
    team: teamReducer
})