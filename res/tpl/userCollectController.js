/**
 * Created by zzq on 2017/3/28.
 */
define(function (require)
{
    var app = require('app');
    var echarts = require('echarts');
    require('chinaMap');
    require('myService');
    app.controller('userCollectController', function ($scope, myService)
    {
        myService.getJson('res/json/userCollect.json')
            .success(function (data)
            {
                $scope.data = data.data;
                var myChart = echarts.init(document.getElementById('userCollect'));
                option = {
                    title: {
                        text: '网站用户区域分布',
                        subtext: '纯属虚构',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['aaa', 'bbb', 'ccc']
                    },
                    visualMap: {
                        min: 0,
                        max: 2500,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],           // 文本，默认为数值文本
                        calculable: true
                    },
                    toolbox: {
                        show: false,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    series: [
                        {
                            itemStyle: {
                                normal: {
                                    color: function (params)
                                    {
                                        var colorList = [
                                            '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                            '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                            '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                        ];
                                        return colorList[params.dataIndex]
                                    },
                                    
                                }
                            },
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: $scope.data
                            
                        }
                    ]
                };
    
                myChart.setOption(option);
            })
    })
    
})