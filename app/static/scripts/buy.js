var buy = document.querySelector('.buy');
var buyWrap = document.querySelector('.buy-wrap');
//如果用户登录了
if (getCookie('user')) {
    var buyPhone = getCookie('user');

    //通过buy.php获取数据库里的code
    ajax({
        url: 'buy.php',
        data: `phone=${buyPhone}&buy=see`, //传送一个buy状态，buy为购买，see为查看, del为删除
        type: 'post',
        succeed: function (data) {
            var buyJson = JSON.parse(data);
            // console.log(buyJson);

            //通过从php里得到的数据跟json数据对比，然后渲染
            ajax({
                url: '../static/data/data.json',
                type: 'post',
                succeed: function (d) {
                    var arr = [];
                    var d = JSON.parse(d);
                    for (var k in buyJson) {
                        for (var j in d) {
                            if (buyJson[k].code == d[j].code) {

                                arr.push(d[j]);

                                var li = document.createElement('li');

                                li.innerHTML = `
                                <img src="${d[j].imgUrl}" alt="">
                                <h3>${d[j].title}</h3>
                                <p>${d[j].detail}</p>
                                <h4>${d[j].price}</h4>
                                <button code="${d[j].code}">删除</button>`
                                buy.appendChild(li);
                            }
                        }
                    }
                    if (arr.length > 0) {
                        buyWrap.innerText = '';
                        
                        var buyDel = document.querySelectorAll('.buy button');
                        for (let i = 0; i < buyDel.length; i++) {
                            buyDel[i].onclick = function () {
                                // console.log(this.getAttribute('code'))
                                var delCode = this.getAttribute('code');
                                ajax({
                                    url: 'buy.php',
                                    data: `phone=${buyPhone}&buy=del&code=${delCode}`,
                                    type: 'post',
                                    succeed: function () {
                                        buy.removeChild(buyDel[i].parentNode);

                                    }
                                })
                            }
                        }
                    } else {
                        buyWrap.innerText = '还未有订单，赶紧去下单吧！'
                    }

                }
            })
        }
    })
} else {
    alert('请先登录查看订单');
}