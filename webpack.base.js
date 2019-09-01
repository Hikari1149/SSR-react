const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const WebpackBar = require('webpackbar')
module.exports={
    module:{
        rules:[
            {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/,
            options:{
                presets:[
                    '@babel/preset-react',
             //       '@babel/preset-env',
                    ['@babel/env',{
                        targets:{
                            browsers:['last 2 versions']
                        }
                    }]
                ]
            }
        },
    ]
    },
    plugins:[
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
          }),
    ]
}