/*

   INITIAL STATE

 */
const initial_state = {

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
