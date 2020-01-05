<template>
    <div class="main">
        <Button @click="modal12 = true">Open the first modal</Button>
        <Modal class="model1" v-model="modal12"  draggable scrollable title="收藏 霊刀キザクラ ～桜花の剣と惑竜章～"
               @on-ok="ok"
               @on-cancel="cancel">
            <div class="window">
            <div class="box">
                <form>
                    <div class="type">
                        <label>
                            <input value="1" class="wish" name="interest" checked="checked" type="radio">
                            想玩
                        </label>
                        <label>
                            <input value="2" class="wish" name="interest" checked="checked" type="radio">
                            玩过
                        </label>
                        <label>
                            <input value="3" class="wish" name="interest" checked="checked" type="radio">
                            在玩
                        </label>
                        <label>
                            <input value="4" class="wish" name="interest" checked="checked" type="radio">
                            搁置
                        </label>
                        <label>
                            <input value="5" class="wish" name="interest" checked="checked" type="radio">
                            抛弃
                        </label>
                    </div>
                    <div class="cell">
                        <p class="tip">
                            <label for="comment">吐槽 (简评，最多200字):</label></p>
                        <textarea name="comment" id="comment" cols="32" rows="3" class="quick"></textarea>
                    </div>
                </form>

            </div>

            </div>
        </Modal>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                modal12: false,
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>

<style>
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


</style>
