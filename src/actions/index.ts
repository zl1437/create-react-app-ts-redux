import {
    getIndexData,
    getMovie
} from '../api/index';

import {
    GET_INDEXDATA,
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    GET_MOVIEDATA
} from './type'

export const handleGetIndexData = (data: any) => {
    return {
        type: GET_INDEXDATA,
        payload: getIndexData(data)
    }
}

export const handleMovieData = (data: any) => {
    return {
        type: GET_MOVIEDATA,
        payload: getMovie(data)
    }
}

export function addTodo(text: any) {
    return { type: ADD_TODO, text }
}

export function toggleTodo(index: any) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter: any) {
    return { type: SET_VISIBILITY_FILTER, filter }
}