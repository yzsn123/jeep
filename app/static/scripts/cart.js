var cart = document.querySelector('.cart');
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
                    for (var i in obj) {
                        var li = document.createElement('li');
                        li.innerHTML = `
                        <img src="${obj[i].imgUrl}" alt="">
                        <h3>${obj[i].title}</h3>
                        <p>${obj[i].detail}</p>
                        <h4>${obj[i].price}</h4>
                        <span>立即购买</span>`
                        cart.appendChild(li);
                    }
                    // console.log(obj)
                }
            })

        }
    })
} else {
    alert('请先登录查看购物车');
}