import {tasksReserve} from "../../data/tasks";
import {ITask} from "../../types/task";

/*

   INITIAL STATE

 */
interface taskState {
    tasks: ITask[],
    loading: boolean,
    error: string | null
}

const initial_state: taskState = {
    tasks: tasksReserve,
    loading: false,
    error: null
}


/*

   ACTION TYPES

 */
enum taskActionTypes {
    FETCH_TASKS = "FETCH_TASKS",
    FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
}


/*

    ACTIONS

 */
interface FetchTaskAction {
    type: taskActionTypes.FETCH_TASKS,
}

type taskActions = FetchTaskAction


/*

    REDUCER

 */
export const taskReducer = (state = initial_state, action:taskActions) => {
    switch (action.type) {
        default:
            return state
    }
}
