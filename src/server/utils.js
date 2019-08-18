import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter,Route,matchPath} from 'react-router-dom'
import {matchRoutes} from 'react-router-config'
import Routes from '../Routes'
import {Provider} from 'react-redux'
import getStore from '../store'

export const render =(req)=>{    
    const store =getStore()

    const matcedRoutes = matchRoutes (routes,req.path)

   
    const content=renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context ={{}}>
                <div>
                    {Routes.map(route=><Route {...route}/>)}
                </div>
            </StaticRouter>
        </Provider>
    ))
  
    return (
        `<html>
        <head>
            <title>ssr</title>
        </head>
        <body>
            <div id='root'>${content}</div>
                <script src='/index.js'></script>    
        </body>
    </html>
    `
    )
}