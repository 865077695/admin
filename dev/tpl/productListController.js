/**
 * Created by zzq on 2017/3/29.
 */
define(function(require){
    var app = require('app');
    require('myService');
    app.controller('productListController',function($scope,myService){
        $scope.exportExcel = function(){
            
        }
        
        $scope.model = function(){
            //model框，填写添加信息
            
        };
        myService.getJson('res/json/productList1.json')
            .success(function(data){
                $scope.page = data.page;
                $scope.productList = data.productList;
                $scope.nextPage = function(){
                    $scope.url = 'res/json/productList'+(++$scope.page)+'.json';
                    myService.getJson($scope.url)
                        .success(function(data){
                            $scope.page = data.page;
                            $scope.productList = data.productList;
                        })
                };
                $scope.prevPage = function(){
                    $scope.url = 'res/json/productList'+(--$scope.page)+'.json';
                    myService.getJson($scope.url)
                        .success(function(data){
                            $scope.page = data.page;
                            $scope.productList = data.productList;
                        })
                }
            })
    })
})