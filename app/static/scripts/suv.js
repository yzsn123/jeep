



var suvDetail = document.querySelector('.suv-detail');
var suvLeft = document.querySelector('.suv-left');
var suvRight = document.querySelector('.suv-right');
var suvSpan = document.querySelectorAll('.suv-img span');
var suvClose = document.querySelector('.suv-close');
var suvImgs = document.querySelectorAll('.detail-img img');

//点击关闭按钮
suvClose.onclick = function(){
    suvDetail.style.display = 'none';
}
for(var i = 0; i < suvSpan.length; i++){
    suvSpan[i].index = i;
    suvSpan[i].onclick = function(){
        suvDetail.style.display = 'block';
        opaMove(suvImgs,suvLeft,suvRight,0,this.index);
    }
}

function opaMove(dom,left,right,num,index){
    if(index){
        var preIndex = index;
        var index = index;
    }
    else{
        var preIndex = 0;
        var index = 0;
    }
    hide(dom);
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

        if(num){
            num[index].style.backgroundColor = 'orange';
        }
        
    }

    left.onclick = function(){
        clearInterval(dom[index].time);
        index--;
        if(index < 0){
            index = dom.length - 1;
        }
        hide(dom);
        show(dom[index]);
        console.log(index);

    }
    right.onclick = function(){
        clearInterval(dom[index].time);
        index ++;
        if(index >= dom.length){
            index = 0;
        }
        hide(dom);
        show(dom[index]);
        console.log(index);

    }

    function hide(dom2){
        for(var i = 0; i < dom2.length; i++){
            dom2[i].style.opacity = 0;
        }
        if(num){
            num[preIndex].style.backgroundColor = 'black';
        }
        preIndex = index;
    }

    if(num){
        num[preIndex].style.backgroundColor = 'orange';
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


//拖动小球
var suvBall = document.querySelector('.suv-ball');
var suvOne = document.querySelector('.suv-one');
var suvTwo = document.querySelector('.suv-two');

Down(suvBall,0.41,0.56);


function Down(dom,min,max){
    min = min * dom.parentNode.clientWidth;
    max = max * dom.parentNode.clientWidth;

    dom.onmousedown = function(e){
        var e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValues = false;
        var mleft = e.clientX - dom.offsetLeft;
        
        document.onmousemove = function(e){
            
            var e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValues = false;
            var x = e.clientX - mleft;
            if(x >= max){
                x = max;
            }
            if(x > 0.5*dom.parentNode.clientWidth){
                suvTwo.style.display = 'block';
                suvOne.style.display = 'none';
            }else{
                suvOne.style.display = 'block';
                suvTwo.style.display = 'none';
            }
            if(x <= min){
                x = min;
            }
            suvBall.style.left = x + 'px';
        }
        document.onmouseup = function(){
            document.onmousemove = null;
        }
    }
}