// 之前需要加载语言的js资源文件
var CODE_SUCCESS = 200;
var undefined;

if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

var throttle = function(fn, delay){
    var timer = null;
    return function(){
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context, args);
        }, delay);
    };
 }

var Base64 = (function(){
    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 
    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }
 
    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }
 
    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
        return utftext;
    }
 
    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
    return {
        encode:encode,
        decode:decode
    };
})()

function getDefPngPath (suffix, file) {
    var vidios = ["mov", "avi", "asf", "wmv", "3gp", "mkv", "flv"];
    var mp3s = ["mp3", "wav", "ogg"];
    var imgs = ["png", "jpg", "bmp", "jpge", "tiff", "pcx", "gif"];
    var name = suffix.toLowerCase();
    var path = "/css/image/";
    if (mp3s.indexOf (name) != -1) {
        return path + "MP3.png";
    }else if (imgs.indexOf (name) != -1) {
        return path + "image.png";
    }else if (name == "pdf") {
        return path + "pdf_icon.png";
    }else if (name == "ppt" || name == "pptx") {
        return path + "ppt_icon.png";
    }else if (name == "xls" || name == "xlsx") {
        return path + "ppt_icon.png";
    }else if (name == "docx" || name == "doc") {
        return path + "word_icon.png";
    }else if (vidios.indexOf (name) != -1) {
        return path + "video.png";
    }else if (name == "txt"){
        return path + "txt_icon.png";
    }else {
        return path + "textIco.png";
    }
}

function valifyEmail(email)
{
    var reg = /^([.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(email);
}

function valifyPort(str)
{
    var parten=/^(\d)+$/g;
    if(parten.test(str)&&parseInt(str)<=65535&&parseInt(str)>=0){
        return true;
     }else{
        return false;
     }
}
function valifySpecialCh(ch)
{
    var pattern = /[~`!@#$%^&*()+={}\[\]|<>?:;"',.！，。、‘；："￥……（）《》？——“”‘’\\\/【】]+/;
//    var pattern=/^[^`~!@#$%^&*()\/+=|\\\][\]\{\}:;'\,.<>/?]{1}[^`~!@$%^&()+=|\\\][\]\{\}:;'\,./<>?(\s*)]{0,19}$/;
    return pattern.test(ch);
}
function valifyURL(url)
{
   var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
                + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" // ftp的user@
                + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
                + "|" // 允许IP和DOMAIN（域名）
                + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
                + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
                + "[a-z]{2,6})" // first level domain- .com or .museum
                + "(:[0-9]{1,4})?" // 端口- :80
                + "((/?)|" // a slash isn't required if there is no file name
                + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
        var re = new RegExp(strRegex);
        return re.test(url);
}

function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[decodeURIComponent (s[0])] = decodeURIComponent (s[1]);
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}

function changeSearchVal (key, value) {
    var myurl = parseURL (window.location.search);
    var anchor = window.location.hash;
    myurl.params[key] = value;
    var state = {
        url: "?" + jQuery.param(myurl.params) + anchor
    }
    history.replaceState(state, "", "?"+jQuery.param(myurl.params)+anchor);        
}
function getSearchVal () {
    var myurl = parseURL (window.location.search);
    return myurl.params;           
}

function valifyIP(ip)
{
    if (typeof(ip) === "undefined" || ip === "")
        return false;
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式
    if(re.test(ip))
    {
        if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256)
            return true;
    }
    return false;
}

function checkPassword(str){
    var re =  /^[A-Za-z0-9]\w{5,}$/;
    return re.test(str);
}

function bitUnitConvert (size){     // size 单位B
    size = parseInt(size);
    if (size/1024/1024/1024/1024 >= 1) {
        return (size/1024/1024/1024/1024).toFixed (2) + " TB";
    }else if (size/1024/1024/1024 >= 1) {
        return (size/1024/1024/1024).toFixed (2) + " GB";
    }else if (size/1024/1024 >= 1) {
        return (size/1024/1024).toFixed (2) + " MB";
    }else if (size/1024 >= 1) {
        return (size/1024).toFixed (2) + " KB";
    }else {
        return (size).toFixed (2) + " B";
    }
}
//普通字符转换成转意符
function html2Escape(str) {
    return str.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
}

//校验用户名：只能输入1-30个字母、数字、下划线
function valifyUsername(name)
{
    var patrn=/^(\w){1,30}$/;
    if (!patrn.exec(name))
        return false;
    return true;
}
//校验密码：至少输入6个字符，空格除外
function valifyPassword(pwd) {
    var patrn=/^\S{6,}$/;
    if (!patrn.exec(pwd))
        return false;
    return true;
}

function trim(str)
{
    return (str + '').replace(/(\s+)$/g, '').replace(/^\s+/g, '');
}

function freshnow () {    
    window.location.reload();
}

function refresh(intime)
{
    var time = intime || 0.5;
    setTimeout("freshnow()", 1000 * time);
}

function parseURL(url) {  
    var a =  document.createElement('a');  
    a.href = url;  
    return {
     source: url,  
     protocol: a.protocol.replace(':',''),  
     host: a.hostname,  
     port: a.port,  
     query: a.search,  
     params: (function(){  
         var ret = {},  
             seg = a.search.replace(/^\?/,'').split('&'),  
             len = seg.length, i = 0, s;  
         for (;i<len;i++) {  
             if (!seg[i]) { continue; }  
             s = seg[i].split('=');  
             ret[s[0]] = s[1];  
         }  
         return ret;  
     })(),  
     file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],  
     hash: a.hash.replace('#',''),  
     path: a.pathname.replace(/^([^\/])/,'/$1'),  
     relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],  
     segments: a.pathname.replace(/^\//,'').split('/')  
    };  
}
 /*
  * default datatype is json, success code is 200
  * url:
  * data:
  * tip:
  * success:
  * fail:
  * type:Post
 */
