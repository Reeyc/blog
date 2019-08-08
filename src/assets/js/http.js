/**
 * axios封装
 * 请求拦截、响应拦截、错误处理
 */
import axios from 'axios';
import {
  Loading
} from 'element-ui'

let loading;

//创建axios实例（含超时时间）
const http = axios.create({
  timeout: 12000
});

//设置post请求头
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/** 
 * 请求拦截器 
 */
http.interceptors.request.use(
  config => {
    loading = Loading.service({
      lock: true,
      text: 'loading...',
      background: 'rgba(0, 0, 0, 0.5)'
    });
    return config;
  },
  err => Promise.reject(err))

/**
 * 响应拦截器
 */
http.interceptors.response.use(
  // 请求成功
  res => {
    loading.close();
    return res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res)
  },
  // 请求失败
  err => Promise.reject(err)
);

export default http
