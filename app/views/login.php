
<?php

header('Content-type:text/html;charset=utf8');
error_reporting(0);

$phone = $_POST['phone'];
$psd = $_POST['psd'];

$link = mysql_connect('localhost','root','') or die("Error-数据库连接失败");

mysql_query('use jeep');


$isHave ="select * from user where phone=$phone";
// $isHave ="select * from user where phone=15970709762";

$result = mysql_query($isHave);

$num =  mysql_affected_rows() ; // 函数返回前一次 MySQL 操作所影响的记录行数

if($num > 0){
    $rows = [];
    // mysql_fetch_assoc 函数每次从结果集中取得一行作为关联数组， 如果没有则返回 false。
    while($row = mysql_fetch_assoc($result)){
        $rows[] = $row;
    }
    // print_r($rows);
    foreach ($rows as $k => $v) {
        if ($v['psd'] == "$psd") {
            echo  '{"msg":"登录成功"}';
        }else{
            echo  '{"msg":"密码错误"}';
        }
    }
    // echo json_encode($rows,JSON_UNESCAPED_UNICODE);//数组转JSON字符串
    exit();
}else{
    echo '{"msg":"该手机号未注册，请先注册"}';
    exit();
}
?>