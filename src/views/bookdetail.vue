<template>
    <div class="main">
        <div class="header">
            <div class="header-1">
                <img src="../images/logo1.png">
                <ul class="ul1">
                    <li>
                        <a href="#">动画</a>
                    </li>
                    <li>
                        <a href="#">书籍</a>
                    </li>
                    <li>
                        <a href="#">游戏</a>
                    </li>
                    <li>
                        <a href="#">音乐</a>
                    </li>
                    <li>
                        <a href="#">三次元</a>
                    </li>
                </ul>
                <ul class="ul2">
                    <li>
                        <a href="#">人物</a>
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
                        <input type="text" placeholder="请输入...">
                        <Button icon="ios-search"></Button>
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
        <div class="content">
            <div class="content-header">
                <h1>
                    <a>{{bookInfo.bookName}}</a>
                    <small class="grey">TV</small>
                </h1>
                <div class="content-header-1">
                    <ul class="ul3">
                        <li><a href="#">概览</a></li>
                        <li><a href="#">章节</a></li>
                        <li><a href="#">角色</a></li>
                        <li style="width: 76px"><a href="#">制作人员</a></li>
                        <li><a href="#">吐槽</a></li>
                        <li><a href="#">评论</a></li>
                        <li style="width: 62px"><a href="#">讨论版</a></li>
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
                                        <img class="cover" :src="bookInfo.bookIcon">
                                    </a>
                                </div>
                                <ul class="ul4">
                                    <li>
                                        <span class="tip">中文名: </span>
                                        {{bookInfo.bookName}}
                                    </li>
                                    <li>
                                        <span class="tip">放送时间: </span>
                                        {{bookInfo.bookTime}}
                                    </li>
                                    <li>
                                        <span class="tip">原作: </span>
                                        <a>{{bookInfo.bookAuthor}}</a>
                                    </li>
                                    <li>
                                        <span class="tip">集数: </span>
                                        {{bookInfo.bookJishu}}话
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="content-right">
                        <div class="content-right-header">
                            <div class="intro">
                                <div class="intro1">
                                    {{bookInfo.bookDescription}}
                                </div>
                            </div>
                            <div class="rate">
                                <div class="rate1">
                                    <h2>收藏盒</h2>
                                    <div class="tab">
                                        <ul class="ul5">
                                            <li @click="modal1 = true"><a class="thickbox"><span>想看</span></a></li>
                                            <li @click="modal1 = true"><a class="thickbox"><span>看过</span></a></li>
                                            <li @click="modal1 = true"><a class="thickbox"><span>在看</span></a></li>
                                            <li @click="modal1 = true"><a class="thickbox"><span>搁置</span></a></li>
                                            <li @click="modal1 = true"><a class="thickbox"><span>抛弃</span></a></li>
                                        </ul>
                                    </div>
                                    <hr class="board">
                                    <div class="rate2">
                                        <div>
                                            <div class="img2"></div>
                                            <div>
                                                <span class="number">{{bookInfo.score}}</span>
                                                <span class="description">推荐</span>
                                            </div>
                                            <div>
                                                <small class="grey">Bangumi Game Ranked:</small>
                                            </div>
                                            <p class="rateinfo" @click="doclick" >
                                                <Rate class="rateinfo1" allow-half v-model="rate" />

                                            </p>
                                            <span class="span1">{{rate}}分</span>
                                            <div class="rate3">
                                                <div class="rate4">
                                                    <small class="grey"><span property="v:votes">{{sum}}</span> votes
                                                    </small>
                                                </div>

                                                <ul class="ul6">
                                                    <li class="item-inner">
                                                        <div>
                                                            <div class="count">{{a}}%</div>
                                                            <div class="fill" v-bind:style="{height: a*0.8+'px'}"></div>
                                                            <div class="order">1</div>
                                                        </div>
                                                    </li>
                                                    <li class="item-inner">
                                                        <div>
                                                            <div class="count">{{b}}%</div>
                                                            <div class="fill" v-bind:style="{height: b*0.8+'px'}"></div>
                                                            <div class="order">2</div>
                                                        </div>
                                                    </li>
                                                    <li class="item-inner">
                                                        <div>
                                                            <div class="count">{{c}}%</div>
                                                            <div class="fill" v-bind:style="{height: c*0.8+'px'}"></div>
                                                            <div class="order">3</div>
                                                        </div>
                                                    </li>
                                                    <li class="item-inner">
                                                        <div>
                                                            <div class="count">{{d}}%</div>
                                                            <div class="fill" v-bind:style="{height: d*0.8+'px'}"></div>
                                                            <div class="order">4</div>
                                                        </div>
                                                    </li>
                                                    <li class="item-inner">
                                                        <div>
                                                            <div class="count">{{e}}%</div>
                                                            <div class="fill" v-bind:style="{height: e*0.8+'px'}"></div>
                                                            <div class="order">5</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <Modal class="model1"  v-model="modal1"  draggable scrollable :title="'收藏'+bookInfo.bookName"
                                                       @on-ok="ok(bookInfo)"
                                                       @on-cancel="cancel">
                                                    <div class="window">
                                                        <div class="box1">
                                                            <form>
                                                                <div class="type" >
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
                                                                    <textarea v-model="comment" name="comment" id="comment" cols="32" rows="3" class="quick"></textarea>
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
        name: "bookdetail",
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
                bookInfo:[],
                rate:0,
                modal1:false,
                comment:'',
                type:'',
                dInfo:[],
                peoInfo:[],
            }
        },
        computed: {
            a() {
                if (this.sum == 0) {
                    return 0
                }
                {
                    var a = Math.round(this.count1 / this.sum * 100)
                    return a;
                }
            },
            b() {
                if (this.sum == 0) {
                    return 0
                }
                {
                    var a = Math.round(this.count2 / this.sum * 100)
                    return a;
                }
            },
            c() {
                if (this.sum == 0) {
                    return 0
                }
                {
                    var a = Math.round(this.count3 / this.sum * 100)
                    return a;
                }
            },
            d() {
                if (this.sum == 0) {
                    return 0
                }
                {
                    var a = Math.round(this.count4 / this.sum * 100)
                    return a;
                }
            },
            e() {
                if (this.sum == 0) {
                    return 0
                }
                {
                    var a = Math.round(this.count5 / this.sum * 100)
                    return a;
                }
            }
        },
        methods:{


            doclick() {
                axios.post("http://localhost:8090/bangumi/book/rateup", {
                    bookId: this.bookInfo.bookId,
                    userId:2,
                    score:this.rate,
                }).then((res) => {
                    axios.post("http://localhost:8090/bangumi/book/rate", {
                        bookId: this.bookInfo.bookId
                    }).then((res) => {
                        this.count1=res.data.count1;
                        this.count2=res.data.count2;
                        this.count3=res.data.count3;
                        this.count4=res.data.count4;
                        this.count5=res.data.count5;
                        this.sum=this.count1+this.count2+this.count3+this.count4+this.count5
                    })
                    console.log(res)

                })
            },
            ok (bookInfo) {
                axios.post("http://localhost:8090/bangumi/book/collect", {
                    userId: 2,
                    bookId:bookInfo.bookId,
                    code:this.type,
                    comment:this.comment
                }).then((res) => {
                    axios.post("http://localhost:8090/bangumi/book/discuss", {
                        bookId: this.bookInfo.bookId
                    }).then((res) => {
                        this.dInfo=res.data;
                    })
                    this.$Message.info('Clicked ok');

                })

            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
        },
        created:function () {
            var id = this.$route.params.id

            if (id == null) {
                id = this.bookInfo.bookId
            }

            axios.post("http://localhost:8090/bangumi/book/detail", {
                bookId: id
            }).then((res) => {
                this.bookInfo=res.data;
                console.log(res.data)

            })

            axios.post("http://localhost:8090/bangumi/book/rate", {
                bookId: id
            }).then((res) => {
                this.count1=res.data.count1;
                this.count2=res.data.count2;
                this.count3=res.data.count3;
                this.count4=res.data.count4;
                this.count5=res.data.count5;
                this.sum=this.count1+this.count2+this.count3+this.count4+this.count5
                console.log(res.data)
            })

            axios.post("http://localhost:8090/bangumi/book/discuss", {
                bookId: id
            }).then((res) => {
                this.dInfo=res.data;
                console.log(res.data)
            })

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
        width: 32px;
        height: 32px;
    }

    .img1-1 {
        width: 32px;
        height: 32px;
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
        margin: 10px 10px 0 0;
        width: 220px;
    }

    .info {
        padding: 0 5px 0 0;
        margin-bottom: 15px;
    }

    .box {
        overflow: hidden;
        width: 220px;
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
    }

    .tip{
        font-size: 13px;
    }

    .center {
        text-align: center;
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
        height: 300px;
    }

    .content-right {
        margin: 10px 0 0 0;
        width: 750px;
        float: left;
    }

    .intro {
        width: 485px;
        line-height: 180%;
        padding: 0 10px 0 5px;
        float: left;
    }

    .intro1 {
        height: auto !important;
        height: 250px;
        max-height: 250px;
        overflow: hidden;
    }

    .rate {
        width: 240px;
        float: right;
    }

    .rate1 {
        font-size: 12px;
        margin-bottom: 15px;
        padding: 0 10px 10px 10px;
        border-radius: 5px;
        background-clip: padding-box;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.09);
        border: 1px solid #F0F0F0;
        background-image: linear-gradient(#f8f9f9, #f0f1f2 99%, #e4e4e5);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff8f9f9', endColorstr='#ffe4e4e5', GradientType=0);
        background-size: 40px 40px;
        background-repeat: repeat-x;
    }

    .tab {

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

    .board {
        height: 1px;
        border: 0;
        background-color: #EEE;
        color: #EEE;
    }

    .rate2 {
        margin-top: 10px;
    }

    .img2 {
        background: transparent url(../images/bangumi.gif) no-repeat;
        height: 37px;
        width: 30px;
        margin: 0 0 5px 0;
        background-position: -115px 0px;
        float: left;
        padding-right: 8px;
        position: static;
        visibility: visible;
    }

    .number {
        color: #E800A4;
        font-weight: bold;
        font-size: 15px;
        margin-left: 5px;
    }

    .description {
        margin-left: 2px;
        font-weight: bold;
    }

    /*星星评分*/

    .ul6 {
        position: absolute;
        bottom: -2px;
        left: 2%;
        right: 2%;
    }

    .ul6 li {
        list-style: none;
        display: inline-block;
    }

    .item-inner {

        margin-left: 16px;
        text-align: center;

    }

    .rateinfo{
        position: relative;
    }

    .rateinfo1 {

        margin-right: 14px;
    }

    .rateinfo1 >>> .ivu-rate-star {

    }
    .span1{
        position: absolute;
        left: 85%;
        top: 45%;

    }

    .count {

    }

    .fill {

        background: rgba(170, 170, 170, 1);
    }

    .order {

    }

    .rate3 {
        position: relative;
        height: 130px;
        background-color: #fbfbfb;
    }

    .rate4 {
        position: absolute;
        padding: 0 5px;
        background-color: #FFF;
        opacity: 0.8;
        z-index: 3;
        top: 0;
        right: 0;
    }

    /*分割线*/

    .section {
        padding: 10px;
        margin: 0 0 5px 0;
        border-bottom: 1px solid #EEE;

    }

    .ul7{
        overflow: hidden;
        margin: 5px 0 0 0;
    }
    .ul7 li{
        margin: 0 0 10px;
        display: block;
        float: left;
        font-size: 12px;
        margin: 0pt 0pt 30px;
        position: relative;
        width: 33%;
    }
    .userContainer{
        padding: 0 5px 0 55px;
    }

    .userContainer strong{
        font-size: 14px;
        font-weight: normal;
        display: block;
        margin: 0 0 3px 0;
        padding: 0 0 3px 0;
    }

    .userimg{
        margin: 0pt 0pt 0pt -55px;
        cursor: pointer;
        float: left;
        display: flex;
        align-items: center;

    }

    .span2{
        width: 48px;
        height: 48px;
        display: inline-block;
        border-radius: 5px;
        box-shadow: inset #BBB 0px 0 2px 0px;
        transition: border linear 0.2s, box-shadow linear 0.2s;

    }

    .span3{
        margin-left: 5px;
        border-bottom: 1px solid #EEE;
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

    .comment-box {
        margin: 5px 0;


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
        width: 550px;

    }

    .text {
        font-size: 14px;
        line-height: 1.6;
        margin: 0 0 0 35px;
        padding: 5px 10px;
        border-radius: 5px;
        background-clip: padding-box;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05);
        color: #555;
        background-color: #FFF;
        border: 1px solid #e8e8e8;

    }

    .a1 {
        display: block;
        width: 0px;
        height: 0px;

    }

    .comment-box div:nth-of-type(even) span{
        position: absolute;
        /*left: 40%;*/
        margin-left: 100%;

    }
    .comment-box div:nth-of-type(even) .text-main{
        position: relative;
        left: 24%;
    }


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

    .box1{
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
        max-width: 480px;
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



</style>