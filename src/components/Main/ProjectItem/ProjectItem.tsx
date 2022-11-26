import {FC} from "react";
import {IProject} from "../../../types/project";

// @ts-ignore
import style from "./ProjectItem.module.css"

interface ProjectItemProps {
    project: IProject
}

const ProjectItem: FC<ProjectItemProps> = ({project}) => {
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
        </div>
    )
}

export default ProjectItem