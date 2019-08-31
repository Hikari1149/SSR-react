import React,{Component} from 'react'
class NotFound extends Component{
    render(){
        const {staticContext} = this.props
        staticContext && (staticContext.notFound = true)
        return (
            <div>
                404 page not found 
            </div>
        )
    }
}
export default NotFound