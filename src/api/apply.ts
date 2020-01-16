
import { post } from '../util/axios';


export const getOrderSure = (params: any) => post('/OnlineApply/orderSure', params, {openid:true});//订单确认页


export const onlineSignUp = (params: any) => post('/OnlineApply/onlineSignUp', params, {openid:true});//在线报名