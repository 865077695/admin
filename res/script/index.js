define(["require","load"],function(require,load){load.onLoading(),console.log(load),require(["angular","routes","myDirective"],function(angular){require(["domReady!"],function(document){window.loading.finish(function(){angular.bootstrap(document,["app"]),load.close()})})})});