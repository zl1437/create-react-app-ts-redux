import { get, post } from '../util/axios';

import axios from 'axios'


// export const getAuthorize = (params: any) => get('/wx/portal/authorize', params,false);//获取微信授权

export const sendMessage = (params: any) => post('/Common/sendMessage', params,{openid: true});//发送验证码

// export const getWxUserInfo = (params: any) => get('/wx/portal/userInfo',params,true);//获取微信用户信息

export const bindPhone = (params: any) => post('/Common/bind',params,{openid: true});//绑定手机号

export const getUserInfo  = (params: any) => post('/User/getInfo',params,{openid: true});//获取用户信息

export const getUserInfo2  = (params: any) => post('/User/getInfo',params,{openid: false});//获取用户信息

//get flag确认是否需要openid
export const getSignUp = (params: any) => get('/common/signUp',params,false);//获取用户信息

export const setHotSearchHits = (params: any) => get('/Home/setHotSearchHits',params,false);//设置热门搜索点击量

export const getAuthorize =  (params: any) => axios.get('/wx/portal/authorize', {params});//获取微信授权

export const getWxUserInfo = (params: any) => axios.get('/wx/portal/userInfo',{params});//获取微信用户信息