import {CHANGE_LIST} from './contants' 
const defaultState = {
    name:'Hikari000',
    newsList:[],
}
const reducer =(state=defaultState,action)=>{
    switch(action.type){
        case CHANGE_LIST:
            const newState = {
                ...state,
                newsList:action.list
            }
            return newState
        default:
            return state   
    }
}
export default reducer