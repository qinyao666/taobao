<template>
    <main>
        <header>
            <div class="header00">
                <div class="header-left">
                    <router-link to="/index">
                                            <div class="header-left-left">

                    </div>
                    </router-link>

                    <div class="header-left-middle">

                    </div>
                    <div class="header-left-right">

                    </div>
                </div>
                <div class="right">
                    <van-search v-model="value" left-icon="false" shape="round" show-action label="商品" placeholder="搜索相关宝贝">
                        <template #action>
                        <div class="search">搜索</div>
                        </template>
                    </van-search>
                </div>
            </div>
        </header>
        <nav>
            <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
            <div class="nav-middle">
                <p>销量</p>
            </div>
            <div class="nav-right">
                <div class="pic01">
                    <img src="../assets/img/list03.jpg" alt="">
                </div>
                <div class="pic02">
                    <span>筛选</span>
                    <img src="../assets/img/list04.jpg" alt="">
                </div>
            </div>
        </nav>
        <section>
            <div class="section00">
                <div class="sec01">
                    <p>品牌</p>
                    <span><img src="../assets/img/list05.jpg" alt=""></span>
                </div>
                <div class="sec01">
                    <p>袖型</p>
                    <span><img src="../assets/img/list05.jpg" alt=""></span>
                </div>
                <div class="sec01">
                    <p>尺码</p>
                    <span><img src="../assets/img/list05.jpg" alt=""></span>
                </div>
                <div class="sec01">
                    <p>领型</p>
                    <span><img src="../assets/img/list05.jpg" alt=""></span>
                </div>
                <div class="sec01">
                    <p>材质</p>
                    <span><img src="../assets/img/list05.jpg" alt=""></span>
                </div>
                <div class="sec01">
                    <p>袖长</p>
                    <span><img src="../assets/img/list05.jpg" alt=""></span>
                </div>
                <div class="sec01">
                    <p>工艺</p>
                    <span><img src="../assets/img/list05.jpg" alt=""></span>
                </div>
            </div>
            
        </section>
        <footer>
            <ul>
                <router-link to="/detail">
                    <li v-for="(it,index) in list" :key="index">
                        <div class="footer00">
                            <div class="footer01">
                                <img :src="it.src1" alt="">
                            </div>
                            <div class="footer02">
                                <img :src="it.src2" alt="">
                                <p>{{it.tit1}}</p>
                            </div>
                            <div class="footer03">
                                <em>￥</em>
                                <p>{{it.tit2}}</p>
                                <span>{{it.tit3}}</span>
                            </div>
                            <div class="footer04">
                                <p>{{it.tit4}}</p>
                            </div>
                            <div class="footer05">
                                <p>{{it.tit5}}</p>
                                <span>{{it.tit6}}</span>
                                <img src="../../public/list03.jpg" alt="">
                            </div>
                        </div>
                    </li>
                </router-link>
                



            </ul>
        </footer>
    </main>
</template>

<script>
    export default {
    data() {
        return {
        value1: 0,
        option1: [
            { text: '综合', value: 0 },
            { text: '信用', value: 1 },
            { text: '价格降序', value: 2 },
            { text: '价格升序', value: 3 },
        ],
        list:[
            {
                src1:"list01.jpg",
                src2:"list02.jpg",
                tit1:"COS女装宽松版型高领五分袖",
                tit2:"350.00",
                tit3:"200+人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"cos官方旗舰店",
            },
            {
                src1:"list04.jpg",
                src2:"list02.jpg",
                tit1:"DAZZLE地素小众印花短袖",
                tit2:"1170.00",
                tit3:"27人付款",
                tit4:"包邮",
                tit5:"回头客4万+",
                tit6:"dazzle官方旗舰店",
            },
            {
                src1:"list05.jpg",
                tit1:"七夕礼物Balenciaga破洞",
                tit2:"6200.00",
                tit4:"包邮",
                tit5:"回头客9千",
                tit6:"BALENIAGA官方旗舰店",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },
            {
                src1:"list06.jpg",
                src2:"list02.jpg",
                tit1:"Orange Desire短款韩版",
                tit2:"129.99",
                tit3:"88人付款",
                tit4:"包邮",
                tit5:"回头客10万+",
                tit6:"orangedesire",
            },

        ],

        };
    },
    };
