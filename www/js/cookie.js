
//var port = 'http://192.168.31.145:8081/rpm/servlet/PhoneServlet';
//var port = 'http://40.16.1.93:7001/rpm/servlet/PhoneServlet';//强哥服务器
var port = 'http://60.10.20.15:18001/rpm/servlet/PhoneServlet';//反向代理服务器


function setCookie(name,value,iDay){
    var str = name + '='+ JSON.stringify(value.result) +';path=/';
    //如果传入了过期天数
    if(iDay){
        var oDate = new Date();
        oDate.setDate(oDate.getDate()+iDay);
        str += ';expires='+oDate;
    }
    document.cookie = str;
}

function getCookie(name){
    var arr = document.cookie.split('; ');
    for(var i = 0; i < arr.length;i++){
        var arr2 = arr[i].split('=');
        if(name == arr2[0]){
            return arr2[1];
        }
    }

    return '';
}

function removeCookie(name){
    setCookie(name,'zns',-2)
}

var paramData={};

/**
*获取通用参数.
*
*/
function getCommonParams(resultStr){
	var result = eval(resultStr);
/*	paramData.currentuserid = result.user_id;
	paramData.branch_id = result.branch_id;
	paramData.role_name = result.role_name;
	paramData.role_id = result.role_id;
	paramData.organname = result.organname;*/

	/*paramData.currentuserid = "860030013";
	paramData.cust_id = "860030013";
	paramData.S_organno = "86003";
	paramData.org_region = "86003";
	paramData.role_id = "0013";
	paramData.organname = "organname";*/
    paramData.user_id = "admin";
    paramData.role_id = "0015";
    paramData.role_name = "管理员";
    paramData.person_id = "3160029";
    paramData.branch_id = "600000";
/*{"user_id":"admin","role_id":"0015","role_name":"管理员","person_id":"3160029","branch_id":"600000","organname":"廊坊银行"}*/
	return paramData;
}

/**
*替换所有字符.
*value 要替换字符的字符串对象
*str 要被替换的字符
*str1 要被替换成为的字符
*/
function replaceAll(value, str, str1){
	return value.replace(new RegExp(str,"gm"),str1);
}

/**
*替换所有字符.
*value 要替换字符的字符串对象
*str 要被替换的字符
*str1 要被替换成为的字符
*/
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null){
		 return unescape(r[2]);
	 }
	 return null;
}
