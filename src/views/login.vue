<template>
    <div class="main">
        <div class="header">
            <div class="header-1">
                <img src="../images/logo1.png">
                <ul class="ul1">
                    <li>
                        <a href="http://localhost:8080/animelist">动画</a>
                    </li>
                    <li>
                        <a href="http://localhost:8080/booklist">书籍</a>
                    </li>
                    <li>
                        <a href="#">游戏</a>
                    </li>
                    <li>
                        <a href="http://localhost:8080/musiclist">音乐</a>
                    </li>
                    <li>
                        <a href="#">三次元</a>
                    </li>
                </ul>
                <ul class="ul2">
                    <li>
                        <a href="http://localhost:8080/peoplelist">人物</a>
                    </li>
                    <li>
                        <a href="#">超展开</a>
                    </li>
                    <li>
                        <a href="#">小组</a>
                    </li>
                    <li>
                        <a href="#">探索</a>
                    </li>
                </ul>
                <a href="#"><img src="../images/天窗.png" style="margin-left: 10px"></a>
                <div class="search">
                    <form>
                        <input type="text" v-model="searchInfo" placeholder="请输入...">
                        <router-link :to="{name:'search',params:{searchInfo:searchInfo}}">
                            <Button icon="ios-search"></Button>
                        </router-link>
                    </form>
                </div>
                <div class="img1">
                    <Dropdown>
                        <a href="javascript:void(0)">
                            <img class="img1-1" src="../images/头像.jpg">
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><a href="http://localhost:8080/personal">个人中心</a></DropdownItem>
                            <DropdownItem>设置</DropdownItem>
                            <DropdownItem>退出</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="center1">
                <h1 style="color: #FF6699; font-size: 30px; padding-left: 40px; padding-top: 20px;">登录至Bangumi</h1>

                <h1 style="padding-left: 40px; padding-top: 20px;">用户名</h1>
                <form role="form" method="post" action="/bangumi/user/common/login">
                    <input type="text" name="userEmail" style="margin-left: 40px; margin-top: 10px; width: 80%;border: 1px solid #ccc;
                   padding: 7px 0px;border-radius: 3px;padding-left:5px;
                   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                   -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
                   -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                   transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s">
                    <h1 style="padding-left: 40px; padding-top: 20px;">你的密码</h1>
                    <input type="text" name="userPassword" style="margin-left: 40px; margin-top: 10px;width: 80%; border: 1px solid #ccc;
                   padding: 7px 0px;border-radius: 3px;padding-left:5px;
                   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                   -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
                   -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                   transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s">
                    <br>
                    <input type="submit" value="登录" style="background-color: #FF6699;color: white;margin-left: 40px;
                   margin-top: 20px; width: 100px; height: 45px; padding: auto;border-radius: 10px;">
                </form>
            </div>
            <div style="width:1px;height:600px;float:left;background:#f0f0f0;margin-left:10px;margin-right:10px;"></div>
            <div class="center2" style="text-align: center">
                <h1 style="color:#0099FF;padding-top: 90px;">还没有Bangumi账户？</h1>
                <input type="submit" value="立即注册" style="background-color: #FF6699;color: white;
                   margin-top: 20px; width: 100px; height: 40px; padding: auto;border-radius: 5px;" onclick="window.location.href='register.html'">
                <h1 style="color:#0099FF; padding-top: 40px;">忘记密码？</h1>
                <input type="submit" value="重置密码" style="background-color: 	#F0F0F0;color: #B8B8B8;
                   margin-top: 20px; width: 100px; height: 40px; padding: auto;border-radius: 5px;" onclick="window.location.href='reset.html'">
            </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                searchInfo:''
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;
        /*border: 1px solid black;*/
    }

    h1{font-size:14px; font-weight: 900;}


    .header {
        border-bottom: 1px solid rgba(6, 17, 12, 0.25);
        background: rgba(250, 250, 250, 0.92);
    }

    .header-1 {
        width: 1100px;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    .ul1 {
        margin-left: 15px;
        border-radius: 17px 17px 17px 17px;
        height: 35px;
        background: rgba(244, 244, 244, 0.92);
        width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ul1 li {
        display: inline-block;
        width: 50px;
        text-align: center;
        background: rgba(244, 244, 244, 0.92);

    }

    .ul1 li:hover {
        background: rgba(240, 145, 153, 1);
    }

    .ul1 li:first-child {

        border-radius: 17px 0 0 17px;
    }

    .ul1 li:last-child {

        border-radius: 0px 17px 17px 0px;
    }

    .ul1 li a {
        color: black;
        font-size: 14px;
        line-height: 35px;

    }

    .ul2 {
        margin-left: 10px;
        height: 53px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ul2 li {
        display: inline-block;
        margin-left: 10px;
    }

    .ul2 li a {
        color: rgba(119, 119, 119, 1);
        line-height: 53px;
    }

    .ul2 li:hover {
        border-top: 1px solid red;
    }

    .ul2 li:hover a {
        color: black;
    }

    .search form {
        position: relative;
        margin: 0 auto;
        height: 42px;
        margin-left: 100px
    }

    .search input {
        border: none;
        outline: none;
        width: 100%;
        height: 42px;
        padding-left: 13px;
        width: 150px;
        border-radius: 42px;
        border: 1px solid rgba(6, 17, 12, 0.1);
        float: right;
    }

    .search button {
        border: none;
        outline: none;
        height: 42px;
        cursor: pointer;
        position: absolute;
        background: none;
        right: 0;
    }

    .search button:before {
        content: "\f002";
        font-family: FontAwesome;
        color: #324b4e;
    }

    .img1 {
        width: 32px;
        height: 32px;
    }

    .img1-1 {
        width: 32px;
        height: 32px;
    }

    /*分割线*/

    .center{width: 50%; height: 600px; margin: auto; border: 1px solid #F0F0F0;}
    .center1{width: 66%; height:600px; float: left;}
    .center2{width: 30%; height:600px; float: right;}
</style>