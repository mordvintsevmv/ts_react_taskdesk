/*

   INITIAL STATE

 */

import {IProject} from "../../types/project";
import {projectsReserve} from "../../data/projects";

interface projectState {
    projects: IProject[],
    loading: boolean,
    error: string | null
}

const initial_state: projectState = {
    projects: projectsReserve,
    loading: false,
    error: null
}


/*

   ACTION TYPES

 */
enum projectActionTypes {
    FETCH_PROJECTS = "FETCH_PROJECTS",
    FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS",
    FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR",
}


/*

    ACTIONS

 */
interface FetchProjectAction {
    type: projectActionTypes.FETCH_PROJECTS,
}

type projectActions = FetchProjectAction


/*

    REDUCER

 */
export const projectReducer = (state = initial_state, action:projectActions) => {
    switch (action.type) {

        case(projectActionTypes.FETCH_PROJECTS):{
            return {
                ...state,
                loading: true
            }
        }

        default:
            return state
    }
}
