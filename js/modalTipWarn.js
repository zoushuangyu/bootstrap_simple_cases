//模态对话框
function load(obj,t){
	var className;
	var content;
	var title='';
	var cssclass="pop_modal";

	if(t=='load'){
		cssclass="little_modal";
		content="加载中，请稍后...";
	}else if(t=='print'){
		cssclass="little_modal";
		content="打印中...";
	}else if(t=='confirm'){
		cssclass="confirm_modal";
		content="您确定要删除吗？";
	}else{
		cssclass="pop_modal";
		title="二醋酸纤维素丝束3.0Y35000(进口)";
		content="<div class='popcontent'><ul><li><div class='title'>L库</div>"
		+"<div class='con'><p>现存量：<span>"
		+"495379.25"
		+"<label>公斤</label></span></p><p>可用量：<span class='reserve'>"
		+"495379.25"
		+"<label>公斤</label></span></p></div></li></ul></div><div class='popfooter'><div class='name'>"
		+"辅料总库"
		+"</div><div class='company'>"
		+"EASTMAN"
		+"</div></div>";
	}
	content='<div class="'+t+'"><i></i>'+content+'</div>';
	$(obj).scojs_modal({
		content: content,
		title:title,
		cssclass:cssclass,
		keyboard: true,//按Esc遮罩消失
		clickback:true,//点击背景遮罩消失
		//position:[true,'fixed',120,-400,0],//绝对定位[true,'absolute',120] 固定定位[true,'fixed',120]
		backdrop:'static',
		show:true
	});
}

//提示框
	/*$('#modal-tooltip').scojs_tooltip({
		content: "<p>现存量：<span>"+"495379.25"+"<label>公斤</label></span></p>"
		+"<p>可用量：<span class='reserve'>"+"495379.25"+"<label>公斤</label></span></p>",
		cssclass: 'pretty',
		delay: 1000,
		position:'s'
	});*/

//警告框
function warn(className,mess){
	var tipname;
	$('.alert').remove();
	if(className=='warning'){
		tipname='warning';
		mess='请输入正确格式！';
	}else if(className=='success'){
		tipname='check-circle';
		mess='提交成功！';
	}else if(className=='info'){
		tipname='info-circle';
		mess='请正确操作！';
	}else if(className=='danger'){
		tipname='times';
		mess='请输入正确格式！';
	}
	var content='<i class="fa fa-'+tipname+'"></i>'+mess;
	content='<div class="alert warn alert-'+className+'" role="alert">'
	+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
	+content+'</div>';
	$(document.body).append(content);
}