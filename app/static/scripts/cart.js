var cart = document.querySelector('.cart');
var cartWrap = document.querySelector('.cart-wrap');
if (getCookie('user')) {
    var cartPhone = getCookie('user');

    //通过cart.php获取数据库里的code
    ajax({
        url: 'cart.php',
        data: `phone=${cartPhone}`,
        type: 'post',
        succeed: function (data) {
            var cartJson = JSON.parse(data);
            // console.log(cartJson);
            ajax({
                url: '../static/data/data.json',
                type: 'post',
                succeed: function (d) {
                    var obj = {};
                    var d = JSON.parse(d);
                    for (var k in cartJson) {
                        for (var j in d) {
                            if (cartJson[k].code == d[j].code) {
                                obj[`${cartJson[k].code}`] = d[j];
                            }
                        }
                    }
                    if (obj) {
                        cartWrap.innerText = ''
                        for (var i in obj) {
                            var li = document.createElement('li');
                            li.innerHTML = `
                        <img src="${obj[i].imgUrl}" alt="">
                        <h3>${obj[i].title}</h3>
                        <p>${obj[i].detail}</p>
                        <h4>${obj[i].price}</h4>
                        <span>立即购买</span>
                        <button code="${obj[i].code}">删除</button>`
                            cart.appendChild(li);
                        }
                       
                        var cartDel = document.querySelectorAll('.cart button');
                        for(let i = 0; i < cartDel.length; i++){
                            cartDel[i].onclick = function(){
                                // console.log(this.getAttribute('code'))
                                var delCode = this.getAttribute('code');
                                ajax({
                                    url: 'delet.php',
                                    data: `phone=${cartPhone}&code=${delCode}`,
                                    type: 'post',
                                    succeed:function(){
                                        cart.removeChild(cartDel[i].parentNode);
                                        console.log(cartPhone,delCode)
                                    }
                                })
                            }
                        }
                        var cartSpan = document.querySelectorAll('.cart span');
                            for(let i = 0; i < cartDel.length; i++){
                                cartSpan[i].onclick = function(){
                                    alert('购买成功')
                                }
                        }
                    }
                }
            })
        }
    })
} else {
    cartWrap.innerText = ' 购物车空空如也，赶紧去选购商品吧！'
    alert('请先登录查看购物车');
}
