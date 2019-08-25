import React,{Fragment}from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ToggleLogin} from './store/actions'
const Header = (props)=>{
    const {isLogin,handleLogin,handleLogout}  = props
    return (
        <div>
            Header
            <br/>
            <Link to='/'>Home</Link>
            <br/>
            {
                isLogin ? 
                <Fragment>
                     <Link to='/'>Translate</Link>   
                     <br/>
                     <div onClick={handleLogout}>Logout</div>   
                </Fragment>:
                <div onClick={handleLogin}>Login</div>
            }
        </div>
    )
}
const stateToProps = (state) =>{
    return {
        isLogin:state.login.isLogin
    }
}
const dispatchToProps = (dispatch) =>{
    return {
        handleLogin(){
            dispatch(ToggleLogin(true))
         },
         handleLogout(){
             dispatch(ToggleLogin(false))
         }
    }
}
export default connect(stateToProps,dispatchToProps)(Header)