import { AppDispatch } from "../../store";
import { GetTeamByTeamIdAction, ITeam, SetIsLoadingAction, TeamActionEnum } from "./teamTypes"

const token = "ddBdib3AWXwtnbo18xA67V6ETp6TIMhDXAyqyHRSoaMl0sngoNb5oQZfbBao";
const requestOptions = {
        method: "GET",
        redirect: "follow",
}; 


export const teamActionCreators = {
    setIsLoading: (payload: boolean) : SetIsLoadingAction => ({
        type: TeamActionEnum.SET_IS_LOADING,
        payload
    }),
    getTeam: (team: ITeam) : GetTeamByTeamIdAction => ({
        type: TeamActionEnum.GET_TEAM_BY_TEAM_ID,
        payload: team
    }),
    getTeamByTeamId: (teamId: number) => async (dispatch: AppDispatch) =>{
        try {
            dispatch(teamActionCreators.setIsLoading(true))
            const response = await fetch("https://soccer.sportmonks.com/api/v2.0/teams/" + teamId + "?include=squad.player&api_token=" + token, requestOptions as any)
            .then( resp => resp.json())
            .then( json => json.data)
            const team: ITeam = {
                teamId: teamId,
                teamName: response.name,
                teamLogo: response.logo_path,
                squad: response.squad.data
            }
            console.log('team is loading')
            dispatch(teamActionCreators.setIsLoading(false))
            dispatch(teamActionCreators.getTeam(team))
        } catch (error) {
        }
    }
}