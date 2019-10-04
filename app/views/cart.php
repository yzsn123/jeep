

<?php

header('Content-type:text/html;charset=utf8');
error_reporting(0);

$phone = $_POST['phone'];


$link = mysql_connect('localhost','root','') or die("Error-数据库连接失败");

mysql_query('use jeep');


$isHave ="select * from shop where phone=$phone";

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
    echo '{"msg":"还未添加任何车型"}';
    exit();
}
?>