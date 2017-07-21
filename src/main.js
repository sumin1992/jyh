/***
 * main.js webpack入口文件
 */
import Vue from 'vue'; // 导入vue模块
import App from './App.vue'; // 导入appvue文件
import mint from 'mint-ui'; // 导入mintui
import '../node_modules/mint-ui/lib/style.css';//引入mint组件的样式
Vue.use(mint) ; // 全局引用mint组件
// 导入mui组件的样式
import '../static/mui/css/mui.min.css';
// 导入mui的字体
import '../static/mui/fonts/mui.ttf';
// 导入路由模块
import VueRouter from 'vue-router';
Vue.use(VueRouter); //全局绑定
import home from './component/home/home.vue'; //首页组件
import goods from './component/goods/goods.vue'; // goods组件
import setting from './component/setting/setting.vue';
import shopping from './component/shoppingcar/shopping.vue';
//配置路由表
let router  = new VueRouter({
    routes : [
        {path : '/home',component : home},
        {path : "/goods",component : goods},
        {path : '/setting' , component : setting},
        {path : '/shopping',component : shopping}       
    ]
})


// 创建vue的实例
new Vue ({
    el : '#view' ,// 设定vue管理范围
    router : router,
    render : function(create){
        return create(App); // 通过那render把组件渲染到页面
    }
});