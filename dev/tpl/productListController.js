/**
 * Created by zzq on 2017/3/29.
 */
define(function(require){
    var app = require('app');
    require('myService');
    require('load');
    app.controller('productListController',function($scope,myService){
        $scope.exportExcel = function(){
            
        }
        
        $scope.model = function(){
            //model框，填写添加信息
            
        };
        myService.getJson('res/json/productList1.json')
            .success(function(data){
                load.close();
                $scope.page = data.page;
                $scope.productList = data.productList;
                
                $scope.nextPage = function(){
                    load.onLoading();
                    $scope.url = 'res/json/productList'+(++$scope.page)+'.json';
                    myService.getJson($scope.url)
                        .success(function(data){
                            load.close();
                            $scope.page = data.page;
                            $scope.productList = data.productList;
                        })
                };
                
                $scope.prevPage = function(){
                    load.onLoading();
                    $scope.url = 'res/json/productList'+(--$scope.page)+'.json';
                    myService.getJson($scope.url)
                        .success(function(data){
                            load.close();
                            $scope.page = data.page;
                            $scope.productList = data.productList;
                        })
                }
            })
    })
})