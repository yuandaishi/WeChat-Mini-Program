import axios from "axios-miniprogram";
import env from "env";

const { baseUrl } = env;
const $axios = axios.create({
  baseURL: baseUrl,
});
$axios.defaults.headers.common["Content-Type"] = "application/json";
$axios.defaults.timeout = 1000;
// 请求拦截器
$axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 响应拦截器
$axios.interceptors.response.use(
  function (response) {
    // 在 then 之前做些什么
    return response;
  },
  function (error) {
    // 在 catch 之前做些什么
    return Promise.reject(error).catch(() => ({
      code: 40000,
      msg: "服务请求报错",
    }));
  }
);
export default $axios;
