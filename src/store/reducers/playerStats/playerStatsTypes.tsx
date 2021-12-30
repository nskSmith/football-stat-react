export interface IPlayer {
    playerId: number, 
    playerName: string,
    image_path: string,
    position_id: string,
    stats: Array<Object>
}

export interface PlayerState {
    player: IPlayer,
    isLoading: boolean
}

export enum PlayerStatsActionEnum {
   SET_PLAYER_IS_LOADING = 'SET_PLAYER_IS_LOADING', 
   SET_PLAYER_ID = 'SET_PLAYER_ID',
   GET_PLAYER_STATS_BY_PLAYER_ID = 'GET_PLAYER_STATS_BY_PLAYER_ID'
}

export interface SetIsLoadingAction {
    type: PlayerStatsActionEnum.SET_PLAYER_IS_LOADING
    payload: boolean
}

export interface GetPlayerStatsByPlayerIdAction {
    type: PlayerStatsActionEnum.GET_PLAYER_STATS_BY_PLAYER_ID
    payload: IPlayer
}

export type PlayerStatsAction = 
    GetPlayerStatsByPlayerIdAction | SetIsLoadingAction