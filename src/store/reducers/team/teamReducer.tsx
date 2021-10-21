import { TeamAction, TeamActionEnum, TeamState } from "./teamTypes"

const initialState: TeamState = {
    team: {
        teamId: 0,
        teamName: '',
        teamLogo: '',
        squad: [{}]
    },
    isLoading: false
}

export const teamReducer = (state = initialState, action: TeamAction) : TeamState => {
    switch(action.type) {
        case TeamActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload } 
        case TeamActionEnum.GET_TEAM_BY_TEAM_ID:
            return { ...state, team: action.payload }
        default: return state
    }
}