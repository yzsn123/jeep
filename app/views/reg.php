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
$sql = "insert into user set phone=$phone,psd=$psd";
mysql_query($sql);

echo '{"msg":"注册成功，请返回登录"}'

?>