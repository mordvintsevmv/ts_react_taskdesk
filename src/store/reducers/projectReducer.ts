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
    EDIT_PROJECT = "EDIT_PROJECT",
    FINISH_PROJECT = "FINISH_PROJECT"
}

interface FetchProjectAction {
    type: projectActionTypes.FETCH_PROJECTS,
}

interface CreateProjectAction {
    type: projectActionTypes.CREATE_PROJECT,
    payload: any
}

interface DeleteProjectAction {
    type: projectActionTypes.DELETE_PROJECT,
    payload: number
}

interface EditProjectAction {
    type: projectActionTypes.EDIT_PROJECT,
    payload: IProject
}

interface FinishProjectAction {
    type: projectActionTypes.FINISH_PROJECT,
    payload: number
}

export type projectActions = FetchProjectAction | CreateProjectAction | DeleteProjectAction | EditProjectAction | FinishProjectAction


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

            const maxId = state.projects.reduce((max, item) => item.id > max ? item.id : max, 0);
            const project: IProject = {
                id: maxId+1,
                title: action.payload.title,
                description: action.payload.description,
                date_created: (new Date()).toString(),
                date_finished: null,
                columns: [
                    {
                        id: 0,
                        title: "Queue",
                        taskIDs: []
                    },
                    {
                        id: 1,
                        title: "Development",
                        taskIDs: []
                    },
                    {
                        id: 2,
                        title: "Done",
                        taskIDs: []
                    },
                ]
            }

            return {
                ...state,
                projects: [
                    ...state.projects,
                    project
                ]
            }
        }

        case(projectActionTypes.DELETE_PROJECT): {
            return {
                ...state,
                projects: [...state.projects.filter(project => project.id !== action.payload)]
            }
        }

        case(projectActionTypes.FINISH_PROJECT): {
            const projectIndex = state.projects.findIndex(project => project.id === action.payload)
            const project = state.projects[projectIndex]
            project.date_finished = (new Date()).toString()

            return {
                ...state,
                projects: [...state.projects.map(project => {
                    if (project.id === action.payload) {
                        project.date_finished = new Date().toString()
                    }
                    return project
                })]

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
