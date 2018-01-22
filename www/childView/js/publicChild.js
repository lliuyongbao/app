/*
* @Author: Marte
* @Date:   2017-04-25 17:07:10
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-14 09:52:16
*/

'use strict';

        $("#menu-wrapper").html('<div id="menu-search">'
                            +'<input id="menu-search-input-text" type="text" placeholder="搜索" />'
                            +'<input id="menu-search-input-submit" type="submit" value="" />'
                        +'</div>'
                        +'<ul class="menu">'
                        +'<li id="a-submenu-1" class="icon plus">'
                            +'<a href="javascript:;">'
                            +'<span class="menu-li-title">客户管理</span>'
                            +'<img class="menu-li-arrow-submenu" src="img/icons/submenu.png" alt="" />'
                            +'</a>'
                        +'<ul id="submenu-1">'
                          +'<li>'
                                +'<a href="../kehuxinxi.html">'
                                    +'<span class="menu-li-title">客户信息</span>'
                                    +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                                +'</a>'
                            +'</li>'
                        +'</ul>'
                    +'</li>'
                    +'<li class="icon box" id="public">'<!-- 公司贷款定价 -->
                        +'<a href="javascript:;">'
                          +'<span class="menu-li-title">公司贷款定价</span>'
                          +'<img class="menu-li-arrow-submenu" src="img/icons/submenu.png" alt="" />'
                        +'</a>'
                         +'<ul id="submenu-2">'
                          +'<li>'
                                +'<a href="../daikuanshisuan.html">'
                                    +'<span class="menu-li-title">对公定价试算</span>'
                                    +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                                +'</a>'
                            +'</li>'
                            +'<li>'
                                +'<a href="../shisuandingjiadan.html">'
                                    +'<span class="menu-li-title">试算定价单列表</span>'
                                    +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                                +'</a>'
                            +'</li>'
                            +'<li>'
                                +'<a href="../theTrialOrder.html">'
                                    +'<span class="menu-li-title">待审定价列表</span>'
                                    +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                                +'</a>'
                            +'</li>'
                            +'<li>'
                                +'<a href="../duigongyongxin.html">'
                                    +'<span class="menu-li-title">用信定价单查询</span>'
                                    +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                                +'</a>'
                            +'</li>'
                            +'</ul>'
                    +'</li>'
                      +'<li class="icon box" id="private">'<!-- 零售贷款定价 -->
                        +'<a href="javascript:;">'
                          +'<span class="menu-li-title">零售贷款定价</span>'
                          +'<img class="menu-li-arrow-submenu" src="img/icons/submenu.png" alt="" />'
                        +'</a>'
                         +'<ul id="submenu-3">'
                          +'<li>'
                                +'<a href="../gerendaikuan.html">'
                                    +'<span class="menu-li-title">零售定价试算</span>'
                                    +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                                +'</a>'
                            +'</li>'
                            +'<li>'
                                +'<a href="../shisuandingjiadan.html">'
                                    +'<span class="menu-li-title">零售试算定价单列表</span>'
                                    +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                                +'</a>'
                            +'</li>'
                            +'<li>'
                                +'<a href="../daishenkehudingjlieb.html">'
                                    +'<span class="menu-li-title">零售待审定价列表</span>'
                                    +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                                +'</a>'
                            +'</li>'
                            +'<li>'
                                +'<a href="../lingshoudingjdan.html">'
                                    +'<span class="menu-li-title">零售用信定价单查询</span>'
                                    +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                                +'</a>'
                            +'</li>'
                            +'</ul>'
                    +'</li>'
                    +'<li class="icon star">'<!--系统管理-->
                        +'<a href="../out.html">'
                          +'<span class="menu-li-title">退出系统</span>'
                          +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                        +'</a>'
                        +'</li>'
                        +'</ul>').appendTo("#menu-wrapper")
      /*  var str=unescape(location.href);
        //取得整个地址栏
        var data = {};
        if(str.indexOf("?") > -1){
           var num=str.indexOf("?");
           str=str.substr(num+1);
           data = eval(str);
         }*/
        var data =$.parseJSON(getCookie('home'));
     /*   switch (data.role_id){
        case "3160096" :
            $("li#public").hide();
             $("li#public2").click(function(event){
                alert("权限不够");
                return false;
             });
             break;
        case "0013" :
            $("li#person").hide();
             $("li#person2").click(function(event){
                alert("权限不够");
                return false;
             });
              break;
        default :  break;
        }*/
       if (data.role_id == "3160096") {
             $("li#public").hide();
             $("li#public2").click(function(event){
                alert("权限不够");
                return false;
             })
         }else if(data.role_id == "0013"){
             $("li#person").hide();
             $("li#person2").click(function(event){
                alert("权限不够");
                return false;
             })
         };


