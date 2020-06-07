<?php

//class hotCCT{
//    var $countries;
//    var $cities;
//    var $themes;
//    function __construct($con,$cit,$the){
//        $this->countries=$con;
//        $this->cities = $cit;
//        $this->themes = $the;
//    }
//}
//
//try {
//    //创建PDO实例
//    $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
//    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//
//    $counties = array();
////    //设置sql语句  按热度排序获得imageID，title，des，path
////    $sql = "SELECT travelimage.ImageID,travelimage.Title,travelimage.Description,travelimage.PATH ,CountryCodeISO
////FROM travelimage,(SELECT travelimagefavor.ImageID,COUNT(travelimagefavor.ImageID) AS countN FROM travelimagefavor GROUP BY travelimagefavor.ImageID) AS countTable
////WHERE travelimage.ImageID = countTable.ImageID GROUP BY CountryCodeISO ORDER BY countTable.countN DESC";
//    $sql =
//    $result = $pdo->query($sql);
//
//    $isos=array();
//    $count =0;
//    //七项for ($i=0;$i<7;$i++){
//
//    while($row = $result->fetch()){
//        $isos[] = $row['CountryCodeISO'];
//        $count;
//    }
//    for($i=0;$i<7;$i++)
//
//    //$sql = "SELECT CountryName FROM geocountries where ISO ='".$iso."'";
//    //            $result = $pdo->query($sql);
//    //            if($row = $result->fetch())
//    while () {
//
////        []=new ImageSimple($row['ImageID'],$row['Title'],$row['Description'],$row['PATH']);
//    }
//
//
//    $pdo = null;
//    echo json_encode($resultSet);
//
//}catch (PDOException $e) {//异常处理
//    die( $e->getMessage() );
//}
