$(function () {
	var ie6 = document.all;
	var dv = $('#navigator'), st;
	dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
	$(window).scroll(function () {
		st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
		if (st > parseInt(dv.attr('otop'))) { 
			if (dv.css('position') != 'fixed') {
				dv.css({'position': 'fixed', top: 0});
			}
		}
		else if (dv.css('position') != 'static'){
			dv.css({'position': 'static'});
		}
	});
});