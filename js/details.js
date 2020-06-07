var detailState = {};

window.onload = function () {
    drawUserCenter();
    detailState.img={};

    //通过后台读取图片详情
    let imgID = getClickImgId();
    console.log("通过后台读取图片详情...");//
    let xml1 = $.ajax({
        type: "POST",
        url: '../php/getImgData.php',
        dataType: 'json',
        async: true,
        data: {'imgID': imgID},

        success: function (ans) {
            detailState.img = ans;
            //渲染
            draw();
        }
    });
};

//渲染
function draw() {
    //通过detailState.img填充title,上传者,图片path,....
    let titleE = document.getElementById("title");
    titleE.innerHTML = detailState.img.title;
    let ownerE = document.getElementById("owner");//替换为by owner
    ownerE.innerHTML = "by "+detailState.img.ownerName;
    let imgE =document.getElementById("imgPicture");
    imgE.src = "../travel-images/square-medium/"+detailState.img.path;//...

    drawFavorIcon();//渲染收藏

    //填充theme，国家名，城市名,des
    let themeE = document.getElementById("theme");
    themeE.innerHTML = detailState.img.theme;
    let countryE = document.getElementById("country");
    countryE.innerHTML = detailState.img.countryName;
    let cityE = document.getElementById("city");
    cityE.innerHTML = detailState.img.cityName;
    let desE = document.getElementById("des");
    desE.innerHTML = detailState.img.des;
}

//渲染收藏
function drawFavorIcon() {
    let favorBtnE = document.getElementById("favorBtn");
    let favorNumE = document.getElementById("favorNum");
    favorNumE.innerHTML = detailState.img.favorNum;
    //判断是否登录
    if(isUserLogin()){
        //已登录
        detailState.userID = getUserID();
        //后台获得是否收藏过的数据...显示
        console.log("后台获得是否收藏过的数据...");
        let xml1 = $.ajax({
            type: "POST",
            url: '../php/ifFavor.php',
            dataType: 'json',
            async: false,
            data: {'userID': detailState.userID,'imgID':detailState.img.imgID},

            success: function (ans) {
                showFavor(ans);
            }
        });
    }else {
        //未登录
        favorBtnE.onclick = function () {
            alert("您未登录，请登录后再操作！");
        };
        favorBtnE.innerHTML = "<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> 收藏";
    }
}

//显示收藏/未收藏
function showFavor(isFavor) {
    let favorBtnE = document.getElementById("favorBtn");
    let favorNumE = document.getElementById("favorNum");
    favorNumE.innerHTML = detailState.img.favorNum;
    if(isFavor){
        favorBtnE.onclick = function(){
            cancelFavor();
        };
        favorBtnE.innerHTML = "<i class=\"fa fa-heart\" aria-hidden=\"true\"></i> 取消收藏";
    }else {
        favorBtnE.onclick = function(){
            addFavor();
        };
        favorBtnE.innerHTML = "<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> 收藏";
    }
}

//--------------------------------按钮----------------------------
// 收藏
function addFavor() {
    detailState.img.favorNum++;
    console.log("收藏,发起后台");
    let xml1 = $.ajax({
        type: "POST",
        url: '../php/addFavor.php',
        dataType: 'json',
        async: false,
        data: {'userID': detailState.userID,'imgID':detailState.img.imgID},

        success: function (ans) {
            showFavor(true);
        }
    });
}

// 取消收藏
function cancelFavor() {
    detailState.img.favorNum--;
    console.log("取消收藏,发起后台");
    let xml1 = $.ajax({
        type: "POST",
        url: '../php/cancelFavor.php',
        dataType: 'json',
        async: false,
        data: {'userID': detailState.userID,'imgID':detailState.img.imgID},

        success: function (ans) {
            showFavor(false);
        }
    });
}