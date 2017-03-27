/**
 * Created by zzq on 2017/3/27.
 */
define(['require','app','myService'],function(require,app,myService){
    console.log('directive');
    console.log(app);
    console.log(myService);
    app.directive('appTop',function(){
        return {
            restrict:'AE',
            replace: true,
            scope:{},
            templateUrl: 'res/tpl/header.html',
            controller: function($scope,myService){
                console.log(111);
                myService.getJson('res/json/topNavitems.json')
                    .success(function(data){
                        console.log(data)
                        $scope.topNavItem = data.navItem;
                    });
            }
        }
    })
        .directive('appLeft',function(){
            return {
                restrict:'E',
                replace:true,
                scope:{},
                templateUrl:'res/tpl/app-left.html',
                controller:function($scope,myService){
                    myService.getJson('res/json/app-left.json')
                        .success(function(data){
                            console.log(data);
                            $scope.leftItem = data.leftItem;
                        })
                },
                link:function(scope,ele,attr){
                    scope.toggle = function(index){
                        scope.leftItem[index].isShow = !scope.leftItem[index].isShow;
                    }
                }
            }
        })
        .directive('appContent',function(){
            return {
                restrict: 'E',
                replace:true,
                scope:{},
                templateUrl: 'res/tpl/app-content.html',
                controller:function(){}
            }
        })
})