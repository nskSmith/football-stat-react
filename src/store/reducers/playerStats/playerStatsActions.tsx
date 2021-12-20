import { AppDispatch } from "../../store";
import { GetPlayerStatsByPlayerIdAction, IPlayer, PlayerStatsActionEnum, SetIsLoadingAction } from "./playerStatsTypes"


const headers = new Headers();
const token = "ddBdib3AWXwtnbo18xA67V6ETp6TIMhDXAyqyHRSoaMl0sngoNb5oQZfbBao";
const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
}; 


export const playerStatsActionCreators = {
    setIsLoading: (payload: boolean) : SetIsLoadingAction => ({
        type: PlayerStatsActionEnum.SET_PLAYER_IS_LOADING,
        payload
    }),
    getPlayerStats: (player: IPlayer) : GetPlayerStatsByPlayerIdAction => ({
        type: PlayerStatsActionEnum.GET_PLAYER_STATS_BY_PLAYER_ID,
        payload: player
    }),
    getPlayerStatsByPlayerId: (playerId: number) => async (dispatch: AppDispatch) =>{
        try {
            console.log('start_loading');
            
            dispatch(playerStatsActionCreators.setIsLoading(true))
            const response = await fetch("https://soccer.sportmonks.com/api/v2.0/players/" + playerId + "?include=stats&api_token=" + token, requestOptions as any)
            .then( resp => resp.json())
            .then( json => json.data)
            const player: IPlayer = {
                playerId: playerId,
                playerName: response.fullname,
                position_id: response.position_id,
                image_path: response.image_path,
                stats: response.stats.data
            }
            console.log('player is loading -', player.stats)
            dispatch(playerStatsActionCreators.getPlayerStats(player))
            dispatch(playerStatsActionCreators.setIsLoading(false))
        } catch (error) {
        }
    }
}