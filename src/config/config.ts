import axios from 'axios';


axios.interceptors.request.use(function(config:any): any {
    return config;
})

axios.interceptors.response.use(function(config:any): any {
    return config;
})