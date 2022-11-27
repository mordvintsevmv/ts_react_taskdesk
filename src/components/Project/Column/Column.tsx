import {FC} from "react";
import {ITask} from "../../../types/task";
import TaskItem from "../TaskItem/TaskItem";
// @ts-ignore
import style from "./Column.module.css"

interface ColumnProps {
    id: number,
    title: string,
    taskIDs: number[],
    tasks: ITask[]
}

const Column: FC<ColumnProps> = ({id, title, taskIDs, tasks}) => {

    const taskElements = tasks.map(task => {
        if (taskIDs.includes(task.id)) {
            return <TaskItem task={task} key={task.id}/>
        } else
            return null
    })

    return (
        <div className={style.column_wrapper}>

            <div className={style.title}>
                {title}
            </div>

            {taskElements}
        </div>
    )
}

export default Column