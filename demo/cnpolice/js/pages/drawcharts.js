
function firstcomeRate(){
	var option1 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['一月', '二月', '三月', '4月', '5月', '6月'],
            axisLine:{
            	lineStyle:{
            		color:"#000"
            	}
            },
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                formatter: '{value} %'
            },
            axisLine:{
            	lineStyle:{
            		color:"#000"
            	}
            }
        }
    ],
    series : [
        {
            name:'环比',
            type:'bar',
            barWidth: '60%',
            markLine:{
                 data : [
                    {name: '与分局平均率比', yAxis:28.16},
                    
                ],
                lineStyle:{
                    color:"#000"
                }
            },
            data:[28.16, 45.67, 32.16, 45.48, 46.25, 38.05]
        }
    ]
};




var option2 = {
    // title: {
    //     text: '未来一周气温变化',
    //     subtext: '纯属虚构'
    // },
    tooltip: {
        trigger: 'axis'
    },
//  grid:{
//  	top:15,
//  	bottom:35
//  },
    // legend: {
    //     data:['最高气温','最低气温']
    // },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         dataView: {readOnly: false},
    //         magicType: {type: ['line', 'bar']},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['一月','二月','三月','四月','五月','六月'],
        axisLine:{
            	lineStyle:{
            		color:"#000"
            	}
            }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        axisLine:{
            	lineStyle:{
            		color:"#000"
            	}
            }
    },
    series: [
        // {
        //     name:'最高气温',
        //     type:'line',
        //     data:[11, 11, 15, 13, 12, 13, 10],
        //     markPoint: {
        //         data: [
        //             {type: 'max', name: '最大值'},
        //             {type: 'min', name: '最小值'}
        //         ]
        //     },
        //     markLine: {
        //         data: [
        //             {type: 'average', name: '平均值'}
        //         ]
        //     }
        // },
        {
            name:'占比',
            type:'line',
            data:[50.81, 49.23, 57.15, 61.25, 17.72, 68],
            markLine:{
                data : [
                    {name: '与分局平均率比', yAxis:46.11},
                    // {name: '标线1终点', x: 150, y: 120}
                ]
            }
//          markPoint: {
//              data: [
//                  {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
//              ]
//          },
//          markLine: {
//              data: [
//                  {type: 'average', name: '平均值'},
//                  [{
//                      symbol: 'none',
//                      x: '90%',
//                      yAxis: 'max'
//                  }, {
//                      symbol: 'circle',
//                      label: {
//                          normal: {
//                              position: 'start',
//                              formatter: '最大值'
//                          }
//                      },
//                      type: 'max',
//                      name: '最高点'
//                  }]
//              ]
//          }
        }
    ]
};







//首次来沪人员占比(占比)
var chart2 = echarts.init(document.getElementById("sheet1"));
chart2.setOption(option2);

// 首次来沪人员占比(首次来沪人员)
var chart1 = echarts.init(document.getElementById('sheet2'));
chart1.setOption(option1);

//首次来沪人员占比(扣分)
//var chart3 = echarts.init(document.getElementById("line_sheet2"));
//chart3.setOption(option3);

}
//firstcomeRate();

//反复新增注销3次(含)以上名单

