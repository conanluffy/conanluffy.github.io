// 全局变量
var index1 = parseInt(localStorage.getItem('form'));  // 当前表格序号
var dropcontent = localStorage.getItem('content');  // 当前表格题目
if (dropcontent == null) {
	index1 = 0;
	dropcontent = "1、首次来沪人员占比";
}
var alltable = $("#wrapContent").find('.alltable').find('div');
var allcharts = $("#wrapContent").find('.allcharts').find('chart');
// 下拉菜单切换以及图表切换
var menu = function(){
	var chart = false;
	var menulist = $(".dropdown-content").find('a');
	$(".allcharts").hide();
	// 列表
	menulist.click(function(){
		index1 = $(this).index();
		dropcontent = this.innerHTML;
		localStorage.setItem('form', index1);
		localStorage.setItem('content', dropcontent);
		$("#dropbtn-content").html(dropcontent);
		if (!chart) {
			alltable.eq(index1).show().siblings().hide();
		} else {
			allcharts.eq(index1).show().siblings().hide();
			allcharts.eq(index1).show().siblings().empty();
			Chart(index1);
		}
	})
	// 图表切换
	$("#chart").click(function() {
		$("#chart").css("background-color","#1d86fd");
		$("#sheet").css("background-color","#62acff");
		$(".alltable").hide();
		$(".allcharts").show();
		allcharts.eq(index1).show().siblings().hide();
		chart = true;
		Chart(index1);
	});
	$("#sheet").click(function() {
		$("#sheet").css("background-color","#1d86fd");
		$("#chart").css("background-color","#62acff");
		$(".allcharts").hide();
		$(".alltable").show();
		alltable.eq(index1).show().siblings().hide();
		chart = false;
	});
}
// 工具：页面跳转+返回主页+退出当前用户
var toolTip = function() {
	// 页面跳转传值
	alltable.eq(index1).show().siblings().hide();
	$("#dropbtn-content").html(dropcontent);
	// 返回主页
	$("#backIndex").click(function(){
		window.location.href="../pages/home.html";
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
		window.location.href='../pages/login.html'
	});
}
toolTip();
Sheet();
menu();