import {IComment} from "./comment";
import {ISubTask} from "./subtask";

export interface ITask {
    id: number,
    projectID: number,
    title: string,
    description: string,
    date_created: string,
    date_finished: string | null,
    priority: number,
    comments: IComment[] | null,
    subtasks: ISubTask[] | null
}