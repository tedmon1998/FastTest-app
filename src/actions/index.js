import { useDispatch } from "react-redux"


export const addName = (text) => {
    const dispatch = useDispatch()
    return dispatch({ type: 'ADD_NAME', payload: text })
}

export const serach = (text) => {
    return {
        type: 'FILTER',
        payload: text,
    }
}

export const delName = (text) => {
    const dispatch = useDispatch()
    return dispatch({ type: 'DEL_NAME', payload: text })
}