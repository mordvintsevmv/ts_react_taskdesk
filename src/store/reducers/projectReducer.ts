import {IProject} from "../../types/project";
import {projectsStart} from "../../data/projects";

/*

   INITIAL STATE

 */
interface projectState {
    projects: IProject[],
    lastID: number
}

const initial_state: projectState = {
    projects: projectsStart,
    lastID: 0
}


/*

   ACTION TYPES

 */
export enum projectActionTypes {
    FETCH_PROJECTS = "FETCH_PROJECTS",
    CREATE_PROJECT = "CREATE_PROJECT",
    DELETE_PROJECT = "DELETE_PROJECT",
    EDIT_PROJECT = "EDIT_PROJECT",
    FINISH_PROJECT = "FINISH_PROJECT",
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK"
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

interface AddTaskAction {
    type: projectActionTypes.ADD_TASK,
    payload: any
}

interface DeleteTaskAction {
    type: projectActionTypes.DELETE_TASK,
    payload: any
}

export type projectActions = FetchProjectAction | CreateProjectAction | DeleteProjectAction | EditProjectAction | FinishProjectAction | AddTaskAction | DeleteTaskAction


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

            const project: IProject = {
                id: action.payload.id,
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
                ],
                lastID: state.lastID+1
            }
        }

        case(projectActionTypes.DELETE_PROJECT): {
            return {
                ...state,
                projects: [...state.projects.filter(project => project.id !== action.payload)]
            }
        }

        case(projectActionTypes.FINISH_PROJECT): {
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

        case(projectActionTypes.ADD_TASK):{
            return {
                ...state,
                projects: [...state.projects.map(project => {
                    if (project.id === action.payload.projectID) {
                        project.columns[0].taskIDs.push(action.payload.taskID)
                        return project
                    } else {
                        return project
                    }
                })]
            }
        }

        case(projectActionTypes.DELETE_TASK): {
            return {
                ...state,
                projects: [...state.projects.map(project => {
                    if (project.id === action.payload.projectID) {
                        project.columns[0].taskIDs = project.columns[0].taskIDs.filter(taskID => taskID !== action.payload.taskID)
                        project.columns[1].taskIDs = project.columns[1].taskIDs.filter(taskID => taskID !== action.payload.taskID)
                        project.columns[2].taskIDs = project.columns[2].taskIDs.filter(taskID => taskID !== action.payload.taskID)
                        return project
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
