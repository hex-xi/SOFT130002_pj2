<?php

require_once('config.php');

//var_dump($_FILES);//

$ifhasImgFile = $_POST['ifhasImgFile'];

if($ifhasImgFile=="true"){
    //...
    //上传文件，将图片文件转移到特定目录下
    if ($_FILES["chooseImage"]["error"] > 0)
    {
        echo "错误：: " . $_FILES["chooseImage"]["error"] . "<br>";
    } else {
        if (file_exists("../travel-images/square-medium/" . $_FILES["chooseImage"]["name"])) {
//        echo $_FILES["chooseImage"]["name"] . " 文件已经存在。 ";
        }else{
            // 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
            move_uploaded_file($_FILES["chooseImage"]["tmp_name"], "../travel-images/square-medium/" . $_FILES["chooseImage"]["name"]);
//        echo "文件存储在: " . "uploadImg/" . $_FILES["chooseImage"]["name"];
        }
    }
    $path = $_FILES["chooseImage"]["name"];
}else{
    $path = $_POST['noFilePath'];
}

    $imgID = $_POST["imgID"];
    $title = $_POST["titleName"];
    $des = $_POST["imgDes"];
    $cityCode = $_POST["selCity"];
    $countryISO = $_POST["selCountry"];
    $userID = $_POST["userID"];
    $content = $_POST["selTheme"];

    try {
        //创建PDO实例
        $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //判断修改还是新增
        if($imgID==-1){
            //新增
            //设置sql语句
            $sql = "INSERT INTO travelimage (Title, Description,CityCode,CountryCodeISO,UID,PATH,Content) 
VALUES ('".$title."','".$des."','".$cityCode."','".$countryISO."','".$userID."','".$path."','".$content."')";
            $result = $pdo->query($sql);
        }else{
            //修改
            $sql = "UPDATE travelimage SET Title = '".$title."', Description = '".$des."', CityCode = '".$cityCode."', 
            CountryCodeISO = '".$countryISO."', PATH = '".$path."', Content = '".$content."' WHERE ImageID=".$imgID;
            $result = $pdo->query($sql);
        }

        $pdo = null;
        //转到我的照片
        header("Location: http://localhost:8082/projects/代码/src/myPhoto.html");

    }catch (PDOException $e) {//异常处理
        die( $e->getMessage() );
    }

//
//    //...
//    echo "<br>imgID=";
//    echo $imgID."<br>title=".$title."<br>des=".$des."<br>cityCode=".$cityCode."<br>countryISO="
//        .$countryISO."<br>userID".$userID."<br>ath=".$path."<br>content=".$content;




