export const getWorkTime = (date_created: string, date_finished: string | null) => {

    const start_date = new Date(date_created)
    const end_date = date_finished ? new Date(date_finished) : new Date()
    const work_time = Math.floor(end_date.getTime() - start_date.getTime());

    if (work_time < 1000) {
        return `${work_time} ms`
    } else if (work_time < (60 * 1000)) {
        return `${Math.floor(work_time / 1000)} s`
    } else if (work_time < (60 * 60 * 1000)) {
        return `${Math.floor(work_time / (1000 * 60))} m`
    } else if (work_time < (24 * 60 * 60 * 1000)) {
        return `${Math.floor(work_time / (1000 * 60 * 60))} h`
    } else {
        return `${Math.floor(work_time / (1000 * 60 * 60 * 24))} d`
    }
}

export const getDateCustom = (stringDate: string) => {
    const date = new Date(stringDate)
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}