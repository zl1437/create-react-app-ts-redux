
// import {
//     GET_INDEXDATA,
//     GET_MOVIEDATA
// } from '../actions/type';


export const indexData = (state={}, action: any) => {
    switch (action.type) {
        case 'GET_INDEXDATA':
            return Object.assign(state, action.payload)
        default:
            return state;
    }
}

export const movieData = (state = {}, action: any) => {
    switch (action.type) {
        case 'GET_MOVIEDATA':
            return Object.assign({}, state, action.payload.result);
        default:
            return state;
    }
}



