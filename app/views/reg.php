<?php

header('Content-type:text/html;charset=utf8');
error_reporting(0);
$phone = $_POST['phone'];
$psd = $_POST['psd'];

$link = mysql_connect('localhost','root','') or die("Error-数据库连接失败");

mysql_query("create database jeep charset utf8");
mysql_query('use jeep');
$creat = "CREATE TABLE USER(phone CHAR(30) PRIMARY KEY  NOT NULL,psd CHAR(30) NOT NULL ) CHARSET utf8;";
mysql_query($creat);

$isHave ="select * from user where phone=$phone";
$result = mysql_query($isHave);

$num =  mysql_affected_rows() ; // 函数返回前一次 MySQL 操作所影响的记录行数
if($num > 0){
   echo '{"msg":"该手机号已注册"}';
    // $rows = [];
    // // mysql_fetch_assoc 函数每次从结果集中取得一行作为关联数组， 如果没有则返回 false。
    // while($row = mysql_fetch_assoc($result)){
    //     $rows[] = $row;
    // }
    // print_r($rows); // 二维数组
    // echo json_encode($rows,JSON_UNESCAPED_UNICODE);//数组转JSON字符串
    exit();
}else{
    $sql = "insert into user set phone=$phone,psd=$psd";
    mysql_query($sql);
    echo '{"msg":"注册成功，请返回登录"}';
    exit();
}
?>