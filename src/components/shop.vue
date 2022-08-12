<template>
    <main>
        <header>
            <div class="header01">
                <h2>购物车(1)</h2>
                <p>管理</p>
            </div>
            <div class="header02">
                <p>共1件宝贝</p>
            </div>
        </header>
        <nav>
            <div class="nav00">
                <div class="nav01">    
                    <van-checkbox v-model="checked" checked-color="#ee0a24" class="cheak">
                        <img src="../assets/img/shop01.jpg" alt="">
                        <p>天猫超市-自营配送</p>
                        <img src="../../public/list03.jpg" alt="">
                    </van-checkbox>
                </div>
                <div class="nav02">
                    <img src="../assets/img/shop02.jpg" alt="">
                    <p>以下商品满88元包邮</p>
                    <span>去凑单></span>
                </div>
                <div class="nav03">
                    <van-checkbox v-model="checked" class="cheak" checked-color="#ee0a24">
                        <img src="../assets/img/shop03.jpg" alt="">
                        <h5>卫龙亲嘴烧礼包三重口味<br>经典辣条</h5>
                        <p>破损包退</p><br>
                        <p>聚划算 8月15日23:59结束</p><br>
                        <p>限购10件</p><br>
                    </van-checkbox>
                </div>
                <div class="nav04">
                    <h6>￥43.8</h6>
                    <p>1.18kg</p>
                    <span>
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </span>
                </div>
            </div>
        </nav>
        <section>
            <div class="sec01">
                <p><img src="../assets/img/shop04.png" alt=""></p>
            </div>
            <div class="sec02">
                <ul>
                    <li>
                        <div class="sec03">
                            <div class="sec04">
                                <img src="../../public/shop01.jpg" alt="">
                            </div>
                            <div class="sec05">
                                <p>油炸半圆蓝沥油架臭豆腐滴油架子食品油墩子</p>
                            </div>
                            <div class="sec06">
                                <h6>￥ 10.9</h6>
                                <p>16人已购买</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="sec03">
                            <div class="sec04">
                                <img src="../../public/shop01.jpg" alt="">
                            </div>
                            <div class="sec05">
                                <p>油炸半圆蓝沥油架臭豆腐滴油架子食品油墩子</p>
                            </div>
                            <div class="sec06">
                                <h6>￥ 10.9</h6>
                                <p>16人已购买</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="sec03">
                            <div class="sec04">
                                <img src="../../public/shop01.jpg" alt="">
                            </div>
                            <div class="sec05">
                                <p>油炸半圆蓝沥油架臭豆腐滴油架子食品油墩子</p>
                            </div>
                            <div class="sec06">
                                <h6>￥ 10.9</h6>
                                <p>16人已购买</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="sec03">
                            <div class="sec04">
                                <img src="../../public/shop01.jpg" alt="">
                            </div>
                            <div class="sec05">
                                <p>油炸半圆蓝沥油架臭豆腐滴油架子食品油墩子</p>
                            </div>
                            <div class="sec06">
                                <h6>￥ 10.9</h6>
                                <p>16人已购买</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="sec03">
                            <div class="sec04">
                                <img src="../../public/shop01.jpg" alt="">
                            </div>
                            <div class="sec05">
                                <p>油炸半圆蓝沥油架臭豆腐滴油架子食品油墩子</p>
                            </div>
                            <div class="sec06">
                                <h6>￥ 10.9</h6>
                                <p>16人已购买</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <!-- <div class="kong">

        </div> -->
        <footer>
            <van-submit-bar :price="4380" button-text="提交订单" class="aaa">
            <van-checkbox v-model="checked" checked-color="#ee0a24">全选</van-checkbox>
            </van-submit-bar>
        </footer>
    </main>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>
<style scoped>

