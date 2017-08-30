// 下拉菜单切换以及图表切换
var menu = function(){
	var index1 = parseInt(localStorage.getItem('form'));
	var dropcontent = localStorage.getItem('content');
	if ($content == null) {
		index1 = 0;
		ropcontent = "首次来沪人员占比统计表";
	}
	var chart = false;
	var $menulist = $(".dropdown-content").find('a');
	var $alltable = $("#wrapContent").find('.alltable').find('div');
	var $allcharts = $("#wrapContent").find('.allcharts').find('chart');
	$(".allcharts").hide();
	// 列表
	$menulist.click(function(){
		index1 = $(this).index();
		dropcontent = this.innerHTML;
		localStorage.setItem('form', index1);
		localStorage.setItem('content', dropcontent);
		$("#dropbtn-content").html(dropcontent);
		if (!chart) {
			$alltable.eq(index1).show().siblings().hide();
		} else {
			$allcharts.eq(index1).show().siblings().hide();
			$allcharts.eq(index1).show().siblings().empty();
			Chart(index1);
		}
	})
	// 图表切换
	$("#chart").click(function() {
		$("#chart").css("background-color","#1d86fd");
		$("#sheet").css("background-color","#62acff");
		$alltable.hide();
		$(".alltable").hide();
		$(".allcharts").show();
		$allcharts.eq(index1).show().siblings().hide();
		chart = true;
		Chart(index1);
	});
	$("#sheet").click(function() {
		$("#sheet").css("background-color","#1d86fd");
		$("#chart").css("background-color","#62acff");
		$(".allcharts").hide();
		$allcharts.hide();
		$(".alltable").show();
		$alltable.eq(index1).show().siblings().hide();
		chart = false;
	});
	// 弹框显示
	var index2 = 0;  // 获得当前派出所的序号
	var $sheetdata = $("#wrapContent").find('.alltable').find('.sheet-data');
	$sheetdata.click(function() {
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
// 生成表格内容
var Sheet = function() {
	// 展示表格内容
	var title = [
		'<tr><td class="one firstRow" rowspan="2">派出所</td><td class="two firstRow" colspan="3">首次来沪人员占比</td><td class="three firstRow" colspan="2">与分局平均率（46.11%）比</td><td class="four firstRow" colspan="3">与本单位3年平均率比</td><td class="five firstRow" rowspan="2">扣分</td></tr><tr><td class="second title-item">首次来沪人员数</td><td class="third title-item">来沪人员新增数</td><td class="fourth title-item">占比</td><td class="fifth title-item">环比</td><td class="sixth title-item">扣分情况</td><td class="seventh title-item">本单位三年平均率</td><td class="eighth title-item">环比</td><td class="nineth title-item">扣分情况</td></tr>',
		'<tr><td class="one firstRow">序号</td><td class="two firstRow">街镇</td><td class="three firstRow">居委</td><td class="four firstRow">姓名</td><td class="five firstRow">身份证号</td><td class="six firstRow">新增次数</td><td class="seven firstRow">注销次数</td><td class="eight firstRow">合计人数</td><td class="nine firstRow">扣分</td></tr>',
		'<tr><td class="one firstRow" rowspan="2">派出所</td><td class="two firstRow" rowspan="2">来沪人员总数</td><td class="three firstRow" colspan="4">来沪人员变动数</td><td class="four firstRow" rowspan="2">来沪人员变动数占总人员数比</td><td class="five firstRow" colspan="2">扣分情况</td></tr><tr><td class="fourth title-item">小计</td><td class="fifth title-item">新增数</td><td class="sixth title-item">变更数</td><td class="seventh title-item">注销数</td><td class="eighth title-item">与分局平均率（129.83%）比</td><td class="nineth title-item">扣分</td></tr>',
		'<tr><td class="one firstRow" rowspan="2">派出所</td><td class="two firstRow" colspan="3">来沪人员新增数占来沪人员总数比</td><td class="three firstRow" colspan="2">与分局平均率（7.69%）比</td><td class="four firstRow" colspan="3">与本单位3年平均率比</td><td class="five firstRow" rowspan="2">扣分</td></tr><tr><td class="second title-item">来沪人员新增数</td><td class="third title-item">来沪人员总数</td><td class="fourth title-item">占比</td><td class="fifth title-item">环比</td><td class="sixth title-item">扣分情况</td><td class="seventh title-item">本单位三年平均率</td><td class="eighth title-item">环比</td><td class="nineth title-item">扣分情况</td></tr>',
		'<tr><td class="one firstRow" rowspan="2">派出所</td><td class="two firstRow" colspan="3">来沪人员注销数占来沪人员总数比</td><td class="three firstRow" colspan="2">与分局平均率（7.69%）比</td><td class="four firstRow" colspan="3">与本单位3年平均率比</td><td class="five firstRow" rowspan="2">扣分</td></tr><tr><td class="second title-item">来沪人员注销数</td><td class="third title-item">来沪人员总数</td><td class="fourth title-item">占比</td><td class="fifth title-item">环比</td><td class="sixth title-item">扣分情况</td><td class="seventh title-item">本单位三年平均率</td><td class="eighth title-item">环比</td><td class="nineth title-item">扣分情况</td></tr>',
		'<tr><td class="one firstRow" rowspan="2">派出所</td><td class="two firstRow" rowspan="2">5月底无人居住房总数（间）</td><td class="three firstRow" colspan="3">6月整治数</td><td class="four firstRow" rowspan="2">6月底无人居住房总数（间）</td><td class="five firstRow" rowspan="2">无人居住房整治率</td><td class="six firstRow" rowspan="2">与分局平均率（21.61%）比</td><td class="seven firstRow" rowspan="2">扣分</td></tr><tr><td class="third title-item">小计</td><td class="fourth title-item">新增数</td><td class="fifth title-item">减少数</td></tr>',
		'<tr><td class="one firstRow" rowspan="2">派出所</td><td class="two firstRow" colspan="3">来沪人员问题数据</td><td class="three firstRow" rowspan="2">扣分</td></tr><tr><td class="second title-item">户籍地填写上海</td><td class="third title-item">14岁以下务工务农</td><td class="fourth title-item">小计</td></tr>',
		'<tr><td class="one firstRow" rowspan="3">派出所</td><td class="two firstRow" colspan="5">人口信息采集量</td><td class="three firstRow" colspan="4">工作量达标考核</td></tr><tr><td class="four secondRow" colspan="2">来沪人员</td><td class="five secondRow" rowspan="2">人户分离新增数</td><td class="six secondRow" rowspan="2">境外人员登记数</td><td class="seven secondRow" rowspan="2">小计</td><td class="eight secondRow" colspan="2">达标数</td><td class="nine secondRow" rowspan="2">是否达标</td><td class="ten secondRow" rowspan="2">扣分</td></tr><tr><td class="second title-item">新增数</td><td class="third title-item">注销数</td><td class="seventh title-item">上年度月平均实有人口数</td><td class="eighth title-item">×4%</td></tr>',
		'<tr><td class="one firstRow" rowspan="3">派出所</td><td class="two firstRow" colspan="5">人口信息采集量</td><td class="three firstRow" colspan="3">工作量达标考核</td><td class="eleven firstRow" rowspan="3">超出基数的新增来沪人员数</td><td class="ten firstRow" rowspan="3">加分</td></tr><tr><td class="four secondRow" colspan="2">来沪人员</td><td class="five secondRow" rowspan="2">人户分离新增数</td><td class="six secondRow" rowspan="2">境外人员登记数</td><td class="seven secondRow" rowspan="2">小计</td><td class="eight secondRow" colspan="2">达标数</td><td class="nine secondRow" rowspan="2">是否达标</td></tr><tr><td class="second title-item">新增数</td><td class="third title-item">注销数</td><td class="seventh title-item">上年度月平均实有人口数</td><td class="eighth title-item">×4%</td></tr>',
		'<tr><td class="one firstRow title-item">派出所</td><td class="two firstRow title-item">来沪人员照片异常数量</td><td class="three firstRow title-item">扣分</td></tr>'
	]
	// console.log(title[index1])
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
	// var fun1 = function () {
		var policeStation = ['新虹桥治安派出所','华阳路派出所','天山路派出所','江苏路派出所','新华路派出所','周家桥派出所','仙霞路派出所','虹桥路派出所','北新泾派出所','新泾派出所','程家桥派出所','临空经济园区治安派出所']
		
		$.ajax({
			type:'GET',
			url:'/assessment/trienniumAvg',
			// data:{username:$uname,password:$upas},
			success:function (respond) {
				var data = JSON.parse(respond).data;
				var arr= [];
				for(var i in data){
					var obj = {}
					obj = data[i]
					arr.push(obj);
				}
				var sheetContent = [[],[],[],[],[],[],[],[],[],[],[],[]]
				var police = [11,3,5,2,1,4,6,7,9,10,8,12]
				var total = [0,0,0,0,0];
				for(var i = 0;i < arr.length;i++)
				{
					console.log(arr[i]);
					sheetContent[i][0] = policeStation[i];
					sheetContent[i][1] = arr[i].firstComeNum;
					sheetContent[i][2] = arr[i].newAddNum;
					sheetContent[i][3] = (arr[i].proport*100).toFixed(2)+'%';
					sheetContent[i][4] = (arr[i].linkrelativeratio*100).toFixed(2)+'%';
					sheetContent[i][5] = arr[i].score;
					sheetContent[i][6] = (arr[i].trienniumAvg*100).toFixed(2)+'%';
					sheetContent[i][7] = (arr[i].trienniumLR*100).toFixed(2)+'%';
					sheetContent[i][8] = arr[i].mark;
					sheetContent[i][9] = arr[i].mark+arr[i].score;
					sheetContent[i][10] = police[i];
					total[0] += parseInt(sheetContent[i][1]);
					total[1] += parseInt(sheetContent[i][2]);
					total[3] += arr[i].trienniumAvg;
					total[4] += arr[i].trienniumLR;
				}
				total[2] = ((total[0]/total[1])*100).toFixed(2)+'%';
				total[3] = ((total[3]/12)*100).toFixed(2)+'%';
				total[4] = ((total[4]/12)*100).toFixed(2)+'%';
				sheetContent.sort(function(x,y){return x[10]-y[10]});
				console.log("test data");
				console.log(sheetContent);
				var list1 = '';
				for(var i = 0;i < sheetContent.length;i++)
				{
					if(i%2 == 0){
						list1 += '<tr class="sheet-data oddtr">';
					}else{
						list1 += '<tr class="sheet-data">';
					}
					for (var j = 0; j < sheetContent[i].length-1; j++) {
						if(j == 0){
							list1 += '<td class="first sheet-item">'+sheetContent[i][j]+'</td>'
						}else{
							list1 += '<td class="sheet-item">'+sheetContent[i][j]+'</td>'
						}
					}
					list1 += '</tr>'
				}
				list1 += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+total[0]+'</td><td class="sheet-item">'+total[1]+'</td><td class="sheet-item">'+total[2]+'</td><td class="sheet-item">/</td><td class="sheet-item">/</td><td class="sheet-item">'+total[3]+'</td><td class="sheet-item">'+total[4]+'</td><td class="sheet-item">/</td><td class="sheet-item">/</td></tr>';
				$("#firstSheet table").append(list1);
			}
		})
		
		// list1 += title[index1];
		// for (var i = 0; i < sheetContent.first.length; i++) {
		// 	if(i%2 == 0) {
		// 		list1 += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
		// 	}
		// 	else {
		// 		list1 += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
		// 	}
		// }
		// list1 += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
			// }
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
		var list2 = '';
		// list2 += title[index1];
		for (var j = 0; j < 4; j++) {
			for (var i = 0; i < sheetContent.first.length; i++) {
			list2 += '<tr><td class="first sheet-item">'+((i+1)+j*12)+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item sheet-data">'+sheetContent.fourth[i]+'</td><td class="sheet-item sheet-data">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td></tr>';
		 }
		}
		$("#tablelsw2").html(list2);
		tablePaging2();
		autoRowSpan(0,1);
	}
	var fun3 = function () {
		var list3 = '';
		// list3 += title[index1];
		for (var i = 0; i < sheetContent.first.length; i++) {
			if(i%2 == 0) {
				list3 += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
			}
			else {
				list3 += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
			}
		}
		list3 += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
		$("#thirdSheet table").append(list3);
	}
	var fun4 = function () {
		var list1 = '';
		// list1 += title[index1];
		for (var i = 0; i < sheetContent.first.length; i++) {
			if(i%2 == 0) {
				list1 += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
			}
			else {
				list1 += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
			}
		}
		list1 += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
		$("#fourthSheet table").append(list1);
	}
	var fun5 = function () {
		var list1 = '';
		// list1 += title[index1];
		for (var i = 0; i < sheetContent.first.length; i++) {
			if(i%2 == 0) {
				list1 += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
			}
			else {
				list1 += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
			}
		}
		list1 += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
		$("#fifthSheet table").append(list1);
	}
	var fun6 = function () {
		var list3 = '';
		// list3 += title[index1];
		for (var i = 0; i < sheetContent.first.length; i++) {
			if(i%2 == 0) {
				list3 += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
			}
			else {
				list3 += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
			}
		}
		list3 += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
		$("#sixthSheet table").append(list3);
	}
	var fun7 = function () {
		var list7 = '';
		// list7 += title[index1];
		for (var i = 0; i < sheetContent.first.length; i++) {
			if(i%2 == 0) {
				list7 += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td></tr>';
			}
			else {
				list7 += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td></tr>';
			}
		}
		list7 += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td></tr>';
		$("#seventhSheet table").append(list7);
	}
	var fun8 = function () {
		var list8 = '';
		// list8 += title[index1];
		for (var i = 0; i < sheetContent.first.length; i++) {
			if(i%2 == 0) {
				list8 += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
			}
			else {
				list8 += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
			}
		}
		list8 += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td></tr>';
		$("#eighthSheet table").append(list8);
	}
	var fun9 = function () {
		var list9 = '';
		// list9 += title[index1];
		for (var i = 0; i < sheetContent.first.length; i++) {
			if(i%2 == 0) {
				list9 += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td><td class="sheet-item">'+sheetContent.elventh[i]+'</td></tr>';
			}
			else {
				list9 += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td><td class="sheet-item">'+sheetContent.elventh[i]+'</td></tr>';
			}
		}
		list9 += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td><td class="sheet-item">'+sheetContent.elventh[i]+'</td></tr>';
		$("#ninethSheet table").append(list9);
	}
	var fun10 = function () {
		var list10 = '';
		// list10 += title[index1];
		for (var i = 0; i < sheetContent.first.length; i++) {
			if(i%2 == 0) {
				list10 += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td></tr>';
			}
			else {
				list10 += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td></tr>';
			}
		}
		list10 += '<tr class="sheet-data-total oddtr"><td class="first sheet-item">'+"总计"+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td></tr>';
		$("#tenthSheet table").append(list10);
	}
	// fun1();
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
// 工具：页面跳转+返回主页+退出当前用户
var toolTip = function() {
	// 页面跳转传值
	var index1 = parseInt(localStorage.getItem('form'));
	var $alltable = $("#wrapContent").find('.alltable').find('div');
	$alltable.eq(index1).show().siblings().hide();
	$content =localStorage.getItem('content');
	if ($content == null) {
		$("#dropbtn-content").html("首次来沪人员占比统计表")
	}else{
		$("#dropbtn-content").html($content);
	}
	// 返回主页
	$("#backIndex").click(function(){
		window.location.href="/home";
	});
	// 退出当前用户
	var $showquit = $("#wrapHead").find('.userinfo').find('.userimg');
	var $quit = $("#wrapHead").find('.userinfo').find(".quit");
	var $showquit_flag = true;
	$showquit.on('click',function(){
		if($showquit_flag){
			$quit.show();
			$showquit_flag = false;
		}else{
			$quit.hide();
			$showquit_flag = true;
		}
	})
	$quit.on('click',function(){
		window.location.href='/login'
	});
}
var autoRowSpan = function(row,col) {
  var tb = document.getElementById('tablelsw2')
  var lastValue="";
  var value="";
  var pos=1;
  for(var i=row;i<tb.rows.length;i++){
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
var Main = function() {
	toolTip();
	Sheet();
	menu();
}
Main();