import React,{Component} from 'react'

const WithStyle =  (CMP,styles)=>{
    return class WithSTyle extends Component{
        componentWillMount() {
            if(this.props.staticContext){
                this.props.staticContext.css.push(styles._getCss())
            }
        }

        render(){
            return (
                <CMP {...this.props}/>
            )

        }
    }
}
export default WithStyle