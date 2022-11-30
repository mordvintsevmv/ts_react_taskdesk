import {tasksReserve} from "../../data/tasks";
import {ITask} from "../../types/task";

/*

   INITIAL STATE

 */
interface taskState {
    tasks: ITask[]
}

const initial_state: taskState = {
    tasks: tasksReserve
}


/*

   ACTION TYPES

 */
enum taskActionTypes {
    FETCH_TASKS = "FETCH_TASKS",
    CREATE_TASK = "CREATE_TASK",
    DELETE_TASK = "DELETE_TASK",
    EDIT_TASK = "EDIT_TASK"
}


/*

    ACTIONS

 */
interface FetchTaskAction {
    type: taskActionTypes.FETCH_TASKS,
}

interface CreateTaskAction {
    type: taskActionTypes.CREATE_TASK,
    payload: ITask
}

interface DeleteTaskAction {
    type: taskActionTypes.DELETE_TASK,
    payload: number
}

interface EditTaskAction {
    type: taskActionTypes.EDIT_TASK,
    payload: ITask
}

type taskActions = FetchTaskAction | CreateTaskAction | DeleteTaskAction | EditTaskAction


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
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            }
        }

        case taskActionTypes.DELETE_TASK: {
            return {
                ...state,
                tasks: [...state.tasks.filter(task => task.id !== action.payload)]
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
