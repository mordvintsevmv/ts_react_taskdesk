import {FC} from "react";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {projectActionTypes} from "../../../store/reducers/projectReducer";

const ProjectForm: FC = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <Formik
                initialValues={{id: 10, title: "", description: "", date_created:"11", date_finished:"11", work_time:"1", columns:null}}
                onSubmit={(values) => {
                    dispatch({type: projectActionTypes.CREATE_PROJECT, payload: values})
                }}
            >

                <Form>
                    <div>

                        <div>
                            Title
                        </div>

                        <Field name={"title"}/>
                    </div>

                    <div>

                        <div>
                            Description
                        </div>

                        <Field name={"description"}/>
                    </div>

                    <div>
                        <button type={"submit"}>Create Project</button>
                    </div>

                </Form>
            </Formik>
        </div>
    )
}

export default ProjectForm