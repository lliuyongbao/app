$(function (){
    $('#btni').on('click',function (){
         window.open('shouye.html','_self');
    	/*$.ajax({
            url:port,
            data:{class:"userSignOn",actorname:"3160096",password:"123456"},
            dataType:'json',
            cache:false,
            success:function(r){
                if (r.status){
                    //r = JSON.stringify(r.result);
                    setCookie('home',r,1);
                    //设置过期时间
                   window.open('shouye.html','_self');
                    //window.location.href = "shouye.html?data=" + escape(JSON.stringify(r.result.role_id));//跳转到首页
                }else{
                    alert(r.message);
                }
            },error:function(r){
                alert('用户名或者密码错误！');
            }

        });*/
    });
});
//860030013 对公
//3160096   个人