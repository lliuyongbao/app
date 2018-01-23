$(function(){
                  var wait =5;
                  var timer = null;
                  var switch1 = true;
                function time1(o){
                    clearTimeout(timer)
                    if(wait == 0){
                        $("#"+o).removeAttr("disabled");
                        $("#"+o).html("获取验证码");
                        switch1 = true;
                        wait = 5;
                    }else{
                       $("#"+o).attr("disabled",true);
                        $("#"+o).html("重新发送("+wait+")");
                        switch1 = false;
                        wait--;
                        timer = setTimeout(function(){time1(o)},1000)
                    }
                }
                //点击获取验证码时验证信息
                $("#obtain").click(function() {
                        if(switch1){
                            //var reg = /^1\d{10}$/;
                            var userName = $("#username").val();//用户名
                            var passWord = $("#password").val();//密码
                            //var phoneNum = $("#phone").val();//手机号
                            var verifica = $("#verifica").val();//验证码
                            if(userName == ''){$(".username-error").show();return;}
                            if(password == ''){$(".password-error").show();return;}
                            //if(phoneNum == '' || !reg.test(phoneNum)){$(".phone-error").show();return;}
                            var params={};
                            params.class = "appUserLoginConfirm";
                            params.userName = userName;
                            params.passWord = passWord;
                           // params.phoneNum = phoneNum;
                            time1("obtain");
                            $.ajax({
                                    url:port,
                                    type: "POST",
                                    data:params,
                                    dataType:'json',
                                    cache:false,
                                    success:function(r){
                                        if(r.status){
                                          if(r.result.pranms == "1"){
                                              $(".username-error").show().html("用户名不存在");return;
                                          }else if(r.result.pranms == "2"){
                                              $(".password-error").show().html("密码错误!");return;
                                          }else if(r.result.pranms == "3"){
                                                $(".verifica-error").show();
                                                $(".verifica-error").html("验证码已发送至:"+r.result.pcTelphone+"");
                                                $(".verifica-success").html(r.result.identifyingCode);

                                          }else{
                                                     $(".verifica-error").show();
                                                $(".verifica-error").html("请先联系管理员绑定手机号!");
                                            }
                                        }
                                    },error:function(r){
                                        alert("请求失败!请稍后重试...");
                                    }

                            });
                            return false;
                        }
                });

                //用户名失去焦点
                $("#username").blur(function(event) {
                    if($(this).val() == ""){
                    $(".username-error").show().html("请输入用户名");return;
                    }else{
                    $(".username-error").hide()
                    }
                });
                //密码失去焦点
                $("#password").blur(function() {
                    if($(this).val() == ""){
                    $(".password-error").show().html("请输入密码");return;
                    }else{
                    $(".password-error").hide()
                    }
                });
                //验证码失去焦点
                /*$("#verifica").blur(function() {
                    if($(this).val() == ""){
                    $(".verifica-error").show();return;
                    }else{
                    $(".verifica-error").hide()
                    }
                });*/
                //登录
                $("#btni").click(function() {
                            var userName = $("#username").val();//用户名
                            var passWord = $("#password").val();//密码
                            var verifica = $("#verifica").val();//验证码
                            if(userName == ''){$(".username-error").show();return;}
                            if(password == ''){$(".password-error").show();return;}

                             if($("#verifica").val() == "" || ($("#verifica").val() != $(".verifica-success").html())){

                              $(".verifica-error").show();
                              $(".verifica-error").html("请正确输入验证码");
                              return;
                              }else{
                                $(".verifica-error").hide()
                              }

                            var params={};
                            params.class = "userSignOn";
                            params.userName = userName;
                            params.passWord = passWord;
                            params.numCode = verifica;
                            $.ajax({
                                    url:port,
                                    type: "POST",
                                    data:params,
                                    dataType:'json',
                                    cache:false,
                                    success:function(r){
                                       if(r.status){
//                                              if(r.result.pranms =="2"){
//                                                  $(".password-error").show().html("用户名/密码错误!")
//                                              }
                                             var r = r.result;
                                             var info = {};
                                             info.creditMessage = r.creditMessage;
                                             info.retailMessage = r.retailMessage;
                                             info.role_id=r.role_id;
                                             localStorage.setItem("home", JSON.stringify(r));
                                            window.location.href = "shouye.html?data=" + escape(JSON.stringify(info));//跳转到首页
                                        }
                                    },error:function(r){
                                        alert("请求失败!请稍后重试...");
                                    }

                            });
                            return false;
                });
				、// 连续点击返回按键，退出app 
			var backClick=0;// 退出点击次数，默认为0
			function backbutton () {
					var time=new Date(); // 2s内再次点击就退出
					// 监听返回按钮
					document.addEventListener('backbutton', function(evt) {
						var url = location.href.split('/views/')[1].split('.')[0];
						// var urlList = location.href
						if(url=='index'){  // 处于app首页,满足退出app操作
							if(backClick){  // 不为0时
								navigator.app.exitApp();  // app退出
							}else{
								alert('再按一次退出廊坊银行');  // 提示信息
							  
								if(new Date()-time<2000){// 小于2s,退出程序
									backClick++;
								}else{   // 大于2s，重置时间戳，
									time = new Date();
								}
							}
							return;
						}
							return;
						}
					   
						history.back();  // 不满足退出操作，，返回上一页
					}, false);
				},
            })