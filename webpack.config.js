var path = require('path');
 var  HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports ={
    // 输入
    entry : path.join(__dirname,'src','main.js'), // 项目入口文件的路径
    output : {
        path : path.join(__dirname , 'dist'), //存储打包后的文件路径
        filename : 'bundle.js' //要存放的文件名
    },
    module :{
        rules : [
            {
                test : /\.css$/,  // 匹配对应后缀名的文件
                use : ['style-loader','css-loader']
            },
            {
                test : /\.jpg|png|gif|.ttf/,
                use : "url-loader?limit=1000"
             },
            // 处理es6语法
            {
                test : /\.js$/,
                use : 'babel-loader',
                exclude : /node_modules/  //告诉babel-loader不处理从node_module加载的数据
            },
            {
                test : /\.vue$/,
                use : 'vue-loader'
            }
        ]
    },
    // 插件
    plugins :[
        // 用来处理每一个plugin
        new HtmlWebpackPlugin({
            template : path.join(__dirname,'src','index.html'),
            minify : {
                collapseWhitespace : true,
                removeComments : true
            }
        })
    ]
 }