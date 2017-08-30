// 生成表格内容
var Sheet = function() {
  var policeStation = ['新虹桥治安派出所','华阳路派出所','天山路派出所','江苏路派出所','新华路派出所','周家桥派出所','仙霞路派出所','虹桥路派出所','北新泾派出所','新泾派出所','程家桥派出所','临空经济园区治安派出所']
  var police = [11,3,5,2,1,4,6,7,9,10,8,12]
  var tableTitle = [
    '<tr><td class="firstRow" rowspan="2">派出所</td><td class="firstRow" colspan="3">首次来沪人员占比</td><td class="firstRow" colspan="2">与分局平均率（46.11%）比</td><td class="firstRow" colspan="3">与本单位3年平均率比</td><td class="firstRow" rowspan="2">扣分</td></tr><tr><td class="title-item">首次来沪人员数</td><td class="title-item">来沪人员新增数</td><td class="title-item">占比</td><td class="title-item">环比</td><td class="title-item">扣分情况</td><td class="title-item">本单位三年平均率</td><td class="title-item">环比</td><td class="title-item">扣分情况</td></tr>',
    '<tr class="table-title"><td class="firstRow">序号</td><td class="firstRow">街镇</td><td class="firstRow">居委</td><td class="firstRow">姓名</td><td class="firstRow">身份证号</td><td class="firstRow">新增次数</td><td class="firstRow">注销次数</td><td class="firstRow">合计人数</td><td class="firstRow">扣分</td></tr>',
    '<tr><td class="firstRow" rowspan="2">派出所</td><td class="firstRow" rowspan="2">来沪人员总数</td><td class="firstRow" colspan="4">来沪人员变动数</td><td class="firstRow" rowspan="2">来沪人员变动数占总人员数比</td><td class="firstRow" colspan="2">扣分情况</td></tr><tr><td class="title-item">小计</td><td class="title-item">新增数</td><td class="title-item">变更数</td><td class="title-item">注销数</td><td class="title-item">与分局平均率（129.83%）比</td><td class="title-item">扣分</td></tr>',
    '<tr><td class="firstRow" rowspan="2">派出所</td><td class="firstRow" colspan="3">来沪人员新增数占来沪人员总数比</td><td class="firstRow" colspan="2">与分局平均率（7.69%）比</td><td class="firstRow" colspan="3">与本单位3年平均率比</td><td class="firstRow" rowspan="2">扣分</td></tr><tr><td class="title-item">来沪人员新增数</td><td class="title-item">来沪人员总数</td><td class="title-item">占比</td><td class="title-item">环比</td><td class="title-item">扣分情况</td><td class="title-item">本单位三年平均率</td><td class="title-item">环比</td><td class="title-item">扣分情况</td></tr>',
    '<tr><td class="firstRow" rowspan="2">派出所</td><td class="firstRow" colspan="3">来沪人员注销数占来沪人员总数比</td><td class="firstRow" colspan="2">与分局平均率（7.69%）比</td><td class="firstRow" colspan="3">与本单位3年平均率比</td><td class="firstRow" rowspan="2">扣分</td></tr><tr><td class="title-item">来沪人员注销数</td><td class="title-item">来沪人员总数</td><td class="title-item">占比</td><td class="title-item">环比</td><td class="title-item">扣分情况</td><td class="title-item">本单位三年平均率</td><td class="title-item">环比</td><td class="title-item">扣分情况</td></tr>',
    '<tr><td class="firstRow" rowspan="2">派出所</td><td class="firstRow" rowspan="2">5月底无人居住房总数（间）</td><td class="firstRow" colspan="3">6月整治数</td><td class="firstRow" rowspan="2">6月底无人居住房总数（间）</td><td class="firstRow" rowspan="2">无人居住房整治率</td><td class="firstRow" rowspan="2">与分局平均率（21.61%）比</td><td class="firstRow" rowspan="2">扣分</td></tr><tr><td class="title-item">小计</td><td class="title-item">新增数</td><td class="title-item">减少数</td></tr>',
    '<tr><td class="firstRow" rowspan="2">派出所</td><td class="firstRow" colspan="3">来沪人员问题数据</td><td class="firstRow" rowspan="2">扣分</td></tr><tr><td class="title-item">户籍地填写上海</td><td class="title-item">14岁以下务工务农</td><td class="title-item">小计</td></tr>',
    '<tr><td class="firstRow" rowspan="3">派出所</td><td class="firstRow" colspan="5">人口信息采集量</td><td class="firstRow" colspan="4">工作量达标考核</td></tr><tr><td class="title-item" colspan="2">来沪人员</td><td class="title-item" rowspan="2">人户分离新增数</td><td class="title-item" rowspan="2">境外人员登记数</td><td class="title-item" rowspan="2">小计</td><td class="title-item" colspan="2">达标数</td><td class="title-item" rowspan="2">是否达标</td><td class="title-item" rowspan="2">扣分</td></tr><tr><td class="title-item">新增数</td><td class="title-item">注销数</td><td class="title-item">上年度月平均实有人口数</td><td class="title-item">X4%</td></tr>',
    '<tr><td class="firstRow" rowspan="3">派出所</td><td class="firstRow" colspan="5">人口信息采集量</td><td class="firstRow" colspan="3">工作量达标考核</td><td class="firstRow" rowspan="3">超出基数的新增来沪人员数</td><td class="firstRow" rowspan="3">加分</td></tr><tr><td class="title-item" colspan="2">来沪人员</td><td class="title-item" rowspan="2">人户分离新增数</td><td class="title-item" rowspan="2">境外人员登记数</td><td class="title-item" rowspan="2">小计</td><td class="title-item" colspan="2">达标数</td><td class="title-item" rowspan="2">是否达标</td></tr><tr><td class="title-item">新增数</td><td class="title-item">注销数</td><td class="title-item">上年度月平均实有人口数</td><td class="title-item">X4%</td></tr>',
    '<tr><td class="firstRow">派出所</td><td class="firstRow">来沪人员照片异常数量</td><td class="firstRow">扣分</td></tr>'
  ]
  var sheetContent = {
    "first" : ["新华路派出所","江苏路派出所","华阳路派出所","周家桥派出所","天山路派出所","仙霞路派出所","虹桥路派出所","程家桥派出所","北新泾派出所","新泾派出所","新虹桥治安派出所","临空经济园区治安派出所"],
    "second" : [687,687,687,687,687,687,687,687,687,687,687,687],
    "third" : [1352,1352,1352,1352,1352,1352,1352,1352,1352,1352,1352,1352],
    "fourth" : ["50.81%","50.81%","50.81%","50.81%","50.81%","50.81%","50.81%","50.81%","50.81%","50.81%","50.81%","50.81%"],
    "fifth" : ["10.20%","10.20%","10.20%","10.20%","10.20%","10.20%","10.20%","10.20%","10.20%","10.20%","10.20%","10.20%"],
    "sixth" : [0,0,0,0,0,0,0,0,0,0,0,0],
    "seventh" : ["28.16%","28.16%","28.16%","28.16%","28.16%","28.16%","28.16%","28.16%","28.16%","28.16%","28.16%","28.16%"],
    "eighth" : ["80.45%","80.45%","80.45%","80.45%","80.45%","80.45%","80.45%","80.45%","80.45%","80.45%","80.45%","80.45%"],
    "nineth" : [0,0,0,0,0,0,0,0,0,0,0,0],
    "tenth" : [0,0,0,0,0,0,0,0,0,0,0,0],
    "elventh" : [0,0,0,0,0,0,0,0,0,0,0,0],
    "twelfth" : [0,0,0,0,0,0,0,0,0,0,0,0]
  }
  var fun1 = function () {
    var list = '';
    list += tableTitle[0];
    for (var i = 0; i < sheetContent.first.length; i++) {
      if(i%2 == 0) {
        list += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
      else {
        list += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
    }
    list += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
    $("#firstSheet table").append(list);
    // $.ajax({
    //   type:'GET',
    //   url:'/assessment/trienniumAvg',
    //   success:function (respond) {
    //     var data = JSON.parse(respond).data;
    //     var arr= [];
    //     for(var i in data){
    //       var obj = {}
    //       obj = data[i]
    //       arr.push(obj);
    //     }
    //     var sheetContent = [[],[],[],[],[],[],[],[],[],[],[],[]]
    //     var total = [0,0,0,0,0];
    //     for(var i = 0;i < arr.length;i++)
    //     {
    //       sheetContent[i][0] = policeStation[i];
    //       sheetContent[i][1] = arr[i].firstComeNum;
    //       sheetContent[i][2] = arr[i].newAddNum;
    //       sheetContent[i][3] = (arr[i].proport*100).toFixed(2)+'%';
    //       sheetContent[i][4] = (arr[i].linkrelativeratio*100).toFixed(2)+'%';
    //       sheetContent[i][5] = arr[i].score;
    //       sheetContent[i][6] = (arr[i].trienniumAvg*100).toFixed(2)+'%';
    //       sheetContent[i][7] = (arr[i].trienniumLR*100).toFixed(2)+'%';
    //       sheetContent[i][8] = arr[i].mark;
    //       sheetContent[i][9] = arr[i].mark+arr[i].score;
    //       sheetContent[i][10] = police[i];
    //       total[0] += parseInt(sheetContent[i][1]);
    //       total[1] += parseInt(sheetContent[i][2]);
    //       total[3] += arr[i].trienniumAvg;
    //       total[4] += arr[i].trienniumLR;
    //     }
    //     total[2] = ((total[0]/total[1])*100).toFixed(2)+'%';
    //     total[3] = ((total[3]/12)*100).toFixed(2)+'%';
    //     total[4] = ((total[4]/12)*100).toFixed(2)+'%';
    //     sheetContent.sort(function(x,y){return x[10]-y[10]});
    //     var list = '';
    //     list += tableTitle[0];
    //     for(var i = 0;i < sheetContent.length;i++)
    //     {
    //       if(i%2 == 0){
    //         list += '<tr class="sheet-data oddtr">';
    //       }else{
    //         list += '<tr class="sheet-data">';
    //       }
    //       for (var j = 0; j < sheetContent[i].length-1; j++) {
    //         if(j == 0){
    //           list += '<td class="first sheet-item">'+sheetContent[i][j]+'</td>'
    //         }else{
    //           list += '<td class="sheet-item">'+sheetContent[i][j]+'</td>'
    //         }
    //       }
    //       list += '</tr>'
    //     }
    //     list += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+total[0]+'</td><td class="sheet-item">'+total[1]+'</td><td class="sheet-item">'+total[2]+'</td><td class="sheet-item">/</td><td class="sheet-item">/</td><td class="sheet-item">'+total[3]+'</td><td class="sheet-item">'+total[4]+'</td><td class="sheet-item">/</td><td class="sheet-item">/</td></tr>';
    //     $("#firstSheet table").append(list);
    //     popup();
    //   }
    // })
  }
  var fun2 = function () {
    var sheetContent = {
      "first" : ["新华路派出所","江苏路派出所","华阳路派出所","周家桥派出所","天山路派出所","仙霞路派出所","虹桥路派出所","程家桥派出所","北新泾派出所","新泾派出所","新虹桥治安派出所","临空经济园区治安派出所"],
      "second" : ["华阳街道","华阳街道","华阳街道","仙林街道","仙林街道","仙林街道","仙林街道","江湾街道","江湾街道","江湾街道","江湾街道","江湾街道"],
      "third" : ["新华居委会","江林居委会","江林居委会","三新居委会","三新居委会","三新居委会","五华居委会","江湾居委会","江湾居委会","科教居委会","科教居委会","科教居委会"],
      "fourth" : ["张伟","李华","张林生","王大伟","林深","黄江","陈建国","杨丽萍","孟建林","刘佳妮","王华","张伟"],
      "fifth" : ["321084198207093420","282343198207093420","323433198207093420","421084198207093420","371084198207093420","321084198207093420","321084198207093420","321084198207093420","321084198207093420","321084198207093420","321084198207093420","321084198207093420"],
      "sixth" : [3,1,2,3,3,3,3,2,3,3,3,3],
      "seventh" : [4,2,3,4,4,4,4,3,4,4,4,4],
      "eighth" : [12,12,12,23,23,23,23,34,34,34,34,34],
      "nineth" : [0,0,0,0,0,0,0,0,0,0,0,0]
    }
    var list = '';
    // $("#secondSheet table").append(tableTitle[1]);
    for (var j = 0; j < 4; j++) {
      for (var i = 0; i < sheetContent.first.length; i++) {
      list += '<tr><td class="first sheet-item">'+((i+1)+j*12)+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item sheet-data">'+sheetContent.fourth[i]+'</td><td class="sheet-item sheet-data">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td></tr>';
     }
    }
    $("#tablelsw2").html(list);
    tablePaging2();
    autoRowSpan(0,1);
    popup();
  }
  var fun3 = function () {
    var list = '';
    list += tableTitle[2];
    for (var i = 0; i < sheetContent.first.length; i++) {
      if(i%2 == 0) {
        list += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
      else {
        list += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
    }
    list += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
    $("#thirdSheet table").append(list);
    popup();
  }
  var fun4 = function () {
    var list = '';
    list += tableTitle[3];
    for (var i = 0; i < sheetContent.first.length; i++) {
      if(i%2 == 0) {
        list += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
      else {
        list += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
    }
    list += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
    $("#fourthSheet table").append(list);
    popup();
  }
  var fun5 = function () {
    var list = '';
    list += tableTitle[4];
    for (var i = 0; i < sheetContent.first.length; i++) {
      if(i%2 == 0) {
        list += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
      else {
        list += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
    }
    list += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
    $("#fifthSheet table").append(list);
    popup();
  }
  var fun6 = function () {
    var list = '';
    list += tableTitle[5];
    for (var i = 0; i < sheetContent.first.length; i++) {
      if(i%2 == 0) {
        list += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
      else {
        list += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
    }
    list += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
    $("#sixthSheet table").append(list);
    popup();
  }
  var fun7 = function () {
    var list = '';
    list += tableTitle[6];
    for (var i = 0; i < sheetContent.first.length; i++) {
      if(i%2 == 0) {
        list += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td></tr>';
      }
      else {
        list += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td></tr>';
      }
    }
    list += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td></tr>';
    $("#seventhSheet table").append(list);
    popup();
  }
  var fun8 = function () {
    var list = '';
    list += tableTitle[7];
    for (var i = 0; i < sheetContent.first.length; i++) {
      if(i%2 == 0) {
        list += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
      else {
        list += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
      }
    }
    list += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
    $("#eighthSheet table").append(list);
    popup();
  }
  var fun9 = function () {
    var list = '';
    list += tableTitle[8];
    for (var i = 0; i < sheetContent.first.length; i++) {
      if(i%2 == 0) {
        list += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td><td class="sheet-item">'+sheetContent.elventh[i]+'</td></tr>';
      }
      else {
        list += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td><td class="sheet-item">'+sheetContent.elventh[i]+'</td></tr>';
      }
    }
    list += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td><td class="sheet-item">'+sheetContent.elventh[i]+'</td></tr>';
    $("#ninethSheet table").append(list);
    popup();
  }
  var fun10 = function () {
    var list = '';
    list += tableTitle[9];
    for (var i = 0; i < sheetContent.first.length; i++) {
      if(i%2 == 0) {
        list += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td></tr>';
      }
      else {
        list += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td></tr>';
      }
    }
    list += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td></tr>';
    $("#tenthSheet table").append(list);
    popup();
  }
  fun1();
  fun2();
  fun3();
  fun4();
  fun5();
  fun6();
  fun7();
  fun8();
  fun9();
  fun10();  
}
// 表2的翻页功能
var tablePaging2 = function() {
  var theTable = document.getElementById("tablelsw2");
  var totalPage = document.getElementById("spanTotalPage2");
  var pageNum = document.getElementById("spanPageNum2");

  var spanPre = document.getElementById("spanPre2");
  var spanNext = document.getElementById("spanNext2");
  var spanFirst = document.getElementById("spanFirst2");
  var spanLast = document.getElementById("spanLast2");

  var numberRowsInTable = theTable.rows.length;
  var pageSize = 12;
  var page = 1;

  //下一页
  tablePaging.next = function(){
    tablePaging.hideTable();
    currentRow = pageSize * page;
    maxRow = currentRow + pageSize;
    if ( maxRow > numberRowsInTable ) maxRow = numberRowsInTable;
    for ( var i = currentRow; i< maxRow; i++ ){
      theTable.rows[i].style.display = '';
    }
    page++;
    if ( maxRow == numberRowsInTable ) { tablePaging.nextText(); tablePaging.lastText(); }
    tablePaging.showPage();
    tablePaging.preLink();
    tablePaging.firstLink();
  }

  //上一页
  tablePaging.pre = function(){
    tablePaging.hideTable();
    page--;
    currentRow = pageSize * page;
    maxRow = currentRow - pageSize;
    if ( currentRow > numberRowsInTable ) currentRow = numberRowsInTable;
    for ( var i = maxRow; i< currentRow; i++ ){
      theTable.rows[i].style.display = '';
    }
    if ( maxRow == 0 ){ tablePaging.preText(); tablePaging.firstText(); }
    tablePaging.showPage();
    tablePaging.nextLink();
    tablePaging.lastLink();
  }

  //首页
  tablePaging.first = function(){
    tablePaging.hideTable();
    page = 1;
    for ( var i = 0; i<pageSize; i++ ){
      theTable.rows[i].style.display = '';
    }
    tablePaging.showPage();
    tablePaging.preText();
    tablePaging.nextLink();
    tablePaging.lastLink();
    tablePaging.firstText();
  }

  //尾页
  tablePaging.last = function(){
    tablePaging.hideTable();
    page = tablePaging.pageCount();
    currentRow = pageSize * (page - 1);
    for ( var i = currentRow; i<numberRowsInTable; i++ ){
      theTable.rows[i].style.display = '';
    }
    tablePaging.showPage();
    tablePaging.preLink();
    tablePaging.nextText();
    tablePaging.firstLink();
    tablePaging.lastText();
  }

  tablePaging.hideTable = function(){
    for ( var i = 0; i<numberRowsInTable; i++ ){
      theTable.rows[i].style.display = 'none';
    }
  }

  tablePaging.showPage = function(){
    pageNum.innerHTML = page;
  }

  //总共页数
  tablePaging.pageCount = function(){
    var count = 0;
    if ( numberRowsInTable%pageSize != 0 ) count = 1;
    return parseInt(numberRowsInTable/pageSize) + count;
  }

  //显示链接
  tablePaging.preLink = function(){ spanPre.innerHTML = "<a href='javascript:tablePaging.pre();'>上一页</a>"; }
  tablePaging.preText = function(){ spanPre.innerHTML = "上一页"; }
  tablePaging.nextLink = function(){ spanNext.innerHTML = "<a href='javascript:tablePaging.next();'>下一页</a>"; }
  tablePaging.nextText = function(){ spanNext.innerHTML = "下一页"; }
  tablePaging.firstLink = function(){ spanFirst.innerHTML = "<a href='javascript:tablePaging.first();'>首页</a>"; }
  tablePaging.firstText = function(){ spanFirst.innerHTML = "首页"; }
  tablePaging.lastLink = function(){ spanLast.innerHTML = "<a href='javascript:tablePaging.last();'>尾页</a>"; }
  tablePaging.lastText = function(){ spanLast.innerHTML = "尾页"; }

  //隐藏表格
  tablePaging.hide = function(){
    for ( var i = pageSize; i<numberRowsInTable; i++ ){
      theTable.rows[i].style.display = 'none';
    }
    totalPage.innerHTML = tablePaging.pageCount();
    pageNum.innerHTML = '1';
    tablePaging.nextLink();
    tablePaging.lastLink();
  }
  tablePaging.hide();
}
// 表2的自动合并单元格功能
var autoRowSpan = function(row,col) {
  var tb = document.getElementById('tablelsw2')
  var lastValue="";
  var value="";
  var pos=1;
  for(var i=row;i<tb.rows.length;i++){
    // 翻页之后重新计算
    if(i%12==0){
      value = "";
      lastValue = "";
    }
    value = tb.rows[i].cells[col].innerText;
    if(lastValue == value){
      tb.rows[i].deleteCell(col+7);
      tb.rows[i].deleteCell(col+6);
      tb.rows[i].deleteCell(col);
      tb.rows[i-pos].cells[col+6].innerText = pos+1;
      tb.rows[i-pos].cells[col+7].rowSpan = tb.rows[i-pos].cells[col].rowSpan+1;
      tb.rows[i-pos].cells[col+6].rowSpan = tb.rows[i-pos].cells[col].rowSpan+1;
      tb.rows[i-pos].cells[col].rowSpan = tb.rows[i-pos].cells[col].rowSpan+1;
      pos++;
    }else{
      lastValue = value;
      pos = 1;
      tb.rows[i].cells[col+6].innerText = pos;
    }
  }
}