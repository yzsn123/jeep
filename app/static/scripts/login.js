


var submit1 = document.querySelector('.submit1');
var submit2 = document.querySelector('.submit2');
var login = document.querySelector('.login');
var reg = document.querySelector('.reg');
var loginH3 = document.querySelector('.login-wrap h3');
function loginShow(){
    login.style.display = 'block';
    reg.style.display = 'none';
    submit2.innerText = '没有账号？点击注册';
    submit1.innerText = '登录';
}
function regShow(){
    login.style.display = 'none';
    reg.style.display = 'block';
    submit2.innerText = '登录';
    submit1.innerText = '注册';
}
//1登录 2注册
var flag = judgeLogin();
if(flag == '1'){
    loginShow()

}else if(flag == '2'){
    regShow();
}

submit2.onclick = function(){
    flag = judgeLogin();
    if(flag == '2'){
        loginShow();
        setCookie('flag',1,7);
    }else if(flag == '1'){
        regShow();
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


var regPhone = document.querySelector('.reg-phone');
var regPsd = document.querySelector('.reg-psd');
var regAgain = document.querySelector('.reg-again');


submit1.onclick = function(){

    var regPhoneV = regPhone.value;
    var regPsdV = regPsd.value;
    var regAgainV = regAgain.value;
    if(flag == '2'){
        if(judgeTel(regPhoneV)){
            if(regPsdV == regAgainV && regPsdV != ""){
                ajax({
                    url:'reg.php',
                    data:`phone=${regPhoneV}&psd=${regPsdV}`,
                    type:'post',
                    succeed:function(data){
                        var json = JSON.parse(data);
                        loginH3.innerText = json.msg;
                    }
                })
            }else{
                if(regPsdV == ""){
                    loginH3.innerText = "密码不能为空"
                }
                else{
                    loginH3.innerText = '两次输入的密码不一样，请重新输入';
                }
            }
        }else{
            loginH3.innerText = '请输入正确的11位手机号';
        }
    }
    
}



function judgeTel (tel){
    var telReg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    if(telReg.test(tel)){
        return true;
      }
    return false;
}