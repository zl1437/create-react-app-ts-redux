import { getCourseList } from '../api/course';

import { GET_COURSE_LIST } from '../actionTypes/course'

export const handleCourseList = (data: any) => {
    return {
        type: GET_COURSE_LIST,
        payload: getCourseList(data)
    }
}