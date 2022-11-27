export interface IComment {
    id: number,
    parentID: number | null,
    body: string,
}