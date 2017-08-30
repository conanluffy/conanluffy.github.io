var sheetContent = {
	"first" : ["新华路派出所","江苏路派出所","华阳路派出所","周家桥派出所","天山路派出所","仙霞路派出所","虹桥路派出所","程家桥派出所","北新泾派出所","新泾派出所","新虹桥治安派出所","临空经济园区治安派出所"],
	"second" : [0,0,0,0,0,0,0,0,0,0,0,0],
	"third" : [0,0,0,0,0,0,0,0,0,0,0,0],
	"fourth" : ["/","/","/","/","/","/","/","/","/","/","/","/"],
	"fifth" : [0,0,0,0,0,0,0,0,0,0,0,0],
	"sixth" : ["-5","-5","-5","-5","-5","-5","-5","-5","-5","-5","-5","-5"],
	"seventh" : [0,0,0,0,0,0,0,0,0,0,0,0],
	"eighth" : ["-5","-5","-5","-5","-5","-5","-5","-5","-5","-5","-5","-5"],
	"nineth" : [0,0,0,0,0,0,0,0,0,0,0,0],
	"tenth" : [0,0,0,0,0,0,0,0,0,0,0,0],
	"elventh" : [0,0,0,0,0,0,0,0,0,0,0,0],
	"twelfth" :["35.0","35.0","35.0","35.0","35.0","35.0","35.0","35.0","35.0","35.0","35.0","35.0"]
}
var rank = "";
for (var i = 0; i < sheetContent.first.length; i++) {
	if (i >= 0 && i <= 3) {
		rank += '<tr class="sheet-data"><td class="one"><span style="background-color: #ff0000;">'+ (i+1) +'</span></td><td class="two">'+sheetContent.first[i]+'</td><td class="three">70.8</td></tr>';
	}
	else if(i >= 4 && i <=7) {
		rank += '<tr class="sheet-data"><td class="one"><span style="background-color: #42bfff;">'+ (i+1) +'</span></td><td class="two">'+sheetContent.first[i]+'</td><td class="three">70.8</td></tr>';
	}
	else {
		rank += '<tr class="sheet-data"><td class="one"><span style="background-color: #1345ab;">'+ (i+1) +'</span></td><td class="two">'+sheetContent.first[i]+'</td><td class="three">70.8</td></tr>';
	}
	if (i != 11) {
		rank += '<tr class="bgimage"><td colspan="3"><img src="../images/image1/circleLine.png"></td></tr>'
	}
}
$("#left-content table").append(rank);

var list = '';
for (var i = 0; i < sheetContent.first.length; i++) {
	if(i%2 == 0) {
		list += '<tr class="sheet-data oddtr"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td><td class="sheet-item">'+sheetContent.elventh[i]+'</td><td class="sheet-item score">'+sheetContent.twelfth[i]+'</td></tr>'
	}
	else {
		list += '<tr class="sheet-data"><td class="first sheet-item">'+sheetContent.first[i]+'</td><td class="sheet-item">'+sheetContent.second[i]+'</td><td class="sheet-item">'+sheetContent.third[i]+'</td><td class="sheet-item">'+sheetContent.fourth[i]+'</td><td class="sheet-item">'+sheetContent.fifth[i]+'</td><td class="sheet-item">'+sheetContent.sixth[i]+'</td><td class="sheet-item">'+sheetContent.seventh[i]+'</td><td class="sheet-item">'+sheetContent.eighth[i]+'</td><td class="sheet-item">'+sheetContent.nineth[i]+'</td><td class="sheet-item">'+sheetContent.tenth[i]+'</td><td class="sheet-item">'+sheetContent.elventh[i]+'</td><td class="sheet-item score">'+sheetContent.twelfth[i]+'</td></tr>'
  }
}
$("#right-content table").append(list);

//退出当前用户
var quit = function(){
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

// 页面跳转
$alltransformer = $("#right-content").find(".first-row").find(".transformer");
$alltransformer.click(function(){
		var index = $(this).index()-1;
		var formContent = this.innerHTML;
		localStorage.setItem('form', index);
		localStorage.setItem('content', formContent);
		window.location.href="../pages/assessment.html";
});

$allsheetdata = $("#right-content").find(".sheet-data");
console.log($allsheetdata);
$allsheetdata.click(function(){
		var index = $(this).index()-1;
		$policeStation = $(this).find("span");
		var content = sheetContent.first[index];
		localStorage.setItem('police', index);
		localStorage.setItem('policeName', content);
		window.location.href="../pages/allItems.html";
});
var Main = function(){
	quit();
}
Main();