import {FC} from "react";
import {IProject} from "../../../types/project";

// @ts-ignore
import style from "./ProjectItem.module.css"

// @ts-ignore
import trash_button from "../../../img/trash.png"

// @ts-ignore
import done_button from "../../../img/done.png"

// @ts-ignore
import open_button from "../../../img/open.png"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {projectActionTypes} from "../../../store/reducers/projectReducer";
import {getDateCustom, getWorkTime} from "../../../functions/dateFunctions";

interface ProjectItemProps {
    project: IProject
}

const ProjectItem: FC<ProjectItemProps> = ({project}) => {

    const dispatch = useDispatch()

    const deleteClickHandler = () => {
        dispatch({type: projectActionTypes.DELETE_PROJECT, payload: project.id})
    }

    const doneClickHandler = () => {
        dispatch({type: projectActionTypes.FINISH_PROJECT, payload: project.id})
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
                {project.date_finished ? null :
                    <img src={done_button} alt={"done"} className={style.done_button} onClick={doneClickHandler}/>}
                <img src={trash_button} alt={"delete"} className={style.trash_button} onClick={deleteClickHandler}/>

            </div>

            <div className={style.description}>
                {project.description}
            </div>

            <div className={style.date}>
                <div className={style.date_created}>
                    {getDateCustom(project.date_created)}
                </div>

                <div className={style.date_finished}>
                    {project.date_finished ? getDateCustom(project.date_finished) : "--.--.---- --:--"}
                </div>
            </div>

            <div className={style.work_time}>
                In work: {getWorkTime(project.date_created, project.date_finished)}
            </div>

            <NavLink to={`/project/${project.id}`}>
                <img src={open_button} alt={"open"} className={style.open_button}/>
            </NavLink>

        </div>
    )
}

export default ProjectItem