function repeatAddanddel(){
	var option1= {
//                  backgroundColor:'#091323',
                    color: ['#38b4ee', '#303f9f', '#4caf50'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        x: 'left',
                        padding: [10, 20,0,20],
                        data:[{name:'新增次数',icon:'circle'},
                              {name:'注销次数',icon:'circle'},
                              {name:'合计人数',icon:'circle'}],
                        selected: {
                            '新增次数': true,
                            '注销次数': true,
                            '合计人数': true
                        },
                        textStyle:{
                            color:'black'
                        }
                    },
                    grid: {
                        left: '0',
                        right: '5%',
                        bottom: '3%',
                        top:'13%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisTick:{show:false},
                        axisLabel:{
                            textStyle:{
                                color:'black'
                            }
                        },
                        splitLine:{//网格线
                            show: true,
                            lineStyle:{
                                color:['#7FFFD4'],
                                type:'solid'
                            }
                        },
                        data: ['新华居委','新华居委','新华居委','新华居委','新华居委','新华居委','新华居委']
                    },
                    yAxis: {
                        min:0,
                        max:100,
                        interval:20,
                        axisTick:{show:false},
                        axisLine:{
                            show:false,
                        //    onZero:false
                        },
                        axisLabel:{
                            textStyle:{
                                color:'black'
                            }
                        },
                        splitLine:{//网格线
                            show: true,
                            lineStyle:{
                                color:['#7FFFD4'],
                                type:'solid'
                            }
                        }
                    },
                    series: [
                        {
                            name:'新增次数',
                            type:'line',
                            smooth:true,
                            symbolSize:12,
                            data:['48','43','41','40','24','53','47'],
                            label: {
                                normal: {
                                    show: false,
                                    position: 'top'//值显示
                                }
                            }
                        },
                        {
                            name:'注销次数',
                            type:'line',
                            smooth:true,
                            symbolSize:12,
                            data:['70','72','69','62','58','70','65'],
                            label: {
                                normal: {
                                    show: false,
                                    position: 'top'
                                }
                            }
                        },
                        {
                            name:'合计人数',
                            type:'line',
                            smooth:true,
                            symbolSize:12,
                            data:['70','75','58','72','70','72','74'],
                            label: {
                                normal: {
                                    show: false,
                                    position: 'top'
                                }
                            }
                        }
                    ]
                };
            // 基于准备好的dom，初始化echarts实例
            var chart1 = echarts.init(document.getElementById('sheet3'));
            
            // 使用刚指定的配置项和数据显示图表。
            chart1.setOption(option1); 
            

}

//来沪人员变动数占来沪人员总数比

function changeRate(){

//来沪人员总数

//柱状图：每条柱由三种数据构成(新增，变更，注销)
var option1 = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['新增', '变更','注销'],
                        textStyle: { 
                            color: '#000'          //legend字体颜色 
                            
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '3%',
                        top:'9%',
                        bottom: '2%',
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'value',
                        // x轴的字体样式
                        axisLabel: {        
                                show: true,
                                textStyle: {
                                    color: '#000'
                                    
                                }
                            },
                        // 控制网格线是否显示
                        splitLine: {
                                show: false, 
                                //  改变轴线颜色
                                lineStyle: {
                                    // 使用深浅的间隔色
                                    color: ['red']
                                }                            
                        },
                        // x轴的颜色和宽度
                        axisLine:{
                            lineStyle:{
                                color:'#000',
                                  width:3,   //这里是坐标轴的宽度,可以去掉
                            }
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: ['一月','二月','三月','四月','五月','六月'],
                        // y轴的字体样式
                        axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: '#000'
                                        
                                    }
                               },
                        // y轴的颜色和宽度
                        axisLine:{
                            lineStyle:{
                                color:'#000',
                                  width:1            //这里是坐标轴的宽度
                            }
                        }
                    },
                    series: [
                        {
                            name: '新增',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            itemStyle:{
                            	normal:{
                            		color:"#87CEEB"
                            	}
                            },
                            data: [320, 302, 301, 334, 390, 330]
                        },
                        {
                            name: '变更',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            itemStyle:{
                            	normal:{
                            		color:"#FFA07A"
                            	}
                            },
                            data: [120, 132, 101, 134, 90, 230]
                        },
                        {
                            name: '注销',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            itemStyle:{
                            	normal:{
                            		color:"#99CC66"
                            	}
                            },
                            data: [220, 182, 191, 234, 290, 330]
                        },
                    ]
                };
 
var option2 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['来沪人员变动数占来沪人员总数比'],
        textStyle: { 
            color: '#000'          //legend字体颜色 

            }
        },
    grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['一月','二月','三月','四月','五月','六月'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            // type : 'category',
            // data : ['10','20','30','40'],
            type : 'value',
            axisLabel: {
                formatter: '{value} %'
            },
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    series : [
        {
            name:'来沪人员变动数占来沪人员总数比',
            type:'bar',
            barWidth: '40%',
            markLine:{
                 data : [
                    {name: '与分局平均率比', yAxis:129.83}
                ]
            },
            data:[122.26,186.26,182.27,100.92,125.26,140.25]
        },
        
    ],
    label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        },
    itemStyle: {
                normal: {
                 
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(17, 168,171, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17, 168,171, 0.1)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }
};

                

var chart1 = echarts.init(document.getElementById("sheet1"));
chart1.setOption(option1);

var chart2 = echarts.init(document.getElementById("sheet2"));
chart2.setOption(option2);

}
//changeRate();


//来沪人员新增数占来沪人员总数比

