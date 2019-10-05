
<?php

header('Content-type:text/html;charset=utf8');
error_reporting(0);

$phone = $_POST['phone'];
$code = $_POST['code'];

$link = mysql_connect('localhost','root','') or die("Error-数据库连接失败");

mysql_query('use jeep');
// $creatShop = "CREATE TABLE shop(id int primary key auto_increment not null,phone CHAR(30)  NOT NULL,code CHAR(30) NOT NULL ) CHARSET utf8;";
// mysql_query($creatShop);


$sql = "delete from shop where code=$code AND phone=$phone";
mysql_query($sql);
echo  '{"mesg":"删除成功"}';
exit();

?>