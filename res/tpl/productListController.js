/**
 * Created by zzq on 2017/3/29.
 */
define(function(require){
    var app = require('app');
    require('myService');
    app.controller('productListController',function($scope,myService){
        $scope.model = function(){
            var addProduct = layer.open({
                title:'标题',
                type:2,
                content:'res/tpl/addProduct.html',
                area:['800px','500px'],
                btn:['提交','返回'],
                yes:function(){
                    console.log('yes');
                    layer.close(addProduct);
                },
                btn2:function(){
                    console.log('no');
                }
            })
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