function addRate(){
	
	var xData = function() {
    var data = [];
    for (var i = 1; i < 7; i++) {
        data.push(i + "月份");
    }
    return data;
}();

var option1 = {
//  backgroundColor: "#fff",
    "title": {
        x: "4%",

        textStyle: {
            color: '#000',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#000"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95
//      textStyle: {
//          color: "#000"
//      }
    },
       "legend": {
           x: '4%',
           top: '9%',
           textStyle: {
               color: '#90979c',
           },
           "data": ['新增', '占比']
       },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 0,
        "end": 100,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#00F5FF",
            
        },
           textStyle:{
            color:"#000"},
           borderColor:"#eee"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [
    
        {
            "name": "新增",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#FF6A6A",
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482
               
            ]
        }, {
            "name": "占比",
            "type": "line",
            "stack": "总量",
            symbolSize:10,
            symbol:'circle',
             markline:{
                data : [
                    {name: '与分局平均率比', yAxis:300}
                ]
            },
            "itemStyle": {
                "normal": {
                    "color": "#FF0000",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                8.41,
                7.70,
                14.32,
                6.93,
                7.97,
                9.13
               
            ]
        },
    ]
}

var data_val=[63.01, 17.56, 44.63, 4.40, 24.96, -7.79],
    xAxis_val=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
var data_val1=[0,0,0,0,0,0,0];
var option2 = {
    // backgroundColor:'#293042',
    grid:{
        left:10,
        top:'10%',
        bottom:20,
        right:40,
        containLabel:true
    },
    tooltip:{
        show:true,
        backgroundColor:'#384157',
        borderColor:'#384157',
        borderWidth:1,
        formatter:'{b}:{c}',
        extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
    },
    legend:{
        // right:0,
        // top:0,
        data:['环比'],
         textStyle:{
            color :'#5c6076'
        }
    },
    // title: {
    //     text: '跑步数据检测',
    //     x:'4.5%',
    //     top: '1%',
    //     textStyle:{
    //     color :'#5c6076'
    //     }
    // },
    xAxis: {
        data: xAxis_val,
        boundaryGap:false,
        axisLine:{
            show:false
        },
         axisLabel: {
            textStyle: {
                color: '#5c6076'
            }  
        },
        axisTick:{
            show:false
        }
    },
    yAxis: { 
        ayisLine:{
            show:false
        },
         axisLabel: {
            textStyle: {
                color: '#5c6076'
            }  
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#2e3547'
            }
        },
        axisLine: {
                lineStyle: {
                    color: '#384157'
                }
            }
    },
    
    series: [
        {
            type: 'bar',
            name:'linedemo',
            
            
            tooltip:{
                show:false
            },
            animation:false,
            barWidth:1.4,
            hoverAnimation:false,
            data:data_val,
            itemStyle:{
                normal:{
                    color:'#f17a52',
                    opacity:0.6,
                    label:{
                        show:false
                    }
                }
            }
        },
        {
            type: 'line',
            name:'环比',
            
            animation:false,
            symbol:'circle',
    
            hoverAnimation:false,
            data:data_val1,
            itemStyle:{
                normal:{
                    color:'#f17a52',
                    opacity:0,
                }
            },
            lineStyle:{
                normal:{
                    width:1,
                    color:'#384157',
                    opacity:1
                }
            }
        },
        {
            type: 'line',
            name:'linedemo',
            smooth:true,
            symbolSize:10,
            animation:false,
            lineWidth:1.2,
            hoverAnimation:false,
            markLine:{
                 data : [
                    {name: '与分局平均率比', yAxis:5.16},
                    
                ],
               
            },
            data:data_val,
            symbol:'circle',
            itemStyle:{
                normal:{
                    color:'#f17a52',
                    shadowBlur: 40,
                    label:{
                        show:true,
                        position:'top',
                        textStyle:{
                            color:'#f17a52',
                    
                        }
                    }
                }
            },
           areaStyle:{
                normal:{
                    color:'#f17a52',
                    opacity:0.08
                }
            }
            
        }
    ]
};



            // 基于准备好的dom，初始化echarts实例
            var chart1 = echarts.init(document.getElementById('sheet1'));
            var chart2 = echarts.init(document.getElementById('sheet2'));
            // 使用刚指定的配置项和数据显示图表。
            chart1.setOption(option1); 
            chart2.setOption(option2);
}

//来沪人员注销数占来沪人员总数比

