import {CHANGE_LOGIN,TOGGLE_LOGIN} from './constants'
const defaultState ={
    isLogin:true
}
export default (state = defaultState,action) =>{
    switch(action.type){
        case CHANGE_LOGIN:
            const newState ={
                ...state,
                isLogin:action.val
            }
            return newState
        case TOGGLE_LOGIN:
            return {
                ...state,
                isLogin:action.val
            }    
        default:
            return state
    }
}