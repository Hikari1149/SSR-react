const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base.js')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const WebpackBar = require('webpackbar')
const clientConfg = {
    mode:'development',
    entry:'./src/client/index.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'public')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader',{
                    loader:'css-loader',
                    options:{
                       // importLoader:1,
                        modules:true,
                       // localIdentName:'[name]_[local]_[hash:base64]'
                    }
                }]
            }
        ]
    },
    plugins:[
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
          }),
          new WebpackBar()
    ]
    
} 
module.exports= merge(config,clientConfg)