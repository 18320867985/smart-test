//终端编号 
// appw.caishilu.com
var g_machineNo = "r09131200008";
//服务电话
var g_servicePhone = "0755-42358562";

//请求地址
//var serviceUrl = 'http://appw.caishilu.com:8081/billing';
//腾讯云
//var serviceUrl = 'https://terminal.caishilu.com/app';
//http://apps.caishilu.com:8081/app
//阿里云
var serviceUrl = 'https://appw.caishilu.com/app';
//新的阿里云
//var serviceUrl = 'http://apps.caishilu.com:8081/app';

//login password
var g_loginPW = "e10adc3949ba59abbe56e057f20f883e";
//user identify id
//var g_userIdentifyId = "44098118802154879";
//腾讯云
//var requestImgSrc = "https://terminal.caishilu.com/manager/assets/piao/";
//阿里云
var requestImgSrc = "https://appw.caishilu.com/manager/assets/piao/";
//新阿里云
//var requestImgSrc = "http://apps.caishilu.com:8081/manager/assets/piao/";

//ownerSet Data
/*
var g_ownerSetData = '[{"motorNumber":"1","id":"1","indexNo":"J0555","name":"幸运双星J","price":"2","num":"50","image":"piao/J0555_幸运双星J.jpg","cardLength":"2"},'
                    +'{"motorNumber":"2","id":"2","indexNo":"J0302","name":"百发百中J","price":"5","num":"50","image":"piao/J0302_百发百中J.jpg","cardLength":"4"},'
					+'{"motorNumber":"3","id":"3","indexNo":"J0462","name":"5倍惊喜J","price":"5","num":"20","image":"piao/J0462_5倍惊喜J.jpg","cardLength":"4"},'
					+'{"motorNumber":"4","id":"4","indexNo":"J0558","name":"以茶会友J","price":"5","num":"500","image":"piao/J0558_以茶会友J.jpg","cardLength":"4"},'
					+'{"motorNumber":"5","id":"5","indexNo":"J0353","name":"好运十倍J","price":"10","num":"8","image":"piao/J0353_好运十倍J.jpg","cardLength":"6"},'
					+'{"motorNumber":"6","id":"6","indexNo":"J0564","name":"丁酉鸡10J","price":"10","num":"15","image":"piao/J0564_丁酉鸡10J.jpg","cardLength":"6"},'
					+'{"motorNumber":"7","id":"7","indexNo":"J0564","name":"丁酉鸡10J","price":"10","num":"20","image":"piao/J0564_丁酉鸡10J.jpg","cardLength":"6"}]';
*/
var g_ownerSetData = '[{"motorNumber":"1","indexNo":"G0378","name":"金钥匙","price":"5","num":"50","image":"piao/G0378.jpg","cardLength":"102"},'
               + '{"motorNumber":"2","indexNo":"G0425","name":"7乐无穷","price":"5","num":"50","image":"piao/G0425.jpg","cardLength":"102"},'
			   + '{"motorNumber":"3","indexNo":"J0302","name":"百发百中J","price":"5","num":"50","image":"piao/J0302.jpg","cardLength":"102"},'
			   + '{"motorNumber":"4","indexNo":"J0462","name":"5倍惊喜","price":"5","num":"50","image":"piao/J0462.jpg","cardLength":"102"},'
			   +'{"motorNumber":"5","indexNo":"J0564","name":"丁酉鸡金鸡","price":"5","num":"50","image":"piao/J0564.jpg","cardLength":"102"},'
			   +'{"motorNumber":"6","indexNo":"J0353","name":"好运十倍","price":"10","num":"50","image":"piao/J0353.jpg","cardLength":"153"},'
			   +'{"motorNumber":"7","indexNo":"G0522","name":"满堂彩","price":"20","num":"50","image":"piao/G0522.jpg","cardLength":"203"}]';


					
