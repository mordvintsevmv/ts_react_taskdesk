import {FC} from "react";
import {IProject} from "../../../types/project";

// @ts-ignore
import style from "./ProjectItem.module.css"

// @ts-ignore
import trash_button from "../../../img/trash.png"

// @ts-ignore
import edit_button from "../../../img/edit.png"

// @ts-ignore
import open_button from "../../../img/open.png"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {projectActionTypes} from "../../../store/reducers/projectReducer";

interface ProjectItemProps {
    project: IProject
}

const ProjectItem: FC<ProjectItemProps> = ({project}) => {

    const dispatch = useDispatch()

    const deleteClickHandler = () => {
        dispatch({type: projectActionTypes.DELETE_PROJECT, payload: project.id})
    }

    const editClickHandler = () => {
    }



    return (
        <div className={style.project_wrapper}>

            <div className={style.top_part}>

                <span className={style.id}>
                    {project.id}
                </span>

                <span className={style.title}>
                    {project.title}
                </span>


            </div>

            <div className={style.buttons}>
                <img src={edit_button} alt={"edit"} className={style.edit_button} onClick={editClickHandler}/>
                <img src={trash_button} alt={"delete"} className={style.trash_button} onClick={deleteClickHandler}/>

            </div>

            <div className={style.description}>
                {project.description}
            </div>

            <div className={style.date}>
                <div className={style.date_created}>
                    {project.date_created}
                </div>

                <div className={style.date_finished}>
                    {project.date_finished ? project.date_finished : "--.--.----"}
                </div>
            </div>

            <div className={style.work_time}>
                In work: {project.work_time}
            </div>

            <NavLink to={`/project/${project.id}`}>
                <img src={open_button} alt={"open"} className={style.open_button}/>
            </NavLink>

        </div>
    )
}

export default ProjectItem