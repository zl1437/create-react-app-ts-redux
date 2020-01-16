import { post } from '../util/axios';


export const getSellList = (params: any) => post('/User/getSaleCourseList', params,{openid: true});//获取销售班级列表


export const getSigninList= (params: any) => post('/User/getSaleSigninList', params,{openid: true});//获取销售签到列表


export const changeMember= (params: any) => post('/SelfHelp/changeMember', params,{openid: true});//更换学员


export const cancelMember= (params: any) => post('/SelfHelp/cancel', params,{openid: true});//取消报名
