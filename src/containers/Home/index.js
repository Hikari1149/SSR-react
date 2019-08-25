import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getHomeList} from './store/actions'

class Home extends Component {
    componentDidMount(){
        if(!this.props.list.length)
            this.props.getHomeList()
    }
    render(){
        const {list = []} = this.props
        return (
            <div>
               <h1>{this.props.name}</h1> 
               home
               {
                   list && list.map((item,index)=>{
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
Home.loadData = (store)=>{
    //在服务端渲染这个组件前,把这个路由的数据提前加载好
    return store.dispatch(getHomeList(true))
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