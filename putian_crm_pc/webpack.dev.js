var webpack = require('webpack');
var path = require('path');
 
module.exports = {
    //页面入口文件配置
    devtool: 'cheap-module-source-map',
    entry: {
        customerInfo : './res/es6/component/customerInfo/customerInfoRoot.js',
        customerList : './res/es6/component/customerList/customerListRoot.js',
        customerWorkspace : './res/es6/component/visitManager/customerWorkspace/customerWorkspace.js',
        index : './res/es6/component/index/indexRoot.js',
        login : './res/es6/component/login/loginRoot.js',
        visitManager : './res/es6/component/visitManager/visitManager/visitManagerRoot.js',
        visitLook:'./res/es6/component/visitManager/visitLook/visitPlanRoot.js',
        visitDetails:'./res/es6/component/visitManager/visitDetails/visitDetailsRoot.js',
        reportPop:'./res/es6/component/visitManager/reportPop/reportPopRoot.js',
        information:'./res/es6/component/customerInformation/infomationRoot.js',
        customerAtReportRoot:'./res/es6/component/customerAtReport/customerAtReportRoot.js',
        vistiSignOut:'./res/es6/component/visitManager/visitSignOut/vistiSignOutRoot.js',
        customerSign:'./res/es6/component/visitManager/customerSign/customerSignRoot.js'
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