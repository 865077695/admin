window.loading={finish:function(a){console.log("domReady!"),a()},load:function(){baseUrl="/dev",require.config({baseUrl:baseUrl,paths:{domReady:"lib/require/domReady.min",layer:"lib/layer/layer",angular:"lib/angular/angular",uiRouter:"lib/angular/angular-ui-router",jquery:"lib/jquery/jquery.min",loadCss:"script/loadCss"},shim:{angular:{exports:"angular"},uiRouter:{deps:["angular"]},layer:{exports:"layer"}},deps:["script/index"]})}},window.loading.load();