/*
var g_ownerSetData = [
   {"id":"1","indexNo":"J0555","name":"幸运双星J","price":"2","num":"50","image":"piao/J0555_幸运双星J.jpg"},
   {"id":"2","indexNo":"J0302","name":"百发百中J","price":"5","num":"50","image":"piao/J0302_百发百中J.jpg"},
   {"id":"3","indexNo":"J0462","name":"5倍惊喜J","price":"5","num":"20","image":"piao/J0462_5倍惊喜J.jpg"},
   {"id":"4","indexNo":"J0558","name":"以茶会友J","price":"5","num":"500","image":"piao/J0558_以茶会友J.jpg"},
   {"id":"5","indexNo":"J0353","name":"好运十倍J","price":"10","num":"500","image":"piao/J0353_好运十倍J.jpg"},
   {"id":"6","indexNo":"J0564","name":"丁酉鸡10J","price":"10","num":"500","image":"piao/J0564_丁酉鸡10J.jpg"}
];
*/
//type
var g_ownerType = [
    {"id":"1","name":"开门红","price":"5","num":"0","image":"demo1.png"},
    {"id":"2","name":"快乐钓鱼","price":"5","num":"0","image":"demo2.png"},
    {"id":"3","name":"神秘好礼","price":"10","num":"0","image":"demo3.png"},
    {"id":"4","name":"财高8斗","price":"5","num":"0","image":"demo4.png"}
];

/*
//ticketTypeData
ticketTypeData = [
   {"indexNo":"J0555","name":"幸运双星J","price":"2","image":"piao/J0555_幸运双星J.jpg"},
   {"indexNo":"J0302","name":"百发百中J","price":"5","image":"piao/J0302_百发百中J.jpg"},
   {"indexNo":"J0462","name":"5倍惊喜J","price":"5","image":"piao/J0462_5倍惊喜J.jpg"},
   {"indexNo":"J0558","name":"以茶会友J","price":"5","image":"piao/J0558_以茶会友J.jpg"},
   {"indexNo":"J0353","name":"好运十倍J","price":"10","image":"piao/J0353_好运十倍J.jpg"},
   {"indexNo":"J0564","name":"丁酉鸡10J","price":"10","image":"piao/J0564_丁酉鸡10J.jpg"}
];
*/
/*
ticketTypeData = '[{"motorNumber":"1","indexNo":"J0555","name":"幸运双星J","price":"2","image":"piao/J0555_幸运双星J.jpg","cardLength":"2"},'
               + '{"motorNumber":"2","indexNo":"J0302","name":"百发百中J","price":"5","image":"piao/J0302_百发百中J.jpg","cardLength":"4"},'
			   + '{"motorNumber":"3","indexNo":"J0462","name":"5倍惊喜J","price":"5","image":"piao/J0462_5倍惊喜J.jpg","cardLength":"4"},'
			   + '{"motorNumber":"4","indexNo":"J0558","name":"以茶会友J","price":"5","image":"piao/J0558_以茶会友J.jpg","cardLength":"4"},'
			   +'{"motorNumber":"5","indexNo":"J0353","name":"好运十倍J","price":"10","image":"piao/J0353_好运十倍J.jpg","cardLength":"6"},'
			   +'{"motorNumber":"6","indexNo":"J0564","name":"丁酉鸡10J","price":"10","image":"piao/J0564_丁酉鸡10J.jpg","cardLength":"6"}]';
*/
ticketTypeData = '[{"motorNumber":"1","indexNo":"G0378","name":"金钥匙","price":"5","image":"piao/G0378.jpg","cardLength":"102"},'
               + '{"motorNumber":"2","indexNo":"G0425","name":"7乐无穷","price":"5","image":"piao/G0425.jpg","cardLength":"102"},'
			   + '{"motorNumber":"3","indexNo":"J0302","name":"百发百中J","price":"5","image":"piao/J0302.jpg","cardLength":"102"},'
			   + '{"motorNumber":"4","indexNo":"J0462","name":"5倍惊喜","price":"5","image":"piao/J0462.jpg","cardLength":"102"},'
			   +'{"motorNumber":"5","indexNo":"J0564","name":"丁酉鸡金鸡","price":"5","image":"piao/J0564.jpg","cardLength":"102"},'
			   +'{"motorNumber":"6","indexNo":"J0353","name":"好运十倍","price":"10","image":"piao/J0353.jpg","cardLength":"153"},'
			   +'{"motorNumber":"7","indexNo":"G0522","name":"满堂彩","price":"20","image":"piao/G0522.jpg","cardLength":"203"}]';
