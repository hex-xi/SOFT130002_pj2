<?php

require_once('config.php');

$imgID=$_POST['imgID'];
$userID =$_POST['userID'];

try {
    //创建PDO实例
    $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT * FROM travelimagefavor WHERE UID='".$userID."' AND ImageID = '".$imgID."'";
    $result = $pdo->query($sql);

    if($row = $result->fetch()){
        $answer = true;
    }else{
        $answer = false;
    }

    $pdo = null;
    echo json_encode($answer);

}catch (PDOException $e) {//异常处理
    die( $e->getMessage() );
}