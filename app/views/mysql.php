<?php

header('Content-type:text/html;charset=utf8');
error_reporting(0);

$link = mysql_connect('localhost','root','') or die("Error-数据库连接失败");

mysql_query("create database jeep charset utf8");
mysql_query('use jeep');

$creat = "CREATE TABLE USER(phone CHAR(30) PRIMARY KEY  NOT NULL,psd CHAR(30) NOT NULL ) CHARSET utf8;";
mysql_query($creat);

$creatShop = "CREATE TABLE shop(id int primary key auto_increment not null,phone CHAR(30)  NOT NULL,code CHAR(30) NOT NULL ) CHARSET utf8;";
mysql_query($creatShop);

?>