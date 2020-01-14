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
                <h1>
                    <a>{{peopleInfo.name}}</a>
                    <small class="grey">TV</small>
                </h1>
                <div class="content-header-1">
                    <ul class="ul3">
                        <li><a href="#">概览</a></li>
                        <li><a href="#">收藏</a></li>
                        <li v-show="peopleInfo.collectStatus==0" style="margin-left: 750px;width: 70px"><a href="#" @click="doclick()">加入收藏</a></li>
                        <li v-show="peopleInfo.collectStatus==1" style="margin-left: 750px;width: 70px"><a href="#" @click="doclick2()">取消收藏</a></li>
                    </ul>
                </div>
            </div>
            <div class="content-content">
                <div class="content-sum">
                    <div class="content-left">
                        <div class="info">
                            <div class="box">
                                <div class="center">
                                    <a>
                                        <img class="cover" :src="peopleInfo.peopleIcon2">
                                    </a>
                                </div>
                                <ul class="ul4">
                                    <li>
                                        <span class="tip">中文名: </span>
                                        {{peopleInfo.name}}
                                    </li>
                                    <li>
                                        <span class="tip">性别: </span>
                                        <a>{{peopleInfo.peopleSex}}</a>
                                    </li>
                                    <li>
                                        <span class="tip">生日: </span>
                                        {{peopleInfo.time}}
                                    </li>
                                    <li>
                                        <span class="tip">身高: </span>
                                        {{peopleInfo.peopleHeight}}cm
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="content-right">
                        <div class="content-right-header">
                            <div class="intro">
                                <div class="intro1">
                                    {{peopleInfo.peopleDescription}}
                                </div>
                            </div>
                        </div>
                        <div class="section-line"></div>
                        <div class="section">
                            <h2 class="subtitle">出演</h2>
                            <div>
                                <ul class="ul7">
                                    <li class="user" v-show="animeInfo.show">
                                        <router-link class="list1"
                                                     :to="{name:'animedetail',params:{id:animeInfo.animeId}}">
                                            <div class="userContainer">
                                                <strong>
                                                    <a class="a2">
                                                   <span class="userimg">
                                                       <span class="span2"><img :src="animeInfo.icon"
                                                                                class="cover"></span>
                                                       <span class="span3"><span
                                                               style="color:rgba(27,27,27,0.7)">主角:</span>{{animeInfo.name}}</span>
                                                   </span>
                                                    </a>
                                                </strong>
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="section">
                            <h2 class="subtitle">吐槽箱</h2>
                            <div class="comment-box">
                                <div class="item" v-for="(item,index) in dInfo.slice(0, 4)" :info="item"
                                     :key="index">
                                    <a class="a1"><span><img class="img3" :src=item.userIcon> </span></a>
                                    <div class="text-main">
                                        <div class="text">
                                            <a class="l">{{item.userName}}</a>
                                            <small class="grey">@ 2019-12-21 21:04</small>
                                            <p>{{item.commentDescription}}</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div style="margin-top: 15px">
                                <textarea v-model="comment" name="nickname" class="inputtext quick" :rows="4" :cols="12" type="textarea">
                                </textarea>
                                <div>
                                    <Button style="background: rgba(90,192,229,0.92);color: white;float: right" @click="OK()">加上去</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "peopledetail",
        data() {
            return {
                intro:
                    '国中二年级学生天野雪辉习惯远离所有人，以一个旁观者的角度把亲眼所见的事记录在自己的手机中。一天，时空之神宙斯把未来日记植入他的手机中，这日记记录的是他未来90天发生的事，包括考试内容、遇到的危险等。但这个“日记”一旦被破坏，持有者的未来将会同时消失，也就是持有者会立刻消失。宙斯已选定十二位未来日记持有者，而最后生存的人将会成为宙斯的继承者，掌握支配时空的“神之座”。他跟同样拥有未来日记的其余11人，展开你死我活斗争的杀人游戏。',
                count: '',
                count1: '5',
                count2: '5',
                count3: '0',
                count4: '5',
                count5: '5',
                sum: '20',
                peopleInfo: [],
                rate: 0,
                modal1: false,
                comment: '',
                type: '',
                dInfo: [],
                peoInfo: [],
                animeInfo: [],
                searchInfo:'',
                userInfo:[],

            }
        },
        computed: {},
        watch: {},
        methods: {
            OK(){
                axios.post("http://localhost:8090/bangumi/people/disUp", {
                    userId: this.userInfo.userId,
                    peopleId: this.peopleInfo.peopleId,
                    comment: this.comment
                }).then((res) => {
                    axios.post("http://localhost:8090/bangumi/people/discuss", {
                        peopleId: this.peopleInfo.peopleId
                    }).then((res) => {
                        this.dInfo = res.data;
                    })
                    this.$Message.info('Clicked ok');
                })

            },

            doclick(){
                axios.post("http://localhost:8090/bangumi/people/collect", {
                    userId: this.userInfo.userId,
                    peopleId: this.peopleInfo.peopleId,
                    code:1
                }).then((res) => {
                    axios.post("http://localhost:8090/bangumi/people/detail", {
                        userId: this.userInfo.userId,
                        peopleId: this.peopleInfo.peopleId
                    }).then((res) => {
                        this.peopleInfo = res.data;
                        console.log(res.data)

                    })

                })
            },
            doclick2(){
                axios.post("http://localhost:8090/bangumi/people/collect", {
                    userId: this.userInfo.userId,
                    peopleId: this.peopleInfo.peopleId,
                    code:0
                }).then((res) => {
                    axios.post("http://localhost:8090/bangumi/people/detail", {
                        userId: this.userInfo.userId,
                        peopleId:this.peopleInfo.peopleId
                    }).then((res) => {
                        this.peopleInfo = res.data;
                        console.log(res.data)

                    })

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
            var id = this.$route.params.id

            if (id == null) {
                id = this.peopleInfo.peopleId
            }
            console.log(this.$cookieStore.getCookie('username'))

            if (this.$cookieStore.getCookie('username')) {
                var username = this.$cookieStore.getCookie('username')

                axios.post("http://localhost:8090/bangumi/user/info", {
                    username: username,
                }).then((res) => {
                    this.userInfo = res.data
                    console.log(res.data)
                    axios.post("http://localhost:8090/bangumi/people/detail", {
                        userId: this.userInfo.userId,
                        peopleId: id
                    }).then((res) => {
                        this.peopleInfo = res.data;
                        console.log(res.data)

                    })

                    axios.post("http://localhost:8090/bangumi/people/discuss", {
                        peopleId: id
                    }).then((res) => {
                        this.dInfo = res.data;
                        console.log(res.data)
                    })

                    axios.post("http://localhost:8090/bangumi/people/anime", {
                        peopleId: id
                    }).then((res) => {
                        this.animeInfo = res.data;
                        console.log(this.animeInfo)
                    })
                })
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
    }

    .content-header {
        padding: 10px 0 0px 0;
    }

    .content-header h1 {
        line-height: 30px;
        font-size: 20px;
        margin: 0px auto 0 auto;
        width: 1000px;
    }

    .content-header h1 a {
        color: #444;
        font-size: 20px;
    }

    .grey {
        font-size: 10px;
        color: #999;
        font-weight: normal;
        margin-left: 5px;
    }

    .content-header-1 {
        margin: 0px;
        border-top: 1px solid #FEFEFE;
        border-bottom: 1px solid #EEE;
        background: #fbfbfb;
    }

    .ul3 {
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        width: 1030px;
        margin: 0 auto;
        display: flex;
        text-align: center;
    }

    .ul3 li {
        font-size: 14px;
        margin: 0 10px 0 0;
        width: 48px;
        float: left;

    }

    .ul3 li a {
        color: rgba(119, 119, 119, 1);
        line-height: 35px;

    }

    .ul3 li:first-child {
        border-bottom: 2px solid rgba(240, 145, 153, 0.92);
    }

    .ul3 li:first-child a {
        color: rgba(240, 145, 153, 0.92);
    }

    .ul3 li:not(:first-child):hover {
        border-bottom: 2px solid rgba(54, 156, 248, 1);
    }

    .ul3 li:not(:first-child):hover a {
        color: rgba(54, 156, 248, 1);
    }

    .content-content {
        margin: 0 auto;
        width: 1000px;
    }

    .content-sum {
        padding: 0 0 10px 0;
        width: 1000px;
    }

    .content-left {
        float: left;
        margin: 10px 15px 0 0;
        width: 250px;
    }

    .info {
        width: 250px;
        padding: 0 5px 0 0;
        margin-bottom: 15px;
    }

    .box {
        width: 250px;
        padding-bottom: 10px;
        word-break: break-all;
    }

    .cover {
        background-color: #FFF;
        margin-bottom: 5px;
        padding: 2px;
        border-top: 1px solid #C7C7C9;
        border-left: 1px solid #A9A9AB;
        border-right: 1px solid #A9A9AB;
        border-bottom: 1px solid #858486;
        box-shadow: 0 1px 5px #AAA;
        /*height: 336px;*/
        /*width: 226px;*/
    }

    .tip {
        font-size: 13px;
    }

    .center {
        text-align: center;
        /*height: 336px;*/
        /*width: 250px;*/
    }

    .center img:hover {
        box-shadow: 0px 0px 5px 2px rgba(128, 195, 226, 0.92);
    }

    .ul4 {
        width: 240px;
        height: 600px;
    }

    .ul4 li {
        padding: 4px 2px;
        font-size: 13px;
        border-bottom: 1px solid #EEE;
    }

    .content-right-header {

    }

    .content-right {
        margin: 10px 0 0 0;
        width: 720px;
        float: left;
    }

    .intro {
        font-size: 14px;
        line-height: 180%;
        padding: 10px 0;
        color: #555;
    }

    .intro1 {
        height: auto !important;
        height: 250px;
        max-height: 250px;
        overflow: hidden;
        text-indent: 2em;
    }

    .section-line {
        height: 10px;
        margin: 10px 0 5px 0;
        border: none;
        border-top: 1px solid #e8e8e8;
    }

    .rate1 h2 {
        height: 45px;
        line-height: 40px;
        font-size: 13px;
        font-weight: normal;
        padding: 0;
        color: #555;
        text-shadow: #FFF 1px 1px 0px;
    }

    .ul5 {
        margin: 5px 0 0 0;
    }

    .ul5 li {
        float: left;
    }

    .ul5 a {
        display: inline-block;
        text-decoration: none;
        line-height: 20px;
        margin: 0 0 5px 0;
        padding: 4px 9px;
        color: #666;
        border: 1px solid #DDD;
        border-left: none;
        background-image: linear-gradient(to bottom, #FFF 0%, #FAFAFA 100%);
        box-shadow: 0 1px 2px #EEE, inset 0 1px 1px #FFF;
    }

    .ul5 a:hover {
        background-image: linear-gradient(to bottom, rgba(94, 160, 213, 0.7) 0%, rgba(94, 160, 213, 0.6) 100%);
        color: rgba(255, 255, 255, 0.92);
    }


    .section {
        padding: 10px;
        margin: 0 0 5px 0;
        border-bottom: 1px solid #EEE;
        overflow: hidden;

    }

    .ul7 {
        margin: 5px 0 0 0;
    }

    .ul7 li {
        display: block;
        float: left;
        font-size: 12px;
    }

    .userContainer {
        padding: 0 5px 0 55px;
    }

    .userContainer strong {
        font-size: 14px;
        font-weight: normal;
        display: block;
        margin: 0 0 3px 0;
        padding: 0 0 3px 0;
    }

    .userimg {
        margin: 0pt 0pt 0pt -55px;
        cursor: pointer;
        float: left;
        display: flex;
        align-items: center;

    }

    .span2 {
        width: 54px;
        height: 54px;
        display: inline-block;
        border-radius: 5px;
        box-shadow: inset #BBB 0px 0 2px 0px;
        transition: border linear 0.2s, box-shadow linear 0.2s;
    }

    .span2 img {
        width: 54px;
        height: 54px;
    }

    .span3 {
        margin-left: 5px;
        font-size: 14px;
        font-weight: normal;
        color: #0084B4;
        width: 180px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 18px;
        padding: 0 5px 0 0;
        line-height: 140%;
        color: #555;
    }

    .item {
        position: relative;
        margin: 0 0 5px 0;
        zoom: 1;

    }

    .img3 {
        width: 32px;
        height: 32px;
        display: inline-block;
        background: transparent no-repeat 50% 50%;
        border-radius: 5px;
        box-shadow: inset #BBB 0px 0 2px 0px;
        transition: border linear 0.2s, box-shadow linear 0.2s;
    }

    .img4 {

    }

    .text-main {
        width: 100%;

    }

    .text {
        font-size: 14px;
        line-height: 1.6;
        margin: 0 0 0 35px;
        padding: 5px 10px;
        background-clip: padding-box;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05);
        color: #555;
        background-color: #FFF;

    }

    .a1 {
        display: block;
        width: 0px;
        height: 0px;

    }

    .comment-box {
        background-color: #FFF;
        margin: 10px 0 0 0;
        border: 1px solid #DFDFDF;
        -webkit-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.04);
        -moz-box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.04);
        box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.04);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        -moz-background-clip: padding;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
    }

    .comment-box div:nth-of-type(even) .text {
        /*position: absolute;*/
        /*!*left: 40%;*!*/
        /*margin-left: 100%;*/
        background: rgba(249, 249, 249, 0.92);

    }

    .comment-box div:nth-of-type(even) .text-main {
        /*position: relative;*/
        /*left: 24%;*/
        background: rgba(249, 249, 249, 0.92);
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

    .tip {
        font-size: 12px;
        color: #666;
    }

    .quick {
        max-width:100%;
        font-size: 15px;
        overflow: auto;
        margin: 3px 0;
        padding: 4px 5px;
        line-height: 22px;
        border-radius: 5px;
        background-clip: padding-box;
        background-color: #FFF;
        color: #000;
        border: 1px solid #d9d9d9;
    }

    /*分割线*/

    .collectModify a {

    }

    .collectModify a:hover {
        text-decoration: underline;
    }


</style>