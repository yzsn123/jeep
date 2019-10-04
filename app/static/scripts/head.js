
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
}



