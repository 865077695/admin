/**
 * Created by zzq on 2017/3/17.
 */
define(["require","angular","layer","uiRouter"],function(require,angular,layer){
    var app = angular.module('app',['ui.router']);
    layer.config({
        path: './res/lib/layer/'              //layer.js的文件路径,注意加斜杠
    });
    var index = layer.load(1, {
        shade: [0.1,'#fff'], //0.1透明度的白色背景
        area:['37px','37px']
    });
    require(['domReady!'], function(document) {     //domReady依赖的!前缀来强制require()回调函数在执行之前等待DOM Ready。
        angular.bootstrap(document, ["app"]); /*手工启动angular*/
        window.loading.finish(function(){
            layer.close(index);
        });
    });
    app.controller('AppCtrl',function($scope){
        require(['loadCss'],function(loadCss){
            loadCss.loadCss('res/lib/bootstrap/bootstrap.min.css');             //动态加载css
        });
    })
})