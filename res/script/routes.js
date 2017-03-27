/**
 * Created by zzq on 2017/3/24.
 * 配置路由
 */
define(["require","app"],function(require,app){
    //配置路由
    
    app.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'res/tpl/home.html'
            })
            .state('userList',{
                url:'/userList',
                templateUrl:'res/tpl/userList.html',
                controllerUrl:'tpl/userListController',
                controller: 'userListController'
            })
            .state('userCollect',{
                url:'/userCollect',
                templateUrl:'res/tpl/userCollect.html'
            })
            .state('productList',{
                url:'/productList',
                templateUrl:'res/tpl/productList.html'
            })
            .state('orderList',{
                url:'/orderList',
                templateUrl:'res/tpl/orderList.html'
            })
            .state('articleList',{
                url:'/articleList',
                templateUrl:'res/tpl/articleList.html'
            })
            .state('articleColumn',{
                url:'/articleColumn',
                templateUrl:'res/tpl/articleColumn.html'
            })
            .state('photoList',{
                url:'/photoList',
                templateUrl:'res/tpl/photoList.html'
            })
            .state('photoColumn',{
                url:'/photoColumn',
                templateUrl:'res/tpl/photoColumn.html'
            });
    });
    //配置路由结束
})