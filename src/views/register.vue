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
                <h1 style="color: #FF6699; font-size: 30px; padding-left: 40px; padding-top: 10px;">注册成为Bangumi会员</h1>
                <h1 style="padding-left: 40px; padding-top: 10px;">你的电子邮箱</h1>
                <input v-model="email" @on-blur="validateEmail()" type="text" style="margin-left: 40px; margin-top: 10px; width: 80%;border: 1px solid #ccc;
                   padding: 7px 0px;border-radius: 3px;padding-left:5px;
                   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                   -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
                   -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                   transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s">
                <h1 style="padding-left: 40px; padding-top: 10px;">你的用户名</h1>
                <input v-model="username" @on-blur="validateUser()" type="text" style="margin-left: 40px; margin-top: 10px; width: 80%;border: 1px solid #ccc;
                   padding: 7px 0px;border-radius: 3px;padding-left:5px;
                   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                   -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
                   -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                   transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s">
                <h1 style="padding-left: 40px; padding-top: 10px;">你的密码</h1>
                <input v-model="password1" @on-blur="validatePass()" type="text" style="margin-left: 40px; margin-top: 10px; width: 80%;border: 1px solid #ccc;
                   padding: 7px 0px;border-radius: 3px;padding-left:5px;
                   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                   -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
                   -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                   transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s">
                <h1 style="padding-left: 40px; padding-top: 10px;">再次确认你的密码</h1>
                <input v-model="password2" @on-blur="validatePass2()" type="text" style="margin-left: 40px; margin-top: 10px; width: 80%;border: 1px solid #ccc;
                   padding: 7px 0px;border-radius: 3px;padding-left:5px;
                   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                   -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
                   -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                   transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s">

                <button @click="doregister()" style="background-color: #FF6699;color: white;margin-left: 40px;
                   margin-top: 10px; width: 100px; height: 45px; padding: auto;border-radius: 10px;">
                    注册
                </button>

            </div>
            <div style="width:1px;height:1000px;float:left;background:#f0f0f0;margin-left:10px;margin-right:10px;"></div>
            <div class="center2" style="text-align: center">
                <h1 style="color:#0099FF; padding-top: 90px;">已经注册过Bangumi账户？</h1>
                <input type="submit" value="立即登录" style="background-color: #FF6699;color: white;
                   margin-top: 20px; width: 100px; height: 40px; padding: auto;border-radius: 5px;" onclick="window.location.href='login.html'">
                <h1 style="color:#0099FF; padding-top: 40px;">忘记密码？</h1>
                <input type="submit" value="重置密码" style="background-color: 	#F0F0F0;color: #B8B8B8;
                   margin-top: 20px; width: 100px; height: 40px; padding: auto;border-radius: 5px;" onclick="window.location.href='reset.html'">
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "register",
        data(){
            return{
                searchInfo:'',
                email:'',
                username:'',
                password1:'',
                password2:'',
                errmsg1:'',
                errmsg2:'',
                errmsg3:'',
                errmsg4:'',
            }
        },
        methods: {
            validateEmail() {
                let valid = true;
                if (this.email == '') {
                    this.errmsg1 = '邮箱不能为空';
                    valid = false;
                }

                if (valid == true)
                    this.errmsg1 = '';
                return valid;
            },
            validateUser() {
                let valid = true;
                if (this.username == '') {
                    this.errmsg2 = '用户名不能为空';
                    valid = false;
                }

                if (valid == true)
                    this.errmsg2 = '';
                return valid;
            },

            validatePass() {
                let valid = true;
                if (this.password1 == '') {
                    this.errmsg3 = '密码不能为空';
                    valid = false;
                }
                else {
                    var reg = new RegExp(/^\w{6,16}$/)
                    valid = reg.test(this.password1);
                    if (!valid)
                        this.errmsg3 = '密码需为6-16位字符'
                }
                if (valid)
                    this.errmsg3 = '';
                return valid;
            },
            validatePass2() {
                let valid = true;
                if (this.password2 == "") {
                    valid = false;
                    this.errmsg4 = '请输入确认密码';
                }
                else {
                    if (this.password2 != this.password1) {
                        valid = false;
                        this.errmsg4 = "两次密码不一致"
                    }
                }
                if (valid)
                    this.errmsg4 = '';
                return valid;
            },
            validate() {
                let validate1 = this.validateEmail();
                let validate4 = this.validateUser();
                let validate2 = this.validatePass();
                let validate3 = this.validatePass2();
                return validate1 && validate2 && validate3 && validate4;
            },
            doregister(){
                if (this.validate()) {
                    axios.post("http://localhost:8090/bangumi/user/register", {
                        email: this.email,
                        username:this.username,
                        password1: this.password1,
                    }).then((res) => {
                        if (res.data){
                            this.$Message.success('Success!');
                            this.$router.push("/login")
                        }
                    })
                }else {
                    this.$Message.success('请确保信息正确!');
                }
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

    .center{width: 50%; height: 1000px; margin: auto; border: 1px solid #F0F0F0;}
    .center1{width: 66%; height:1000px; float: left;}
    .center2{width: 30%; height:1000px; float: right;}


</style>