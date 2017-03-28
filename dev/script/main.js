/**
 * Created by zzq on 2017/3/17.
 */
window.loading={
    finish:function(callback){
        //保留这个方法做一些加载完成后的处理，比如可以在这里结束加载动画
        callback();
    },
    load:function(){
        // var domain='https://865077695.github.io/admin/';
        var domain='';
        var baseUrl = domain+'res';
        require.config({
            baseUrl:baseUrl,
            paths:{
                "domReady":["https://cdn.bootcss.com/require-domReady/2.0.1/domReady.min.js","lib/require/domReady.min"],
                "layer":"lib/layer/layer",
                "angular":["https://cdn.bootcss.com/angular.js/1.3.20/angular.min.js","lib/angular/angular.min"],
                "uiRouter":["https:////cdn.bootcss.com/angular-ui-router/1.0.0-rc.1/angular-ui-router.min.js","lib/angular/angular-ui-router"],
                "angular-nice-bar":"lib/angular/angular-nice-bar",
                "asyncLoader":"lib/angular/angular-async-loader",
                "jquery":["https:////cdn.bootcss.com/jquery/1.12.4/jquery.min.js","lib/jquery/jquery.min"],
                "echarts":["https:////cdn.bootcss.com/echarts/3.4.0/echarts.min.js","lib/echarts/echarts.min"],
                "chinaMap":"lib/echarts/china",
                "loadCss":"script/loadCss",
                "routes":"script/routes",
                "app":"script/app",
                "index":"script/index",
                "superController":"script/superController",
                "myService":"script/myService",
                "myDirective":"script/myDirective"
            },
            shim:{
                "angular":{
                    exports:"angular"
                },
                "uiRouter":{
                    deps:["angular"]
                },
                "layer":{
                    exports:"layer"
                },
                "angular-nice-bar":{
                    deps:["angular"]
                },
                "echarts":{"exports":"echarts"}
            },
            deps:['index']
        });
    }
    
}
window.loading.load();