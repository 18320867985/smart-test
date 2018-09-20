var g_orderMessage = '[{"cardLength":"51","gameNo":"G0232","image":"/home//img//","motorNumber":"1","name":"美梦成真","num":1,"price":"2","saleNum":"1","status":"","terminalNo":"1002"},{"cardLength":"51","gameNo":"G0232","image":"/home//img//","motorNumber":"2","name":"美梦成真","num":1,"price":"2","saleNum":"2","status":"","terminalNo":"1002"}]';
var g_payOrder = '[{"index":0,"terminalNo":"1002","gameNo":"G0232","num":1,"motorNumber":"1","price":"2","gameName":"美梦成真","reqsn":"201707260019578174_1002","cutCardResult":1},{"index":1,"terminalNo":"1002","gameNo":"G0232","num":1,"motorNumber":"2","price":"2","gameName":"美梦成真","reqsn":"201707260019578174_1002","cutCardResult":1}]';


g_orderMessage = JSON.parse(g_orderMessage);
g_payOrder = JSON.parse(g_payOrder);


var staticMotorResult="none";
var executeInde = 0;
var setToServerDsd = $.Deferred(); 
var staticOrderLen = 0;


var getMotoResult = function(order){
    var dtd = $.Deferred(); 
    staticMotorResult="none";
    var motorNumberOut=order[0].motorNumber;             //机头
    var price = parseInt(g_orderMessage[curIndex].price);//价格
    var result = gCutPaper(motorNumberOut,order[0].num); //出票结果
    staticMotorResult = result;
    if(result != 1){
        failNum++;
        failMoney += price;
        setTerminalLengthFail(motorNumberOut); 
    }
    if(result == 1){
        successNum ++;
    } 
    if(staticMotorResult != "none"){
        dtd.resolve(); 
    }
　　

　　return dtd.promise();
};
var startGetMotoResult=function(order){
    $.when(getMotoResult(order))
    .done(function(){ 

        var sendToServer = function(){
            var param = "?terminalNo=" +g_machineNo.terminalNo
            + "&num=" + g_orderMessage[0].num + "&price=" 
            + g_orderMessage[0].price + "&gameNo=" 
            + g_orderMessage[0].gameNo + "&gameName=" 
            + g_orderMessage[0].name + "&motorNumber="
            + g_orderMessage[0].motorNumber + "&reqsn="
            + g_reqsn + "&cutCardResult=" + staticMotorResult;
            $.ajax({
              type: 'GET',
              url: serviceUrl + '/payInfo/v1/saveTerminalSale' + param,
              dataType: "jsonp",
              jsonp: "saveTerminalSale",
              jsonpCallback:"saveTerminalSale",
              timeout:5000,
              success: function(data){
                if(data.retcode == "SUCCESS"){
                    setToServerDsd.resolve(); 
                }  
              },
              error: function(data){
                setToServerDsd.reject();    
              }
            });
            return setToServerDsd;
        };

        //不管出票成功或失败调用保存销量接口
        $.when(sendToServer())
        .done(function(){ 
            var tempOrder = gGetProperties('ticketTypeData');
            tempOrder = JSON.parse(tempOrder);
            var len = tempOrder.length;
            if(len > 0){
                tempOrder.splice(0,1);
                gSetProperties("ticketTypeData",JSON.stringify(tempOrder));
                g_orderMessage.splice(0,1);
                if(executeInde == staticOrderLen-1){
                    showPaySuccess(successNum,failNum,failMoney);
                }
                if(g_orderMessage.length > 0){
                    executeInde++;
                    startGetMotoResult(g_orderMessage);
                }
                    
            }
            
             
        })
        .fail(function(){ 
            var tempOrder = gGetProperties('ticketTypeData');
            tempOrder = JSON.parse(tempOrder);
            var len = tempOrder.length;
            if(len > 0){
                for(var innerIndex=0; innerIndex<tempOrder.length; innerIndex++){
                    if(tempOrder[innerIndex].index == executeInde){
                        tempOrder[innerIndex].cutCardResult = staticMotorResult;
                    }
                }
                gSetProperties("ticketTypeData",JSON.stringify(tempOrder));
                g_orderMessage.splice(0,1);
                if(executeInde == staticOrderLen-1){
                    showPaySuccess(successNum,failNum,failMoney);
                }
                if(g_orderMessage.length > 0){
                    executeInde++;
                    setToServerDsd.reject();  
                    startGetMotoResult(g_orderMessage);
                }        
                
            }
        });
        

        
 
    })
    .fail(function(){});
}
startGetMotoResult(g_orderMessage);




//测试 
/*function send_action() {  
    var dtd = $.Deferred();//定义deferred对象  
    $.ajax({
      type: 'GET',
      url: "http://appw.caishilu.com:8081/app/payInfo/v1/getTerminalConfig?terminalNo=1002",
      dataType: "jsonp",
      jsonp: "getTerminalConfig",
      jsonpCallback:"getTerminalConfig",
      timeout:6000,
      success: function(data){
        console.log(data);
        dtd.resolve(); 
      },
      error: function(data){
         dtd.reject();  
      }
    });

    return dtd.promise(); 
}  



$.when(send_action())
.done(function(){ 
    console.log("请求完成");
})
.fail(function(){console.log("请求失败")});
*/

