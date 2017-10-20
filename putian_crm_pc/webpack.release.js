var webpack = require('webpack');
var path = require('path');
 
module.exports = {
    //页面入口文件配置
    entry: {
        customerInfo : './res/es6/component/customerInfo/customerInfoRoot.js',
        customerList : './res/es6/component/customerList/customerListRoot.js',
        index : './res/es6/component/index/indexRoot.js'
    },
    //入口文件输出配置
    output: {
        path: path.join(__dirname, 'res/js'),
        filename: '[name].js',
        sourceMapFilename: '[name].map'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: path.join(__dirname, 'res/es6'),
              loader: 'babel-loader',
              query: {
              presets: ['es2015']
            }
      }
        ]
    }
};