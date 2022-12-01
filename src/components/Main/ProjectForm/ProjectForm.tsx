import React, {FC} from "react";
import {Field, Form, Formik, FormikValues} from "formik";
import {useDispatch} from "react-redux";
import {projectActionTypes} from "../../../store/reducers/projectReducer";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface ProjectFormProps {
    setAddMode:  React.Dispatch<React.SetStateAction<boolean>>,
}

const ProjectForm: FC<ProjectFormProps> = ({setAddMode}) => {

    const dispatch = useDispatch()
    const {lastID} = useTypedSelector(state => state.projectReducer)


    const submitHandle = (values: FormikValues) => {
        const payload = {
            id: lastID + 1,
            title: values.title,
            description: values.description
        }
        dispatch({type: projectActionTypes.CREATE_PROJECT, payload})
        setAddMode(false)
    }

    return (
        <div>
            <Formik
                initialValues={{title: "", description: ""}}
                onSubmit={(values) => submitHandle(values)}
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