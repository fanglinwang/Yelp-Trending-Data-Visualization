//柱状图1
(function () {
    //实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"), 'infographic');
    //制定配置项
    var option = {

        //加上悬停显示
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            },

        },
        toolbox: { feature: { saveAsImage: { show: true } } },
        grid: {
            left: "1%",
            top: "10px",
            right: "1%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data:
                ['Restaurants',
                    'Food',
                    'Shopping',
                    'Beauty & Spas',
                    'Coffee & Tea',
                    'Nightlife',
                    'Chinese',
                    'Health & Medical'],
            // 修改刻度
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                fontSize: 12,
                color: 'white',
                interval: 0,
                rotate: 25,
            },
            axisLine: {
                lineStyle: {
                    color: 'white',
                }
            }
        },
        yAxis: {
            type: 'value',
            // 修改刻度
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: 'white',
            },
            splitLine: {
                lineStyle: {
                    color: 'white',
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'white',
                },
            }

        },
        series: [
            {
                data:
                    // [22416, 18203, 13330, 12612, 10637, 8263, 6634, 2542, 2433, 2252],
                    [7506, 4361, 2955, 1622, 1450, 1042, 1018, 966],
                type: 'bar',
                barWidth: "50%", //修改柱子宽度
                itemStyle: {
                    // 柱子圆角
                    BarBorderRadius: 5
                }
            }
        ]
    };
    // 把配置项实例对象
    myChart.setOption(option);
    // 让图表自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });


})();

//柱状图2
(function () {
    //实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"), 'infographic');
    var option = {
        toolbox: { feature: { saveAsImage: { show: true } } },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        textStyle: {
            // fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
        },
        legend: {
            show: true,
            textStyle: {
                color: 'white',
            }, padding: [5, 0]

        },
        grid: {
            left: '1%',
            right: '4.5%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: 'white',
            },
        },
        yAxis: {
            type: 'category',
            data: ['Blenz Coffee', 'Subway', "McDonald's", 'Tim Hortons', 'Starbucks'],
            // ['Burger King', "Dunkin'", "McDonald's", 'Subway', 'Starbucks'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: 'white',
            },
        },
        series: [
            {
                name: '1-1.5 stars',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                },
                // emphasis: {
                //     focus: 'series'
                // },
                data: [0, 7, 10, 8, 1]
                // [114, 69, 189, 55, 16]
            },
            {
                name: '2-2.5 stars',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                // emphasis: {
                //     focus: 'series'
                // },
                data: [9, 21, 43, 55, 31]
            },
            {
                name: '3-3.5 stars',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                // emphasis: {
                //     focus: 'series'
                // },
                data: [27, 15, 16, 19, 108]
            },
            {
                name: '4-4.5 stars',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                // emphasis: {
                //     focus: 'series'
                // },
                data: [7, 1, 0, 0, 37]
            },
            {
                name: '5 stars',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    color: '#fff'
                },
                // emphasis: {
                //     focus: 'series'
                // },
                data: [0, 0, 0, 0, 1]
            },

        ]
    };
    // 把配置项实例对象
    myChart.setOption(option);
    // 让图表自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();


