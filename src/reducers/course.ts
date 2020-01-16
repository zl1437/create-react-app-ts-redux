import {GET_COURSE_LIST} from "../actionTypes/course"

const initState = {
    list: [],
    page_num: 1
}

export const courseList = (state = initState, action: any) => {
    switch (action.type) {
        case GET_COURSE_LIST:
            let {list, page_num, total_pages} = action.payload.data;
            if(page_num !== 1) {
                list = [...state.list, ...list]
            }
            return Object.assign(
                {},
                state,
                {
                    list,
                    page_num,
                    total_pages,
                    hasMore: page_num < total_pages
                }
            )
            
            

        default:
            return state;
    }
}
