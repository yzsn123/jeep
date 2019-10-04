

//首页汽车点击购车
var carSelect = document.querySelectorAll('.car-select .carCode');
for(let i = 0; i < carSelect.length; i++){
    carSelect[i].onclick = function(){
        var code = this.getAttribute('code');
        setCookie('code',code,7);
    }
}

