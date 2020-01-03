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
                            <DropdownItem>个人中心</DropdownItem>
                            <DropdownItem>设置</DropdownItem>
                            <DropdownItem>退出</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-header">
                <h1>全部音乐</h1>
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
                                <li>
                                    <a><img class="cover" src="../images/未来日记.jpg"></a>
                                    <div class="inner">
                                        <div class="collect">
                                            <ul class="ul4">
                                                <li>
                                                    <a>
                                                        <span>收藏</span>
                                                    </a>
                                                    <!--<ul>-->
                                                    <!--<li>想看</li>-->
                                                    <!--<li>看过</li>-->
                                                    <!--<li>在看</li>-->
                                                    <!--<li>搁置</li>-->
                                                    <!--</ul>-->
                                                </li>
                                            </ul>
                                        </div>
                                        <h3><a>未来日记</a></h3>
                                        <span class="rank"><small>Rank</small>1</span>
                                        <p class="info">
                                            26话 / 1998年10月23日 / 渡辺信一郎 / 矢立肇 / 川元利浩
                                        </p>
                                        <p class="rateinfo">
                                            <span><Rate class="rateinfo1" disabled
                                                        v-model="valueDisabled"/></span>
                                            <small class="fade">5</small>
                                            <span class="sum">(6330人评分)</span>

                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <a><img class="cover" src="../images/未来日记.jpg"></a>
                                    <div class="inner">
                                        <div class="collect">
                                            <ul class="ul4">
                                                <li>
                                                    <a>
                                                        <span>收藏</span>
                                                    </a>
                                                    <!--<ul>-->
                                                    <!--<li>想看</li>-->
                                                    <!--<li>看过</li>-->
                                                    <!--<li>在看</li>-->
                                                    <!--<li>搁置</li>-->
                                                    <!--</ul>-->
                                                </li>
                                            </ul>
                                        </div>
                                        <h3><a>未来日记</a></h3>
                                        <span class="rank"><small>Rank</small>1</span>
                                        <p class="info">
                                            26话 / 1998年10月23日 / 渡辺信一郎 / 矢立肇 / 川元利浩
                                        </p>
                                        <p class="rateinfo">
                                            <span><Rate class="rateinfo1" disabled
                                                        v-model="valueDisabled"/></span>
                                            <small class="fade">5</small>
                                            <span class="sum">(6330人评分)</span>

                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <a><img class="cover" src="../images/未来日记.jpg"></a>
                                    <div class="inner">
                                        <div class="collect">
                                            <ul class="ul4">
                                                <li>
                                                    <a>
                                                        <span>收藏</span>
                                                    </a>
                                                    <!--<ul>-->
                                                    <!--<li>想看</li>-->
                                                    <!--<li>看过</li>-->
                                                    <!--<li>在看</li>-->
                                                    <!--<li>搁置</li>-->
                                                    <!--</ul>-->
                                                </li>
                                            </ul>
                                        </div>
                                        <h3><a>未来日记</a></h3>
                                        <span class="rank"><small>Rank</small>1</span>
                                        <p class="info">
                                            26话 / 1998年10月23日 / 渡辺信一郎 / 矢立肇 / 川元利浩
                                        </p>
                                        <p class="rateinfo">
                                            <span><Rate class="rateinfo1" disabled
                                                        v-model="valueDisabled"/></span>
                                            <small class="fade">5</small>
                                            <span class="sum">(6330人评分)</span>

                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <a><img class="cover" src="../images/未来日记.jpg"></a>
                                    <div class="inner">
                                        <div class="collect">
                                            <ul class="ul4">
                                                <li>
                                                    <a>
                                                        <span>收藏</span>
                                                    </a>
                                                    <!--<ul>-->
                                                    <!--<li>想看</li>-->
                                                    <!--<li>看过</li>-->
                                                    <!--<li>在看</li>-->
                                                    <!--<li>搁置</li>-->
                                                    <!--</ul>-->
                                                </li>
                                            </ul>
                                        </div>
                                        <h3><a>未来日记</a></h3>
                                        <span class="rank"><small>Rank</small>1</span>
                                        <p class="info">
                                            26话 / 1998年10月23日 / 渡辺信一郎 / 矢立肇 / 川元利浩
                                        </p>
                                        <p class="rateinfo">
                                            <span><Rate class="rateinfo1" disabled
                                                        v-model="valueDisabled"/></span>
                                            <small class="fade">5</small>
                                            <span class="sum">(6330人评分)</span>

                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <a><img class="cover" src="../images/未来日记.jpg"></a>
                                    <div class="inner">
                                        <div class="collect">
                                            <ul class="ul4">
                                                <li>
                                                    <a>
                                                        <span>收藏</span>
                                                    </a>
                                                    <!--<ul>-->
                                                    <!--<li>想看</li>-->
                                                    <!--<li>看过</li>-->
                                                    <!--<li>在看</li>-->
                                                    <!--<li>搁置</li>-->
                                                    <!--</ul>-->
                                                </li>
                                            </ul>
                                        </div>
                                        <h3><a>未来日记</a></h3>
                                        <span class="rank"><small>Rank</small>1</span>
                                        <p class="info">
                                            26话 / 1998年10月23日 / 渡辺信一郎 / 矢立肇 / 川元利浩
                                        </p>
                                        <p class="rateinfo">
                                            <span><Rate class="rateinfo1" disabled
                                                        v-model="valueDisabled"/></span>
                                            <small class="fade">5</small>
                                            <span class="sum">(6330人评分)</span>

                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <a><img class="cover" src="../images/未来日记.jpg"></a>
                                    <div class="inner">
                                        <div class="collect">
                                            <ul class="ul4">
                                                <li>
                                                    <a>
                                                        <span>收藏</span>
                                                    </a>
                                                    <!--<ul>-->
                                                    <!--<li>想看</li>-->
                                                    <!--<li>看过</li>-->
                                                    <!--<li>在看</li>-->
                                                    <!--<li>搁置</li>-->
                                                    <!--</ul>-->
                                                </li>
                                            </ul>
                                        </div>
                                        <h3><a>未来日记</a></h3>
                                        <span class="rank"><small>Rank</small>1</span>
                                        <p class="info">
                                            26话 / 1998年10月23日 / 渡辺信一郎 / 矢立肇 / 川元利浩
                                        </p>
                                        <p class="rateinfo">
                                            <span><Rate class="rateinfo1" disabled
                                                        v-model="valueDisabled"/></span>
                                            <small class="fade">5</small>
                                            <span class="sum">(6330人评分)</span>

                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <a><img class="cover" src="../images/未来日记.jpg"></a>
                                    <div class="inner">
                                        <div class="collect">
                                            <ul class="ul4">
                                                <li>
                                                    <a>
                                                        <span>收藏</span>
                                                    </a>
                                                    <!--<ul>-->
                                                    <!--<li>想看</li>-->
                                                    <!--<li>看过</li>-->
                                                    <!--<li>在看</li>-->
                                                    <!--<li>搁置</li>-->
                                                    <!--</ul>-->
                                                </li>
                                            </ul>
                                        </div>
                                        <h3><a>未来日记</a></h3>
                                        <span class="rank"><small>Rank</small>1</span>
                                        <p class="info">
                                            26话 / 1998年10月23日 / 渡辺信一郎 / 矢立肇 / 川元利浩
                                        </p>
                                        <p class="rateinfo">
                                            <span><Rate class="rateinfo1" disabled
                                                        v-model="valueDisabled"/></span>
                                            <small class="fade">5</small>
                                            <span class="sum">(6330人评分)</span>

                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <a><img class="cover" src="../images/未来日记.jpg"></a>
                                    <div class="inner">
                                        <div class="collect">
                                            <ul class="ul4">
                                                <li>
                                                    <a>
                                                        <span>收藏</span>
                                                    </a>
                                                    <!--<ul>-->
                                                    <!--<li>想看</li>-->
                                                    <!--<li>看过</li>-->
                                                    <!--<li>在看</li>-->
                                                    <!--<li>搁置</li>-->
                                                    <!--</ul>-->
                                                </li>
                                            </ul>
                                        </div>
                                        <h3><a>未来日记</a></h3>
                                        <span class="rank"><small>Rank</small>1</span>
                                        <p class="info">
                                            26话 / 1998年10月23日 / 渡辺信一郎 / 矢立肇 / 川元利浩
                                        </p>
                                        <p class="rateinfo">
                                            <span><Rate class="rateinfo1" disabled
                                                        v-model="valueDisabled"/></span>
                                            <small class="fade">5</small>
                                            <span class="sum">(6330人评分)</span>

                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <a><img class="cover" src="../images/未来日记.jpg"></a>
                                    <div class="inner">
                                        <div class="collect">
                                            <ul class="ul4">
                                                <li>
                                                    <a>
                                                        <span>收藏</span>
                                                    </a>
                                                    <!--<ul>-->
                                                    <!--<li>想看</li>-->
                                                    <!--<li>看过</li>-->
                                                    <!--<li>在看</li>-->
                                                    <!--<li>搁置</li>-->
                                                    <!--</ul>-->
                                                </li>
                                            </ul>
                                        </div>
                                        <h3><a>未来日记</a></h3>
                                        <span class="rank"><small>Rank</small>1</span>
                                        <p class="info">
                                            26话 / 1998年10月23日 / 渡辺信一郎 / 矢立肇 / 川元利浩
                                        </p>
                                        <p class="rateinfo">
                                            <span><Rate class="rateinfo1" disabled
                                                        v-model="valueDisabled"/></span>
                                            <small class="fade">5</small>
                                            <span class="sum">(6330人评分)</span>

                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <a><img class="cover" src="../images/未来日记.jpg"></a>
                                    <div class="inner">
                                        <div class="collect">
                                            <ul class="ul4">
                                                <li>
                                                    <a>
                                                        <span>收藏</span>
                                                    </a>
                                                    <!--<ul>-->
                                                    <!--<li>想看</li>-->
                                                    <!--<li>看过</li>-->
                                                    <!--<li>在看</li>-->
                                                    <!--<li>搁置</li>-->
                                                    <!--</ul>-->
                                                </li>
                                            </ul>
                                        </div>
                                        <h3><a>未来日记</a></h3>
                                        <span class="rank"><small>Rank</small>1</span>
                                        <p class="info">
                                            26话 / 1998年10月23日 / 渡辺信一郎 / 矢立肇 / 川元利浩
                                        </p>
                                        <p class="rateinfo">
                                            <span><Rate class="rateinfo1" disabled
                                                        v-model="valueDisabled"/></span>
                                            <small class="fade">5</small>
                                            <span class="sum">(6330人评分)</span>

                                        </p>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="content-right">
                        <div class="sideInner">
                            <h2 class="subtitle">时间</h2>
                            <ul class="ul6">
                                <li>
                                    <a :class="clsstr">来年们</a>
                                </li>
                                <li>
                                    <a :class="clsstr">2020年</a>
                                </li>
                                <li>
                                    <a :class="clsstr">2019年</a>
                                </li>
                                <li>
                                    <a :class="clsstr">2018年</a>
                                </li>
                                <li>
                                    <a :class="clsstr">2017年</a>
                                </li>
                                <li>
                                    <a :class="clsstr">2016年</a>
                                </li>
                                <li>
                                    <a :class="clsstr">2015年</a>
                                </li>
                                <li>
                                    <a :class="clsstr">2014年</a>
                                </li>
                                <li>
                                    <a :class="clsstr">2013年</a>
                                </li>
                            </ul>
                            <h2 class="subtitle">拼音</h2>
                            <ul class="ul7">
                                <li v-for="(item,index) in timeinfo" :info="item" :key="index">
                                    <a :class="clsstr">{{item}}</a>
                                </li>

                            </ul>
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
                ]

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
        width: 32px;
        height: 32px;
    }

    .img1-1 {
        width: 32px;
        height: 32px;
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

    .ul3 li {
        background-color: transparent;
        position: relative;
        padding: 7px 5px;
        border-bottom: 1px solid #EAEAEA;
        height: 126px;
    }

    .ul3 li:nth-of-type(even) {
        background-color: #f9f9f9;
    }

    .ul3 li a {
        float: left;
    }

    .inner {
        margin-left: 100px;
        width: 590px;
        height: 75px;
    }

    .collect {
        position: absolute;
        right: 5px;
        top: 30px;

    }

    .ul4 {

    }

    .ul4 li {
        width: 55px;
        height: 27px;
        padding: 0;
        border: 0;
    }

    .ul4 li a {
        display: inline-block;
        line-height: 20px;
        color: #666;
        margin: 0 5px 5px 0;
        padding: 0 12px;
        box-shadow: 0 1px 2px #EEE, inset 0 1px 1px #FFF;
        font-size: 12px;
        width: 50px;
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

    .ul100 li{
        display: block;
        float: left;
        width: 25%;
    }

    .ul100 li a{
        color: #444;
    }
    .ul100 li dt{
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 3px;
        margin-left: 15px;
        padding-bottom: 3px;
        width: 177px;
        border-bottom: 1px solid #CCC;
    }
    .ul100 li dd{
        margin-bottom: 0.2em;
        margin-left: 15px;
        font-size: 12px;
    }


</style>