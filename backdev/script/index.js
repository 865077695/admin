/**
 * Created by zzq on 2017/3/17.
 */
define(["require", "angular", "layer", "uiRouter"], function (require, angular, layer)
{
    var app = angular.module('app', ['ui.router']);
    layer.config({
        path: './res/lib/layer/'              //layer.js的文件路径,注意加斜杠
    });
    var loadDom = layer.load(1, {
        shade: [0.1, '#fff'], //0.1透明度的白色背景
        area: ['37px', '37px']
    });
    require(['domReady!'], function (document)
    {     //domReady依赖的!前缀来强制require()回调函数在执行之前等待DOM Ready。
        angular.bootstrap(document, ["app"]);
        /*手工启动angular*/
        window.loading.finish(function ()
        {
            layer.close(loadDom);
        });
    });
    
    
    //服务，存放全局数据
    app.factory('myService', function ($http)
    {
        var service = {};
        service.getJson = function (url)
        {
            return $http({
                method: "GET",
                url: url
            });
        }
        return service;
    });
    
    
    app.controller('AppController', function ($scope, myService)
    {
        // require(['loadCss'],function(loadCss){
        //     loadCss.loadCss('res/lib/bootstrap/bootstrap.min.css');             //动态加载css
        // });
        //请求顶部菜单json数据
        myService.getJson('res/json/topNavitems.json')
            .success(function (data)
            {
                $scope.topNavItem = data.navItem;
            })
            .error(function ()
            {
                console.log('error...');
            });
        //请求左侧菜单json数据
        myService.getJson('res/json/app-left.json')
            .success(function (data)
            {
                $scope.leftItem = data.leftItem;
            });
        
    });
    
    
    //header
    app.directive('appTop', function ()
    {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                topNavItem: "=headerItem"//将在控制器里请求到的数据绑定进指令
            },
            templateUrl: 'res/tpl/header.html'
        }
    });
    
    //app-nav(left)
    app.directive('appLeft', function ()
    {
        return {
            restrict: 'E',
            replace: true,
            transclude:true,
            scope: {
                leftItem: "=leftItem"
            },
            controller:function($scope){
                this.Name = $scope;
                // console.log(this.Name)
            },
            templateUrl: 'res/tpl/app-left.html',
            link: function (scope, ele, attr)
            {
                scope.toggle=function(index){
                    scope.leftItem[index].isShow = !scope.leftItem[index].isShow;
                    console.log(scope.leftItem);
                }
            }
        }
    });
    //app-content
    app.directive('appContent',function(){
        return {
            require:'^appLeft',
            restrict: 'E',
            replace:true,
            scope:{
                leftItem:'=leftItem'
            },
            templateUrl:'res/tpl/app-content.html',
            link:function(scope,ele,attr,appLeft){
                console.log(scope.leftItem);
            }
        }
    });
    
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
                controller: function($scope,myService){
                    var showUserList = function(url){
                        myService.getJson(url)
                            .success(function(data){
                                $scope.userList = data.userList;
                                console.log($scope.userList);
                            })
                            .error(function(){
                                console.log('error...');
                            });
                    }
                    showUserList('res/json/userList1.json');
                    $scope.prevPage = function(){
                        showUserList('res/json/userList1.json');
                    };
                    $scope.nextPage = function(){
                        showUserList('res/json/userList2.json')
                    }
                }
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
    
    //filter
})