import {ITask} from "../types/task";

export const tasksReserve: ITask[] = [
    {
        id: 0,
        projectID: 0,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 2,
        status: 0,
        comments: [{
            id: 1,
            parentID: null,
            body: "LOL"
        }]
    },

    {
        id: 1,
        projectID: 0,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 1,
        status: 1,
        comments: [{
            id: 2,
            parentID: null,
            body: "LOL"
        }]
    },

    {
        id: 2,
        projectID: 0,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 3,
        projectID: 1,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 4,
        projectID: 1,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 5,
        projectID: 1,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 6,
        projectID: 2,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 7,
        projectID: 2,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 8,
        projectID: 2,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 9,
        projectID: 3,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 10,
        projectID: 3,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 11,
        projectID: 3,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 12,
        projectID: 4,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 13,
        projectID: 4,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

    {
        id: 14,
        projectID: 4,
        title: "Task",
        description: "Description",
        date_created: "25.11.2022",
        date_finished: "26.11.2022",
        work_time: "NN",
        priority: 0,
        status: 2,
        comments: [
            {
                id: 3,
                parentID: null,
                body: "LOL"
            },
            {
                id: 4,
                parentID: 3,
                body: "JIJ"
            },
        ]
    },

]