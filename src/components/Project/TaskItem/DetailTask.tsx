import {FC} from "react";
import {ITask} from "../../../types/task";
// @ts-ignore
import style from "./TaskItem.module.css"

interface DetailTaskProps {
    task: ITask
}

const DetailTask: FC<DetailTaskProps> = ({task}) => {

    const subtaskElements = task.subtasks?.map(subtask => <div key={subtask.id}>{subtask.body}</div>)
    const commentElements = task.comments?.map(comment => <div key={comment.id}>{comment.body}</div>)

    return (
        <div>
            <div>
                <div>
                    SubTasks
                </div>
                {subtaskElements}
            </div>

            <div>
                <div>
                    Comments
                </div>
                {commentElements}
            </div>


        </div>
    )
}

export default DetailTask