import { post } from '../util/axios';

// 获取会员活动列表
export const getVipList = (params: object) => post('/Vip/getList', params, {openid: true})

// 获取会员活动详情 options确认是否需要openid
export const getVipDetail = (params: object) => post('/Vip/getCourseDetail', params, {openid: true})

