import { Action } from "../../types/types";
import { CHOOSE_TEAM } from "./actionsType";

export function chooseTeam(teamId: number) : Action<number> {
    return {
        type: CHOOSE_TEAM,
        payload: teamId
    }
}