.sec04 img{
    width: 45.5vw;
    height: 45.5vw;
    border-radius: 3vw;
}
.sec05 p{
    font-size: 4vw;
    line-height: 5.5vw;
    padding: 0 1vw;
    text-align: center;
}
.sec06 h6{
    color:#FF5000;
    font-size: 4vw;
    margin: 0 1vw;
    float: left;
    line-height: 10vw;
}
.sec06 p{
    font-size: 4vw;
    float: left;
    color:#999;
    line-height: 10vw;
}

.sec03{
    width: 45.5vw;
    margin: 3vw 0 3vw 3vw;
    float: left;
    background: #fff;
    z-index: 100;
    border-radius: 3vw;
}
section{
    margin-top: 65vw;
}
.sec01{
    height: 12vw;
}
.sec01 p{
    text-align: center;
}
.sec01 img{
    width: 40%;
}
.nav04 h6{
    float: left;
    color:#FF5000;
    font-size: 4vw;
    line-height: 6vw;
    margin-left: 40vw;
        margin-right: 1vw;
}
.nav04 p{
    float: left;
    font-size: 4vw;
    line-height: 6vw;
    margin-right: 1vw;
}
.nav04 span{
    float: left;
}

.nav04 div{
    text-align: center;
    width: 6vw;
    float: left;
    color:#1e1e1e;
    font-size: 4vw;
    line-height: 6vw;
    border: 1px solid #999;
}
.nav04{
    width: 100%;
    float: right;
    margin: 5vw 0 0 0;
}
.nav03{
    float: left;
}
.nav03 img{
    float: left;
    width: 25vw;
    margin-right: 3.5vw;
}
.nav03 h5{
    font-size: 4.2vw;
    float: left;
    line-height: 6vw;
}
.nav03 p{
    font-size: 4vw;
    line-height: 6vw;
    float: left;
    color:#FF8400
}
.nav01{
    float: left;
    width: 100%;
}
.nav02{
    margin-top: 10vw;
    margin-bottom: 6vw;
    width:100%;
    float: left;
}
.nav02 img{
    float: left;
    margin-left: 10vw;
    width: 8vw;
}
.nav02 p{
    float: left;
    margin-left: 3vw;
    font-size: 4vw;
}
.nav02 span{
    float: right;
    color:#FF5000;
    font-size:3.6vw;
}
.nav01 img:nth-of-type(1){
    float: left;
    width:5vw;
    margin: 1vw 1vw;
}
.nav01 img:nth-of-type(2){
    width:1.7vw;
    float: left;
    margin: 1vw 1vw;
}
.nav01 p{
    font-size:4.6vw;
    float: left;
}
.nav00{
    padding:2.5vw 3vw;
    width: 88vw;
    margin-left: 3vw;
    height: 70vw;
    background: #fff;
    border-radius: 5vw;
    position: absolute;
    top: 33vw;
}
.header02 p{
    color:#fff;
    font-size: 3vw;
    margin:4vw 0 0 3vw;
    float: left;
}
.header01 h2{
    float: left;
    color: #fff;
    font-weight: 700;
    font-size: 6vw;
        margin-top: 5vw;
    margin-left: 3vw;
}
.header01 p{
    float:right;
    color: #fff;
    font-size: 5vw;
    margin-top: 5vw;
    margin-right: 3vw;
}
.header01{
    overflow: hidden;
}
header{
    background-image: linear-gradient(-90deg, #FF5000 0%, #FF8400 100%);
    height: 55vw;

}
.aaa{
    position: absolute;
    width: 100%;
    height: 100%;
}
footer{
    height: 15vw;
    overflow: hidden;
    position: relative;
    position: fixed;
    bottom: 12vw;
    width: 100vw;
    background: lime;
    border-bottom: 1px solid #999;
}
main{
    background: rgb(242, 242, 242);
    height: 100vh;
    width: 100vw;
    padding-bottom: 50vw;
}
.zero{
    width: 5vw;
    height: 5vw;
    background: url("../assets/img/deta01.png") no-repeat;
}
</style>