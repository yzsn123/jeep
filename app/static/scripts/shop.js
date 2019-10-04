


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
