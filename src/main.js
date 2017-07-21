/***
 * main.js webpack入口文件
 */
import Vue from 'vue'; // 导入vue模块
import App from './App.vue'; // 导入appvue文件

// 创建vue的实例
new Vue ({
    el : '#view' ,// 设定vue管理范围
    render : function(create){
        return create(App); // 通过那render把组件渲染到页面
    }
});