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
                            <img class="img1-1" :src="userInfo.userIcon">
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><a href="http://localhost:8080/personal">个人中心</a></DropdownItem>
                            <DropdownItem>设置</DropdownItem>
                            <DropdownItem ><a @click="logout()">退出</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-header">
                <ul class="sectab">
                    <li><a class="selected" href="http://localhost:8080/personal" style="  background: linear-gradient(to bottom, #5FA3DB 0%, #72B6E3 100%);
        color: white;"><span>基本设置</span></a></li>
                    <li><a href="http://localhost:8080/reset"><span>修改密码</span></a></li>
                    <li><a><span>退出</span></a></li>
                </ul>
                <h1>我的个人设置</h1>
            </div>
            <hr class="board">
            <div class="content-sum">
                <div class="content-left">
                    <form name="set" method="post">
                    <span class="text">
                        <table align="center" width="98%" cellspacing="0" cellpadding="5" class="setting">
                            <tbody>
                            <tr>
                                <td valign="top" width="12%">昵称</td>
                                <td valign="top">
                                    <input name="nickname" class="inputtext" type="text" v-model="formItem.userName" >
                                </td>
                            </tr>
                            <tr>
                                <td valign="top" width="12%">性别</td>
                                <td valign="top">
                                    <RadioGroup v-model="formItem.userSex">
                                     <Radio :label="0">男</Radio>
                                     <Radio :label="1">女</Radio>
                                     <Radio :label="2">保密</Radio>
                                    </RadioGroup>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top" width="12%">出生年月</td>
                                 <td valign="top">
                                <Row>
                                    <Col span="11">
                                        <DatePicker type="date" placeholder="Select date"
                                                    v-model="formItem.userBirth" @on-change="formItem.userBirth=$event"></DatePicker>
                                    </Col>
                                </Row>
                                 </td>
                            </tr>

                            <tr>
                                <td valign="top" width="12%">签名</td>
                                <td valign="top">
                                    <input name="nickname" class="inputtext" type="text" v-model="formItem.userQianming">
                                </td>
                            </tr>
                            <tr>
                                <td valign="top" width="12%">自我介绍	</td>
                                <td valign="top">
                                    <textarea v-model="formItem.userDes" name="nickname" class="inputtext quick" :rows="4" :cols="12" type="textarea">
                                    </textarea>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top" width="12%"></td>
                                <td>
                                    <Button class="button1" @click="update">保存修改</Button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </span>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "personal",
        data() {
            return {
                type: '',
                formItem: {
                    userName: '',
                    userBirth: '',
                    userSex:'',
                    userDes:'',
                    userQianming:''

                },
                sex: '',
                searchInfo:'',
                userInfo:[],
            }
        },

        methods: {
            update() {
                axios.post("http://localhost:8090/bangumi/user/update", {
                    userId: this.userInfo.userId,
                    name:this.formItem.userName,
                    sex:this.formItem.userSex,
                    birth:this.formItem.userBirth,
                    qianming:this.formItem.userQianming,
                    des:this.formItem.userDes,

                }).then((res) => {
                    console.log(res)
                    if (res.data){
                        alert("修改成功")

                    }
                })
            },
            logout(){
                var a=confirm("是否退出？")
                if(a){
                    this.$cookieStore.delCookie('username');
                    this.$router.push("/login")
                }

            },
        },

        created: function () {
            console.log(this.$cookieStore.getCookie('username'))

            if (this.$cookieStore.getCookie('username')) {
                var username = this.$cookieStore.getCookie('username')

                axios.post("http://localhost:8090/bangumi/user/info", {
                    username: username,
                }).then((res) => {
                    this.userInfo = res.data
                    console.log(res.data)
                    axios.post("http://localhost:8090/bangumi/user/getuser", {
                        userId: this.userInfo.userId,
                    }).then((res) => {
                        this.formItem=res.data;
                        console.log(res.data)

                    })
                })
            }

        },
    }
</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;
        /*border: 1px solid black;*/
    }

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
        width: 40px;
        height: 40px;
    }

    .img1-1 {
        width: 40px;
        height: 40px;
    }

    /*分割线*/

    .content {
        margin: 0 auto;
        width: 1000px;
    }

    .content-header {
        padding: 15px 0 10px 0;
        position: relative;
    }

    .content-header h1 {
        color: #3E3E3E;
        font-size: 20px;
    }
    .sectab{
        float: right;
        margin-right:44px;
    }

    .sectab li{
        float: left;
    }

    .sectab li a{
        display: inline-block;
        text-decoration: none;
        line-height: 20px;
        margin: 0 0 5px 0;
        padding: 4px 12px;
        color: #666;
        border: 1px solid #DDD;
        border-left: none;
        background-image: -webkit-linear-gradient(top, #FFF 0%, #FAFAFA 100%);
        background-image: -o-linear-gradient(top, #FFF 0%, #FAFAFA 100%);
        background-image: linear-gradient(to bottom, #FFF 0%, #FAFAFA 100%);
        background-repeat: repeat-x;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fffafafa', GradientType=0);
        box-shadow: 0 1px 2px #EEE, inset 0 1px 1px #FFF;
    }

    .sectab li a:hover{
        background: linear-gradient(to bottom, #5FA3DB 0%, #72B6E3 100%);
        color: white;
    }

    .selected{
        /*background: linear-gradient(to bottom, #5FA3DB 0%, #72B6E3 100%);*/
        /*color: white;*/
    }




    .content-sum {
        padding: 0 0 10px 0;
        width: 1000px;
    }

    .content-left {
        margin: 10px 0 0 0;
        width: 670px;
    }

    .board {
        height: 1px;
        border: 0;
        background-color: #EEE;
        color: #EEE;
    }


    table td {
        padding: 8px 5px;
        font-size: 13px;
        line-height: 150%;
        border-bottom: 1px solid #EEE;
    }

    .inputtext {
        font-size: 15px;
        padding: 5px 5px;
        line-height: 22px;
        width: 100%;
        border-radius: 5px;
        background-clip: padding-box;
        background-color: #FFF;
        color: #000;
        border: 1px solid #d9d9d9;
    }

    .quick{
        max-width: 568px;
    }

    table input:focus {
        box-shadow: 0 0 10px -3px rgba(255, 21, 3, 0.8);

    }

    table textarea:focus {
        box-shadow: 0 0 10px -3px rgba(255, 21, 3, 0.8);

    }

    .button1 {
        cursor: pointer;
        font-size: 13px;
        font-weight: bold;
        border: 1px solid #48a2c3;
        padding: 3px 15px;
        color: #fff;
        border-radius: 5px;
        background: #4EB1D4;

    }

</style>