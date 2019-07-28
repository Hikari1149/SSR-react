import React from 'react'
import Header from '../../components/Header'
const Home = () =>{
    return (
    <div>
        <Header/>
        this is Home!!!
        <button onClick={()=>{alert("clicked")}}>click</button>
    </div>
    )
}
export default Home