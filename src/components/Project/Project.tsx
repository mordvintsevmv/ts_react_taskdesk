import React, {FC, useState} from "react";
import {useParams} from "react-router-dom";

// @ts-ignore
import style from "./Project.module.css"
// @ts-ignore
import plus from "../../img/plus.png"

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IColumn} from "../../types/column";
import Column from "./Column/Column";
import Window from "../Window/Window";
import TaskForm from "./TaskForm/TaskForm";

const Project: FC = () => {
    const {projectID} = useParams()

    const {tasks} = useTypedSelector(state => state.taskReducer)
    const {projects} = useTypedSelector(state => state.projectReducer)

    const [addMode, setAddMode] = useState<boolean>(false)

    const projectIndex: number = projects.findIndex(project => project.id === Number(projectID))

    const columns: IColumn[] = projects[projectIndex].columns
    const columnElements = columns.map(column =>
        <Column key={column.id} id={column.id} title={column.title}
                taskIDs={column.taskIDs} tasks={tasks}/>
    )

    const addClickHandler = () => {
        setAddMode(true)
    }

    return (
        <div>

            {addMode && <Window children={<TaskForm/>} setWindow={setAddMode}/>}

            <div
                className={(addMode) ? `${style.desk_wrapper} ${style.desk_wrapper_blur}` : `${style.desk_wrapper}`}>

                {columnElements}

                <div className={style.button_add} onClick={addClickHandler}>
                    <img src={plus} alt={"add_task"}/>
                </div>

            </div>
        </div>
    )
}

export default Project
