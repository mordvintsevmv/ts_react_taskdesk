import {IComment} from "./comment";

export interface ITask {
    id: number,
    projectID: number,
    title: string,
    description: string,
    date_created: string,
    date_finished: string | null,
    work_time: string,
    priority: number,
    status: status,
    comments: IComment[]
}

export enum status {
    "Queue",
    "Development",
    "Done"
}