<?php

require_once('config.php');

$imgID = $_POST['imgID'];
$userID = $_POST['userID'];

try {
    //创建PDO实例
    $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "DELETE FROM travelimagefavor WHERE ImageID='".$imgID."' AND UID = '".$userID."'";
    $result = $pdo->query($sql);

    $pdo = null;
    echo json_encode("取消完毕");

}catch (PDOException $e) {//异常处理
    die( $e->getMessage() );
}