// //地图
(function () {
    $.get('jsonfile/bclocation.json', function (data1) {
        var myChart = echarts.init(document.querySelector(".map .chart"), 'infographic');
        var option = {
            toolbox: { feature: { saveAsImage: { show: true } } },
            // load gmap component
            gmap: {

                center: [-123.050226, 49.246292],
                zoom: 11.7,
                renderOnMoving: true,

                echartsLayerZIndex: 2019,
                roam: true

                // More initial options...
            },
            title: {
                text: 'Metro Vancouver Business Distribution',
                left: 'center',
                // color: "#c41200",
                textStyle: {
                    color: '#101416',
                    fontWeight: 'bold',

                },
                padding: 5
            },
            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2,
                formatter: function (params) {
                    return `${params.name}:
                    ${params.value[2]}`;
                }
            },
            visualMap: {
                left: 'right',
                min: 1,
                max: 5,
                inRange: {
                    color: [
                        '#313695',
                        '#4575b4',
                        '#74add1',
                        '#abd9e9',
                        '#e0f3f8',
                        '#ffffbf',
                        '#fee090',
                        '#fdae61',
                        '#f46d43',
                        '#d73027',
                        // '#a50026'
                    ]
                },
                text: ['High', 'Low'],
                calculable: true
            },
            series: [
                {
                    type: 'scatter',
                    coordinateSystem: 'gmap',
                    // data items [[lng, lat, value], [lng, lat, value], ...]
                    data: data1,
                    encode: {
                        // encode the third element of data item as the `value` dimension
                        value: 2,
                        lng: 0,
                        lat: 1
                    },
                    symbol: 'pin',
                },
                {
                    coordinateSystem: 'gmap',
                    name: 'total 5',
                    type: 'effectScatter',
                    data: [{ "name": 'Miku', "value": [-123.1130513581, 49.2870083463, 4.5] },
                    { "name": 'Jam Cafe on Beatty', "value": [-123.1095422, 49.280155, 4.5] },
                    { "name": 'Guu with Garlic', "value": [-123.133953, 49.2902019, 4.5] },
                    { "name": 'Blue Water Cafe', "value": [-123.1211291, 49.276155, 4.5] },
                    { "name": 'Blue Water Cafe', "value": [-123.1370603, 49.2906302, 4.5] },
                    { "name": 'Gaya Sushi', "value": [-122.9554634945, 49.2582307071, 3.5] }],
                    // [{ "name": "Chocolaterie Bernard Callebaut", "value": [-123.1578111, 49.1543558, 5.0] }, { "name": "Westwood Plateau Golf and Country Club", "value": [-122.7861215057, 49.3136643862, 4.0] }, { "name": "Troll's", "value": [-123.274588, 49.3745397, 3.0] }, { "name": "Nailicious Nail Spa", "value": [-123.1280546, 49.2633754, 2.0] }, { "name": "Little Caesars", "value": [-123.0408930571, 49.2195321279, 1.0] }],
                    symbolSize: 15,
                    label: {
                        formatter: '{b}',
                        show: true,
                        color: '#c41200',
                        // borderColor: 'red',
                        position: 'bottom',
                        padding: 2,
                        fontWeight: 'bold',
                        distance: 50

                    },
                    labelLine: { show: true }

                },
                {
                    coordinateSystem: 'gmap',
                    name: 'Top 5',
                    type: 'effectScatter',
                    symbol: 'star',
                    data: [{
                        "name": "SFU", "value": [-122.9180, 49.2768, 100]
                    }],
                    symbolSize: 20,
                    label: {
                        formatter: '{b}',
                        show: true,
                        color: '#c41200',
                        // borderColor: 'red',
                        position: 'bottom',
                        fontWeight: 'bold',

                    }

                }
            ],

        };
        myChart.setOption(option);

        var gmap = myChart
            .getModel()
            .getComponent('gmap')
            .getGoogleMap();
        // Add some markers to map
        // var marker = new google.maps.Marker({ position: { lng: -123.106226, lat: 49.246292 } });
        marker.setMap(gmap);
        window.addEventListener('resize', function () { myChart.resize(); });
        // Add TrafficLayer to map
        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(gmap);
    });




})();

// 右2
(function () {

    const colors = ['#5470C6', '#91CC75', '#EE6666'];
    var option = {
        color: colors,
        toolbox: { feature: { saveAsImage: { show: true } } },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            right: '21%',
            bottom: 20,
            left: 28
        },
        // toolbox: {
        //     feature: {
        //         dataView: { show: true, readOnly: false },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        legend: {
            data: ['Avg Reviews', 'User Amt', 'Avg Stars', 'Review Amt'],
            textStyle: { color: 'white' }

        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true,
                },

                // prettier-ignore
                data: ['< 2010', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                axisLabel: {
                    show: true,
                    color: 'white',
                    interval: 0,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'User Amt',
                position: 'right',
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value}',
                    color: 'white'
                }
            },
            {
                type: 'value',
                name: 'Avg Reviews',
                position: 'right',
                alignTicks: true,
                offset: 64,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value}',
                    color: 'white',
                }

            },
            {
                type: 'value',
                name: 'Avg Stars',
                position: 'left',
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value}',
                    color: 'white'
                }
            }
        ],
        series: [
            {
                name: 'User Amt',
                type: 'bar',
                data: [
                    12518, 9630,
                    13668,
                    15005,
                    15507,
                    17173,
                    17265,
                    14395,
                    9686,
                    7344,
                    4607,
                    1368,
                    220
                ]
            },
            {
                name: 'Avg Reviews',
                type: 'line',
                yAxisIndex: 1,
                data: [
                    169.59, 83.04, 57.49, 38.52, 30.58, 21.85, 17.59, 12.53, 9.48, 6.7, 5.29, 3.21, 1.44
                ]
            },
            {
                name: 'Avg Stars',
                type: 'line',
                yAxisIndex: 2,
                data: [3.74, 3.71, 3.66, 3.6, 3.59, 3.55, 3.51, 3.47, 3.44, 3.36, 3.34, 3.08, 2.73]
            },
            // {
            //     name: 'Review Amt',
            //     type: 'Bar',
            //     yAxisIndex: 2,
            //     data: [18638, 23256,
            //         33172,
            //         42702,
            //         45297,
            //         57610,
            //         73273,
            //         74523,
            //         77875,
            //         77254,
            //         66115,
            //         31039,
            //         2015]
            // }
        ]
    };
    var myChart = echarts.init(document.querySelector(".line .chart"), 'infographic');
    // 把配置项实例对象
    myChart.setOption(option);
    // 让图表自适应
    window.addEventListener('resize', function () {
        myChart.resize();

    });


})();

