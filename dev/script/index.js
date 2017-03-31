/**
 * Created by zzq on 2017/3/17.
 */
define(["require", "load"], function (require,load)
{
    load.onLoading();
    require(["angular","routes","myDirective"],function(angular){
        require(['domReady!'], function (document)
        {     //domReady依赖的!前缀来强制require()回调函数在执行之前等待DOM Ready。
            /*手工启动angular*/
            window.loading.finish(function ()
            {
                angular.bootstrap(document,['app']);
                // layer.close(loadDom);
                load.close();
            });
        });
    })
    
})