</script>
<style scoped>
.footer05 p{
    float: left;
    color:#ff6900;
    font-size: 3vw;
    font-weight: 400;
    margin-right: 1vw;
}
.footer05 span{
    color:#666;
    font-size: 3vw;
    font-weight: 400;
    float: left;
    margin-right: 1vw;
}
.footer05 img{
    height: 2.5vw;
    float: left;
    margin-top: 0.5vw;
}
.footer04 p{
    padding: 0vw 0.5vw 0 0.5vw;
    border: 1px solid #ff6900;
    font-size: 3vw;
    color:#ff6900;
    display: inline-block;
}
.footer03{
    overflow: hidden;
}
.footer03 em{
    line-height: 7vw;
    font-size: 3vw;
    color:#ff5000;
    float: left;
}
.footer03 p{
    float: left;
    font-size:4.5vw;
    margin-right: 1vw;
    color: #ff5000;
}
.footer03 span{
    font-size: 2vw;
    color:#999;
}
.footer02 p{
    font-size: 3.46667vw;
    font-weight: 700;
    color:#111;
}
.footer02 img{
    margin-top: 1vw;
    height: 3.4667vw;
    float: left;
    margin-right: 1vw;
}
.footer01 img{
    width: 100%;
    border-radius: 3vw;
}
footer{
    padding-top: 36vw;
}
.footer00{
    height: 98vw;
    width: 46.19vw;
    float: left;
    margin-left: 2.54vw;
    margin-top: 2.54vw;
    border-radius: 2vw;
}
.section00{
    width: 131.5%;
}
section{
    overflow: auto;
    position: fixed;
    top:24vw;
    width: calc(100vw - 18px);
    margin-left: 9px;
    background: #fff;
}

.sec01{
    float: left;
    align-items: center;
    background: #f6f6f6;
    border: 1px solid hsla(0,0%,100%,0);
    border-radius: 4vw;
    color: #666;
    display: flex;
    flex-direction: row;
    font-family: PingFangSC-Regular;
    font-size: 3.46667vw;
    height: 8vw;
    justify-content: center;
    line-height: 8vw;
    overflow: visible;
    padding: 0 2.66667vw;
    position: relative;
    text-align: center;
    margin-right: 2vw;
    /* width: 120%; */
}
.sec01 :nth-of-type(7){
    margin-right: 0;
}
.sec01 img{
    width: 1.7333vw;
    height: 0.9333vw;
    margin-left: 1.3333vw;
    object-fit: cover;
    margin-bottom: 1vw;
}
.sec01 p{
    display: inline-block;
    color: #666;
    font-size: 3.4667vw;
}
.nav-right{
    margin-right: 6vw;
}
.pic01{
    margin-top: 1vw;
    float: left;
    margin-right: 4vw;
}
.pic02{
    float: left;
    padding-left: 4vw;
    border-left: 1px solid #d8d8d8;
}
.pic01 img{
    width: 3.7333vw;
    height: 3.7333vw;
    object-fit: contain;
}
.pic02 img{
    width: 3.4667vw;
    height: 3.4667vw;
    object-fit: cover;
}
/* .right{
    background-color: #8a8a8a;
    border-radius: 4.8vw;
    height: 9.6vw;
    justify-content: flex-start;
    width: 71.86667vw;
    align-items: center;
    display: flex;
    flex-direction: row;
} */
nav{
    z-index: 100;
    top:12.8vw;
    position: fixed;
    align-items: center;
    color: #666;
    display: flex;
    flex-direction: row;
    height: 11.46667vw;
    justify-content: space-between;
    padding-left: 4vw;
    width: 100vw;
    padding-right: 2.66667vw;
    background: #fff;
}
.search{
    align-items: center;
    background-color: #ff5000;
    background-image: linear-gradient(-15deg,#ff5000,#ff6900 61%,#ff963f);
    border-radius: 4vw;
    display: flex;
    height: 8vw;
    justify-content: center;
    margin-left: 1.6vw;
    position: relative;
    width: 17.06667vw;
    color: #fff;
    font-size: 4vw;
}
.header-left-right{
    height: 4.8vw;
    position: absolute;
    right: 2.4vw;
    top: 1.6vw;
    width: 4.8vw;
    background: url("../assets/img/list02.png");
    background-size: contain;
}
.header-left-left{
    height: 4.8vw;
    left: 2.4vw;
    position: absolute;
    top: 1.6vw;
    width: 4.8vw;
    background: url("../assets/img/list01.png");
    background-size: contain;
}
.header-left-middle{
    background: #111;
    height: 4vw;
    opacity: .5;
    width: 1px;
}
.header-left{
    background: transparent;
    border: 1px solid hsla(0,0%,7%,.5);
    align-items: center;
    border-radius: 4vw;
    box-sizing: border-box;
    display: flex;
    height: 8vw;
    justify-content: center;
    position: relative;
    width: 20.93333vw;
}
header{
    background-color: #fff;
    height: 13.33333vw;
    position: fixed;
    width: 100vw;
    z-index: 50;
}
.header00{
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 12.8vw;
    justify-content: space-between;
    margin: 0 2.66667vw;
    width: 94.66667vw;
}
</style>