//--------------------------------------------------------------------------------
//全局函数
/**
*获取键值
*/
function gGetProperties(key){

	var value = "";
	if(window.js){
		value = window.js.readProperties(key);
	}
	return value;
}
/**
*设置键值
*/
function gSetProperties(key,value){
	var result = undefined;
	if(window.js){	
	   result = window.js.saveProperties(key,value);
	}
	
	return result;
}

/**
*生成订单
*/
function gCreatePayOrder(payType,payTotalSum){
	
	if(window.js){
		var cusid = gGetProperties("cusid");
		var appid = gGetProperties("appid");
		
		
		window.js.play(cusid,appid,payTotalSum,payType);
	   //resultObject = window.js.play(cusid,appid,payTotalSum,paytype);
	   //resultObject = JSON.parse(resultObject);
	}
}
/**
 * 获取是否有网络
 */
function gNetWork(){
	var result = false;
	if(window.js){
		result = window.js.isNetWorkEnable();
	}
	return result;
}
/**
 * 获取网络名称
 */
function gNetWorkName(){
	var str = "";
	if(window.js){
		str = window.js.getNetWorkName();
	}
	return str;
}


/**
*通知安卓后台，开始支付检查
*/
function gStartPlay(reqsn){
	if(window.js){
		window.js.startPlay(reqsn);
	}else{
		confirmCysDialog("支付检查失败！","","关闭",function(){},function(){}); 
	}
	
}


/**
*出票
*/
function gCutPaper(motorNumber,ticketCount){
	var result = -100;
	if(window.js){
		
		result = window.js.cutPaper(parseInt(motorNumber),parseInt(ticketCount));

	}
	return result;
}

/**
*退出安装系统
*/
function gExitApp(){
	if(window.js){
		window.js.quitApp();
	}else{
		confirmCysDialog("退出系统失败！","","关闭",function(){},function(){}); 
	}
	
}
function gRestartApp(){
	if(window.js){
		window.js.reStart();
	}else{
		confirmCysDialog("重启系统失败！","","关闭",function(){},function(){}); 
	}
}



