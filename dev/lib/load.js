/**
 * Created by zzq on 2017/3/31.
 * 加载动画，需要引入load.css。load.onLoading()启动动画.load.close()关闭动画。
 */
var load = (function ()
{
    //初始化，移除当前所有id为box的节点
    var load = {
        onLoading: function ()
        {
            if(!document.getElementById('box')){
                var box = document.createElement('div');
                document.body.appendChild(box);
                box.id = 'box';
                box.innerHTML = "<div id='box1'>loading...</div><div id='box2'></div>"
            }
        },
        close: function ()
        {
            if(document.getElementById('box')){
                var box = document.getElementById('box');
                document.body.removeChild(box);
            }
        },
        addMethod:function(){
            
        }
    }
    return load;
}());