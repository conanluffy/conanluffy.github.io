
var $userinfor_box = $("#bg").find('.userinfor_box');

var $username = $userinfor_box.find(".username");
var $userpas = $userinfor_box.find(".userpas");
var $user_login =$userinfor_box.find(".user_login");

$user_login.on("click",logIn) 


$(document).on('keydown',function(e){
	var ev = e||window.event;
//	console.log(ev.keyCode);
	if(ev.keyCode == 13){
//		console.log()
		logIn();
	}
})


function logIn(){
	var $uname = $username.val();
	var $upas = $userpas.val();
	if($uname ==""){
		alert('请输入用户名!')
	}else if($upas ==''){
		alert("请输入密码!")
	}else{
		window.localStorage.setItem('username',$uname);
		window.location.href = "../pages/home.html";
	}
}


//$.ajax({
//	type:"get",
//	url:"",
//	async:true,
//	success:function(respond){
//		
//	}
//});
