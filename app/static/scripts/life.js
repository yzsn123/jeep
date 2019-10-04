
//历史车型年份跳转
 var years = document.querySelectorAll('.year-head a');
 var yearCon = document.querySelector('.year-content');
 var preIndex = 0;
 years[preIndex].style.borderColor = 'orange';
 for(var i = 0; i < years.length; i++){
     years[i].index = i;
     years[i].onclick = function(){
         years[preIndex].style.borderColor = 'transparent';
         years[this.index].style.borderColor = 'orange';
         preIndex = this.index;
         jumpA(years[this.index],yearCon);
     }
 }
//导航栏跳转
var lifeNav = document.querySelectorAll('.nav a');
for(let i = 0; i < lifeNav.length; i++){
    lifeNav[i].onclick = function(){
        jumpA(lifeNav[i],document.documentElement);
    }
}



function jumpA(dom1,dom2){
    var value = dom1.getAttribute('value');
    var domScroll = document.getElementById(value);
    var target = domScroll.offsetTop;
    var current = dom2.scrollTop;
    scrollMove(dom2,current,target);
    console.log(dom1,dom2,target,current);
}
function scrollMove(dom,current,target){
    var speed = (target - current)/20;
    clearInterval(dom.time);
    dom.time = setInterval(function(){
        if(Math.abs(speed) >= Math.abs(dom.scrollTop - target)){
            dom.scrollTop = target;
            clearInterval(dom.time);
            speed = 0;
        }
        dom.scrollTop += speed;
    },10);
}

var clubD = document.querySelectorAll('.img-content div');
var clubNum = document.querySelectorAll('.club-num span');
var clubL = document.querySelector('.club-banner .left');
var clubR = document.querySelector('.club-banner .right');
opaMove(clubD,clubL,clubR,clubNum);

function opaMove(dom,left,right,num){
    var preIndex = 0;
    var index = 0;
 
    num[preIndex].style.backgroundColor = 'orange';
    dom[preIndex].style.opacity = 1;
    
    function show(dom1){
        dom1.opa = 30;
        dom1.time = setInterval(function(){
            dom1.opa += 5;
            if(dom1.opa >= 100){
                dom1.opa = 100;
                clearInterval(dom1.time);
            }
            dom1.style.opacity = dom1.opa / 100;
        },30)
        num[index].style.backgroundColor = 'orange';
    }

    left.onclick = function(){
        clearInterval(dom[index].time);
        index--;
        if(index < 0){
            index = dom.length - 1;
        }
        hide(dom);
        show(dom[index]);
    }
    right.onclick = function(){
        clearInterval(dom[index].time);
        index ++;
        if(index >= dom.length){
            index = 0;
        }
        hide(dom);
        show(dom[index]);
    }

    function hide(dom2){
        dom2[preIndex].style.opacity = 0;
        num[preIndex].style.backgroundColor = 'black';
        preIndex = index;
    }

    if(num){
        for(let i = 0; i < num.length; i++){
            num[i].onclick = function(){
                clearInterval(dom[index].time);
                index = i;
                hide(dom);
                show(dom[index]);
            }
        }
    }
}