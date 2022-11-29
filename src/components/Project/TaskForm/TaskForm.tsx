import {FC} from "react";
import {Field, Form, Formik} from "formik";

const TaskForm: FC = () => {
    return (
        <div>
            <Formik
                initialValues={{title: "", description: "", status: 0, priority: 0}}
                onSubmit={(values) => console.log(values)}
            >

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

                        <Field name={"priority"} type="number" placeholder="0"/>
                    </div>

                    <div>

                        <div>
                            Status
                        </div>

                        <Field name={"status"} type="text" placeholder="HURRY UP"/>
                    </div>

                    <div>
                        <button type={"submit"}>Create Project</button>
                    </div>

                </Form>
            </Formik>
        </div>
    )
}

export default TaskForm