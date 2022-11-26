import React, {FC} from "react";
import {useParams} from "react-router-dom";
import {ITask} from "../../types/task";
import TaskItem from "./TaskItem/TaskItem";

// @ts-ignore
import style from "./Project.module.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Project: FC = () => {
    const {projectID} = useParams()
    const {tasks, loading, error} = useTypedSelector(state => state.taskReducer)

    const projectTasks: ITask[] = tasks.filter(task => task.projectID === Number(projectID))

    const QueueTaskElements = projectTasks.map(task => {
        if (task.status === 0) {
            return <TaskItem key={task.id} task={task}/>
        } else {return null}
    })

    const DevelopmentTaskElements = projectTasks.map(task => {
        if (task.status === 1) {
            return <TaskItem key={task.id} task={task}/>
        } else {return null}
    })

    const DoneTaskElements = projectTasks.map(task => {
        if (task.status === 2) {
            return <TaskItem key={task.id} task={task}/>
        } else {return null}
    })

    return (
        <div>
            <div className={style.desk_wrapper}>
                <div className={style.queue}>
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
