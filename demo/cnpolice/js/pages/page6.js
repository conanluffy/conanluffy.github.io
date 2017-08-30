
var $wraper= $("#wraper");
var $wrap = $wraper.find('.wrap');
var $top_content=$wraper.find(".top_content");

//loading
//var $loading = $top_content.find('.loading');

//返回
var $back = $top_content.find('.title').find('.back');
$back.on('click',function(){
	window.history.back();
})

//下拉菜单
var $downmenu=$top_content.find('.downmenu');
var $menu_title = $top_content.find(".data_sheet").find(".title").find('.title_celec');
var downmenuflag = true;

$(document).on('click',function(){
	$downmenu.animate({height:0},200);
	downmenuflag = true;
})

function menuanimate(){
	
	if(downmenuflag){
		$downmenu.animate({height:"69.4%"},200);
		downmenuflag = false;

	}else{
		$downmenu.animate({height:0},200);
		downmenuflag = true;
	}
}

$menu_title.on("click",function(e){
	e.stopPropagation();
	menuanimate();
});



//鼠标进入每一个li
var $menulist = $downmenu.find('li');
$menulist.on("mouseenter",function(){
	$(this).addClass("active");
})
$menulist.on("mouseleave",function(){
	$(this).removeClass("active");
})


//选择考核内容
var $alltable = $top_content.find('.data_sheet').find('.alltable');
var $alltables = $top_content.find('.data_sheet').find('.alltable').find('table');

//考核内容
var $check_content = $top_content.find('.data_sheet').find('.check');
//派出所
var $police = $top_content.find('.data_sheet').find('.title_celec').find('.police');

//echarts 
var func_arr = [firstcomeRate,repeatAddanddel,changeRate,addRate,delRate,houseControl,
                  photoQuality,unusualData,informationCollection,addAbsolute];
                  
var $chart1 = $top_content.find('.allcharts').find('#sheet1');

var $chart2 = $top_content.find('.allcharts').find('#sheet2');

var $chart3 = $top_content.find('.allcharts').find('#sheet3'); 

//echarts 和  table 切换

var $allchart = $top_content.find('.allcharts');

var $allchart_type1 = $allchart.find('.type1');
var $allchart_type2 = $allchart.find('.type2');

var $back = $top_content.find('.title').find('.back');

var $showchart = $top_content.find('.title').find('.showchart');

var $showsheet = $top_content.find('.showsheet');

var $checktab = $top_content.find('.charts').find('.check_tab');
//记录第几条数据
var $index=0;
//目前展示类别
var $type = 'sheet';

//进入页面根据用户选择请求后台
function openShow(){
	var $msg = JSON.parse(window.localStorage.getItem('msg'));
	var $msg_police = $msg.police;
	$index = $msg.index;
	$police.html($msg_police);
	$check_content.html($msg.check);
	$alltables.eq($index).show().siblings().hide();
	
}
openShow();

$menulist.on('click',function(e){	
	if($type=='sheet'){
		$index = $(this).index();
		var $value = $(this).find('p').html();
		$check_content.html($value);
		$alltables.eq($index).show().siblings().hide();
		menuanimate();
	}else{
		$index = $(this).index();
		var $value = $(this).find('p').html();
		$check_content.html($value);
		menuanimate();
		showType();
	}
})

$showchart.on('click',function(){
	$(this).addClass('active');
	$showsheet.removeClass('active');
	$alltable.hide();
	$allchart.show();
	showType();
	$type = 'chart';
	
})

$showsheet.on('click',function(){
	$(this).addClass('active');
	$showchart.removeClass('active');
	$allchart.hide();
	$alltable.show();
	$alltables.eq($index).show().siblings().hide();
	$type = 'sheet';	
})


function showType(){

	if($index<5){
		if($index == 1){
			$allchart_type2.show();
			$allchart_type1.hide();
			$chart3.html('');
		}else{
			$allchart_type1.show();
			$allchart_type2.hide();
			$chart1.html('');
			$chart2.html('');
		}
		
	}else{
		$allchart_type2.show();
		$allchart_type1.hide();
		$chart3.html('');
	}

	func_arr[$index]();
}


//退出当前用户
var $showquit = $wrap.find('.userinfor').find('.userimg');
var $quit = $wrap.find('.userinfor').find(".quit");
var $tuichu = $quit.find('.tuichu');
//var $showquit_flag = true;

$showquit.on('click',function(e){
//	if($showquit_flag){
//		$quit.show();
//		$showquit_flag = false;
//	}else{
//		$quit.hide();
//		$showquit_flag = true;
//	}
	e.stopPropagation();
	$quit.show();
})
$("body").on('click',function(){
	$quit.hide();
})

$tuichu.on('click',function(){
	
	window.location.href='../pages/login.html'
});

//弹窗
var $pop_ups = $wrap.find('.pop_ups');

var $pops = $pop_ups.find('.pops');

var $poptitle = $pops.find('.poptitle');

var $close = $pops.find('.close');
 
//弹出弹窗



//首次来沪人员占比
var $frist_trs = $alltable.find('.fristcome_proportion').find('.trs');
var $frist_pop = $pop_ups.find('.frist_pop');
$frist_trs.on('click',function(){

	$pop_ups.show();
	$frist_pop.show().siblings().hide();
})

//反复新增注销3次以上名单
var $repeattable = $alltable.find('.repeat_addanddel');
var $repeat_trs = $repeattable.find('.trs').find('td:nth-of-type(5)');

var $repeat_pop = $pop_ups.find('.repeat_pop');
$repeat_trs.on('click',function(){
	$pop_ups.show();
	$repeat_pop.show().siblings().hide();
})

