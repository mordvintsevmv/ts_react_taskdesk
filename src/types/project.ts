export interface IProject {
    id: number,
    title: string,
    description: string,
    date_created: string,
    date_finished: string | null,
    work_time: string,
}