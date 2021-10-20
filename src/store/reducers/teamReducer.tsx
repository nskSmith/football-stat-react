import { Action } from "../../types/types"
import { CHOOSE_TEAM } from "../actions/actionsType"

const initialState = {
    teamID: 0,
}

export const teamReducer = (state = initialState, action: Action<number>) => {
    switch(action.type) {
        case CHOOSE_TEAM:
            return { ...state, teamID: action.payload } 
        default: return state
    }
}