var ajaxUrlGobalList = []; // 全局变量存放发送的url请求
var  DatrixAjaxRequest = (function(){
    function ajax(options)
    {
        var opts = {lines:10, length:4, width:4, radius:5, color:'#000', speed:1, trail:29, shadow:false, hwaccel:false};

        if(options.type == undefined || options.type == ""){
            options.type = "post";
        }
        if(options.async == undefined || options.async == ""){
            options.async = true;
        }
        if(options.showtip == undefined || options.showtip == ''){
            options.showtip = true;
        }
        if(options.tip == undefined || options.tip == ''){
            options.tip = lang.loadingajax;
        }        
        // if(options.isPass === undefined || options.isPass === ""){
        //     options.isPass = true;
        // }
        // if(options.isPass && getCookie('access_token') == ''){
        //     window.location.href = '/login';
        // }
        if(options.multi == undefined || options.multi == ""){
            options.multi = true;
        }
        //将url转化utf8
        //判断options.param是不是数组,if数组是空,if数组是null,if数组是undefined
        if(options.param === undefined || options.param === ""){
            options.param = {};
        }

        var num = 0;
        $.each(options.param,function(key,value){
            if(0 == num){
                options.url += "?";
                num++;
            }else
                options.url += "&";

            options.url += encodeURIComponent(key);
            options.url += "=";
            if (key == "callback" && value == "?")
                options.url += value;
            else
                options.url += encodeURIComponent(value);
        });

        var msgbox = null;
        try{
            $.ajax({
                dataType:"json",
                type:options.type,
                cache:false,
                timeout:600*1000,
                url:options.url,
                data:options.data,
                async:options.async,
                beforeSend: function(xhr){
                    xhr.setRequestHeader('ACCESS-TOKEN', getCookie ("token"));

                // 不允许ajax在请求还没返回时再发送请求。                        
                    var findUrlInList = false;
                    if (!options.multi) {           // 如果没有设置multi为false就查找ajax发送列表
                        for (var i = 0; i < ajaxUrlGobalList.length; ++i) {
                            if (ajaxUrlGobalList[i] == options.url) {           // 这里可以优化成url和data的哈希
                                findUrlInList = true;
                            }
                        }
                    }     
                    if (findUrlInList) {
                        xhr.abort ();
                    }else {
                        ajaxUrlGobalList[ajaxUrlGobalList.length] = options.url;
                        if (options.showtip) {
                            msgbox = TopMsgBox.loading (options.tip);
                        }
                    }
                },
                complete:function(){
                    msgbox.hide ();
                    var index = ajaxUrlGobalList.indexOf(options.url);
                    if (index > -1) {
                        ajaxUrlGobalList.splice(index, 1);
                    }
                },
                error:function(xhr, textStatus, errorThrown){
                    msgbox.hide ();
                    if(jQuery.isFunction(options.fail)){
                        options.fail(xhr);
                    }
                },
                success:function(data){
                    msgbox.hide ();
                    if(jQuery.isFunction(options.success)){
                        options.success(data);
                    }
                }
            });
        }catch(e){
            msgbox.hide ();
        }
    }

    return {
        get:function(options){
            options.type = 'get';
            ajax(options);
        }
        ,post:function(options){
            options.type = 'post';
            ajax(options);
        }
    }
    function setCookie(name, value, expireHours){ 
        var cookieString=name+"="+escape(value); 
        var date=new Date();
        date.setTime(date.getTime()+expireHours*1000); 
        cookieString=cookieString+"; path=/; "+((expireHours==null) ? "" : ";expires="+date.toGMTString());
        document.cookie=cookieString;
    }
    function getCookie(name){ 
        var strCookie=document.cookie; 
        var arrCookie=strCookie.split("; "); 
        for(var i=0;i<arrCookie.length;i++){ 
            var arr=arrCookie[i].split("="); 
            if(arr[0]==name)return arr[1]; 
        } 
        return ""; 
    }
})();

