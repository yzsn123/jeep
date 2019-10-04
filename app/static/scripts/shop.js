


var shopLis = document.querySelectorAll('.shop-menu li');
var shopShow = document.querySelector('.shop-show img');
var shopH2 = document.querySelector('.shop-menu h2');
var shopP = document.querySelector('.shop-menu p');
var shopH3 = document.querySelector('.shop-menu h3');

if(getCookie('code')){
    var shopCode = getCookie('code');
}else{
    var shopCode = '1';
}
//一进页面获取要展示的汽车
getShop();

for(var i = 0; i < shopLis.length; i++){
    shopLis[i].className = "";
}
shopLis[shopCode - 1].className = 'shop-active';

for(let i = 0; i < shopLis.length; i++){
    shopLis[i].onclick = function(){
        shopLis[shopCode - 1].className = '';
        shopCode = this.getAttribute('code');
        setCookie('code',shopCode,7);
        getShop();
        shopLis[shopCode - 1].className = 'shop-active';
    }
}


//利用ajax获取汽车
function getShop(){
    ajax({
        url:'../static/data/data.json',
        type:'get',
        data:'code='+shopCode,
        succeed:function(data){
            var shopJson = JSON.parse(data);
            var shopObj = {};
            for(var k in shopJson){
                if(shopJson[k].code == shopCode){
                    shopObj = shopJson[k];
                }
            }
            shopShow.src = shopObj.imgUrl;
            shopH2.innerText = shopObj.title;
            shopP.innerText = shopObj.detail;
            shopH3.innerText = shopObj.price;
        }
    });
}




var shopCart = document.querySelector('.shop-cart');
var shopBuy = document.querySelector('.shop-buy');
var shopMesg = document.querySelector('.shop-mesg');

shopCart.onclick = function(){
    if(getCookie('user')){
        var phone = getCookie('user');
        var code = getCookie('code');
        ajax({
            url:'shop.php',
            data:`user=${phone}&code=${code}`,
            type:'POST',
            succeed:function(data){
                console.log(data);
                shopMesg.style.display = 'block';
                setTimeout(function(){
                    shopMesg.style.display = 'none';
                },500)
            }
        })
    }
    else{
        alert('请先登录');
    }
}
