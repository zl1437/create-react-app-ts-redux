import { post } from '../util/axios';

// 获取课程列表
export const getCourseList = (params: object) => post('/Course/getList', params,{openid:true})

// 获取课程详情
export const getCourseDetail = (params: object) => post('/Course/getCourseDetail', params,{openid:true})


// 下载单个课表
export const sendSimpleMail = (params: object) => post('/Course/sendSingleSyllabusEmail', params,{openid:true})


// 下载全国课表
export const sendMainMail = (params: object) => post('/Course/sendClassSyllabusEmail', params,{openid:true})


// 提交搜索内容
export const sendContent = (params: object) => post('/Home/addFeedBack', params,{openid:true})


// 班级订阅
export const getFavClass = (params: object) => post('/Course/favClass', params,{openid:true})


// 课程收藏
export const getFavCourse = (params: object) => post('/Course/favCourse', params,{openid:true})


// 我的收藏
export const myFavList = (params: object) => post('/Course/myFav', params,{openid:true})