var throttle = function(fn, delay){
    var timer = null;
    return function(){
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context, args);
        }, delay);
    };
 };

var DatrixModel = (function(){
    var urls = {};

    var func = {
        DatrixAjax:function(url, param, callback, async, tip, isPass, showAlertDiv, multi){
            DatrixAjaxRequest.post({
                url: url,
                data: param,
                async:async,
                tip:tip,
                success:callback,
                isPass:isPass,
                showAlertDiv:showAlertDiv,
                multi: multi
            });
        },
        DatrixGetAjax:function(url, param, callback, async, tip){
            DatrixAjaxRequest.get({
                url:url,
                data:param,
                async:async,
                tip:tip,
                success:callback
            });
        }
    };
    for(var action in urls){
        func[action] = (function(inaction, target){
            var url = target['url'] || '';
            var type = target['type'] || 'post';
            var dofun;
            if(type === 'get'){
                dofun = function(param, callback, async, tip, isPass, showAlertDiv, multi){
                    DatrixAjaxRequest.get({
                        url: url,
                        data: param,
                        async:async,
                        tip:tip,
                        success:callback
                    });
                }          
            }else{
                dofun = function(param, callback, async, tip, isPass, showAlertDiv, multi){
                    DatrixAjaxRequest.post({
                        url: url,
                        data: param,
                        async:async,
                        tip:tip,
                        success:callback,
                        isPass:isPass,
                        showAlertDiv:showAlertDiv,
                        multi:multi
                    });
                }
            }
            return dofun;
        })(action, urls[action]);
    }

    return func;
})();

var MsgBox = (function(){
    function showErrorMsg(msg, type, showTime, position) {
        var displayTime = showTime || 15;
        var msgtype = type || 2;
        var pos = position || '';
        if (type == 0)
            msgtype = 0;
        
        if (msgtype >3 || msgtype < 0)
            msgtype = 2;

        var msgid = +new Date;
        msg = msg.replace(/<\/?.+?>/g,"");

        var opt = ["success", "info", "warning", "danger"];
        var msgStr = opt[msgtype];
        var msgClass = "alert-" + msgStr;

        var msghtml = '<div id="error-msg" style="z-index:999999;" class="msg-box '+pos+'"><ul></ul></div>';

        var newmsg = '<li id="'+msgid+'"  title="'+msg+'" >';
            newmsg += '<div class="alert '+msgClass+'" role="alert" style="margin-bottom: 0px;">';
            newmsg += '<span class="close" style="display: none">&times;</span>';
            newmsg += '<span>' + msg + '</span>';
            newmsg += '</div>';
            newmsg += '</li>';

        
        if($("#error-msg").length > 0){ //此时div存在
        }else {
            $("body").append (msghtml);
        }

        // 显示
        $(newmsg).hide().appendTo("#error-msg ul").show('slow');
        // 15s后自动删除
        setTimeout(function(){
            $("#"+msgid).hide ("fast", function (){
                $("#"+msgid).remove ();
                if ($("#error-msg li").length == 0) {
                    $("#error-msg").remove ();
                }
            });        
        }, 1000*displayTime);
    }


    return {
        success:function(msg, time, position){
            showErrorMsg (msg, 0, time, position);
        },
        info:function(msg, time, position){
            showErrorMsg (msg, 1, time, position);
        },
        warning:function(msg, time, position){
            showErrorMsg (msg, 2, time, position);
        },
        error:function(msg, time, position){
            showErrorMsg (msg, 3, time, position);
        }
    }
})();


