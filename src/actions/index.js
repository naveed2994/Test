export const add = (data) => {
    return {
        type: "add",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const edit = (data,id) => {
    return {
        type: "edit", 
            id:id,
            data: data
    }
}
export const remove = (id) => {
    return {
        type: "delete",
        id
    }
}
