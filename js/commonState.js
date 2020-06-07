//封装用户状态等信息的函数集合

/**
 * 清除用户登录信息，退出登录 或 初始化登录
 */
function clearUser() {
    let user = {};
    user.loginState = false;//用户的登录状态为 未登录
    user.name = null;
    user.userID =-1;
    localStorage.setItem('user',JSON.stringify(user));

}

/**
 * 登录成功后，设置用户登录信息
 * @param userName
 * @param userID
 */
function setUser(userName,userID) {
    let user = {};
    user.userID = userID;
    user.name = userName;
    user.loginState =true;
    localStorage.setItem('user',JSON.stringify(user));
}

/**
 * 判断用户是否登录
 * @returns {boolean}
 */
function isUserLogin() {
    let user = JSON.parse(localStorage.getItem('user'));
    if(!user){
        clearUser();//初始化
        return false;
    }else {
        return user.loginState;
    }
}

/**
 * 获得用户ID，若失败则返回-1
 * @returns {number}
 */
//-1表示出错
function getUserID() {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user===undefined){
        return -1;
    }
    if(user.loginState===false){
        return -1;
    }
    return user.userID;
}

/**
 * 设置点击图片的ID
 * @param imgId
 */
function setClickImgId(imgId) {
    console.log("设置当前点击图片的ID="+imgId);//
    localStorage.setItem('imgId',imgId);
}

/**
 * 获得点击图片的ID
 * @returns {string}
 */
function getClickImgId() {
    return localStorage.getItem('imgId');
}

/**
 * 设置修改图片的ID（点击修改时）
 * @param imgID
 */
function setEditImg(imgID) {
    console.log("设置当前修改图片的ID="+imgID);//
    localStorage.setItem('isEditing',true);
    localStorage.setItem('editImgId',imgID);
}

/**
 * 获得修改图片的ID，若当前不在修改状态则返回-1
 * @returns {string | number}
 */
function getEditImg() {
    let isEditing = localStorage.getItem('isEditing');
    console.log("isEditing="+isEditing);//
    let imgID;
    if(isEditing=='true'){
        console.log("isEditing===true");//
        imgID =localStorage.getItem('editImgId');
    }else {
        console.log("not isEditing===true");//
        imgID=-1;
    }
    return imgID;
}

/**
 * 取消编辑修改状态(点击上传按钮时)
 */
function cancelEdit() {
    console.log("cancelEdit");//
    localStorage.setItem('isEditing',false);
}