import React, {FC, useState} from "react";
import {useParams} from "react-router-dom";

// @ts-ignore
import style from "./Project.module.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IColumn} from "../../types/column";
import Column from "./Column/Column";
import Window from "../Window/Window";
import TaskForm from "./TaskForm/TaskForm";
import DetailTask from "./DetailTask";

const Project: FC = () => {
    const {projectID} = useParams()

    const {tasks, loading, error} = useTypedSelector(state => state.taskReducer)
    const {projects} = useTypedSelector(state => state.projectReducer)

    const [addMode, setAddMode] = useState<boolean>(false)
    const [detailMode, setDetailMode] = useState(false)

    const taskClickHandler = (taskID: number) => {
        setDetailMode(true)
    }


    const columns: IColumn[] = projects[Number(projectID)].columns
    const columnElements = columns.map(column =>
            <Column key={column.id} id={column.id} title={column.title}
                    taskIDs={column.taskIDs} tasks={tasks} />
)


    const onDragStart = (): void => {
    }

    const onDragEnd = (): void => {
    }

    const onDragUpdate = (): void => {
    }

    const addClickHandler = () => {
        setAddMode(true)
    }

    return (
        <div>

            {addMode && <Window children={<TaskForm/>} setWindow={setAddMode}/>}
            {detailMode && <Window children={<DetailTask/>} setWindow={setDetailMode}/>}


            <div
                className={(addMode || detailMode) ? `${style.desk_wrapper} ${style.desk_wrapper_blur}` : `${style.desk_wrapper}`}>
                {columnElements}

                <div className={style.button_add} onClick={addClickHandler}>
                    <svg>
                        <circle r={"30"} cx="230" cy="100" fill={"blue"}/>
                    </svg>

                    <div className={style.button_plus}>
                        +
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Project
