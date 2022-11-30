import React, {FC, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import ProjectItem from "./ProjectItem/ProjectItem";
// @ts-ignore
import style from "./Main.module.css"
import Window from "../Window/Window";
import ProjectForm from "./ProjectForm/ProjectForm";
// @ts-ignore
import plus from "../../img/plus.png"

const Main: FC = () => {

    const {projects} = useTypedSelector(state => state.projectReducer)

    const [addMode, setAddMode] = useState<boolean>(false)

    const projectElements = projects.map(project =>
        <ProjectItem project={project} key={project.id}/>
    )

    const addClickHandler = () => {
        setAddMode(true)
    }

    return (
        <div>

            {addMode && <Window children={<ProjectForm/>} setWindow={setAddMode}/>}

            <div
                className={addMode ? `${style.projects_wrapper} ${style.projects_wrapper_blur}` : `${style.projects_wrapper}`}>
                <div className={style.project_elements}>
                    {projectElements}
                </div>

                <div className={style.button_add} onClick={addClickHandler}>
                    <img src={plus} alt={"add_task"}/>
                </div>
            </div>

        </div>
    )
}

export default Main