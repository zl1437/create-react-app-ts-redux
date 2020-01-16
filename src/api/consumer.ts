import { get, post } from '../util/axios';


export const getConsumerList = (params: object) => post('/CourseMember/getList', params,{openid:true})// 获取课程列表


export const getConsumerDetail= (params: object) => get('/CourseMember/detail', params,false)// 获取消费详情


export const cancelApply= (params: object) => post('/SelfHelp/cancel', params,{openid:true})// 取消报名



export const getCertificate= (params: object) => get('/CourseMember/certificate', params,false)// 获取证书



export const sendEvaluate= (params: object) => post('/Notice/fillSurvey', params,{openid:true})// 提交评价



export const getEvaluate= (params: object) => post('/Notice/getSurvey', params,{openid:true})// 评价也获取



export const getCourse= (params: object) => post('/Notice/getCourseNotice', params,{openid:true})// 获取上课信息



export const courseConfirm= (params: object) => post('/Notice/courseConfirm', params,{openid:true})// 确认上课



export const applyCertificate= (params: object) => post('/Home/applyCertificate', params,{openid:true})// 申请纸质证书



export const getafterReport= (params: object) => get('/CourseMember/afterReport', params,false)// 获取课后报告