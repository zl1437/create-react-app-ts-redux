
import { get, post } from '../util/axios';

// 子站筛选课程数据
export const getIndexData = (params: any) => post('/Api/v1/goldenfinance/schedule', params);

export const getMovie = (params: any) => post('/Api/v1/goldenfinance/schedule',params);

// 获取热门课程
export const getHotCourse = (params: object) => post('/Home/getHotCourse', params)

// 获取广告
export const getAd = (params: object) => get('/Home/getAd', params,false)

// 获取广告详情（计数）
export const getAdInfo = (params: object) => get('/Home/getAdInfo', params,false)

// 获取热门搜索
export const getHotSearch = () => get('/Home/getHotSearch',{},false)

// 获取系列
export const getCourseSeries = () => get('/Home/getCourseSeries',{},false)

// 获取开课城市
export const getCourseCity = () => get('/Home/getCourseCity', {}, false)

// 签到
export const signUp = (params: object) => get('/common/signUp', params, true)

//地址三级联动
export const getAllCity = () => get('/Home/getRegionList', {}, true)

//热门搜索计数(专业)
export const getSeriesTime  = (params: object) => get('/Home/setCourseSeriesHits', params, false)

