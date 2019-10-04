


var submit1 = document.querySelector('.submit1');
var submit2 = document.querySelector('.submit2');
var login = document.querySelector('.login');
var reg = document.querySelector('.reg');

//1登录 2注册
var flag = judgeLogin();
if(flag == '1'){
    login.style.display = 'block';
    reg.style.display = 'none';
}else if(flag == '2'){
    login.style.display = 'none';
    reg.style.display = 'block';
}

submit2.onclick = function(){
    flag = judgeLogin();
    if(flag == '2'){
        login.style.display = 'block';
        reg.style.display = 'none';
        setCookie('flag',1,7);
    }else if(flag == '1'){
        login.style.display = 'none';
        reg.style.display = 'block';
        setCookie('flag',2,7);
    }
}

//判断登录还是注册
function judgeLogin(){
    if(getCookie('flag')){
        var flag = getCookie('flag');
    }else{
        var flag = '2';
        setCookie('flag',flag,7)
    }
    return flag;
}
