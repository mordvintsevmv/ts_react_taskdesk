import {IProject} from "../../types/project";
import {projectsReserve} from "../../data/projects";

/*

   INITIAL STATE

 */
interface projectState {
    projects: IProject[]
}

const initial_state: projectState = {
    projects: projectsReserve
}


/*

   ACTION TYPES

 */
export enum projectActionTypes {
    FETCH_PROJECTS = "FETCH_PROJECTS",
    CREATE_PROJECT = "CREATE_PROJECT",
    DELETE_PROJECT = "DELETE_PROJECT",
    EDIT_PROJECT = "EDIT_PROJECT"
}

interface FetchProjectAction {
    type: projectActionTypes.FETCH_PROJECTS,
}

interface CreateProjectAction {
    type: projectActionTypes.CREATE_PROJECT,
    payload: IProject
}

interface DeleteProjectAction {
    type: projectActionTypes.DELETE_PROJECT,
    payload: number
}

interface EditProjectAction {
    type: projectActionTypes.EDIT_PROJECT,
    payload: IProject
}

export type projectActions = FetchProjectAction | CreateProjectAction | DeleteProjectAction | EditProjectAction


/*

    REDUCER

 */
export const projectReducer = (state = initial_state, action: projectActions) => {
    switch (action.type) {

        case(projectActionTypes.FETCH_PROJECTS): {
            return {
                ...state,
                loading: true
            }
        }

        case(projectActionTypes.CREATE_PROJECT): {
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.payload
                ]
            }
        }

        case(projectActionTypes.DELETE_PROJECT): {
            return {
                ...state,
                projects: [...state.projects.filter(project => project.id !== action.payload)]
            }
        }

        case(projectActionTypes.EDIT_PROJECT): {
            return {
                ...state,
                projects: [...state.projects.map(project => {
                    if (project.id === action.payload.id) {
                        return action.payload
                    } else {
                        return project
                    }
                })]
            }
        }

        default:
            return state
    }
}