var TopMsgBox = (function(){
    function showMsg(inmsg, intype, inshowTime, autohide) {
        var timeid = null;
        clearTimeout (timeid);

        var showTime = inshowTime || 5;
        var type = intype || 0;
        var msg = inmsg || 0;
        var auto = autohide || false;

        var typestr = ["success", "info", "warning", "loading"];
        var spans = {
            "success" : '<span class="glyphicon glyphicon-ok"></span>',
            "info" : '<span class="glyphicon glyphicon-envelope"></span>',
            "warning" : '<span class="glyphicon glyphicon-remove"></span>',
            "loading" : '<span><i class="glyphicon glyphicon-refresh"></i></span>',
        }

        if (type > 4 || type < 0)
            type = 0;

        var msgid = +new Date;
        msg = msg.replace(/<\/?.+?>/g,"");
        
        var msgType = typestr[type];
        var span = spans[msgType];

        var msgHtml = '<div id="'+msgid+'" class="loading-fixed">   \
                        <div class="loading">   \
                            ' + span + '    \
                            <span class="msg">' + msg + '</span>   \
                        </div>  \
                    </div>';

        $("body").append (msgHtml);
        var ddt = null;
        clearTimeout (ddt);
        ddt = setTimeout(function(){
            $newHtml = $("#"+msgid);
            $newHtml.addClass ("visable");
        }, 0*1000);
        // 显示
        
        // 5s后自动删除
        if (auto) {
            timeid = setTimeout(function(){
                $nextHtml = $("#"+msgid);
                $nextHtml.removeClass ("visable");
                // setTimeout(function(){$nextHtml.remove ();}, 1*1000);
            }, 100*showTime);
        }else {
            // return msgid;
            return {
                hide : function () {
                    $nextHtml = $("#"+msgid);
                    $nextHtml.removeClass ("visable");
                }
            }
        }
    }


    return {
        success: function(msg, time){
            showMsg (msg, 0, time, true);
        },
        info: function(msg, time){
            showMsg (msg, 1, time, true);
        },
        warning: function(msg, time){
            showMsg (msg, 2, time, true);
        },
        loading: function(msg, time){
            var id = showMsg (msg, 3, time);
            return id;
        }
    }
})();
$(function(){
   setTimeout(function(){
    $(".loading-fixed").removeClass("visable");
   },10000) ;
})


$(document)
.delegate('#error-msg li', 'mouseover', function(){
    $a = $(this);
    $a.find(".close").css('display','block');
})
.delegate('#error-msg li', 'mouseout', function(){
    $a = $(this);
    $a.find(".close").css("display", "none");
})
.delegate ("#error-msg .close", "click", function (){
    var $a = $(this).closest ("li");
    $a.hide ("slow", function (){
        $a.remove ();
        if($("#error-msg li").length <= 0){
            $("#error-msg").remove();
        }
    });
});

function Confirm(msg, title, fnyescallback, fnnocallback)
{
    var ctitle = title || "";
    var cmsg = msg || "";
    var cfnyescallback = fnyescallback || "";
    var cfnnocallback = fnnocallback || "";
    var cid = +new Date;
    var html = "";
    html += '<div class="modal fade" id="' + cid + '">' +
              '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                  '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal">' +
                        '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                    '<h4 class="modal-title" style="color:white;">' + ctitle + '</h4>' +
                  '</div>' +
                  '<div class="modal-body">' +
                   ' <p>'+msg+'</p>' +
                  '</div>' +
                  '<div class="modal-footer">' +
                    '<button type="button" class="no btn btn-default" data-dismiss="modal">' + lang.button_cancel + '</button>' +
                    '<button type="button" class="yes btn btn-primary">' + lang.button_ok + '</button>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>';

    $('body').append(html);
    $('#'+cid).modal('show');

    $("#" + cid + " .yes").one("click", function(ev){
        if(cfnyescallback != ""){
            cfnyescallback(cid);
        }
        closeConfirm();
    });
    $("#" + cid + " .no").one("click", function(ev){
        if(cfnnocallback != ""){
            cfnnocallback();   
        }         
        closeConfirm ();
    });
    $("#" + cid + " .close").one("click", function(ev){
        closeConfirm ();
    });

    function closeConfirm(){
        $('#'+cid).modal('hide');
        // $('#'+cid).remove();        
    }
}

