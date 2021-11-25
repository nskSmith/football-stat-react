export interface ITeam {
    teamId: number, 
    teamName: string,
    teamLogo: string,
    squad: Array<Object>
}

export interface TeamState {
    team: ITeam,
    isLoading: boolean
}

export enum TeamActionEnum {
   SET_IS_LOADING = 'SET_IS_LOADING', 
   SET_TEAM_ID = 'SET_TEAM_ID',
   GET_TEAM_BY_TEAM_ID = 'GET_TEAM_BY_TEAM_ID'
}

export interface SetIsLoadingAction {
    type: TeamActionEnum.SET_IS_LOADING
    payload: boolean
}

export interface GetTeamByTeamIdAction {
    type: TeamActionEnum.GET_TEAM_BY_TEAM_ID
    payload: ITeam
}

export type TeamAction = 
     GetTeamByTeamIdAction | SetIsLoadingAction