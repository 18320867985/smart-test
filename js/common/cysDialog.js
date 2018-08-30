//预加载询问框
document.write('<div class="cysShow_window"><h3>是否删除该彩票！</h3><div class="cysShow_window_btn"><a href="javascript:;"  class="no">否</a><a href="javascript:;" style="" class="yes">是</a></div></div>');
document.write("<style>.cysmask{ position:fixed; top:0px; left:0px; width:100%; height:100%; background:rgba(0,0,0,0.5); display:block; z-index:10000; display:none; }<\/style>");
document.write('<style>.cysShow_window{ width:400px; height:auto; padding-bottom:20px; position:fixed; top:50%; left:50%; margin-left:-200px; padding-top:20px; margin-top:-175px; background:#fff; z-index:10002; display:none;  border:1px solid #ddd; box-shadow:  0 5px 10px rgba(0,0,0,.5);}'
              + '.cysShow_window h3{ width:100%; font-size:16px; text-align:center; margin-bottom:20px; color:#333;}'
              + '.cysShow_window_btn{ text-align:center;}'
              + '.cysShow_window_btn a{     font-size: 14px;width: 85px;height: 35px;line-height: 35px;display: inline-block;text-align: center;color: #2196f3;border: 1px solid #ddd;}'
              + '.cysShow_window_btn a:hover{  color:#2196f3; background:#e3f2fd;}'
              +'.cysShow_window_btn a+a{ margin-left:20px; }'
              + '.cysShow_window_btn a:focus{ background:#bbdefb; color:#2196f3;}<\/style>');
//调用的函数
function cysMessageDialog(){
	 $('.cysmask').remove();
	 $('body').append("<div class='cysmask'></div>");
	 $('.cysmask').show();
	 $(".cysShow_window").show();
	
}

/**
*关闭对话框
*/
function clossCysDialog(){
	$('.cysmask').remove();
	$(".cysShow_window").hide();
}
/*
*cys询问框
*contentMesg:询问内容
*cancelText：取消按钮的文字内容
*okText : 确定按钮的文字内容
*cancelFun：取消函数
*okFun:确定函数
*/
function confirmCysDialog(contentMesg,cancelText,okText,cancelFun,okFun){
	cysMessageDialog();
	$(".cysShow_window h3").html(contentMesg);
	$(".cysShow_window .no").html(cancelText);
	$(".cysShow_window .yes").html(okText);
	
	if(cancelText == ""){
		$(".cysShow_window .no").hide();
		
	}else{
		$(".cysShow_window .no").show();
		$(".cysShow_window .no").off("click");
		$(".cysShow_window .no").click(function(){
			 if(cancelText !=""){
				 
				 clossCysDialog();
				 cancelFun();
			 }
			
		});
	}
	
	
	if(okText == ""){
		$(".cysShow_window .yes").hide();
		
	}else{
		$(".cysShow_window .yes").show();
		$(".cysShow_window .yes").off("click");
		$(".cysShow_window .yes").click(function(){
			 if(okText !=""){
				 
				 clossCysDialog();
				 okFun();
			 }
			
		});
	}
	
	
	
}
