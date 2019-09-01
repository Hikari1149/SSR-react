import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import {getHomeList} from './store/actions'
import styles from './style.css'
import withStyle from '../../withStyle'

class Home extends Component {
    componentDidMount(){
        if(!this.props.list.length)
            this.props.getHomeList()
    }
    render(){
        const {list = []} = this.props
        return (
            <Fragment>  
                <Helmet>
                    <title>react-helmet seo</title>
                    <meta name='description' content='helmet-content'/>
                </Helmet>
                 <div className={styles.test}>
                    <h1>{this.props.name}</h1> 
                    home
                    {
                        list && list.map((item,index)=>{
                            return (
                                <div key={index} className={styles.item}>
                                        {item.name}
                                </div>
                            )
                        })
                    }
                        <button onClick={()=>{alert("clicked")}}>click</button>
                </div>
            </Fragment>
         
            )
    }
}
const stateToProps = (state)=>{
    return {
        name:state.home.name,
        list:state.home.newsList
    }
}
const dispatchToProps = dispatch =>{
    return {
        getHomeList:()=>{
            dispatch(getHomeList())
        }
    }
}
const ExportComponent = connect(stateToProps,dispatchToProps)(withStyle(Home,styles))
ExportComponent.loadData = (store)=>{
    //在服务端渲染这个组件前,把这个路由的数据提前加载好
    return store.dispatch(getHomeList(true))
}
export default ExportComponent