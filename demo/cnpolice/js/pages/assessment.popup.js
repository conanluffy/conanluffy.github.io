// 弹框显示函数
var popup = function () {
  // 弹框显示
  var index2 = 0;  // 获得当前派出所的序号
  var sheetdata = $("#wrapContent").find('.alltable').find('.sheet-data');
  sheetdata.click(function() {
    index2 = $(this).index()-2;
    if(index1 == 1||index1 == 9){
      index2 += 1;
    }else if(index1 == 7||index1 == 8){
      index2 -= 1;
    }
    creatContent(index1,index2,dropcontent);
    $(".popup").show();
  });
  $("#close-popup").click(function() {
    $(".popup").hide();
  });
  $(".popup").click(function() {
    $(".popup").hide();
  })
  $(".popup-content").click(function(e) {
    e.stopPropagation();
  })
}
// 生成弹框内容
var creatContent = function(index1,index2,dropcontent) {
  var tabletitle = [
    '<td>序号</td><td>居委会</td><td>首次来沪人员数</td><td>新增来沪人员数</td><td>占比</td><td>扣分</td>',
    '<td>序号</td><td>街道</td><td>居委会</td><td>姓名</td><td>身份证号</td><td>人员分类</td><td>居住地址</td><td>操作类型</td><td>操作时间</td>',
    '<td>序号</td><td>居委会</td><td>来沪人员总数</td><td>新增数</td><td>变更数</td><td>注销数</td>',
    '<td>序号</td><td>居委会</td><td>来沪人员新增数</td><td>来沪人员总数</td><td>占比</td>',
    '<td>序号</td><td>居委会</td><td>来沪人员注销数</td><td>来沪人员总数</td><td>占比</td>',
    '<td>序号</td><td>居委会</td><td>5月底无人居住房总数（间）</td><td>新增数</td><td>减少数</td><td>6月底无人居住房总数（间）</td><td>无人居住房整治率</td>',
    '<td>序号</td><td>居委会</td><td>户籍地填写上海</td><td>14岁以下务工务农</td><td>小计</td>',
    '<td>序号</td><td>居委会</td><td>新增数</td><td>注销数</td><td>人户分离新增数</td><td>境外人员登记数</td><td>小计</td>',
    '<td>序号</td><td>居委会</td><td>新增数</td><td>注销数</td><td>人户分离新增数</td><td>境外人员登记数</td><td>小计</td>',
    '<td>序号</td><td>居委会</td><td>来沪人员照片异常数量</td><td>扣分</td>'
  ]
  var policeStation = ["新华路派出所","江苏路派出所","华阳路派出所","周家桥派出所","天山路派出所","仙霞路派出所","虹桥路派出所","程家桥派出所","北新泾派出所","新泾派出所","新虹桥治安派出所","临空经济园区治安派出所"]
  $("div.popup-content .title-content").html(policeStation[index2]+' - '+dropcontent);
  $("div.popup-content .table-title").html(tabletitle[index1]);
  var content = [
    ['26','43','50.81%','0'],
    ['张伟','321084198208233420','来沪人员','武夷路450弄3号402室','新增','20170305'],
    ['534','43','343','172'],
    ['43','43','32.2%'],
    ['43','43','32.2%'],
    ['143','43','100','100','43.2%'],
    ['23','37','50'],
    ['22','33','15','25','90'],
    ['22','33','15','25','90'],
    ['8','0']
  ];
  var list = '';
  for(var i = 0; i <= 97; i++)
  {
    if(index1 == 1)
    {
      list += '<tr><td>'+(i+1)+'</td><td>'+policeStation[index2]+'</td><td>新华居委会</td>'
    }else{
      list += '<tr><td>'+(i+1)+'</td><td>新华居委会</td>'
    }
    for (var j = 0; j < content[index1].length; j++) {
      list += '<td>'+content[index1][j]+'</td>'
    }
    list += '</tr>'
  }
  $('#tablelsw').html(list);
  tablePaging();
}
// 弹框列表翻页
var tablePaging = function() {
  var theTable = document.getElementById("tablelsw");
  var totalPage = document.getElementById("spanTotalPage");
  var pageNum = document.getElementById("spanPageNum");

  var spanPre = document.getElementById("spanPre");
  var spanNext = document.getElementById("spanNext");
  var spanFirst = document.getElementById("spanFirst");
  var spanLast = document.getElementById("spanLast");

  var numberRowsInTable = theTable.rows.length;
  var pageSize = 10;
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