function ConfirmPopover($el, position, title, content, ycallback, ncallback)
{
    var htm = '<span>'+content+'</span><br/><br/>';
        htm += '<div class="row"><div class="offset1"><button class="btn" id="confirm-no">取消</button><button class="btn btn-primary offset-mini" id="confirm-yes">确定</button></div></div>';
    $el.popover({trigger:'manual', placement:position, title:title, content:htm});
    $el.popover('toggle');
    $("#confirm-yes").one ('click', function(event){
        if(jQuery.isFunction(ycallback)){
            ycallback();
        }
        $el.popover('hide');
    });
    $("#confirm-no").one ('click', function(event){
        if(jQuery.isFunction(ncallback)){
            ncallback();
        }
        $el.popover('hide');
    });
}
var PostUpload = function(opts) {
    if(typeof(opts.file) === 'undefined') return false;
    if(typeof(opts.target) !== 'string') return false;
    var chunkSize = opts.chunkSize || 0;
    var file = opts.file;
    var startSize,endSize = 0;
    var pause = false;
    var canceled = false;
    var done = true;
    var fileName = file.fileName||file.name;
    var size = file.size;
    var fileid = opts.fileid;
    var oauth = opts.oauth || '';
    var token = opts.token || '';
    var owner = this;

    this.getFileId = function(){
        return fileid;
    }

    this.getFileName = function(){
        return file.name;
    }

    this.progress = function(){
        if(typeof(opts.progress) === 'function'){
            var percent = 0;
            if(size === 0){
                percent = 1;
            }else{
                percent = endSize / size;
            }
            opts.progress(percent, file);
        }
    }

    this.onerror = function(msg){
        if(typeof(opts.onerror) === 'function')
            opts.onerror(msg, file);
    }

    this.oncomplete = function(){
        if(typeof(opts.oncomplete) === 'function')
            opts.oncomplete(fileid, file);
    }

    this.start = function(){
        sendData();
    }

    this.cancel = function(){
        pause = true;
        canceled = true;
        var xhr = new XMLHttpRequest();

        var formData = new FormData();
        formData.append('filename', opts.file.name);
        formData.append('fileid', fileid);
        xhr.open('POST', '/upload/cancelupload');
        xhr.onreadystatechange = function(){
            if(typeof(opts.cancel) === 'function'){
                opts.cancel();
            }
        };
        xhr.send(formData);
    }
    this.pause = function(){
        pause = true;
    }

    this.continues = function(){
        pause = false;
        sendData();
    }

    function sendData(){
        if(endSize >= size){
            owner.progress();
            owner.oncomplete();
            return;
        }
        if(pause) return;
        if(size > 0 && file.size <= 0){
            owner.cancel('文件已被删除');
            owner.onerror('文件已被删除');
            return;
        }        
        if(done){
            startSize = endSize;
            if(chunkSize == 0){
                endSize = size;
            }else{
                endSize += opts.chunkSize;
                if(endSize > size) endSize = size;
            }
        }    

        var formData = new FormData();
        var func = (opts.file.mozSlice ? 'mozSlice' : (opts.file.webkitSlice ? 'webkitSlice' : 'slice'));
        formData.append("file", opts.file[func](startSize, endSize));
        formData.append("fileid", opts.fileid);
        formData.append("offset", startSize);
        formData.append("length", endSize - startSize);
        formData.append("filesize", size);
        formData.append("filetype", opts.file.type);
        formData.append("filename", opts.file.name);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", opts.target);
        xhr.setRequestHeader('Authorization', oauth);
        xhr.setRequestHeader('ACCESS-TOKEN', token);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if(canceled) return;
                try{
                    var result = JSON.parse(xhr.responseText);
                    if(result.code === 200){
                        done = true;
                        owner.progress();
                        sendData();
                    }else{
                        done = false;
                        owner.onerror(result.msg);
                    }
                }catch(e){
                    owner.onerror("unknow error "+e);
                }
            }
        }
        xhr.send(formData);
    }
}

function getUrlArgObject(){  
    var args=new Object();  
    var query=location.search.substring(1);//获取查询串 
    query = decodeURI(query);
    var pairs=query.split("&");//在逗号处断开  
    for(var i=0;i<pairs.length;i++){  
        var pos=pairs[i].indexOf('=');//查找name=value  
        if(pos==-1){//如果没有找到就跳过  
            continue;  
        }  
        var argname=pairs[i].substring(0,pos);//提取name  
        var value=pairs[i].substring(pos+1);//提取value  
        args[argname]=unescape(value);//存为属性  
    } 
    return args;//返回对象  
} 
