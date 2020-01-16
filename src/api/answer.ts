
import { post } from '../util/axios';


export const getAnswerList = (params: any) => post('/File/getList', params, {openid:true});//获取文件列表


export const getAnswerInfo = (params: any) => post('/File/getInfo', params, {openid:true});//设置文件点击量