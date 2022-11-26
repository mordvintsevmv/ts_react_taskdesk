import {FC} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import ProjectItem from "./ProjectItem/ProjectItem";
// @ts-ignore
import style from "./Main.module.css"
import {NavLink} from "react-router-dom";

const Main: FC = () => {

    const {projects, error, loading} = useTypedSelector(state => state.projectReducer)

    const projectElements = projects.map(project =>
        <NavLink to={`/project/${project.id}`}>
            <ProjectItem project={project}/>
        </NavLink>
    )


    return (
        <div>
            <div className={style.project_elements}>
                {projectElements}
            </div>
        </div>
    )
}

export default Main