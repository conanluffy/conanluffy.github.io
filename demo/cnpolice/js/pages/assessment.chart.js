// 展示图的内容
var Chart = function(index1) {
  var data = [50.81,43.26,37.84,41.68,37.69,43.54,51.69,47.14,49.95,61.07,52.17,60.18];
  var policeStation = ["新华路派出所","江苏路派出所","华阳路派出所","周家桥派出所","天山路派出所","仙霞路派出所","虹桥路派出所","程家桥派出所","北新泾派出所","新泾派出所","新虹桥治安派出所","临空经济园区治安派出所"];
  var option = {
    tooltip : {
      trigger: 'axis',
      formatter: '{b}:\n{c}%' 
    },
    legend: {
      data:['首次来沪人员新占比']
    },
    toolbox: {
      show : true,
      feature : {
        magicType : {show: true, type: ['line', 'bar']},
        saveAsImage : {show: true}
      }
    },
    calculable : true,
    xAxis : [{
      type : 'category',
      data: policeStation,    
    }],
    yAxis : [
    {
      type: 'value',
      name: '百分比（%）',
      min: 0,
      max: 100,
      position: 'left',
      axisLabel: {
        formatter: '{value}%'
      }
    },
    ],
    series : [
    {
      name:'首次来沪人员新占比',
      type:'line',
      data: data,
      itemStyle: {  
        normal: {  
          label: {  
            show: true,  
            position: 'top',  
            formatter: '{c}%'  
          }  
        }  
      },
      markLine : {
        data : [
        {type : 'average'}
        ]
      }
    }
    ]
  };
  var list1 = '';
  list1 += '<div class="chart type1"><div class="left-chart charts"><div class="chart_check"><span class="check-tab">首次来沪人员占比</span></div>';
  list1 += '<div class="charts-box"><table><tr class="firstRow"><td colspan="2">首次来沪人员占比</td></tr>';
  list1 += '<tr><td>首次来沪人员数：<span>687</span></td><td>占比：<span>17.89%</span></td></tr><tr><td>来沪人员新增数：<span>1352</span></td><td></td></tr></table>';
  list1 += '<div id="chart1" class="chart-content"></div></div></div><div class="right-chart charts">';
  list1 += '<div class="chart_check"><span class="check-tab">与单位3年平均率比</span></div><div class="charts-box"><table>';
  list1 += '<tr class="firstRow"><td colspan="2">与单位3年平均率比</td></tr><tr><td>首次来沪人员数：<span>687</span></td><td>占比：<span>17.89%</span></td></tr>';
  list1 += '<tr><td>来沪人员新增数：<span>1352</span></td><td></td></tr></table><div id="chart2" class="chart-content"></div></div></div></div>';

  var list2 = '';
  list2 += '<div class="chart type2"><div class="charts"><div class="chart_check"><span class="check-tab">与单位3年平均率比</span></div>';
  list2 += '<div class="charts-box"><table><tr class="firstRow"><td colspan="2">与单位3年平均率比</td></tr>';
  list2 += '<tr><td>首次来沪人员数：<span>687</span></td><td>占比：<span>17.89%</span></td></tr>';
  list2 += '<tr><td>来沪人员新增数：<span>1352</span></td><td></td></tr></table><div id="chart3" class="chart-content"></div></div></div>';

  switch(index1)
  {
    case 0: $("#firstChart").html(list1);draw(); break;
    case 1: $("#secondChart").html(list2);draw2(); break;
    case 2: $("#thirdChart").html(list2);draw2(); break;
    case 3: $("#fourthChart").html(list1);draw(); break;
    case 4: $("#fifthChart").html(list1);draw(); break;
    case 5: $("#sixthChart").html(list2);draw2(); break;
    case 6: $("#seventhChart").html(list2);draw2(); break;
    case 7: $("#eighthChart").html(list2);draw2(); break;
    case 8: $("#ninethChart").html(list2);draw2(); break;
    case 9: $("#tenthChart").html(list2);draw2(); break;
  }
  function draw() {
    var myChart1 = echarts.init(document.getElementById('chart1'));
    var myChart2 = echarts.init(document.getElementById('chart2'));
    myChart1.setOption(option);
    myChart2.setOption(option);
  }
  function draw2() {
    var myChart3 = echarts.init(document.getElementById('chart3'));
    myChart3.setOption(option);
  }
}