function delRate(){
var xData = function() {
    var data = [];
    for (var i = 1; i < 7; i++) {
        data.push(i + "月份");
    }
    return data;
}();

var option1 = {

    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#000"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#000"
        }
    },
       "legend": {
           x: '4%',
           top: '9%',
           textStyle: {
               color: '#90979c',
           },
           "data": ['注销', '占比']
       },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 0,
        "end": 100,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#ddd",
            
        },
           textStyle:{
            color:"#000"},
           borderColor:"#eee"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [
    
        {
            "name": "注销",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#7AC5CD",
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482
               
            ]
        }, {
            "name": "占比",
            "type": "line",
            "stack": "总量",
            symbolSize:10,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "#FFDAB9",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                10.36,
                36.93,
                29.62,
                38.10,
                25.19,
                19.15
               
            ]
        },
    ]
};
var data_val=[63.01, 17.56, 44.63, 4.40, 24.96, -7.79],
    xAxis_val=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
var data_val1=[0,0,0,0,0,0,0];
var option2 = {
    // backgroundColor:'#293042',
    grid:{
        left:10,
        top:'10%',
        bottom:20,
        right:40,
        containLabel:true
    },
    tooltip:{
        show:true,
        backgroundColor:'#384157',
        borderColor:'#384157',
        borderWidth:1,
        formatter:'{b}:{c}',
        extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
    },
    legend:{
        // right:0,
        // top:0,
        data:['环比'],
         textStyle:{
            color :'#5c6076'
        }
    },
    // title: {
    //     text: '跑步数据检测',
    //     x:'4.5%',
    //     top: '1%',
    //     textStyle:{
    //     color :'#5c6076'
    //     }
    // },
    xAxis: {
        data: xAxis_val,
        boundaryGap:false,
        axisLine:{
            show:false
        },
         axisLabel: {
            textStyle: {
                color: '#5c6076'
            }  
        },
        axisTick:{
            show:false
        }
    },
    yAxis: { 
        ayisLine:{
            show:false
        },
         axisLabel: {
            textStyle: {
                color: '#5c6076'
            }  
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#2e3547'
            }
        },
        axisLine: {
                lineStyle: {
                    color: '#384157'
                }
            }
    },
    
    series: [
        {
            type: 'bar',
            name:'linedemo',
            
            
            tooltip:{
                show:false
            },
            animation:false,
            barWidth:1.4,
            hoverAnimation:false,
            data:data_val,
            itemStyle:{
                normal:{
                    color:'#f17a52',
                    opacity:0.6,
                    label:{
                        show:false
                    }
                }
            }
        },
        {
            type: 'line',
            name:'环比',
            
            animation:false,
            symbol:'circle',
    
            hoverAnimation:false,
            data:data_val1,
            itemStyle:{
                normal:{
                    color:'#f17a52',
                    opacity:0,
                }
            },
            lineStyle:{
                normal:{
                    width:1,
                    color:'#384157',
                    opacity:1
                }
            }
        },
        {
            type: 'line',
            name:'linedemo',
            smooth:true,
            symbolSize:10,
            animation:false,
            lineWidth:1.2,
            hoverAnimation:false,
            markLine:{
                 data : [
                    {name: '与分局平均率比', yAxis:5.16},
                    
                ],
               
            },
            data:data_val,
            symbol:'circle',
            itemStyle:{
                normal:{
                    color:'#f17a52',
                    shadowBlur: 40,
                    label:{
                        show:true,
                        position:'top',
                        textStyle:{
                            color:'#f17a52',
                    
                        }
                    }
                }
            },
           areaStyle:{
                normal:{
                    color:'#f17a52',
                    opacity:0.08
                }
            }
            
        }
    ]
};
    // 基于准备好的dom，初始化echarts实例
    var chart1 = echarts.init(document.getElementById('sheet1'));
    var chart2 = echarts.init(document.getElementById('sheet2'));
    // 使用刚指定的配置项和数据显示图表。
    chart1.setOption(option1); 
    chart2.setOption(option2);
}

//无人居住房整治率

