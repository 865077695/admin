window.loading={finish:function(callback){callback()},load:function(){require.config({baseUrl:"res",paths:{domReady:"lib/require/domReady.min",layer:"lib/layer/layer",angular:"lib/angular/angular",uiRouter:"lib/angular/angular-ui-router","angular-nice-bar":"lib/angular/angular-nice-bar",asyncLoader:"lib/angular/angular-async-loader",jquery:"lib/jquery/jquery.min",loadCss:"script/loadCss",routes:"script/routes",app:"script/app",index:"script/index",superController:"script/superController",myService:"script/myService",myDirective:"script/myDirective"},shim:{angular:{exports:"angular"},uiRouter:{deps:["angular"]},layer:{exports:"layer"},"angular-nice-bar":{deps:["angular"]}},deps:["index"]})}},window.loading.load();