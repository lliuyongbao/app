$(function (){
    $('.houtai-flex a').on('click',function (){
        getData();
    });

    function getData(){
        //跳转首页
        $.ajax({
            url:port,
            data:getCommonParams(document.cookie),
            dataType:'json',
            cache:false,
            success:(r)=>{

                if (r.status){
                    r = JSON.stringify(r);
                    setCookie('home',r,1);//设置过期时间
                    console.log(r);
                    setCommonParams(r.result.user_id,r.result.org_region,r.result.org_region,r.result.user_id);
                    window.open('shouye.html','_self');//跳转到首页

                }else{

                    alert(r.message);
                }
                
            },error:(r)=>{
                alert('用户名或者密码错误！');
            }
        });

    };

    //跳转
    ;{

    }
    
});
