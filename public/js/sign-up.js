window.onload = function(){
    var btn=document.getElementById('bt');
    var em=document.getElementById('email');
    var psw=document.getElementById('Password');
    var re_psw=document.getElementById('re-password');
    var divs = document.getElementsByClassName('TF');
    var username=document.getElementById('Username');
    username.onblur=function(){
        if(username.value==''){
            divs[0].innerHTML="用户名不能为空！"
        }
        else{
                divs[0].innerHTML=""
            }
    }
    em.onblur=function(){
        if(em.value==''){
            divs[1].innerHTML="邮箱账号不能为空！"
        }else{
            divs[1].innerHTML=""
            $.get('/findUser?email='+em.value,function(data,status){
            if(data=='yes') divs[1].innerHTML = ""
            else divs[0].innerHTML = '此邮箱已被注册'
        })
        }	
    }
    psw.onblur=function(){
        var password=psw.value;
        if(password.length!=0&&password.length<6||password.length>18){
            divs[2].innerHTML="密码长度必须为6到18位！"
        }
        else{
            divs[2].innerHTML=''
        }
    }
    re_psw.onblur=function(){
        var password=psw.value;
        var re_password=re_psw.value;
        if(re_password!=password){
            divs[3].innerHTML="密码不一致，请重新输入！"
        }
        else{
            divs[3].innerHTML=''
        }
    }
    btn.onclick=function(){
        if(em.value==''||psw.value==''||re_psw.value==''||username.value==''){
            if(em.value==''){
                divs[0].innerHTML="用户名不能为空！"
                }
            if(em.value==''){
            divs[1].innerHTML="邮箱账号不能为空！"
            }
            if(psw.value==''){
            divs[2].innerHTML="密码不能为空！"
            }
            if(re_psw.value==''){
            divs[3].innerHTML="请确认密码！"
            }
            return false;
        }
        else if(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(em.value)==false){
                divs[1].innerHTML="请输入正确的邮箱格式！";
                return false;
            }
        if(divs[0].innerHTML==''&&divs[1].innerHTML==''&&divs[2].innerHTML==''&&divs[3].innerHTML=='')
        document.myform.submit();
    }
}
    