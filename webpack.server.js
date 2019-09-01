const path = require('path')
const nodeExternals = require('webpack-node-externals')
//nodeExternals : 例如引入express(存在node_modules中) 打包时不会对express进行转换
const merge = require('webpack-merge')  
//webpack-merge : 用于合并相同的配置项
const config =require('./webpack.base.js')

const serverConfg = {
        target:'node',
        mode:'development',
        entry:'./src/server/index.js',
        output:{
            filename:'bundle.js',
            path:path.resolve(__dirname,'build')
        },
        externals:[nodeExternals()],
        module:{
            rules:[
                {
                    test:/\.css$/,
                    use:['isomorphic-style-loader',{
                        loader:'css-loader',
                        options:{
                          //  importLoader:1,
                              modules:true,
                           // localIdentName:'[name]_[local]_[hash:base64]'
                        }
                    }]
                }
            ]
        }
}

module.exports = merge(config ,serverConfg)