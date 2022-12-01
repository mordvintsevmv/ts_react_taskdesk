import {tasksStart} from "../../data/tasks";
import {ITask} from "../../types/task";

/*

   INITIAL STATE

 */
interface taskState {
    tasks: ITask[],
    lastID: number
}

const initial_state: taskState = {
    tasks: tasksStart,
    lastID: 2
}


/*

   ACTION TYPES

 */
export enum taskActionTypes {
    FETCH_TASKS = "FETCH_TASKS",
    CREATE_TASK = "CREATE_TASK",
    DELETE_TASK = "DELETE_TASK",
    EDIT_TASK = "EDIT_TASK",
    FINISH_TASK = "FINISH_TASK"
}


/*

    ACTIONS

 */
interface FetchTaskAction {
    type: taskActionTypes.FETCH_TASKS,
}

interface CreateTaskAction {
    type: taskActionTypes.CREATE_TASK,
    payload: any
}

interface DeleteTaskAction {
    type: taskActionTypes.DELETE_TASK,
    payload: number
}

interface EditTaskAction {
    type: taskActionTypes.EDIT_TASK,
    payload: ITask
}

interface FinishTaskAction {
    type: taskActionTypes.FINISH_TASK,
    payload: number
}

type taskActions = FetchTaskAction | CreateTaskAction | DeleteTaskAction | EditTaskAction | FinishTaskAction


/*

    REDUCER

 */
export const taskReducer = (state = initial_state, action: taskActions) => {
    switch (action.type) {
        case taskActionTypes.FETCH_TASKS: {
            return {
                ...state
            }
        }

        case taskActionTypes.CREATE_TASK: {

            const task: ITask = {
                id: action.payload.id,
                parentID: null,
                projectID: action.payload.projectID,
                title: action.payload.title,
                description: action.payload.description,
                date_created: new Date().toString(),
                date_finished: null,
                priority: action.payload.priority,
                comments: null
            }

            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    task
                ],
                lastID: state.lastID + 1
            }
        }

        case taskActionTypes.DELETE_TASK: {
            return {
                ...state,
                tasks: [...state.tasks.filter(task => task.id !== action.payload)]
            }
        }

        case(taskActionTypes.FINISH_TASK): {
            return {
                ...state,
                tasks: [...state.tasks.map(task => {
                    if (task.id === action.payload) {
                        task.date_finished = new Date().toString()
                    }
                    return task
                })]

            }
        }

        case taskActionTypes.EDIT_TASK: {
            return {
                ...state,
                tasks: [...state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return action.payload
                    } else {
                        return task
                    }
                })]
            }
        }

        default:
            return state
    }
}
