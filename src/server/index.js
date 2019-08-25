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
          promises.push(item.route.loadData(store))
      }
  })
  Promise.all(promises).then(()=>{
    res.send(render(req,store,Routes))
  })
})


app.listen(3000,()=>console.log("on port 3000"))