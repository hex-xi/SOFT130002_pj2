//涉及相同操作的函数集合（除了登录注册页面）

//------------导航栏---------------------
function drawUserCenter() {
    let userCenter = document.getElementById("userCenterNav");
    let html = "";
    if(isUserLogin()){
        html = "<span class=\"dropbtn\" >个⼈中⼼<i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></span>\n" +
            "        <div class=\"dropdown-content\">\n" +
            "            <a href=\"../src/upload.html\" onclick='cancelEdit();'><i class=\"fa fa-upload\" aria-hidden=\"true\"></i> 上传</a>\n" +
            "            <a href=\"../src/myPhoto.html\"><i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i> 我的照⽚</a>\n" +
            "            <a href=\"../src/favor.html\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i> 我的收藏</a>\n" +
            "            <a href=\"#\" onclick='quit()'><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> 登出</a>\n" +
            "        </div>";
    }else {
        html = "<span class=\"dropbtn\" onclick='loginIn()'>登录</span>\n";
    }
    userCenter.innerHTML = html;
}

//登出操作
function quit() {
    clearUser();
    window.location.href='./login.html';
}

//登录跳转
function loginIn() {
    window.location.href='./login.html';
}