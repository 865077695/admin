/**
 * Created by zzq on 2017/3/24.
 * 定义ng模块
 * 返回ng模块
 */
define(["require","angular","asyncLoader","uiRouter",'angular-nice-bar'],function(require,angular){
    var asyncLoader = require("asyncLoader");
    
    var app = angular.module('app', ['ui.router','ngNiceBar']);
    asyncLoader.configure(app); //配置异步加载模块，异步加载路由控制器
    return app;
})