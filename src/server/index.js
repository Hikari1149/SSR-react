import express from 'express'
import proxy from 'express-http-proxy'
import {matchRoutes} from 'react-router-config'
import {render} from './utils'
import {getStore} from '../store'
import Routes from '../Routes'
const app = express()

app.use(express.static('public'))

// app.use('/api',proxy(remoteUrl,{..})
// 本地请求/api/xxx/xx..时 node server将请求转发到 remoteUrl/....

app.use('/api',proxy('http://localhost:3004',{
  proxyReqPathResolver:function(req){
    // req.url: /api后面的部分
    return '/api' + req.url
  }
}))


app.get('*',(req,res)=>{
  const store =getStore()
  const matchedRoutes = matchRoutes (Routes,req.path)
  const promises = []
  matchedRoutes.forEach(item =>{
      if(item.route.loadData){
          const promise = new Promise((resolve,reject)=>{
            //无论成功还是失败都调用resolve
            //Promise.all的then方法肯定会被调用
            item.route.loadData(store).then(resolve).catch(resolve)
          })
          promises.push(promise)
      }
  })
  Promise.all(promises).then(()=>{
    const context ={css:[]}
    const html = render(req,store,Routes,context)
    //  重定向的时候 ,react-router-config 会自动往context里面注入数据
    //  服务端渲染重定向的时候直接返回 301后的页面.
    //  而客户端会先返回某个页面 在redirect到301后的页面
    if(context.action === 'REPLACE'){
      res.redirect(301,context.url)
    }
    if(context.notFound){
      res.status(404)
    }
    res.send(html)
  })
})


app.listen(3000,()=>console.log("on port 3000"))