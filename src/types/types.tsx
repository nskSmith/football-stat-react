export interface TeamAPI {
    teamID: String
    teamName: String
    countryId: number
    teamLogo: String
    squad: any
}

export enum POSITION {
    "GK",
    "DF",
    "MF",
    "FD",
}

export interface Action<T> {
    type: String
    payload: T
}