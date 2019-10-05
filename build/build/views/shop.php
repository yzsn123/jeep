
<?php

header('Content-type:text/html;charset=utf8');
error_reporting(0);

$phone = $_POST['user'];
$code = $_POST['code'];

$link = mysql_connect('localhost','root','') or die("Error-数据库连接失败");

mysql_query('use jeep');
$creatShop = "CREATE TABLE shop(id int primary key auto_increment not null,phone CHAR(30)  NOT NULL,code CHAR(30) NOT NULL ) CHARSET utf8;";
mysql_query($creatShop);

$sql = "insert into shop set phone=$phone,code=$code";
mysql_query($sql);
echo  '{"mesg":"成功"}';
exit();

?>