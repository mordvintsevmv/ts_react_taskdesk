import {IComment} from "./comment";

export interface ITask {
    id: number,
    parentID: number | null,
    projectID: number,
    title: string,
    description: string,
    date_created: string,
    date_finished: string | null,
    priority: number,
    status: status,
    comments: IComment[]
}

export enum status {
    "Queue",
    "Development",
    "Done"
}