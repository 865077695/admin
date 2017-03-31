/**
 * Created by zzq on 2017/3/24.
 * 配置路由
 */
define(["require","app"],function(require,app){
    var load = require('load');
    //配置路由
    app.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home'),
        
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'res/tpl/userCollect.html',
                controllerUrl:'tpl/userCollectController',
                controller:'userCollectController'
            })
            .state('userList',{
                url:'/userList',
                templateUrl:'res/tpl/userList.html',
                controllerUrl:'tpl/userListController',
                controller: 'userListController'
            })
            .state('userCollect',{
                url:'/userCollect',
                templateUrl:'res/tpl/userCollect.html',
                controllerUrl:'tpl/userCollectController',
                controller:'userCollectController'
            })
            .state('productList',{
                url:'/productList',
                templateUrl:'res/tpl/productList.html',
                controllerUrl:'tpl/productListController',
                controller:'productListController'
            })
            .state('orderList',{
                url:'/orderList',
                templateUrl:'res/tpl/orderList.html',
                controllerUrl:'tpl/orderListController',
                controller:'orderListController'
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
    //路由事件
    app.run(function($rootScope,$state,$location){
        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            console.log(111);
            // load.onLoading();
        })
    })
})