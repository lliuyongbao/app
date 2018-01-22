/*mui.plusReady(function(){  
            //首页返回键处理  
            //处理逻辑：2秒内，连续两次按返回键，则退出应用  
            var first = null;  
            plus.key.addEventListener('backbutton', function(){  
                //首次按键，提示‘再按一次退出应用’  
                if(!first){  
                    first = new Date().getTime();  
                    mui.toast('再按一次退出应用');  
                    setTimeout(function(){  
                        first = null;  
                    },2000)return; 
                } else {  
                    if(new Date().getTime() - first < 2000){  
                        plus.runtime.quit();  
                    }  
                }  
            }, false);  
        });	*/
	mui.plusReady(function(){  
		mui.back=function () {
                	window.history.back();           
            	
            }
    });