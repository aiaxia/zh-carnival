import axios from 'axios'
import { Dialog } from 'vant';
import Router from '@/router'
let instance = axios.create({
    baseURL: '',
    timeout: 7200000,
    transformRequest: [function (data) {
        return data
    }]
})


let http = function (params, options) {
    let _method = (params.method || 'get').toLowerCase()
    if (_method === 'get') {
        let url = params.url
        return instance.get(url, options)
    } else if (_method === 'post') {
        return instance.post(params.url, options.data, {headers: options.headers})
    } else if (_method === 'delete') {
        return instance.delete(params.url, options, {headers: options.headers})
    } else if (_method === 'put') {
        return instance.put(params.url, options.data, {headers: options.headers})
    } else if (_method === 'body') {
        return instance.post(params.url, options.data, {headers: options.headers})
    } else if (_method === 'bodyput') {
        return instance.put(params.url, options.data, {headers: options.headers})
    } else if (_method === 'file') {
        return instance.post(params.url, options.data)
    } else if (_method === 'contract') {
        return axios.post(params.url, options.data)
    }
}

let userRequest = (params) => {
    const options = {
        headers: {'Content-Type': 'application/json','tenant-id':localStorage.getItem('tenantId')||'','cookie-id':localStorage.getItem('cookieId')||'',...params.headers}, 
        method: params.method || 'get',
        params: params.query || {},
        data: params.data || {},
    }
    return http(params, options)
}
let api = {
    httpRequest: (commit, params, mutation) => {
        return new Promise((resolve, reject) => {
        userRequest(params).then(response => {
            if (process.env.NODE_ENV === 'development') {
                console.log(response)
            }
            if(response.data.code==500){
                Dialog.alert({
                    message: response.data.msg,
                });
            }
            commit(mutation, response)
            resolve(response)
        }).catch(error => {
            if (process.env.NODE_ENV === 'development') {
                console.log(`-----error-----${error}`)
                console.log(error.response)
            }
            if(error&&error.response&&error.response.status){
                if(error.response.status==401){
                    Dialog.alert({
                        message: '没有权限，请联系管理员',
                    });
                }
                if(error.response.status==403){
                    Dialog.alert({
                        message: '登录过期，请重新登录',
                    });
                    Router.push({
                        name: 'Login'
                    });
                }
            }
            reject(error)
        }).catch(e => {
            if (process.env.NODE_ENV === 'development') {
                console.log(`-------catch-- ${e}`)
            }
            reject(e)
        })
        })
    },
    instance,
    httpAxios: (commit, params, mutation) => {
        return new Promise((resolve, reject) => {
        axios.get(params).then(response => {
            if(response.data.code==500){
                Dialog.alert({
                    message: response.data.msg,
                });
            }
            commit(mutation, response)
            resolve(response)
        }).catch(error => {
            if (process.env.NODE_ENV === 'development') {
                console.log(`-----error-----${error}`)
                console.log(error.response)
            }
            if(error&&error.response&&error.response.status){
                if(error.response.status==401){
                    Dialog.alert({
                        message: '没有权限，请联系管理员',
                    });
                }
                if(error.response.status==403){
                    Dialog.alert({
                        message: '登录过期，请重新登录',
                    });
                    Router.push({
                        name: 'Login'
                    });
                }
            }
            reject(error)
        }).catch(e => {
            if (process.env.NODE_ENV === 'development') {
                console.log(`-------catch-- ${e}`)
            }
            reject(e)
        })
        })
    },
    pureAction: (commit, mutation, response) => {
        return new Promise((resolve) => {
        commit(mutation, response)
        resolve()
        })
    }
}

export default api