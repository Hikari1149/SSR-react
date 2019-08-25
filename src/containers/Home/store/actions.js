import {CHANGE_LIST} from './contants'
const changeList = (list)=>{
    return {
        type:CHANGE_LIST,
        list
    }
}


export const getHomeList = ()=>{
    //http://localhost:3004/newsList
    //客户端请求 /api/newsList  - > http://localhost:3000/api/newList -> proxy..
    //服务端请求 /api/newsList  ->  服务端根目录+/api/newList
    return (dispatch,getState,axiosInstance)=>{
        return axiosInstance.get('/api/newsList')
        .then(res=>{
           // console.log("res ",res)
            dispatch(changeList(res.data))
        }).catch(error=>console.log("error newList "))
    }
}