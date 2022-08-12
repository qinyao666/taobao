<template>
    <main>
        <header>
            <div class="head">
                <img src="../assets/img/my01.jpg" alt="">
            </div>
            <div class="right">
                <div class="right01">
                    <h3>哇哈哈哈哈哈哈</h3>
                </div>
                <div class="right02">
                    <p>账号名称：tb1111111 <a href="/shop.vue"><img src="../assets/img/my03.png" alt=""></a></p>
                </div>
            </div>
            <div class="set">
                <router-link to="/set">
                    <img src="../assets/img/my04.png" alt="" >
                </router-link>
            </div>
        </header>
        <nav>
            <ul>
                <li>
                    <img src="../assets/img/my05.png" alt="">
                    <p>收藏</p>
                </li>
                <li>
                    <img src="../assets/img/my06.png" alt="">
                    <p>订阅店铺</p>
                </li>
                <li>
                    <img src="../assets/img/my07.png" alt="">
                    <p>足迹</p>
                </li>
            </ul>
        </nav>
        <section>
            <div class="sec-top">
                <p class="sec-top-left">我的订单</p>
                <p class="sec-top-right">全部<img src="../assets/img/my08.png" alt=""></p>
            </div>
            <div class="sec-main">
                <ul>
                    <li>
                        <img src="../assets/img/my09.png" alt="">
                        <p>待付款</p>
                    </li>
                    <li>
                        <img src="../assets/img/my10.png" alt="">
                        <p>待发货</p>
                    </li>
                    <li>
                        <van-badge :content="2">
                            <img src="../assets/img/my11.png" alt="">
                        </van-badge>
                        <p>待收货</p>
                    </li>
                    <li>
                        <van-badge :content="1">
                            <img src="../assets/img/my12.png" alt="">
                        </van-badge>
                        <p>待评价</p>
                    </li>
                    <li>
                        <img src="../assets/img/my13.png" alt="">
                        <p>推售/售后</p>
                    </li>
                </ul>
            </div>
            <div class="main-footer">
                <div class="main-footer00">
                    <img src="../assets/img/my14.jpg" alt="">
                    <div class="main-footer01">
                        <p>运输中</p>
                        <span>08-08</span>
                    </div>
                    <div class="main-footer02">
                        <p>快件由【云南昆明转运中心】发往【广东广...</p>
                    </div>
                </div>

            </div>
        </section>
        <div class="footer"> 
            <div class="footer-top">
                <p>我的工具</p>
            </div>
            <div class="footer-bottom">
                <ul>
                    <li>
                        <img src="../assets/img/my15.png" alt="">
                        <p>官方客服</p>
                    </li>
                    <li>
                        <img src="../assets/img/my16.png" alt="">
                        <p>试用领取</p>
                    </li>
                    <li>
                        <img src="../assets/img/my17.png" alt="">
                        <p>店铺会员</p>
                    </li>
                </ul>
            </div>
        </div>
        
    </main>
</template>
<style scoped>
.footer-top{
    margin: 2vw 0vw 0vw 2vw;
}
.footer ul{
    margin-top: 2vw;
}
.footer li p{
    text-align: center;
}
.footer li{
    float: left;
    width:32.26vw
}
.footer img{
    margin-left: 10.8vw;
    width: 10.67vw;
}
.footer{
    background-color: #fff;
    border-radius: 3.2vw;
    height: 32.26667vw;
    margin: 2.4vw auto 0;
    width: 96.8vw;
    float: left;
    margin-left: 1.6vw;
}
.main-footer02{
    float: left;
    color: #999;
    font-size: 1vw;
    margin-left: 2vw;
}
.main-footer01{
    float: left;
    width: 70vw;
    margin-top: 1.5vw;
}
.main-footer01 p{
    float: left;
    font-size: 3.4vw;
    color: #111;
    margin-left: 2vw;
}
.main-footer01 span{
    float:right;
    font-size: 1vw;
    color:#999
}
.main-footer00{
    border-radius: 1.6vw;
    height: 11.73333vw;
    width: 85.33333vw;
    margin: 0px auto;
    margin-top: 3vw;
    background: rgb(246, 246, 246);
}
.main-footer{
    float: left;
    width: 100%;
    margin-bottom: 4vw;
}
.main-footer00 img{
    height: 11.7vw;
    float: left;
}
.sec-main img{
    height: 8.53vw;
    margin-left: 5.4vw;
    
}
.sec-main p{
    text-align: center;
    font-size: 3.5vw;
}
.sec-main{
    float: left;
    width:96.8vw;
    margin-top:3vw;
}
.sec-main li{
    float: left;
    width:19.36vw;
}
.sec-top{
    margin-top: 4vw;
}
.sec-top-left{
    float: left;
    margin-left: 2vw;
}
.sec-top-left{
    color: #111;
    font-size: 4vw;
    font-weight: 700;
    line-height: 4vw;
    margin-left: 2.4vw;
}
.sec-top-right img{
    height: 2.5vw;

}
.sec-top-right{
    float:right;
    margin-right: 2vw;
    color: #999;
    font-size: 3.2vw;
    line-height: 3.5vw;
}
section{
    float: left;
    background-color: #fff;
    border-radius: 3.2vw;
    margin: 0px 1.6vw;
    width: 96.8vw;
    /* height: 30vw; */
}
nav p{
    text-align: center;
    font-weight: 400;
}
nav{
    float: left;
    margin-top:4vw;
}
nav ul{
    width: 100vw;

}
nav ul>li{
    width: 33.33vw;
    height: 18.33vw;
    float: left;
}
nav img{
    height: 8.5vw;
    width: 8.5vw;
    margin-left: 12.4vw;
}
.head img{
    width: 13.3333vw;
    height: 13.3333vw;
    border-radius: 50%;
}
.head{
    margin: 15px 0 0 15px;
    float: left;
}
main{
    background: url("../assets/img/my02.jpg") no-repeat;
    overflow: hidden;
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
}
.right{
    float: left;
    margin: 10px 0px 0px 10px;
}
.right01 h3{
    font-weight: 600;
    font-size: 4.8vw;
    line-height: 4.8vw;
}
.right02{
    color: #999;
    font-size: 3.2vw;
    line-height: 3.2vw;
    margin-top: 2.4vw;
}
.right02 img{
    width: 3.2vw;
    height: 3.2vw;
}
.set{
    float:right;
    margin: 15px 15px 0px 0px;
}
.set img{
    height: 5vw;
    height: 5vw;
}
</style>