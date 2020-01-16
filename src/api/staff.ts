
import { get, post } from '../util/axios';


export const getStaffList = (params: any) => get('/staff/staffList', params,false);//获取员工信息



export const getstaffOperation = (params: any) => post('/staff/staffOperation', params,{openid: true});//员工新增


export const getCompanyList = (params: any) => post('/Home/getCompanyList', params,{openid: true});//公司列表


export const staffDel = (params: any) => get('/staff/staffDel', params,false);//删除员工


export const newStaffList = (params: any) => get('/staff/courseMemberStaffList', params,false);//最近报名人员
