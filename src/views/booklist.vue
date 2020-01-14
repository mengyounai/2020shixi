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
                <h1>全部书籍</h1>
            </div>
            <div class="content-content">
                <div class="content-sum">
                    <div class="content-left">
                        <div class="content-left-header">
                            <a>按排名排序</a> ·
                            <a>按日期排序</a> ·
                            <a>按名称排序</a>
                        </div>
                        <div class="section">
                            <ul class="ul3">
                                <li class="ul4" v-for="(item,index) in showlist.slice(0, 10)" :info="item"
                                    :key="index">
                                    <router-link class="list1" :to="{name:'bookdetail',params:{id:item.bookId}}">
                                    <a><img class="cover" :src="item.icon"></a>
                                    </router-link>
                                    <div class="inner">
                                        <div class="collect">
                                            <ul class="ul9" v-show="item.show3">
                                                <li>
                                                    <a>
                                                        <span v-show="item.show"
                                                              @mouseover="selectStyle (item)"
                                                        >收藏</span>
                                                    </a>
                                                    <ul class="ul8" v-show="item.show2" @mouseleave="outStyle(item)" @click="doclick3(item)">
                                                        <li @click="modal1 = true"><a>想看</a></li>
                                                        <li @click="modal1 = true"><a>看过</a></li>
                                                        <li @click="modal1 = true"><a>在看</a></li>
                                                        <li @click="modal1 = true"><a>搁置</a></li>
                                                        <li @click="modal1 = true"><a>抛弃</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <p class="collectModify" v-show="!item.show3" @click="doclick3(item)">
                                                <a @click="modal1 = true">修改</a>&nbsp|
                                                <a @click="del(item)">删除</a>
                                            </p>
                                        </div>
                                        <router-link class="list1" :to="{name:'bookdetail',params:{id:item.bookId}}">
                                        <h3><a>{{item.name}}</a></h3>
                                        </router-link>
                                        <span class="rank"><small>Rank</small>{{index+1}}</span>
                                        <p class="info">
                                            {{item.jishu}}话 / {{item.time}} / {{item.author}}
                                        </p>
                                        <p class="rateinfo">
                                            <span><Rate class="rateinfo1" disabled
                                                        v-model="item.score"/></span>
                                            <small class="fade">{{item.score}}</small>
                                            <span class="sum">({{item.number}}人评分)</span>

                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <Modal class="model1"  v-model="modal1"  draggable scrollable :title="'收藏'+bookInfo2.name"
                                   @on-ok="ok(bookInfo2)"
                                   @on-cancel="cancel">
                                <div class="window">
                                    <div class="box">
                                        <form>
                                            <div class="type" >
                                                <RadioGroup v-model="bookInfo2.collectStatus">
                                                    <Radio :label="1">在看</Radio>
                                                    <Radio :label="2">看过</Radio>
                                                    <Radio :label="3">想看</Radio>
                                                    <Radio :label="4">搁置</Radio>
                                                    <Radio :label="5">抛弃</Radio>
                                                </RadioGroup>
                                            </div>
                                            <div class="cell">
                                                <p class="tip">
                                                    <label for="comment">吐槽 (简评，最多200字):</label></p>
                                                <textarea v-model="comment" name="comment" id="comment" cols="32" rows="3" class="quick"></textarea>
                                            </div>
                                        </form>

                                    </div>

                                </div>
                            </Modal>


                        </div>
                    </div>
                    <div class="content-right">
                        <div class="sideInner">
                            <h2 class="subtitle">类型</h2>
                            <ul class="ul5">
                                <li v-for="(item,index) in showlist2" :info="item" :key="index">
                                    <a :class="clsstr" @click="doclick(item)">{{item}}</a>
                                </li>
                            </ul>
                            <h2 class="subtitle">时间</h2>
                            <ul class="ul6">
                                <li v-for="(item,index) in timelist" :info="item" :key="index">
                                    <a :class="clsstr" @click="doclick2(item)">{{item}}年</a>
                                </li>
                            </ul>
                            <h2 class="subtitle">拼音</h2>
                            <ul class="ul7">
                                <li v-for="(item,index) in timeinfo" :info="item" :key="index">
                                    <a :class="clsstr" >{{item}}</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div class="page">
                    <Page :total="total" :current="current" :page-size="size"
                          prev-text="上一页" next-text="下一页" @on-change="change"/>
                </div>
                <div class="footer">
                    <ul class="ul100">
                        <li class="first">
                            <dl>
                                <dt>关于我们</dt>
                                <dd><a href="#">关于我们</a></dd>
                                <dd><a href="#">社区指导原则</a></dd>
                                <dd>
                                </dd>
                                <dd><a href="#">版权声明</a></dd>
                                <dd>
                                </dd>
                                <dd><a href="#">链接我们</a></dd>
                                <dd>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>获取帮助</dt>
                                <dd><a href="#">BBCode</a></dd>
                                <dd><a href="#">站务论坛</a></dd>
                                <dd><a href="#">番组开发</a></dd>
                                <dd><a href="#">BUG追踪</a></dd>
                                <dd><a href="#">天窗站务</a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>特别推荐</dt>
                                <dd>
                                    <a href="#">年鉴 2018</a> |
                                    <a href="#">17</a> |
                                    <a href="#">16</a> |
                                    <a href="#">15</a> |
                                    <a href="#">14</a> |
                                    <a href="#">13</a> |
                                    <a href="#">12</a><br>|
                                    <a href="#">11</a> |
                                    <a href="#">10</a>
                                </dd>
                                <dd><a href="#">番組WIKI計画</a></dd>
                                <dd><a href="#">onAir 客户端</a></dd>
                                <dd><a href="#">etokei 绘时计</a></dd>
                            </dl>
                        </li>
                        <li class="last">
                            <dl>
                                <dt>更多</dt>
                                <dd><a href="#">开发者平台</a></dd>
                                <dd><a href="#">目录</a></dd>
                                <dd><a href="#">维基人</a></dd>
                                <dd><a href="#">MAGI 问答</a></dd>
                                <dd><a href="#">周边</a></dd>
                                <dd><a href="#">Dollars</a></dd>
                            </dl>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "booklist",
        data() {
            return {
                valueDisabled: 5,
                clsstr: '',
                timeinfo: [
                    'A', 'B', 'C', 'D', 'E', 'F',
                    'G', 'H', 'I', 'J', 'K', 'L',
                    'M', 'N', 'O', 'P', 'Q', 'R',
                    'S', 'T', 'U', 'V', 'W', 'X',
                    'Y', 'Z',
                ],
                bookInfo: [
                    {
                        bookAuthor: '',
                        bookCharacter: '',
                        bookDescription: '',
                        bookIcon: '',
                        bookId: '',
                        bookJishu: '',
                        bookName: '',
                        bookStatus: '',
                        bookTime: '',
                        labelType: '',

                    }

                ],
                showlist: [],
                showlist2:[],
                timelist:[],
                current: 1,
                size: 10,
                modal1: false,
                comment:'',
                type:'',
                searchInfo:'',
                bookInfo2:[],
                userInfo:[]
            }
        },
        computed: {
            total() {
                return this.bookInfo.length;
            },

        },

        methods: {
            change(val) {
                this.current = val;
                this.showlist = [];
                for (var i = 0; i < this.size; i++) {
                    var index = (this.current - 1) * this.size + i;
                    if (index < this.bookInfo.length) {
                        var prod = this.bookInfo[index];
                        this.showlist.push(prod);
                    }
                    else
                        break;
                }
            },
            selectStyle (item) {
                item.show=false;
                item.show2=true;
            },
            outStyle (item) {
                item.show=true;
                item.show2=false;
            },

            doclick(item){
                axios.post("http://localhost:8090/bangumi/book/type", {
                    bookName: item,
                    userId:this.userInfo.userId
                }).then((res) => {
                    this.bookInfo=res.data;
                    this.showlist=res.data;

                })
            },

            doclick2(item){
                axios.post("http://localhost:8090/bangumi/book/time", {
                    time: item,
                    userId:this.userInfo.userId
                }).then((res) => {
                    this.bookInfo=res.data;
                    this.showlist=res.data;

                })
            },
            ok (bookInfo2) {
                axios.post("http://localhost:8090/bangumi/book/collect", {
                    userId: this.userInfo.userId,
                    bookId:bookInfo2.bookId,
                    code:bookInfo2.collectStatus,
                    comment:this.comment
                }).then((res) => {
                    this.$Message.info('Clicked ok');
                    location. reload()
                })

            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },

            doclick3(item){
                this.bookInfo2=item
            },
            del(item) {
                if (confirm("是否删除")){
                    axios.post("http://localhost:8090/bangumi/book/delcollect", {
                        userId: this.userInfo.userId,
                        bookId: item.bookId,
                        code:0,
                    }).then((res) => {
                        location. reload()
                    })
                }
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
                    axios.post("http://localhost:8090/bangumi/book/list", {
                        userId: this.userInfo.userId,
                    }).then((res) => {
                        this.bookInfo = res.data
                        this.showlist = res.data
                        console.log(res.data)
                    })

                    axios.get("http://localhost:8090/bangumi/book/type")
                        .then((res) => {
                            this.showlist2 = res.data;
                            console.log('类型列表:' + res.data)
                        })
                    axios.get("http://localhost:8090/bangumi/book/time")
                        .then((res) => {
                            this.timelist = res.data;
                            console.log('时间列表:' + res.data)
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

    .content-sum {
        height: 1300px;

    }

    .content {
        margin: 0 auto;
        width: 1000px;
    }

    .content-header {
        padding: 15px 0 10px 0;
    }

    .content-header h1 {
        color: #3E3E3E;
        font-size: 20px;
    }

    .content-left {
        width: 700px;
        float: left;
        margin: 5px 15px 0 0;
    }

    .content-left a {
        color: #0084B4;
        border: 0;
    }

    .content-content {
        padding: 0 0 10px 0;
        width: 1000px;
    }

    .content-left-header {
        font-size: 13px;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #EAEAEA;
        line-height: 20px;
        padding: 5px 0;
    }

    .cover {
        width: 84px;
        height: 106px;
        padding: 2px;
        border-top: 1px solid #C7C7C9;
        border-left: 1px solid #A9A9AB;
        border-right: 1px solid #A9A9AB;
        border-bottom: 1px solid #858486;
        box-shadow: 0 1px 5px #AAA;

    }

    .ul3 {

    }

    .ul3 > li {
        background-color: transparent;
        position: relative;
        padding: 7px 5px;
        border-bottom: 1px solid #EAEAEA;
        height: 126px;
    }

    .ul3 >li:nth-of-type(even) {
        background-color: #f9f9f9;
    }

    .ul3 > li > a {
        float: left;
    }

    .inner {
        margin-left: 100px;
        width: 590px;
        height: 75px;
    }


    .ul4 {

    }

    .ul4 > li {
        width: 55px;
        height: 27px;
        padding: 0;
        border: 0;
    }

    .ul4 > li > a {
        display: inline-block;
        line-height: 20px;
        color: #666;
        margin: 0 5px 5px 0;
        padding: 0 12px;
        box-shadow: 0 1px 2px #EEE, inset 0 1px 1px #FFF;
        font-size: 12px;
        width: 50px;
    }

    .ul8 {
        position: absolute;
        left:-20px;
        top: -5px;
        z-index: 99;
        width: 235px;
        padding: 0;
        border-radius: 5px;
        background-clip: padding-box;
        background-color: rgba(254, 254, 254, 0.9);
        border: 1px solid #DDD;
        box-shadow: 2px 2px 5px #EEE;
    }

    .ul8 li {
        float: left;
        margin: 0;
        width: auto;
    }

    .ul8 li:hover{
        background: rgba(54,156,248,0.92);
    }
    .ul8 li:hover a{
        color: white;
    }

    .ul8 li a {
        display: block;
        padding: 5px 10px;
        border-left: 1px solid #EEE;
        border-right: 1px solid #FFF;
        font-size: 12px;
    }



    .ul9 {
        margin: 0;
        padding: 0;
    }

    .ul9 > li {
        margin: 0;
        float: none;

    }

    .ul9 > li > a {
        display: inline-block;
        text-decoration: none;
        line-height: 20px;
        margin: 0 5px 5px 0;
        padding: 0 12px;
        border-radius: 4px;
        color: #666;
        border: 1px solid #DDD;
        text-shadow: 0px 1px 2px #FFF;
        background-image: -webkit-linear-gradient(top, #FFF 0%, #FAFAFA 100%);
        background-image: -o-linear-gradient(top, #FFF 0%, #FAFAFA 100%);
        background-image: linear-gradient(to bottom, #FFF 0%, #FAFAFA 100%);
        background-repeat: repeat-x;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fffafafa', GradientType=0);
        box-shadow: 0 1px 2px #EEE, inset 0 1px 1px #FFF;
    }



    .inner h3 {
        font-weight: normal;
        font-size: 14px;
        height: 19px;
    }

    .rank {
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 15px;
        line-height: 100%;
        padding: 2px 5px 1px 5px;
        color: #FFF;
        border-radius: 5px;
        background: #02A3FB;
        width: 50px;
    }

    .info {
        padding: 10px 0 0 0;
        font-size: 12px;
        color: #666;
    }

    .rateinfo {
        padding: 10px 0 0 0;

    }

    .rateinfo1 {
        font-size: 13px;

    }

    .rateinfo1 >>> .ivu-rate-star {
        margin-right: 0px;
    }

    .fade {
        font-size: 10px;
        color: #F90;
        margin-left: 2px;
    }

    .sum {
        font-size: 12px;
        color: #999;
        margin-left: 2px;
    }

    /*分割线*/

    .content-right {
        float: left;
        margin: 5px 0 0 0;
        width: 260px;
    }

    .content-right a {
        color: #0084B4;
        border: 0;
    }

    .sideInner {
        background-color: #FAFAFA;
        border: 1px solid #EEE;
        border-radius: 5px;
        padding: 5px 0 0 0;
        margin: 0 0 10px 0;
    }

    .sideInner h2 {
        border: none;
        background-color: #FFF;
        border-radius: 5px;
        padding: 5px 10px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 18px;
        line-height: 140%;
        color: #555;
    }

    .ul5 {
        margin: 5px 0;
    }

    .ul5 li {
        display: inline-block;
        float: left;
        padding: 3px 0 3px 10px;
    }

    .ul5 li a {
        display: block;
        padding: 2px 5px;
        font-size: 12px;
    }

    .ul5 li a:hover {
        animation: ttt 2s 1 forwards;
    }

    @keyframes ttt {
        0% {
            background: #F09199;
            color: #FFF;
            border-radius: 5px;

        }
        66% {
            background: #F09199;
            color: #FFF;
            border-radius: 5px;

        }
        100% {
            background: #F09199;
            color: #FFF;
            border-radius: 5px;

        }
    }

    .focus {
        background: #F09199;
        color: #FFF;
        border-radius: 5px;
    }

    .ul6 {
        margin: 5px 0;
    }

    .ul6 li {
        display: inline-block;
        float: left;
        padding: 3px 0 3px 10px;
        width: 60px;
        font-size: 11px;
        text-align: center;
    }

    .ul6 li a {
        display: block;
        padding: 2px 5px;
        font-size: 12px;
        width: 50px;
    }

    .ul6 li a:hover {
        animation: ttt 2s 1 forwards;
    }

    .ul7 {
        margin: 5px 0;
    }

    .ul7 li {
        display: inline-block;
        float: left;
        padding: 3px 0 3px 10px;
        width: 28px;
        font-size: 11px;
    }

    .ul7 li a {
        display: block;
        padding: 2px 5px;
        font-size: 12px;
        width: 17px;
    }

    .ul7 li a:hover {
        animation: ttt 2s 1 forwards;
    }

    /*收藏界面*/
    .window {
        /*margin-left: -265px;*/
        /*width: 530px;*/
        /*margin-top: -195px;*/
        /*display: block;*/
        /*position: fixed;*/
        /*z-index: 102;*/
        /*text-align: left;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*border-radius: 10px;*/
        /*background: #FFF;*/
        /*color: #000;*/
    }

    .box{
        /*padding: 10px 15px;*/
    }

    .ivu-modal-body{
        padding: 0;
    }
    .ivu-modal-header{
        background: rgba(240,145,153,1);
        padding: 0px 0px 0px 0px;

    }
    .ivu-modal-header-inner{
        color: white;
    }

    .type{
        margin: 0 0 5px 0;
        font-size: 14px;
        padding: 5px 0 10px 0;
        color: #666;
        border-bottom: 1px solid #EEE;
    }

    .type > label:not(:first-child){
        margin-left: 5px;
    }

    .tip{
        font-size: 12px;
        color: #666;
    }

    .quick{
        max-width: 470px;
        font-size: 15px;
        overflow: auto;
        margin: 3px 0;
        padding: 4px 5px;
        width: 99%;
        line-height: 22px;
        border-radius: 5px;
        background-clip: padding-box;
        background-color: #FFF;
        color: #000;
        border: 1px solid #d9d9d9;
    }

    /*分割线*/

    /*下面是底部代码*/
    .footer {
        width: 1000px;
        margin: 20px 0 15px 0;
        padding: 0;
        color: #AAA;
    }

    .ul100 {
        display: block;
        overflow: hidden;
        background: #f8f8f8;
        border-top: 1px solid #EEE;
        margin: 0 0 0 0;
        padding: 15px 10px;
    }

    .ul100 li {
        display: block;
        float: left;
        width: 25%;
    }

    .ul100 li a {
        color: #444;
    }

    .ul100 li dt {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 3px;
        margin-left: 15px;
        padding-bottom: 3px;
        width: 177px;
        border-bottom: 1px solid #CCC;
    }

    .ul100 li dd {
        margin-bottom: 0.2em;
        margin-left: 15px;
        font-size: 12px;
    }

    /*分割线*/

    .collectModify{
        background: #FFF url(../images/爱心.gif) no-repeat 5px 50%;
        padding: 2px 5px 2px 17px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        -moz-background-clip: padding;
        background-clip: padding-box;
        background-color: #FEFEFE;
        border: 1px solid #EEE;
        -moz-box-shadow: 0px 2px 5px #EEE;
        box-shadow: 0px 2px 5px #EEE;
    }

    .collectModify a {
        color: #666;
    }
    .collectModify a:hover {
        text-decoration: underline;
    }
    .collect {
        position: absolute;
        right: 5px;
        top: 30px;
        font-size: 12px;
        color: #CCC;
        text-shadow: none;

    }


</style>