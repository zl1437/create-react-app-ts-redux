import axios from 'axios';
import { Toast } from 'antd-mobile'
import { getEnv, LinkHost } from '../util/config';
import { haveStorage } from '../util/config'
let siteEnv = getEnv();


axios.defaults.baseURL = `//${siteEnv}${LinkHost}`;
axios.defaults.headers.post['Content-Type'] = "application/json";


axios.interceptors.request.use(function (config) {
    let data = localStorage.getItem('openid') || '{}';
    let openid = JSON.parse(data).data || '';
    config.headers.openid = openid;
    return Promise.resolve(config);
}, function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    if (response.status === 200) {
        //接口请求成功
        let href = window.location.href;
        let str = '/sign/index'
        if (response.data && href.indexOf(str) === -1 && response.data.status === 2001) {
            //请求结果未关注公众号
            window.location.href = `http://${siteEnv}vip.goldenfinance.com.cn/attention`
        }
    }
    return Promise.resolve(response.data)
}, function (error) {
    //输出接口异常
    Toast.fail('网络请求出错，请刷新页面',2)
    return Promise.reject(error);
});




export default class eduAxios {
    request(options: any) {
        return axios.request(options);
    }
    get(url: string, options = {},flag: any) {
        let data = localStorage.getItem('openid') || '{}';
        let openid = JSON.parse(data).data || '';
        let hasOpenId = flag ? {} : { openid:openid };
        return this.request({
            url,
            params: {
                ...options,
                ...hasOpenId
            },
            
        })
    }
    post(url: string, data: any, options:any = {}) {
        let data2 = localStorage.getItem('openid') || '{}';
        let openid = JSON.parse(data2).data || '';
        if( options.openid ){
            data.openid = openid;
        }
        return this.request({
            method: 'post',
            url,
            data,
            ...options,
        }); 
        
    }
}
const instanceAxios = new eduAxios();
export const request = instanceAxios.request.bind(instanceAxios);
export const get = instanceAxios.get.bind(instanceAxios);
export const post = instanceAxios.post.bind(instanceAxios);