
<?php

header('Content-type:text/html;charset=utf8');
error_reporting(0);

$phone = $_POST['phone'];
$code = $_POST['code'];
$buy = $_POST['buy'];

// $phone = '15970709762';
// $code = '8';
// $buy = 'del';

$link = mysql_connect('localhost','root','') or die("Error-数据库连接失败");

mysql_query('use jeep');
$creatShop = "CREATE TABLE buy(id int primary key auto_increment not null,phone CHAR(30)  NOT NULL,code CHAR(30) NOT NULL ) CHARSET utf8;";
mysql_query($creatShop);

if($buy == 'buy'){
    $sql = "insert into buy set phone=$phone,code=$code";
    mysql_query($sql);
    echo  '{"mesg":"购买成功"}';
    exit();

}

else if($buy == 'see'){
    $isHave ="select * from buy where phone=$phone";

    $result = mysql_query($isHave);

    $num =  mysql_affected_rows() ; // 函数返回前一次 MySQL 操作所影响的记录行数

    if($num > 0){
        $rows = [];
        // mysql_fetch_assoc 函数每次从结果集中取得一行作为关联数组， 如果没有则返回 false。
        while($row = mysql_fetch_assoc($result)){
            $rows[] = $row;
        }
        echo json_encode($rows,JSON_UNESCAPED_UNICODE);//数组转JSON字符串
        exit();
    }else{
        echo '{"mesg":"还未有订单"}';
        exit();
    }
}else if($buy == 'del'){
    $del = "delete from buy where code=$code AND phone=$phone";
    mysql_query($del);
    echo  '{"mesg":"订单删除成功"}';
    exit();
}

?>