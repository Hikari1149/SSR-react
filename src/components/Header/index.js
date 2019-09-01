import React,{Fragment,Component}from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ToggleLogin} from './store/actions'
import styles from './style.css'
import withStyle from '../../withStyle'
class Header extends Component{
    render(){
        const {isLogin,handleLogin,handleLogout}  = this.props
        return (
            <div className={styles.test}>
                Header
                <Link to='/' className={styles.item}>Home</Link>
            
                {
                    isLogin ? 
                    <Fragment>
                        <Link to='/' className={styles.item}>Translate</Link>   
                        
                        <div onClick={handleLogout} className={styles.item}>Logout</div>   
                    </Fragment>:
                    <div onClick={handleLogin} className={styles.item}>Login</div>
                }
            </div>
        )
    }
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
export default connect(stateToProps,dispatchToProps)(withStyle(Header,styles))