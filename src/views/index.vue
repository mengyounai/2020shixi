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
            <div class="content1">
                <div class="content1-1">
                    <div class="img2">
                        <div class="content1-1-1">
                            <h1 style="font-size:18px;line-height: 30px;"><a class="a1">{{userInfo.userName}}</a></h1>
                        </div>
                        <img class="img3" :src="userInfo.userIcon">

                    </div>
                </div>
                <div class="content1-2">
                    <ul class="ul3">
                        <li style="width: 62px"><a href="#">时光机</a></li>
                        <li><a href="#">收藏</a></li>
                        <li><a href="#">人物</a></li>
                        <li><a href="#">日志</a></li>
                        <li><a href="#">目录</a></li>
                        <li style="width: 72px"><a href="#">时间胶囊</a></li>
                        <li><a href="#">小组</a></li>
                        <li><a href="#">好友</a></li>
                        <li><a href="#">维基</a></li>
                        <li><a href="#">天窗</a></li>
                    </ul>
                </div>
            </div>
            <div class="content2">
                <div class="content2-sum">
                    <div class="content2-left">
                        <div class="content2-header">
                            <div class="content2-header-1">
                                <span class="span1">bamgumi</span>
                                <span class="span2">2018-5-6 加入</span>
                            </div>
                            <div class="content2-header-2">
                                <a class="a2">
                                    <router-link class="list1" :to="{name:'personal'}">
                                    <span class="span3">编辑</span>
                                    </router-link>
                                </a>
                            </div>
                        </div>
                        <div class="content2-content">
                            <div class="content2-content-1">
                                <ul class="ul4">
                                    <li class="title"><h2><a>我的动画</a></h2></li>
                                    <li><a>{{animeInfo1.length}}部在看</a></li>
                                    <li><a>{{animeInfo2.length}}部看过</a></li>
                                    <li><a>0部想看</a></li>
                                    <li><a>0部搁置</a></li>
                                </ul>
                            </div>
                            <div class="content2-content-2">
                                <div v-show="show2" class="content2-content-2-1">
                                    <div  style="float: left;line-height: 90px;height: 90px;width: 35px">在看</div>
                                    <div style="margin-top: 10px">
                                        <ul class="ul5">
                                            <li v-for="(item,index) in animeInfo1.slice(0, 7)" :info="item" :key="index">
                                                <a>
                                                    <router-link class="list1" :to="{name:'animedetail',params:{id:item.animeId}}">
                                                    <span class="pictureFrameGroup">
                                                    <span class="img"><img :src="item.icon">
                                                    </span>
                                                        <span class="overlay"></span>
                                                    </span>
                                                    <p class="name">{{item.name}}</p>
                                                    </router-link>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div v-show="show3" class="content2-content-2-1">
                                    <div  style="float: left;line-height: 90px;height: 90px;width: 35px">看过</div>
                                    <div style="margin-top: 10px">
                                        <ul class="ul5">
                                            <li v-for="(item,index) in animeInfo2.slice(0, 7)" :info="item" :key="index">
                                                <a>
                                                    <router-link class="list1" :to="{name:'animedetail',params:{id:item.animeId}}">
                                                    <span class="pictureFrameGroup">
                                                    <span class="img"><img :src="item.icon">
                                                    </span>
                                                        <span class="overlay"></span>
                                                    </span>
                                                    <p class="name">{{item.name}}</p>
                                                    </router-link>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content2-content">
                            <div class="content2-content-1">
                                <ul class="ul4">
                                    <li class="title"><h2><a>我的书籍</a></h2></li>
                                    <li><a>{{bookInfo1.length}}部在看</a></li>
                                    <li><a>{{bookInfo2.length}}部看过</a></li>
                                    <li><a>0部想看</a></li>
                                    <li><a>0部搁置</a></li>
                                </ul>
                            </div>
                            <div class="content2-content-2">
                                <div v-show="show5" class="content2-content-2-1">
                                    <div  style="float: left;line-height: 90px;height: 90px;width: 35px">在看</div>
                                    <div style="margin-top: 10px">
                                        <ul class="ul5">
                                            <li v-for="(item,index) in bookInfo1.slice(0, 7)" :info="item" :key="index">
                                                <a>
                                                    <router-link class="list1" :to="{name:'bookdetail',params:{id:item.bookId}}">
                                                    <span class="pictureFrameGroup">
                                                    <span class="img"><img :src="item.icon">
                                                    </span>
                                                        <span class="overlay"></span>
                                                    </span>
                                                    <p class="name">{{item.name}}</p>
                                                    </router-link>
                                                </a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                                <div v-show="show6" class="content2-content-2-1">
                                    <div  style="float: left;line-height: 90px;height: 90px;width: 35px">看过</div>
                                    <div style="margin-top: 10px">
                                        <ul class="ul5">
                                            <li v-for="(item,index) in bookInfo2.slice(0, 7)" :info="item" :key="index">
                                                <a>
                                                    <router-link class="list1" :to="{name:'bookdetail',params:{id:item.bookId}}">
                                                    <span class="pictureFrameGroup">
                                                    <span class="img"><img :src="item.icon">
                                                    </span>
                                                        <span class="overlay"></span>
                                                    </span>
                                                    <p class="name">{{item.name}}</p>
                                                    </router-link>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content2-content">
                            <div class="content2-content-1">
                                <ul class="ul4">
                                    <li class="title"><h2><a>我的音乐</a></h2></li>
                                    <li><a>{{musicInfo1.length}}部在听</a></li>
                                    <li><a>{{musicInfo2.length}}部听过</a></li>
                                    <li><a>0部想听</a></li>
                                    <li><a>0部搁置</a></li>
                                </ul>
                            </div>
                            <div class="content2-content-2">
                                <div v-show="show8" class="content2-content-2-1">
                                    <div  style="float: left;line-height: 90px;height: 90px;width: 35px">在听</div>
                                    <div style="margin-top: 10px">
                                        <ul class="ul5">
                                            <li v-for="(item,index) in musicInfo1.slice(0, 7)" :info="item" :key="index">
                                                <a>
                                                    <router-link class="list1" :to="{name:'musicdetail',params:{id:item.musicId}}">
                                                    <span class="pictureFrameGroup">
                                                    <span class="img"><img :src="item.icon">
                                                    </span>
                                                        <span class="overlay"></span>
                                                    </span>
                                                    <p class="name">{{item.name}}</p>
                                                    </router-link>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div v-show="show9" class="content2-content-2-1">
                                    <div  style="float: left;line-height: 90px;height: 90px;width: 35px">听过</div>
                                    <div style="margin-top: 10px">
                                        <ul class="ul5">
                                            <li v-for="(item,index) in musicInfo2.slice(0, 7)" :info="item" :key="index">
                                                <a>
                                                    <router-link class="list1" :to="{name:'musicdetail',params:{id:item.musicId}}">
                                                    <span class="pictureFrameGroup">
                                                    <span class="img"><img :src="item.icon">
                                                    </span>
                                                        <span class="overlay"></span>
                                                    </span>
                                                    <p class="name">{{item.name}}</p>
                                                    </router-link>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content2-right">
                        <div class="content2-right-header">
                            <h2 class="h2">/ 我的时间胶囊</h2>
                            <div style="border: 1px solid rgba(119, 119, 119, 0.1);padding: 0 10px 10px 10px;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.09)">
                                <ul class="ul7">
                                    <li>将 菲林洛斯特 加为了好友 14h 37m ago</li>
                                    <li>搁置了 キルラキル 2019-12-22 19:42</li>
                                    <li>将 陌上幽梦 加为了好友 2019-12-22 19:41</li>
                                    <li>在看 魔入りました！入間くん 2019-12-22 04:09</li>
                                    <li>完成了 魔入りました！入間くん 12 of 23 话 2019-12-22 04:08</li>
                                    <li>听过 PCゲーム『終わる世界とバースデイ』初回特典 &予約特典 オリジナルマキシシングルCD 2019-12-22 04:06</li>
                                </ul>
                            </div>
                        </div>
                        <div class="content2-right-header2">
                            <h2 class="h2">/ 我的朋友</h2>
                            <div style="border: 1px solid rgba(119, 119, 119, 0.1);padding: 0 10px 10px 10px;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.09)">
                                <ul class="ul8">
                                    <li>
                                        <a>
                                            <img src="../images/头像2.jpg">
                                            <p class="name2">菲林洛斯特</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <img src="../images/头像3.jpg">
                                            <p class="name2">陌上幽梦</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <img src="../images/头像4.jpg">
                                            <p class="name2">タコ焼き大好き</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <img src="../images/头像3.jpg">
                                            <p class="name2">神户小鸟のfan</p>
                                        </a>
                                    </li>
                                </ul>
                                <div class="clear"></div>
                                <hr class="board">
                                <a class="a3">+ 谁加我为好友</a>
                            </div>
                        </div>
                        <div class="content2-right-header2">
                            <h2 class="h2">/ 我收藏的人物</h2>
                            <div v-show="show10" style="border: 1px solid rgba(119, 119, 119, 0.1);padding: 0 10px 10px 10px;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.09)">
                                <ul class="ul8">
                                    <li v-for="(item,index) in peopleInfo.slice(0, 4)" :info="item" :key="index">
                                        <router-link class="list1" :to="{name:'peopledetail',params:{id:item.peopleId}}">
                                        <a>
                                            <img :src="item.peopleIcon">
                                            <p class="name2">{{item.name}}</p>
                                        </a>
                                        </router-link>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <hr class="board">
                            </div>
                        </div>
                    </div>
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
        name: "index",
        data() {
            return {
                animeInfo:[],
                bookInfo:[],
                musicInfo:[],
                animeInfo1: [],
                animeInfo2: [],
                bookInfo1:[],
                bookInfo2:[],
                musicInfo1:[],
                musicInfo2:[],
                show1:true,
                show2:true,
                show3:true,
                show4:true,
                show5:true,
                show6:true,
                show7:true,
                show8:true,
                show9:true,
                show10:true,
                searchInfo:'',
                userInfo:[],
                peopleInfo:''
            }
        },

        computed:{

        },
        methods:{
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
                    this.userInfo=res.data
                    console.log(res.data)

                    axios.post("http://localhost:8090/bangumi/index/collectAll", {
                        userId: this.userInfo.userId,
                    }).then((res) => {
                        this.animeInfo1=res.data.animeInfoList1
                        this.animeInfo2=res.data.animeInfoList2
                        this.bookInfo1=res.data.bookInfoList1
                        this.bookInfo2=res.data.bookInfoList2
                        this.musicInfo1=res.data.musicInfoList1
                        this.musicInfo1=res.data.musicInfoList1
                        this.peopleInfo=res.data.peopleVOList;

                        if (this.animeInfo1.length==0){
                            this.show2=false;
                        }
                        if (this.animeInfo2.length==0){
                            this.show3=false;
                        }
                        if (this.bookInfo1.length==0){
                            this.show5=false;
                        }
                        if (this.bookInfo2.length==0){
                            this.show6=false;
                        }
                        if (this.musicInfo1.length==0){
                            this.show8=false;
                        }
                        if (this.musicInfo2.length==0){
                            this.show9=false;
                        }
                        if (this.peopleInfo.length==0){
                            this.show10=false;
                        }
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

    .content1 {

    }

    .content1-1 {
        margin: 0 auto;
        width: 1000px;
        padding-top: 15px;
    }

    .img2 {
        width: 75px;
        height: 75px;
        /*background-image: url(../images/头像.jpg);*/

    }
    .img3{
        width: 75px;
        height: 75px;
        /*background-repeat: no-repeat;*/
        /*background-size: 110% 110%;*/
        /*background-position: 50% 80%; !*这个是按从左往右，从上往下的百分比位置进行调整*!*/
        z-index: 1;
        position: relative;
        margin-top: -40px;
        /*-moz-background-size:100% 100%;*/
    }

    .a1 {
        color: black;

    }

    .content1-1-1 {
        position: relative;
        width: 200px;
        left: 125%;
    }

    .content1-2 {
        background: rgba(250, 250, 250, 0.92);
        position: relative;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -35px;

        z-index: 0
    }

    .ul3 {
        width: 80%;
        margin-left: 210px;
    }

    .ul3 li {
        display: inline-block;
        height: 35px;
        width: 48px;
        text-align: center;

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

    .ul3 li:not(:first-child) {
        margin-left: 11px;
    }

    .ul3 li:not(:first-child):hover a {

        color: rgba(54, 156, 248, 1);
    }

    /*分割线*/

    .content2-sum {

        overflow: hidden;

        /*height: 1000px;*/
    }

    .content2 {
        margin: 0 auto;
        width: 1000px;
        overflow: hidden;
    }

    .span1 {
        background: #EEE;
        background-color: #F09199;
        font-size: 11px;
        padding: 2px 10px;
        color: #fff;
        border-radius: 100px
    }

    .content2-left {
        width: 670px;
        float: left;
    }

    .content2-left img {
        width: 77px;
        height: 81px;
    }

    .span2 {
        color: #666;
    }

    .content2-header-1 {
        margin-top: 20px;
        height: 28px;
    }

    .content2-header {
        margin: 5px 0 5px 0;
        height: 62px;
        border-bottom: 2px solid rgba(244, 244, 244, 1);

    }

    .content2-header-2 {
        float: right;
        width: 44px;
        height: 18px;
        margin: 5px 0;
    }

    .a2 {
        padding: 2px 10px;
        background: #EEE;
        width: 44px;
        height: 18px;
        font-size: 12px;
        border-radius: 5px;
    }

    .a2:hover {
        background: rgba(54, 156, 248, 0.92);
        color: red;
    }

    .span3 {
        color: #888;
    }

    /*分割线*/

    .content2-content {
        color: #ACACAC;
    }

    .content2-content-1 {
        border-bottom: 1px solid #CCC;
    }

    .ul4 {

    }

    .ul4 li {
        display: inline-block;
        font-size: 12px;
        margin: 0pt 5px 0pt 0pt;
        margin-left: 12px;
    }

    .ul5 {
        width: 630px;

    }

    .ul5 li {
        display: inline;
        height: 120px;
        font-size: 11px;
        float: left;
        width: 80px;
        margin-left: 10px;

    }

    .ul5 li a {
        color: #444;
    }

    .pictureFrameGroup {
        display: block;
        height: 81px;
        overflow: hidden;
        position: relative;
        width: 78px;
    }

    .img {
        display: block;
        height: 73px;
        left: 2px;
        overflow: hidden;
        position: absolute;
        top: 2px;
        width: 74px;
    }

    .overlay {
        background: url(../images/图片边框.png) left top transparent;
        display: block;
        height: 81px;
        left: 0pt;
        position: absolute;
        top: 0pt;
        width: 77px;
        cursor: pointer;
    }

    .name{
        line-height: 1.18182em;
        overflow: hidden;
    }

    .ul6 {
        width: 635px;

    }

    .ul6 li {
        display: inline;
        height: 120px;
        font-size: 11px;
        float: left;
        width: 80px;
        margin-left: 10px;

    }

    .ul6 li a {
        color: #444;
    }

    /*分割线*/
    .content2-right {
        width: 300px;
        float: left;
        margin: 10px 0 0 20px;
        /*text-indent: 1em;*/
    }

    .content2-right-header {
        padding: 0 10px 10px 10px;
        width: 300px;
        margin-bottom: 15px;

    }

    .content2-right-header h2 {
        background: rgba(241, 242, 243, 0.92);
        font-weight: normal;
        font-size: 13px;
        height: 45px;
        line-height: 40px;
        text-shadow: #FFF 1px 1px 0px;
        padding-left: 10px;
    }

    .ul7 {
        font-size: 12px;

    }

    .ul7 li {
        border-bottom: 1px dotted #e0e0e0;
        margin-top: 5px;
        padding: 4px 0 4px 12px;
        overflow: hidden;
    }

    .content2-right-header2 {
        padding: 0 10px 10px 10px;
        margin-bottom: 15px;

    }

    .content2-right-header2 h2 {
        background: rgba(241, 242, 243, 0.92);
        font-weight: normal;
        font-size: 13px;
        height: 45px;
        line-height: 40px;
        text-shadow: #FFF 1px 1px 0px;
        padding-left: 10px;

    }

    .ul8 {

    }

    .ul8 li {
        display: inline-block;
        width: 64px;
        padding: 0 0 0 8px;
    }

    .ul8 img {
        width: 48px;
        height: 48px;
    }

    .name2 {
        font-size: 10px;
        height: 20px;
        overflow: hidden;
    }

    .clear {
        clear: both;
        line-height: 0px;
        font-size: 0px;
    }

    .board {
        height: 1px;
        border: 0;
        background-color: #EEE;
        color: #EEE;
    }

    .a3 {
        color: #444;
        font-size: 10px;
    }

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




</style>