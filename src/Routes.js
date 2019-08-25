import React from 'react'
import {Route} from 'react-router-dom'
import App from './app'
import Home from './containers/Home'
import Login from './containers/Login'

export default [
    {
        path:'/',
        component:App,
        exact:false,
        loadData:App.loadData,
        routes:[
            {
                path:'/',
                component:Home,
                exact:true,
                loadData:Home.loadData,
                key:'Home',
            },
            {
                path:'/login',
                component:Login,
                exact:true,
                key:'login'
            }
        ]
        
    }

]
