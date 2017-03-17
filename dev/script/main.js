/**
 * Created by zzq on 2017/3/17.
 */
window.loading={
    finish:function(callback){
        //    保留这个方法做一些加载完成后的处理，比如可以在这里结束加载动画
        console.log("domReady!");
        callback();
    },
    load:function(){
        var domain=''+'/';
        baseUrl = domain+'dev';
        require.config({
            baseUrl:baseUrl,
            paths:{
                "domReady":"lib/require/domReady.min",
                "layer":"lib/layer/layer",
                "angular":"lib/angular/angular",
                "uiRouter":"lib/angular/angular-ui-router",
                "jquery":"lib/jquery/jquery.min",
                "loadCss":"script/loadCss"
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
                }
            },
            deps:['script/index']
        })
    }
}
window.loading.load();