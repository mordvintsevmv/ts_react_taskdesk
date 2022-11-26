import React, {FC} from "react";
import {ITask} from "../../../types/task";

// @ts-ignore
import style from "./TaskItem.module.css"

interface TaskItemProps {
    task: ITask
}


const TaskItem: FC<TaskItemProps> = ({task}) => {

    return(
        <div
             className={
            task.priority === 2 ? `${style.task_wrapper} ${style.high_priority}` :
                task.priority === 1 ? `${style.task_wrapper} ${style.middle_priority}` :
                    task.priority === 0 ? `${style.task_wrapper} ${style.low_priority}` :
                        `${style.task_wrapper}`

             }
        >

            <div className={style.top_part}>

                <span className={style.id}>
                    {task.id}
                </span>

                <span className={style.title}>
                    {task.title}
                </span>

            </div>

            <div className={style.description}>
                {task.description}
            </div>

            <div className={style.date}>
                <div className={style.date_created}>
                    {task.date_created}
                </div>

                <div className={style.date_finished}>
                    {task.date_finished ? task.date_finished : "--.--.----"}
                </div>
            </div>

            <div className={style.work_time}>
                In work: {task.work_time}
            </div>
        </div>
    )
}

export default TaskItem