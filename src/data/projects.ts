import {IProject} from "../types/project";

export const projectsStart: IProject[] = [
    {
        id: 0,
        title: "My First Project",
        description: "This is project description!",
        date_created: new Date().toString(),
        date_finished: null,
        columns: [
            {
                id: 0,
                title: "Queue",
                taskIDs: [2]
            },
            {
                id: 1,
                title: "Development",
                taskIDs: [1]
            },
            {
                id: 2,
                title: "Done",
                taskIDs: [0]
            },
        ]
    },

]