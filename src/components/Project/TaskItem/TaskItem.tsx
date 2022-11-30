import React, {FC} from "react";
import {ITask} from "../../../types/task";

// @ts-ignore
import style from "./TaskItem.module.css"
import {NavLink} from "react-router-dom";
// @ts-ignore
import open_button from "../../../img/open.png";
// @ts-ignore
import edit_button from "../../../img/edit.png";
// @ts-ignore
import trash_button from "../../../img/trash.png";
import {getDateCustom, getWorkTime} from "../../../functions/dateFunctions";

interface TaskItemProps {
    task: ITask,
}


const TaskItem: FC<TaskItemProps> = ({task}) => {

    const editClickHandler = () => {

    }

    const deleteClickHandler = () => {

    }

    return (
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

            <div className={style.buttons}>
                <img src={edit_button} alt={"edit"} className={style.edit_button} onClick={editClickHandler}/>
                <img src={trash_button} alt={"delete"} className={style.trash_button} onClick={deleteClickHandler}/>

            </div>


            <div className={style.description}>
                {task.description}
            </div>

            <div className={style.date}>
                <div className={style.date_created}>
                    {getDateCustom(task.date_created)}
                </div>

                <div className={style.date_finished}>
                    {task.date_finished ? getDateCustom(task.date_finished) : "--.--.----"}
                </div>
            </div>

            <div className={style.work_time}>
                In work: {getWorkTime(task.date_created, task.date_finished)}
            </div>

            <NavLink to={``}>
                <img src={open_button} alt={"open"} className={style.open_button}/>
            </NavLink>

        </div>
    )
}

export default TaskItem