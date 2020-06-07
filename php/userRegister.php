<?php

require_once('config.php');

$name = $_POST['name'];
$password = $_POST['password1'];
$email = $_POST['email'];



try {
    //创建PDO实例
    $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO traveluser (Email, UserName,Pass) VALUES ('".$email."','".$name."','".$password."')";
    $result = $pdo->query($sql);

    $pdo = null;
    //转到我的照片
    header("Location: http://localhost:8082/projects/代码/src/login.html");//login.html

}catch (PDOException $e) {//异常处理
    die( $e->getMessage() );
}