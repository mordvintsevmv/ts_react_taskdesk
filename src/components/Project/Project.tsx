import React, {FC} from "react";
import {useParams} from "react-router-dom";

// @ts-ignore
import style from "./Project.module.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IColumn} from "../../types/column";
import Column from "./Column/Column";

const Project: FC = () => {
    const {projectID} = useParams()

    const {tasks, loading, error} = useTypedSelector(state => state.taskReducer)
    const {projects} = useTypedSelector(state => state.projectReducer)

    const columns: IColumn[] = projects[Number(projectID)].columns
    const columnElements = columns.map(column => <Column key={column.id} id={column.id} title={column.title}
                                                         taskIDs={column.taskIDs} tasks={tasks}/>)


    const onDragStart = (): void => {
    }

    const onDragEnd = (): void => {
    }

    const onDragUpdate = (): void => {
    }


    return (
        <div>
            <div className={style.desk_wrapper}>
                {columnElements}
            </div>
        </div>
    )
}

export default Project
