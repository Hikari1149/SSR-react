import {createStore,applyMiddleware,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import clientAxios from '../client/request'
import serverAxios from '../server/request'
import homeReducer from '../containers/Home/store/reducer'
import loginReducer from '../components/Header/store/reducer'


const reducer = combineReducers({
    home:homeReducer,
    login:loginReducer
})

export const getStore = ()=>{ 
    return createStore(reducer,applyMiddleware(thunk.withExtraArgument(serverAxios)))
}
export const getClientStore = ()=>{
    const defaultState = window.context.state
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        reducer,
        defaultState,
        composeEnhancers(applyMiddleware(thunk.withExtraArgument(clientAxios)))
        )
}
