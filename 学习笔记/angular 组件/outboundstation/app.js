(function() {

    var mod_app = angular.module('outboundstationApp', ['ngRoute', 'ngResource']);

    mod_app.service('out_in_echart', ['$http', function() {
        this.show = function(data, is_start, my_chart) {
            option = {
                title: {
                    show: false,
                    text: '',
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    icon: "rect",
                    orient: 'horizontal', // 'vertical'
                    x: 'right', // 'center' | 'left' | {number},
                    y: 'top', // 'center' | 'bottom' | {number}
                    itemWidth: 15,
                    itemHeight: 8,
                    data: ["进站", "出站"],
                    show: true,
                    textStyle: {
                        color: "#ffffff",
                        fontSize: 10
                    }

                },
                grid: {
                    left: '1%',
                    right: '10%',
                    top: '18%',
                    bottom: '3%',
                    containLabel: true
                },
                // color: data.color,
                calculable: true,
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    splitLine: { show: false }, //去除网格线
                    axisLabel: {
                        //interval: 0,
                        show: true,
                        textStyle: {
                            color: "#ffffff",
                            fontSize: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            show: false,
                            color: "rgba(0,202,246,0.4)",
                            width: 1
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    data: data["name"]
                }],
                yAxis: {
                    type: 'value',
                    splitNumber: 2,
                    axisLabel: {
                        interval: 0,
                        show: true,
                        formatter: '{value}',
                        margin: 2,
                        textStyle: {
                            color: "#ffffff",
                            fontSize: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(0,202,246,0.4)",
                            width: 1
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: { show: false } //去除网格线
                },
                series: [{
                        name: "进站",
                        type: "line",
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: "#16D9F0"
                            },
                        },
                        data: data["in"]
                    },
                    {
                        name: "出站",
                        type: "line",
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: "#5d15e9"
                            },
                        },
                        data: data["out"]
                    }
                ]
            }
            if (is_start == 0) {
                my_chart.clear();
                my_chart.setOption(option);
            } else {
                my_chart.setOption(option);
            }


        };
    }]);
    mod_app.service('age_echart', ['$http', function() {
        this.show = function(data, is_start, my_chart) {
            option = {
                title: {
                    show: false,
                },
                tooltip: {
                    trigger: 'axis',
                },
                grid: {
                    left: '18%',
                    right: '10%',
                    top: '7%',
                    bottom: '23%',
                    containLabel: false
                },
                calculable: true,
                xAxis: [{
                        type: 'category',
                        show: false,
                        boundaryGap: true,
                        splitLine: { show: false }, //去除网格线
                        axisLabel: {
                            interval: 0,
                            show: true,
                            textStyle: {
                                color: "#ffffff",
                                fontSize: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                show: false,
                                color: "rgba(0,202,246,0.4)",
                                width: 1
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        data: data["name"]
                    },
                    {
                        type: 'category',
                        position: "bottom",
                        data: data["name"],
                        boundaryGap: false,
                        // offset: 40,
                        axisLabel: {
                            interval: 0,
                            show: true,
                            textStyle: {
                                color: "#ffffff",
                                fontSize: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                show: false,
                                color: "rgba(0,202,246,0.4)",
                                width: 1
                            }
                        },
                        axisTick: {
                            show: false
                        },
                    }

                ],
                yAxis: [{
                    type: 'value',
                    show: true,
                    splitNumber: 2,
                    axisLabel: {
                        interval: 0,
                        show: true,
                        formatter: '{value}',
                        margin: 2,
                        textStyle: {
                            color: "#ffffff",
                            fontSize: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(0,202,246,0.4)",
                            width: 1
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: { show: false } //去除网格线
                }],
                series: [{
                        name: '人数',
                        type: 'pictorialBar',
                        barCategoryGap: '0%',
                        symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    let colorList = [
                                        'rgba(10,149,177,0.7)', 'rgba(17,69,119,1)',
                                        'rgba(10,149,177,0.7)', 'rgba(17,69,119,1)',
                                        'rgba(10,149,177,0.7)', 'rgba(17,69,119,1)'
                                    ];
                                    return colorList[params.dataIndex];
                                }
                            },
                            emphasis: {
                                opacity: 1
                            }
                        },
                        data: data["value"],
                    },
                    {
                        symbol: 'image://data:image/png;base64,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',
                        symbolSize: 20,
                        name: "人数",
                        type: "line",
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        data: data["value"],
                        itemStyle: {
                            normal: {
                                borderWidth: 4,
                                color: {
                                    colorStops: [{
                                            offset: 0,
                                            color: 'rgba(36,226,198,0.9)'
                                        },

                                        {
                                            offset: 1,
                                            color: 'rgba(36,226,198,0.9)'
                                        }
                                    ],
                                }
                            }
                        }
                    }
                ]
            }
            if (is_start == 0) {
                my_chart.clear();
                my_chart.setOption(option);
            } else {
                my_chart.setOption(option);
            }

        };
    }]);
    mod_app.service('sex_echart', ['$http', function() {
        this.show = function(data, is_start, my_chart) {
            var placeHolderStyle = {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                emphasis: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                }
            };
            var dataStyle = {
                normal: {
                    formatter: '{c}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            };
            option = {
                title: [{
                    show: false,
                    text: '',
                }, {
                    text: data[0]["name"],
                    left: '23%',
                    top: '70%',
                    textAlign: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: '10',
                        color: '#fff',
                        textAlign: 'center',
                    },
                }, {
                    text: data[1]["name"],
                    left: '73%',
                    top: '70%',
                    textAlign: 'center',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '10',
                        textAlign: 'center',
                    },
                }],
                series: [{
                        type: 'pie',
                        hoverAnimation: false, //鼠标经过的特效
                        radius: ['40%', '55%'],
                        center: ['25%', '50%'],
                        startAngle: 225,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [{
                                value: Math.round(data[0]["value"] / (data[0]["value"] + data[1]["value"]) * 100),
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#99da69'
                                        }, {
                                            offset: 1,
                                            color: '#01babc'
                                        }]),
                                    }
                                },
                                label: dataStyle,
                            }, {
                                value: 100 - Math.round(data[0]["value"] / (data[0]["value"] + data[1]["value"]) * 100),
                                itemStyle: placeHolderStyle,
                            },

                        ]
                    },
                    {
                        type: 'pie',
                        hoverAnimation: false,
                        radius: ['40%', '55%'],
                        center: ['75%', '50%'],
                        startAngle: 225,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [{
                                value: 100 - Math.round(data[0]["value"] / (data[0]["value"] + data[1]["value"]) * 100),
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#9f3edd'
                                        }, {
                                            offset: 1,
                                            color: '#4897f6'
                                        }]),
                                    }
                                },
                                label: dataStyle,
                            }, {
                                value: 100 - (100 - Math.round(data[0]["value"] / (data[0]["value"] + data[1]["value"]) * 100)),
                                itemStyle: placeHolderStyle,
                            },

                        ]
                    },

                    //外圈的边框
                    {
                        // name: '总人数',
                        type: 'pie',
                        hoverAnimation: false, //鼠标经过的特效
                        radius: ['55%', '58%'],
                        center: ['25%', '50%'],
                        startAngle: 225,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [{
                                value: 75,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#01babc'
                                        }, {
                                            offset: 1,
                                            color: '#99da69'
                                        }]),
                                    }
                                },
                            }, {
                                value: 25,
                                itemStyle: placeHolderStyle,
                            },

                        ]
                    },
                    {
                        type: 'pie',
                        hoverAnimation: false,
                        radius: ['55%', '58%'],
                        center: ['75%', '50%'],
                        startAngle: 225,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [{
                                value: 75,
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#4897f6'
                                        }, {
                                            offset: 1,
                                            color: '#9f3edd'
                                        }]),
                                    }
                                },
                            }, {
                                value: 25,
                                itemStyle: placeHolderStyle,
                            },

                        ]
                    },
                ]

            }
            if (is_start == 0) {
                my_chart.clear();
                my_chart.setOption(option);
            } else {
                my_chart.setOption(option);
            }

        };
    }]);
    mod_app.directive("marqueebox", function() {
        return {
            restrict: 'AEMC', // 指令类型  E：element A：attribute M：comment C: class
            templateUrl: '/static/app/outboundstation/marquee.html',

        }
    });
    mod_app.directive("orangebox", function() {
        return {
            restrict: 'AEMC',
            templateUrl: '/static/app/outboundstation/orange_div.html',
        }
    });
    mod_app.controller('marqueenCtr', function($scope, $http, out_in_echart, age_echart, sex_echart, $routeParams, $interval,
        $log, $location, Session, UserLogin,
        $interval) {
        $scope.stream_general_show = function() {
            $http.get('/service/travel/venue_general').then(function(response) {
                $scope.venuecenter = response.data;
            }, function(response) {});
        };
        $scope.stream_general_show();

        var marquee_timer = $interval(function() {
            $scope.stream_general_show();
        }, 1000 * 60 * 15)
        $scope.$on('$destroy', function() {
            $interval.cancel(marquee_timer);
        });
    });
    mod_app.controller('orangeboxCtr', function($scope, $http, out_in_echart, age_echart, sex_echart, $routeParams, $interval,
        $log, $location, Session, UserLogin,
        $interval) {
        $scope.is_orange = 1;
        var num = 1;
        var orange_timer = $interval(function() {
            if (num < 3) {
                num++;
            } else {
                num = 1;
            }
            $scope.is_orange = num;
        }, 3000)

        $scope.$on('$destroy', function() {
            $interval.cancel(orange_timer);
        });
    });
    mod_app.controller('outboundstationCtr', function($scope, $http, out_in_echart, age_echart, sex_echart, $routeParams, $interval,
        $log, $location, Session, UserLogin,
        $interval, $timeout) {

        $scope.city_list = ["xuzhou", "nanjing", "zhenjiang", "changzhou", "wuxi", "suzhou"];
        $scope.city_index = $scope.city_list[0];
        $scope.city_tip_show = true;
        $scope.alldata = {};
        $scope.statistics = {
            "station_in_cnt": "",
            "station_out_cnt": "",
            "station_total_cnt": ""
        };

        $scope.get_data = function(index) {
            $http.get('/service/wittraffic/traffic').then(function(response) {
                $scope.alldata = response.data;
                if (index == 0) {
                    angular.element(document).ready(function() {
                        start();
                    });
                }
            }, function(response) {});
        }

        function change_echart(data, is_start) {
            $scope.station_name = data.station_name;
            $scope.statistics = data.statistics;
            age_echart.show(data.age_distribution, is_start, $scope.age_div);
            out_in_echart.show(data.out_in_trend, is_start, $scope.out_in_div);
            sex_echart.show(data.sex_distribution, is_start, $scope.sex_div);
        }

        function start() {
            stop_timer();
            $scope.out_in_div = echarts.init(document.getElementById("out_in_div"));
            $scope.age_div = echarts.init(document.getElementById("age_div"));
            $scope.sex_div = echarts.init(document.getElementById("sex_div"));
            var video = document.getElementById('video');
            var city_num = 0;

            change_echart($scope.alldata[$scope.city_list[city_num]], 0);
            video.currentTime = 0;
            video.play();

            $scope.timer = $interval(function() {
                if (city_num < $scope.city_list.length - 1) {
                    city_num++;
                } else {
                    city_num = 0;
                    video.currentTime = 0;
                    video.play();
                }
                $scope.city_tip_show = true;
                $scope.city_index = $scope.city_list[city_num];
                change_echart($scope.alldata[$scope.city_list[city_num]], 1);
                $timeout(function() {
                    $scope.city_tip_show = false;
                }, 1300);
            }, 3000)
        }

        function stop_timer() {
            $interval.cancel($scope.timer);
            $scope.timer = null;

        }

        $scope.$on('$destroy', function() {
            stop_timer();
        });


        $scope.get_data(0);
    })


})();