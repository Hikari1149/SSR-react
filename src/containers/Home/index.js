import React,{Component} from 'react'
import Header from '../../components/Header'
import {connect} from 'react-redux'
import {getHomeList} from './store/actions'

class Home extends Component {
    componentDidMount(){
        this.props.getHomeList()
    }
    render(){
        return (
            <div>
                <Header/>
               <h1>{this.props.name}</h1> 
               home
               {
                   this.props.list.map((item,index)=>{
                       return (
                           <div key={index}>
                                {item.name}
                           </div>
                       )
                   })
               }
                <button onClick={()=>{alert("clicked")}}>click</button>
            </div>
            )
    }
}
Home.loadData = ()=>{
    //在服务端渲染这个组件前,把这个路由的数据提前加载好
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
export default connect(stateToProps,dispatchToProps)(Home)