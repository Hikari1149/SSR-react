import {CHANGE_LOGIN,TOGGLE_LOGIN} from './constants'

const changeLogin = (val)=>{
    return {
        type:CHANGE_LOGIN,
        val
    }
}
const toggleLogin = (val)=>{
    return {
        type:TOGGLE_LOGIN,
        val
    }
}
export const getHeaderInfo  = ()=>{
    return (dispatch,getState,axiosInstance)=>{
        return axiosInstance.get('/api/isLogin').then((res)=>{
            dispatch(changeLogin(res.data.isLogin))
        }).catch(error=>console.log("isLogin error"))
    }
}
export const ToggleLogin =(val)=>{
    return (dispatch,getState,axiosInstance)=>{
        return axiosInstance.put('/api/isLogin',{
            isLogin:val
        }).then((res)=>{
            dispatch(toggleLogin(val))
        }).catch(error=>console.log("toggle error"))
    }
}