function houseControl(){


 var option1 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
    	textStyle: {
               color: '#000',
           },
        data: ['新增', '减少']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:  {
        type: 'value',
        axisLine:{
            lineStyle:{
            color:'#000',
            width:1            //这里是坐标轴的宽度
                }
        }
    },
    xAxis: {
        type: 'category',
        axisLine:{
            lineStyle:{
            color:'#000',
            width:1            //这里是坐标轴的宽度
                }
        },
        data: ['1月','2月','3月','4月','5月','6月']
    },
    series: [
        {
            name: '新增',
            type: 'bar',
            // stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
            	normal:{
            		color:'#FF99CC'
            	}
            },
            data: [320, 302, 301, 334, 390, 330]
        },
        {
            name: '减少',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
            	normal:{
            		color:'#CCFF66'
            	}
            },
            data: [120, 132, 101, 134, 90, 230]
        }
     
    ]
};
 var chart1 = echarts.init(document.getElementById('sheet3'));

   chart1.setOption(option1); 	
}


//来沪人员照片质量统计

function photoQuality(){



var option1 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            axisTick: {
                alignWithLabel: true
            },
             axisLine:{
	            lineStyle:{
	            color:'#000',
	            width:1            //这里是坐标轴的宽度
	                }
	        }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
	            lineStyle:{
	            color:'#000',
	            width:1            //这里是坐标轴的宽度
	                }
	        }
        }
    ],
    series : [
        {
            name:'异常数量',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330]
        }
    ]
};

 var chart1 = echarts.init(document.getElementById('sheet3'));

   chart1.setOption(option1); 
}

//异常数据

function unusualData(){
console.log('异常数据');
	
var xData = function() {
    var data = [];
    for (var i = 1; i <7; i++) {
        data.push(i + "月份");
    }
    return data;
}();

var option1 = {
//  backgroundColor: "#051f72",
//  "title": {
//      "text": "本年商场顾客男女人数统计",
//      "subtext": "BY Wang Dingding",
//      x: "4%",
//
//      textStyle: {
//          color: '#fff',
//          fontSize: '22'
//      },
//      subtextStyle: {
//          color: '#90979c',
//          fontSize: '16',
//
//      },
//  },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#000"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#000"
        }
    },
    "legend": {
        x: '4%',
        top: '5%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['户籍地写上海', '14岁以下务工务农','小计']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 0,
        "end": 100,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#000"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [{
            "name": "户籍地写上海",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#000"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                709,
                1917,
                2455,
                2610,
                1719,
                1433
            ],
        },

        {
            "name": "14岁以下务工务农",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,183,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482 
            ]
        }, {
            "name": "小计",
            "type": "line",
            "stack": "总量",
            symbolSize:10,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(252,230,48,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                1036,
                3693,
                2962,
                3810,
                2519,
                1915 
            ]
        },
    ]
}

var chart1 = echarts.init(document.getElementById("sheet3"));
chart1.setOption(option1);
}

//unusualData()
//人口信息采集工作量达标

function informationCollection(){



var option1 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
    	textStyle:{
    		color:"#000"
    	},
        data: ['来沪人员新增数', '来沪人员注销数','人户分离新增数','境外人员登记数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:  {
        type: 'value',
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        data: ['2017/06','2017/07','2017/08','2017/09','2017/10','2017/11','2017/12']
    },
    series: [
        {
            name: '来沪人员新增数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
            	normal:{
            		color:'#FF6666'
            	}
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '来沪人员注销数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
            	normal:{
            		color:'#FFCC99'
            	}
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '人户分离新增数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
            	normal:{
            		color:'#CC3399'
            	}
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '境外人员登记数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
            	normal:{
            		color:'#99CC66'
            	}
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
       
    ]
};

var chart1 = echarts.init(document.getElementById("sheet3"));
chart1.setOption(option1);
}

//来沪人员新增绝对值

function addAbsolute(){
var option1 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
    	textStyle:{
    		color:"#000"
    	},
        data: ['来沪人员新增数', '来沪人员注销数','人户分离新增数','境外人员登记数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:  {
        type: 'value',
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        data: ['2017/06','2017/07','2017/08','2017/09','2017/10','2017/11','2017/12']
    },
    series: [
        {
            name: '来沪人员新增数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
             itemStyle:{
            	normal:{
            		color:'#CCCC99'
            	}
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '来沪人员注销数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
             itemStyle:{
            	normal:{
            		color:'#663366'
            	}
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '人户分离新增数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
             itemStyle:{
            	normal:{
            		color:'#6699CC'
            	}
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '境外人员登记数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
             itemStyle:{
            	normal:{
            		color:'#CCFF66'
            	}
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
       
    ]
};

var chart1 = echarts.init(document.getElementById("sheet3"));
chart1.setOption(option1);
}


















