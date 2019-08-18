import axios from 'axios'
import {CHANGE_LIST} from './contants'
const changeList = (list)=>{
    return {
        type:CHANGE_LIST,
        list
    }
}


export const getHomeList = ()=>{
    return (dispatch)=>{
        axios.get("http://localhost:3004/newsList")
        .then(res=>{
            console.log("res ",res)
            dispatch(changeList(res.data))
        }).catch(error=>console.log("error newList ",error))
    }
}