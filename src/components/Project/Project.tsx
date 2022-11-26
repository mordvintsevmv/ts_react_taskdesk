import React, {DragEventHandler, FC} from "react";
import {useParams} from "react-router-dom";
import {ITask} from "../../types/task";
import {tasksReserve} from "../../data/tasks";
import TaskItem from "./TaskItem/TaskItem";

// @ts-ignore
import style from "./Project.module.css"

const Project: FC = () => {
    const {projectID} = useParams()

    const tasks: ITask[] = tasksReserve.filter(project => project.projectID === Number(projectID))

    const QueueTaskElements = tasks.map(task => {
        if (task.status === 0) {
            return <TaskItem task={task}/>
        }
    })

    const DevelopmentTaskElements = tasks.map(task => {
        if (task.status === 1) {
            return <TaskItem task={task}/>
        }
    })

    const DoneTaskElements = tasks.map(task => {
        if (task.status === 2) {
            return <TaskItem task={task}/>
        }
    })

    const dropHandler = (ev: React.DragEvent<HTMLDivElement>): void => {
        ev.preventDefault()
        console.log(ev)
    }



    return (
        <div>
            <div className={style.desk_wrapper}>
                <div draggable className={style.queue} onDrop={dropHandler} onDragEnd={dropHandler}
                >
                    <div className={style.queue_title}>
                        QUEUE
                    </div>
                    {QueueTaskElements}
                </div>

                <div className={style.development}>
                    <div className={style.development_title}>
                        DEVELOPMENT
                    </div>
                    {DevelopmentTaskElements}
                </div>

                <div className={style.done}>
                    <div className={style.done_title}>
                        DONE
                    </div>
                    {DoneTaskElements}
                </div>

            </div>
        </div>
    )
}

export default Project
