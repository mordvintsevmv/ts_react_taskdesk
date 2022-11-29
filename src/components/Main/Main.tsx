import {FC, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import ProjectItem from "./ProjectItem/ProjectItem";
// @ts-ignore
import style from "./Main.module.css"
import {NavLink} from "react-router-dom";
import Window from "../Window/Window";
import ProjectForm from "./ProjectForm/ProjectForm";

const Main: FC = () => {

    const {projects, error, loading} = useTypedSelector(state => state.projectReducer)

    const [addMode, setAddMode] = useState<boolean>(false)

    const projectElements = projects.map(project =>
        <NavLink to={`/project/${project.id}`} key={project.id}>
            <ProjectItem project={project} key={project.id}/>
        </NavLink>
    )

    const addClickHandler = () => {
        setAddMode(true)
    }


    return (
        <div>

            {addMode && <Window children={<ProjectForm/>} setWindow={setAddMode}/>}

            <div className={addMode ? `${style.projects_wrapper} ${style.projects_wrapper_blur}` : `${style.projects_wrapper}`}>
                <div className={style.project_elements}>
                    {projectElements}
                </div>

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

export default Main