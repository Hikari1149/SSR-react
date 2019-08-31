import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Login extends Component{
    render(){
        const {isLogin} = this.props
        return (
            <div>
                {
                    isLogin ?
                    <span>i'm Login</span>
                    :<Redirect to='/'/>
                }
            </div>
        )
    }
}

const stateToProps = (state)=>{
    return {
        isLogin: state.login.isLogin
    }
}
export default connect(stateToProps,null)(Login)