//反复新增注销分页
pageNation($repeattable);
//反复新增注销分页
var $repeatpop_table = $repeat_pop.find('table');
var $repeatpop_pagenation = $repeat_pop.find('.pagination')
popPageNation($repeatpop_table,$repeatpop_pagenation);


//来沪人员变动数占来沪人员总数比
var $change_trs = $alltable.find('.change_rate').find('.trs');
var $change_pop = $pop_ups.find('.change_pop');
$change_trs.on('click',function(){
	$pop_ups.show();
	$change_pop.show().siblings().hide();
})

//来沪人员新增数占来沪人员总数比
var $add_trs =  $alltable.find('.add_rate').find('.trs');
var $add_pop = $pop_ups.find('.add_pop');
$add_trs.on('click',function(){
	$pop_ups.show();
	$add_pop.show().siblings().hide();
})

//来沪人员注销数占来沪人员总数比
var $del_trs =  $alltable.find('.del_rate').find('.trs');
var $del_pop = $pop_ups.find('.del_pop');
$del_trs.on('click',function(){
	$pop_ups.show();
	$del_pop.show().siblings().hide();
})

//无人住房整治率
var $house_trs =  $alltable.find('.house_control').find('.trs');
var $house_pop = $pop_ups.find('.house_pop');
$house_trs.on('click',function(){
	$pop_ups.show();
	$house_pop.show().siblings().hide();
})

//来沪人员照片质量
//var $pic_trs = $alltable.find('.photo_quality').find('.trs');
//var $pic_pop = $pop_ups.find('.pic_pop');
//$pic_trs.on('click',function(){
//	$pop_ups.show();
//	$pic_pop.show().siblings().hide();
//})

//异常数据
var $unusual_trs = $alltable.find('.unusual_data').find('.trs');
var $unusual_pop = $pop_ups.find('.unusual_pop');
$unusual_trs.on('click',function(){
	$pop_ups.show();
	$unusual_pop.show().siblings().hide();
})

//人口信息采集量达标
var $colle_trs = $alltable.find('.information_collection').find('.trs');
var $colle_pop = $pop_ups.find('.colle_pop');
$colle_trs.on('click',function(){
	$pop_ups.show();
	$colle_pop.show().siblings().hide();
})

//二个月无人居住房占比
var $twomonth_trs = $alltable.find('.twomonth').find('.trs');
var $twomonth_pop = $pop_ups.find('.twomonth_pop')
$twomonth_trs.on('click',function(){
	$pop_ups.show();
	$twomonth_pop.show().siblings().hide();
})

//来沪人员新增绝对值
var $absolut_trs = $alltable.find('.add_absolute').find('.trs');
var $absolut_pop = $pop_ups.find('.absolut_pop');
$absolut_trs.on('click',function(){
	$pop_ups.show();
	$absolut_pop.show().siblings().hide();
})


//关闭弹窗
$close.on('click',function(){
	$pop_ups.hide();
})




//分页器
function pageNation($thistable){
	//所有数据
	
	var $alltr = $thistable.find('.trs');
	//首页
	var $frist = $thistable.find('.frist');
	//上一页
	var $prev = $thistable.find('.prev');
	//下一页
	var $next = $thistable.find('.next');
	//尾页
	var $last = $thistable.find('.last');
	//当前页
	var $current = $thistable.find('.currentpage');
	//总页数
	var $allpages = $thistable.find('.allpages');
	
	var currentpage = 1;
	var totalpage = Math.ceil(($alltr.length)/10);
	
	$allpages.html(totalpage);
	shownumpage(1);
	$frist.on('click',function(){
		shownumpage(1);
		currentpage = 1;
		
	})
	$prev.on('click',function(){
		if(currentpage>1){
			currentpage--;
			shownumpage(currentpage);
		}
	})
	$next.on('click',function(){
		if(currentpage<totalpage){
			currentpage++;
			shownumpage(currentpage);	
		}
	})
	$last.on('click',function(){
		shownumpage(totalpage);
		currentpage = totalpage;	
	})
	function shownumpage(pagenum){
		//首次显示前十条
		var startnum = (pagenum-1)*10;
		var endnum = pagenum*10;
		$alltr.each(function(index,ele){
			if(index>=startnum&&index<endnum){
				$(ele).show();
			}else{
				$(ele).hide();
			}
		})
		$current.html(pagenum);
	}
	
}

//弹窗分页
function popPageNation($thistable,$thispagenation){
	//所有数据
	
	var $alltr = $thistable.find('.trs');
	//首页
	var $frist = $thispagenation.find('.frist');
	//上一页
	var $prev = $thispagenation.find('.prev');
	//下一页
	var $next = $thispagenation.find('.next');
	//尾页
	var $last = $thispagenation.find('.last');
	//当前页
	var $current = $thispagenation.find('.currentpage');
	//总页数
	var $allpages = $thispagenation.find('.allpages');
	
	var currentpage = 1;
	var totalpage = Math.ceil(($alltr.length)/10);
	
	$allpages.html(totalpage);
	shownumpage(1);
	$frist.on('click',function(){
		shownumpage(1);
		currentpage = 1;
		
	})
	$prev.on('click',function(){
		if(currentpage>1){
			currentpage--;
			shownumpage(currentpage);
		}
	})
	$next.on('click',function(){
		if(currentpage<totalpage){
			currentpage++;
			shownumpage(currentpage);	
		}
	})
	$last.on('click',function(){
		shownumpage(totalpage);
		currentpage = totalpage;	
	})
	function shownumpage(pagenum){
		//首次显示前十条
		var startnum = (pagenum-1)*10;
		var endnum = pagenum*10;
		$alltr.each(function(index,ele){
			if(index>=startnum&&index<endnum){
				$(ele).show();
			}else{
				$(ele).hide();
			}
		})
		$current.html(pagenum);
	}
	
}

