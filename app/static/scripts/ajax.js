

function ajax(obj){
    //创建XMLHttpRequest对象
    if(window.XMLHttpRequest){
        var xhr = new XMLHttpRequest();
    }else{
        var xhr = new ActiveXObject(Microsoft.XMLHTTP);
    }
    //连接服务器
    if(obj.type == 'get' || obj.type =='GET'){
        //get方式连接服务器    发送请求
        xhr.open('get',obj.url + '?' + obj.data + '&_=' + new Date().getTime(),true);
        xhr.send(null);
    }
    //post方式连接服务器   发送请求
    else if(obj.type =='post' || obj.type == 'POST'){
        xhr.open('post',obj.url,true);
        //post请求要在send前设置http请求头，作用是模拟表单post来传递参数
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(obj.data);
    }
    //服务器响应情况
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){//请求完成
            if(xhr.status == 200){//请求成功
                obj.succeed(xhr.responseText);
            }
            else{
                obj.failed(xhr.status);
            }
        }
        
    }
}