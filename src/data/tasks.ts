import {ITask} from "../types/task";

export const tasksStart: ITask[] = [
    {
        id: 0,
        projectID: 0,
        title: "My First Task",
        description: "Description for first task",
        date_created: new Date(2022,9,12).toString(),
        date_finished: new Date(2022,10,11).toString(),
        priority: 2,
        comments: [{
            id: 1,
            parentID: null,
            body: "Cool!"
        }],
        subtasks: [{
            id: 0,
            body: "New"
        },
            {
                id: 1,
                body: "Task"
            },
        ]
    },

    {
        id: 1,
        projectID: 0,
        title: "Buy Cards",
        description: "Buy cards in local store",
        date_created: new Date().toString(),
        date_finished: null,
        priority: 1,
        comments: [{
            id: 2,
            parentID: null,
            body: "Interesting!"
        }],
        subtasks: [{
            id: 2,
            body: "Qwe"
        },
            {
                id: 3,
                body: "EWq"
            },
        ]
    },

    {
        id: 2,
        projectID: 0,
        title: "Search for jobs",
        description: "Find some jobs for me",
        date_created: new Date(2022,10,12).toString(),
        date_finished: null,
        priority: 0,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "I can help you!"
            },
        ],
        subtasks: [{
            id: 5,
            body: "ASD"
        },
            {
                id: 6,
                body: "AdDADA"
            },
        ]
    },

]