function setTerminalLength(cardLength,motorNumber){
	var result=-100;
	if(window.js){
		 console.log('票长：' +cardLength + '机头：' + motorNumber);
		 result = window.js.setCardLengthSign(parseInt(cardLength),parseInt(motorNumber));
	}
	return result;
}
/**
*保存配置的即开票信息
*/
function saveUserSetData(cardLength,motorNumber){
     
	  var re=setTerminalLength(cardLength,motorNumber);
	  var liindex = parseInt(motorNumber)-1;
	  var result = '';
	  // re = 1;
	  $("#ownerListUl > li").eq(liindex).find('.number').addClass('error');
	  $("#ownerListUl > li").eq(liindex).find('.tip').attr('data-status',re);
	  if(re == -100){
	  	  //console.log(liindex); 
	  	  //setTerminalMotorStatus(motorNumber,re); 	  
	  	  $("#ownerListUl > li").eq(liindex).find('.tip').html(':连接服务器失败');
		  confirmCysDialog("连接服务器失败","","关闭",function(){},function(){
		  	//setTerminalLengthFail(motorNumber);
		  /*window.location.href="login.html";*/
		});
		  
	  }else if(re == 1){
	  	//setTerminalMotorStatus(motorNumber,re);
	  	$("#ownerListUl > li").eq(liindex).find('.number').removeClass('error');
	  	$("#ownerListUl > li").eq(liindex).find('.tip').html(':正常');
		  
	 }else if(re == -5){
	 	setTerminalMotorStatus(motorNumber,re);
	 	  $("#ownerListUl > li").eq(liindex).find('.tip').html(':机头无票');
		  confirmCysDialog("机头无票","","关闭",function(){},function(){
			  //setTerminalLengthFail(motorNumber);
			  });
		  
	 }else if(re == -7){
	 	setTerminalMotorStatus(motorNumber,re);
	 	  $("#ownerListUl > li").eq(liindex).find('.tip').html(':机头故障');
		  confirmCysDialog("设置失败，机头故障","","关闭",function(){},function(){
			  //setTerminalLengthFail(motorNumber);
			  });	  
	 }else if(re == -8){
		  setTerminalMotorStatus(motorNumber,re);
	 	  $("#ownerListUl > li").eq(liindex).find('.tip').html(':通讯故障');
		  confirmCysDialog("设置失败，机头通讯故障","","关闭",function(){},function(){
		  	//setTerminalLengthFail(motorNumber);
		  });
	 }else if(re == -2){
		  setTerminalMotorStatus(motorNumber,re);
	 	  $("#ownerListUl > li").eq(liindex).find('.tip').html(':无应答');
		  confirmCysDialog("设置失败，串口无返回","","关闭",function(){},function(){
		  	//setTerminalLengthFail(motorNumber);
		  });  
	 }else if(re == -1){
		  setTerminalMotorStatus(motorNumber,re);
	 	  $("#ownerListUl > li").eq(liindex).find('.tip').html(':应答码错');
		  confirmCysDialog("设置失败，返回应答码不正确","","关闭",function(){},function(){
		  	//setTerminalLengthFail(motorNumber);
		  });
	 }else if(re == 0){
	 	  //setTerminalMotorStatus(motorNumber,re);
	 	  $("#ownerListUl > li").eq(liindex).find('.tip').html(':未连接');	
		  //confirmCysDialog("设置失败，机头故障","","关闭",function(){},function(){setTerminalLengthFail(motorNumber);});	  
	 }

	 
}
function setTerminalLengthFail(motorNumber){
	var param="terminalNo="+g_machineNo.terminalNo+"&motorNumber="+motorNumber;
	$.ajax({
	  type: 'GET',
	  url: serviceUrl + '/payInfo/v1/updateTerminalTicket?'+param+accessToken,
	  async: false,
	  dataType: "jsonp",
	  jsonp: "updateTerminalTicket",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
	  jsonpCallback:"updateTerminalTicket",//自定义的jsonp回调函数名，默认未jquery自动生成的随机函数名，也可以写“?”jquery会自动处理
	  success: function(data){
		
	  }
	});	
	//window.location.href="login.html";
}
//设置机头状态
function setTerminalMotorStatus(motorNumber,status){
	var param="terminalNo="+g_machineNo.terminalNo+"&motorNumber="+motorNumber + "&status=" + status;
	$.ajax({
	  type: 'GET',
	  url: serviceUrl + '/payInfo/v1/updateTerminalTicket?'+param+accessToken,
	  async: false,
	  dataType: "jsonp",
	  jsonp: "updateTerminalTicket",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
	  jsonpCallback:"updateTerminalTicket",//自定义的jsonp回调函数名，默认未jquery自动生成的随机函数名，也可以写“?”jquery会自动处理
	  success: function(data){
		  
	  }
	});
}


function ConnectTimeout(){
	this.t = "";
}

ConnectTimeout.prototype = {
    constructor:ConnectTimeout,
    showTip: function(){
    	this.t = setTimeout(function(){
    		confirmCysDialog("连接服务器失败，请联系客服！","","关闭",function(){},function(){}); 
    	},10000);
    },
    hideTip: function(){
    	if(this.t){
    		clearInterval(this.t);
    		clossCysDialog();
    	}
    }
}

