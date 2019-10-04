

//头部划过品牌车型切换图片
var headImg = document.querySelector('.car-img img');
var carHeadLis = document.querySelectorAll('.head-car li');
var carImgs = document.querySelectorAll('.head-car img');

for(let i = 0; i < carHeadLis.length; i++){
    carHeadLis[i].onmouseover = function(){
        var src = carImgs[i].src;
        var srcIndex = src.lastIndexOf('/');
        var url = src.slice(0,srcIndex + 1);
        var imgS = src.slice(srcIndex + 1);
        var char = 'nav-cars-news-';
        headImg.src = url + char + imgS.replace('png','jpg');
    }

    carHeadLis[i].onmousedown = function(){
        var carCode = this.getAttribute('code');
        setCookie('code',carCode);
    }
}


//点击预约试驾或jeep商城显示商品页面
var order = document.querySelector(".head-order");
var orderClose = document.querySelector('.order-close');
var orderBg = document.querySelector('.order-bg');
var shop = document.querySelector(".head-shop");
var shopClose = document.querySelector('.shop-close');
var shopBg = document.querySelector('.shop-bg');

//点击打开申请试驾
orderClose.onclick = function(){
    orderBg.style.display = "none";
}
order.onclick = function(){
    orderBg.style.display = "block";
}


