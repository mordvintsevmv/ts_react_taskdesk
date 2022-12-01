import {FC} from "react";
import {Field, Form, Formik, FormikValues} from "formik";
import {useDispatch} from "react-redux";
import {taskActionTypes} from "../../../store/reducers/taskReducer";
import {useParams} from "react-router-dom";
// @ts-ignore
import style from "./TaskForm.module.css"
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {projectActionTypes} from "../../../store/reducers/projectReducer";

const TaskForm: FC = () => {

    const dispatch = useDispatch()
    const {projectID} = useParams()
    const {lastID} = useTypedSelector(state => state.taskReducer)

    const submitHandler = (values: FormikValues) => {

        const payloadTask = {
            id: lastID + 1,
            title: values.title,
            description: values.description,
            projectID: Number(projectID),
            priority: Number(values.priority)
        }

        const payloadProject = {
            projectID: Number(projectID),
            taskID: lastID + 1,
        }

        dispatch({type: taskActionTypes.CREATE_TASK, payload: payloadTask})
        dispatch({type: projectActionTypes.ADD_TASK, payload: payloadProject})
    }

    return (
        <div>
            <Formik
                initialValues={{title: "", description: "", priority: "0"}}
                onSubmit={(values) => submitHandler(values)}
            >
                {({values}) =>
                    <Form>
                        <div>

                            <div>
                                Title
                            </div>

                            <Field name={"title"} type="text" placeholder="Buy cars"/>
                        </div>

                        <div>

                            <div>
                                Description
                            </div>

                            <Field name={"description"} type="text" placeholder="Buy cards in local store"/>
                        </div>

                        <div>

                            <div>
                                Priority
                            </div>

                            <span className={style.priority}>
                                <Field name={"priority"} type={"radio"} value={"0"}/>
                                Low
                            </span>

                            <span className={style.priority}>
                                <Field name={"priority"} type={"radio"} value={"1"}/>
                                Middle
                            </span>

                            <span className={style.priority}>
                                <Field name={"priority"} type={"radio"} value={"2"}/>
                                High
                            </span>

                        </div>

                        <div>
                            <button type={"submit"}>Create Task</button>
                        </div>

                    </Form>

                }

            </Formik>
        </div>
    )
}

export default TaskForm