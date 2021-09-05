import axios from "axios";

const request = axios.create({
    timeout:10000,
    baseURL: ""
});

request.interceptors.request.use(config => {
    return config
},err => {
    return  Promise.reject(err)
});

request.interceptors.response.use(response => {
    return response.data;
},err => {
    return Promise.reject(err)
});

export default request;