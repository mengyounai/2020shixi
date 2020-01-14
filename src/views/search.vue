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
                <div class="searchbox">
                    <h1>条目搜索</h1>
                    <form>
                        <input name="cat" value="all" type="hidden">
                        <input v-model="searchInfo" name="search_text" class="searchInputL" type="text">
                        <input class="searchBtnL" title="Search" value="搜索" type="button" @click="dosearch()">
                    </form>
                </div>

            </div>
            <div class="content-content">
                <div class="content-sum">
                    <div class="content-left">
                        <ul class="ul10">
                            <li class="root">条目</li>
                            <li><a class="selected"><span>全部</span></a></li>
                            <li :class="cls1" @click="doclick4()"><a><span>动画</span></a></li>
                            <li :class="cls2" @click="doclick5()"><a><span>书籍</span></a></li>
                            <li :class="cls3" @click="doclick6()"><a><span>音乐</span></a></li>
                            <li class="root">人物</li>
                        </ul>
                    </div>
                    <div class="content-right">
                        <div class="clearit">
                            <div class="browserTools">
                                <ul id="browserTypeSelector" class="browserTypeSelector">
                                    <li><a href="javascript:void(0);" id="list_selector" class=""><span>精简</span></a>
                                    </li>
                                    <li><a href="javascript:void(0);" id="full_selector"
                                           class="active">&gt;<span>列表</span></a></li>
                                    <li><a href="javascript:void(0);" id="grid_selector">&gt;<span>网格</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <ul class="ul3" v-show="show1">
                            <li class="ul4" v-for="(item,index) in showlist.slice(0, 10)" :info="item"
                                :key="index">
                                <router-link class="list1" :to="{name:'animedetail',params:{id:item.animeId}}">
                                    <a><img class="cover" :src="item.icon"></a>
                                </router-link>
                                <div class="inner">
                                    <div class="collect">
                                        <ul class="ul9">
                                            <li>
                                                <a>
                                                        <span v-show="item.show"
                                                              @mouseover="selectStyle (item)"
                                                        >收藏</span>
                                                </a>
                                                <ul class="ul8" v-show="item.show2" @mouseleave="outStyle(item)"
                                                    @click="doclick3(item)">
                                                    <li @click="modal1 = true"><a>想看</a></li>
                                                    <li @click="modal1 = true"><a>看过</a></li>
                                                    <li @click="modal1 = true"><a>在看</a></li>
                                                    <li @click="modal1 = true"><a>搁置</a></li>
                                                    <li @click="modal1 = true"><a>抛弃</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <router-link class="list1" :to="{name:'animedetail',params:{id:item.animeId}}">
                                        <h3><a>{{item.name}}</a></h3>
                                    </router-link>
                                    <p class="info">
                                        {{item.time}} / {{item.author}}/{{item.jishu}}话
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
                        <ul class="ul3" v-show="show2">
                            <li class="ul4" v-for="(item,index) in showlist.slice(0, 10)" :info="item"
                                :key="index" >
                                <router-link class="list1" :to="{name:'bookdetail',params:{id:item.bookId}}">
                                    <a><img class="cover" :src="item.icon"></a>
                                </router-link>
                                <div class="inner">
                                    <div class="collect">
                                        <ul class="ul9">
                                            <li>
                                                <a>
                                                        <span v-show="item.show"
                                                              @mouseover="selectStyle (item)"
                                                        >收藏</span>
                                                </a>
                                                <ul class="ul8" v-show="item.show2" @mouseleave="outStyle(item)"
                                                    @click="doclick3(item)">
                                                    <li @click="modal1 = true"><a>想看</a></li>
                                                    <li @click="modal1 = true"><a>看过</a></li>
                                                    <li @click="modal1 = true"><a>在看</a></li>
                                                    <li @click="modal1 = true"><a>搁置</a></li>
                                                    <li @click="modal1 = true"><a>抛弃</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <router-link class="list1" :to="{name:'musicdetail',params:{id:item.musicId}}">
                                        <h3><a>{{item.name}}</a></h3>
                                    </router-link>
                                    <p class="info">
                                        {{item.time}} / {{item.author}}
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
                        <ul class="ul3" v-show="show3">
                            <li class="ul4" v-for="(item,index) in showlist.slice(0, 10)" :info="item"
                                :key="index">
                                <router-link class="list1" :to="{name:'musicdetail',params:{id:item.musicId}}">
                                    <a><img class="cover" :src="item.icon"></a>
                                </router-link>
                                <div class="inner">
                                    <div class="collect">
                                        <ul class="ul9">
                                            <li>
                                                <a>
                                                        <span v-show="item.show"
                                                              @mouseover="selectStyle (item)"
                                                        >收藏</span>
                                                </a>
                                                <ul class="ul8" v-show="item.show2" @mouseleave="outStyle(item)"
                                                    @click="doclick3(item)">
                                                    <li @click="modal1 = true"><a>想看</a></li>
                                                    <li @click="modal1 = true"><a>看过</a></li>
                                                    <li @click="modal1 = true"><a>在看</a></li>
                                                    <li @click="modal1 = true"><a>搁置</a></li>
                                                    <li @click="modal1 = true"><a>抛弃</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <router-link class="list1" :to="{name:'animedetail',params:{id:item.animeId}}">
                                        <h3><a>{{item.name}}</a></h3>
                                    </router-link>
                                    <p class="info">
                                        {{item.time}} / {{item.author}}/{{item.jishu}}话
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
                        <Modal class="model1" v-model="modal1" id="color" draggable scrollable
                               :title="'收藏'+animeInfo2.name"
                               @on-ok="ok(animeInfo2)"
                               @on-cancel="cancel">
                            <div class="window">
                                <div class="box">
                                    <form>
                                        <div class="type">
                                            <RadioGroup v-model="type">
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
                                            <textarea v-model="comment" name="comment" id="comment" cols="32" rows="3"
                                                      class="quick"></textarea>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </Modal>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "search",
        data() {
            return {

                searchSum:[

                ],

                animeInfo: [
                    {
                        animeAuthor: '',
                        animeCharacter: '',
                        animeDescription: '',
                        animeIcon: '',
                        animeId: '',
                        animeJishu: '',
                        animeName: '',
                        animeStatus: '',
                        animeTime: '',
                        labelType: '',
                    }
                ],
                bookInfo:[],
                musicInfo:[],
                showlist: [],
                current: 1,
                size: 10,
                modal1: false,
                comment: '',
                type: '',
                animeInfo2: [],
                searchInfo: '',
                cls1:'background',
                cls2:'',
                cls3:'',
                show1:true,
                show2:false,
                show3:false,
                userInfo:[],
            }
        },
        methods: {
            change(val) {
                this.current = val;
                this.showlist = [];
                for (var i = 0; i < this.size; i++) {
                    var index = (this.current - 1) * this.size + i;
                    if (index < this.animeInfo.length) {
                        var prod = this.animeInfo[index];
                        this.showlist.push(prod);
                    }
                    else
                        break;
                }
            },
            selectStyle(item) {
                item.show = false;
                item.show2 = true;
            },
            outStyle(item) {
                item.show = true;
                item.show2 = false;
            },


            ok(animeInfo2) {
                axios.post("http://localhost:8090/bangumi/anime/collect", {
                    userId: this.userInfo.userId,
                    animeId: animeInfo2.animeId,
                    code: this.type,
                    comment: this.comment
                }).then((res) => {
                    this.$Message.info('Clicked ok');
                })

            },
            cancel() {
                this.$Message.info('Clicked cancel');
            },

            doclick3(item) {
                this.animeInfo2 = item
            },
            doclick4(item) {
                this.showlist = this.animeInfo
                this.cls1='background'
                this.cls2=''
                this.cls3=''
                this.show1=true;
                this.show2=false;
                this.show3=false;
            },
            doclick5(item) {
                this.showlist = this.bookInfo
                this.cls2='background'
                this.cls1=''
                this.cls3=''
                this.show1=false;
                this.show2=true;
                this.show3=false;
                console.log(this.showlist)
            },
            doclick6(item) {
                this.showlist = this.musicInfo
                this.cls3='background'
                this.cls1=''
                this.cls2=''
                this.show1=false;
                this.show2=false;
                this.show3=true;
            },
            dosearch() {
                axios.post("http://localhost:8090/bangumi/search/search", {
                    userId: this.userInfo.userId,
                    searchInfo: this.searchInfo,
                }).then((res) => {
                    this.animeInfo = res.data.searchVO.animeVOList
                    this.bookInfo = res.data.searchVO.bookVOList
                    this.musicInfo = res.data.searchVO.musicVOList
                    this.showlist = this.animeInfo
                    this.searchInfo = this.searchInfo
                })
            }

        },
        computed: {
            total() {
                return this.showlist.length;
            },

        },
        created: function () {

            var info = this.$route.params.searchInfo

            if (info == null) {
                info = this.searchInfo
            }

            console.log(this.$cookieStore.getCookie('username'))

            if (this.$cookieStore.getCookie('username')) {
                var username = this.$cookieStore.getCookie('username')

                axios.post("http://localhost:8090/bangumi/user/info", {
                    username: username,
                }).then((res) => {
                    this.userInfo = res.data
                    console.log(res.data)
                    axios.post("http://localhost:8090/bangumi/search/search", {
                        userId: this.userInfo.userId,
                        searchInfo: info,
                    }).then((res) => {
                        this.animeInfo=res.data.searchVO.animeVOList
                        this.bookInfo=res.data.searchVO.bookVOList
                        this.musicInfo=res.data.searchVO.musicVOList
                        this.showlist=this.animeInfo
                        this.searchInfo=info
                        console.log("搜索信息"+info)
                        console.log(res.data)
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

    .content-header {
        background: #fbfbfb;
        border-bottom: 1px solid #EEE;
    }

    .searchbox {
        margin: 0 auto;
        padding: 10px 0 10px 0;
        width: 980px;
    }

    .searchbox h1 {
        float: left;
        font-size: 16px;
        width: 100px;
        line-height: 35px;
        text-align: right;
        margin: 0 15px 0 0;
        color: #777;
    }

    .searchInputL {
        border: 2px solid #CCC;
        font-size: 14px;
        color: #555;
        padding: 6px 10px;
        width: 350px;
        -webkit-border-radius: 5px;
        transition: border linear 0.2s, box-shadow linear 0.2s;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .searchBtnL {
        font-size: 13px;
        border: none;
        background: #4EB1D4;
        color: #FFF;
        padding: 6px 15px;
        -webkit-border-radius: 5px;
        margin-left: 5px;
    }



    /*分割线*/

    .content-content {
        margin: 0 auto;
        width: 1000px;
    }

    .content-sum {
        padding: 0 0 10px 0;
        width: 1000px;
        overflow: hidden;
    }

    .content-left {
        margin: 20px 10px 0 0;
        width: 100px;
        float: left;
    }

    .ul10 {
        border-radius: 3px;
        background-clip: padding-box;
        box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.8);
        background: #FAFAFA;
        border: 1px solid #EEE;
        width: 100px;
    }

    .root {
        padding: 4px 15px;
        color: #888;
        font-weight: bold;
        background: #fbfbfb;
        border-bottom: 1px solid #e8e8e8;
    }

    .content-left ul li a {
        display: block;
        padding: 5px 15px;
        color: #0084B4;
        border: 1px solid #FFF;
        border-top: 1px solid #FFF;
        border-bottom: 1px solid #EEE;
        font-size: 12px;

    }

    .ul10 li:not(:first-child):not(:last-child):hover {
        background: rgba(240, 145, 153, 0.92);

    }

    .ul10 li:not(:first-child):not(:last-child):hover a {
        background-image: -webkit-linear-gradient(92deg, #fff, #fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-animation: hue 10s infinite linear;
    }

    .background{
        background: rgba(240, 145, 153, 0.92);

    }
    .background a{
        background-image: -webkit-linear-gradient(92deg, #fff, #fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-animation: hue 10s infinite linear;}

    .brown{

    }

    .content-right {
        margin: 20px 10px 0 0;
        width: 655px;
        float: left;
    }

    .browserTools {
        background: none;
        padding: 5px 0;
        border-bottom: 1px solid #EEE;
        overflow: hidden;
    }

    .browserTypeSelector {
        float: right;
        height: 20px;
    }

    ul.browserTypeSelector li {
        float: left;
        height: 25px;
    }

    ul.browserTypeSelector li a {
        background-image: url(../images/排列图标.png);
        display: block;
        overflow: hidden;
        height: 17px;
        width: 25px;
        text-indent: -9999px;
    }

    /*分割线*/
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

    .ul3 > li:nth-of-type(even) {
        background-color: #f9f9f9;
    }

    .ul3 > li > a {
        float: left;
    }

    .inner {
        margin-left: 100px;
        width: 540px;
        height: 75px;
    }

    .collect {
        position: absolute;
        right: 5px;
        top: 30px;

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
        left: -20px;
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

    .ul8 li:hover {
        background: rgba(54, 156, 248, 0.92);
    }

    .ul8 li:hover a {
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

</style>