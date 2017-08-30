
//用户选择派出所，选择日期，选择考核内容

function pageRedy(){
	
	//选择派出所
	var $wrap = $("#wraper").find(".wrap");
	var $areamenu = $wrap.find(".areamenu");
	var $areadown = $wrap.find('.area').find('.down');
	
	var $areaselected = $wrap.find('.area').find('.selected').find(".select_area");

	var $turnhome = $wrap.find('.operat').find('.turnhome');
	
	//权限判断
	typecheck();
	
	//返回首页
	$turnhome.on('click',function(){
		window.location.href = '/home';
	})

	var $areaflag = true; 
	//title_police
	var $page_police = $wrap.find('.pagetitle').find('.police');

	//初始化
	function getPolice(){
		var $localpolice = window.localStorage.getItem("policeName");
		$areaselected.html($localpolice);
		$page_police.html($localpolice);
	}
	getPolice();

	//显示隐藏
	$areadown.on('click',function(e){
		e.stopPropagation();
		if($areaflag){
			$areamenu.animate({height:"300px"},300);
			$areaflag=false;
		}else{
			$areamenu.animate({height:"0"},300);
			$areaflag=true;
		}
	})
	$('body').on('click',function(){
		$areamenu.animate({height:"0"},300);
		$areaflag=true;
	})
	//选中派出所
	
	var $arealist = $areamenu.find('li');
	
	$arealist.on("click",function(){
		
		var $value= $(this).html();
//		console.log($value);
		$areaselected.html($value);
		$page_police.html($value);
		$areamenu.animate({height:"0"},300);
		$areaflag=true;
	})
	
	//选择派出所，选择时间，选择考核内容
	var $taplist = $wrap.find('.tap').find('.checklist');
	var $checkarr = ['首次来沪人员占比统计表','反复新增注销3次(含)以上名单','来沪人员变动数占来沪人员总人数比统计表',
	                 '来沪人员新增数占来沪人员总数比统计表','来沪人员注销数占来沪人员总数比统计表','无人居住房整治率统计表',
	                 '异常数据统计表','人口信息采集工作量达标统计表','二个月无变动的无人居住房占比统计表',
	                 '来沪人员新增绝对值统计表']
	$taplist.on('click',function(){
		var msg = {};
		var $index = $(this).index();
		var $police = $areaselected.html();
//		var $date = [];
		var $start_tate = ($wrap.find('.time_start').val())||($wrap.find('.time_start').attr("placeholder"));
		var $end_tate = ($wrap.find('.time_end').val())||($wrap.find('.time_end').attr("placeholder"));
		var $check = $checkarr[$index];
		msg = {
			index:$index,
			police:$police,
			check:$check,
			selct_date:[$start_tate,$end_tate]
		}
		window.localStorage.setItem("msg", JSON.stringify(msg));
		window.location.href="../pages/singe.html";
	})
	//退出当前用户
	var $showquit = $wrap.find('.userinfor').find('.userimg');

	var $quit = $wrap.find('.userinfor').find(".quit");
	
	var $tuichu = $quit.find('.tuichu');

	var $showquit_flag = true;

	$showquit.on('click',function(e){
//		if($showquit_flag){
//			$quit.show();
//			$showquit_flag = false;
//		}else{
//			$quit.hide();
//			$showquit_flag = true;
//		}
		e.stopPropagation();
		$quit.show();
	})
	$('body').on('click',function(){
		$quit.hide();
	})
	$tuichu.on('click',function(){
		window.location.href='../pages/login.html'
	});
	
	function typecheck(){
//		var $type = window.localStorage.getItem('');
//		if(true){
//			$areamenu.hide();
//		}
	}

}

pageRedy();








