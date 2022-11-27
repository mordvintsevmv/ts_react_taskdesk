import {FC} from "react";
import {Field, Form, Formik} from "formik";

const AddForm: FC = () => {
    return (
        <div>
            <Formik
                initialValues={{title: "", description: ""}}
                onSubmit={() => console.log("11")}
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

export default AddForm