
import { post } from '../util/axios';


export const getCardList = (params: any) => post('/Card/getList', params, {openid:true});//获取会员卡列表


export const getCardDetail= (params: any) => post('/Card/getInfo', params, {openid:true});//获取会员卡详情


export const checkCard= (params: any) => post('/Card/checkCard', params, {openid:true});//获取会员卡详情


export const getPayList= (params: any) => post('/Card/getPayList', params, {openid:true});//获取支付列表