// 左2
(function () {
    var option = {
        // legend: {
        //     top: 'bottom',
        //     textStyle: { color: 'white' },

        // },
        toolbox: { feature: { saveAsImage: { show: true } } },
        tooltip: {
            formatter: function (params) {
                a = ['Japanese, Sushi Bars', 'Breakfast & Brunch', 'Japanese, Tapas Bars', 'Live/Raw Food, Steakhouses, Sushi', 'Japanese, Tapas/Small Plates, Tapas Bars', 'Pakistan, African, Indian', 'Noodles, Japanese', 'Canadian (New), American (New)']
                return a[`${params.dataIndex}`]
            }
        },
        grid: {
            up: 1,
            bottom: 20,

        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [40, 120],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 10
                },
                label: {
                    show: true,
                },

                data: [
                    { value: 1805, name: 'Miku' },
                    { value: 1097, name: 'Jam Cafe on Beatty' },
                    { value: 936, name: 'Guu with Garlic' },
                    { value: 911, name: 'Blue Water Cafe' },
                    { value: 845, name: 'Kingyo' },
                    { value: 711, name: "Vij's Restaurant" },
                    { value: 683, name: 'Marutama Ramen' },
                    { value: 681, name: 'Fable' }
                ]
                // 'Breakfast & Brunch', 'Japanese, Tapas Bars','Live/Raw Food, Steakhouses, Sushi', 'Japanese, Tapas/Small Plates, Tapas Bars','Pakistan, African, Indian','Noodles, Japanese','Canadian (New), American (New)'
            }
        ]
    };
    var myChart = echarts.init(document.querySelector(".left2 .chart"), 'infographic');
    // 把配置项实例对象
    myChart.setOption(option);
    // 让图表自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });


})();

// 左3
(function () {
    $.get('jsonfile/hour_star.json', function (data1) {
        var myChart = echarts.init(document.querySelector(".left3 .chart"), 'infographic');
        // prettier-ignore
        const hours = [
            '12a', '1a', '2a', '3a', '4a', '5a', '6a',
            '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p',
            '6p', '7p', '8p', '9p', '10p', '11p'
        ];
        // prettier-ignore
        const days = [
            'Saturday', 'Friday', 'Thursday',
            'Wednesday', 'Tuesday', 'Monday', 'Sunday'
        ];
        // prettier-ignore
        const data = data1.map(function (item) {
            return [item.hour, item.weekday, item.stars || '-'];
        });
        // .map(function (item) {
        //     return [item[1], item[0], item[2] || '-'];
        // });
        var option = {
            toolbox: { feature: { saveAsImage: { show: true } } },
            tooltip: {
                position: 'top'
            },
            grid: {
                // height: '80%',
                top: '4%',
                left: 70,
                right: 20
            },
            xAxis: {
                type: 'category',
                data: hours,
                splitArea: {
                    show: true
                },
                axisLabel: {
                    color: 'white',
                },

            },
            color: 'white',
            yAxis: {
                type: 'category',
                data: days,
                splitArea: {
                    show: true
                },
                axisLabel: {
                    color: 'white',
                },
            },
            visualMap: {
                min: 500,
                max: 7000,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '6%'
            },
            series: [
                {
                    name: 'Review Numbers',
                    type: 'heatmap',
                    data: data,
                    label: {
                        show: false
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        var myChart = echarts.init(document.querySelector(".left3 .chart"), 'infographic');
        // 把配置项实例对象
        myChart.setOption(option);
        // 让图表自适应
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    })

})();