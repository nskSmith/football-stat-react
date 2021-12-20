import { PlayerState, PlayerStatsAction, PlayerStatsActionEnum } from "./playerStatsTypes"

const initialState: PlayerState = {
    player: {
        playerId: 0,
        playerName: '',
        position_id: '',
        image_path: '',
        stats: [{}]
    },
    isLoading: true
}

export const playerStatsReducer = (state = initialState, action: PlayerStatsAction) : PlayerState => {
    switch(action.type) {
        case PlayerStatsActionEnum.SET_PLAYER_IS_LOADING:
            return { ...state, isLoading: action.payload } 
        case PlayerStatsActionEnum.GET_PLAYER_STATS_BY_PLAYER_ID:
            return { ...state, player: action.payload }
        default: return state
    }
}