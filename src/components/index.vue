<template>
    <main>
        <div class="warp-top">
            <div class="top">
                <div class="top-left">
                    <img src="../assets/img/index01.png" alt="">
                </div>
                <div class="top-middle">
                    <span>寻找宝贝店铺</span>
                    <span>搜索</span>
                </div>
                <div class="top-right">
                    <span><img src="../assets/img/index02.png" alt=""></span>
                </div>
            </div>
        </div>
       
        <div class="nav">
            <ul>
                <li v-for="(it1,index1) in list1" :key="index1">
                    <div v-if="index1==12"><router-link to="/cls"><img :src="it1.src" alt=""><p>{{it1.title}}</p></router-link></div>
                    <div v-else><img :src="it1.src" alt=""><p>{{it1.title}}</p></div>
                </li>
            </ul>
        </div>
        <div class="section">
            <div class="wrap-section">
                <ul>
                    <li>
                        <div class="sec-top">
                            <h3>聚划算</h3>
                            <p>品牌折扣</p>
                        </div>
                        <div class="sec-left">
                            <img src="../assets/img/dexsec01.jpg" alt="">
                        </div>
                        <div class="sec-right">
                            <img src="../assets/img/dexsec01.png" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="sec-top">
                            <h3>天天特卖</h3>
                            <p>1元秒杀</p>
                        </div>
                        <div class="sec-left">
                            <img src="../assets/img/dexsec02.jpg" alt="">
                        </div>
                        <div class="sec-right">
                            <img src="../assets/img/dexsec02.png" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="sec-top">
                            <h3>有好货</h3>
                            <p>好口碑</p>
                        </div>
                        <div class="sec-left">
                            <img src="../assets/img/dexsec03.jpg" alt="">
                        </div>
                        <div class="sec-right">
                            <img src="../assets/img/dexsec03.png" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="sec-top">
                            <h3>每日好店</h3>
                            <p>特色</p>
                        </div>
                        <div class="sec-left">
                            <img src="../assets/img/dexsec04.jpg" alt="">
                        </div>
                        <div class="sec-right">
                            <img src="../assets/img/dexsec04.png" alt="">
                        </div>
                    </li>
                </ul>
            </div>

        </div>

        <div class="footer">
            <div class="footer-lunbo">
                <van-swipe class="my-swipe" :autoplay="2000" indicator-color="red">
                    <van-swipe-item><img src="../../public/img/dexlb01.jpg" alt=""></van-swipe-item>
                    <van-swipe-item><img src="../../public/img/dexlb02.jpg" alt=""></van-swipe-item>
                    <van-swipe-item><img src="../../public/img/dexlb03.jpg" alt=""></van-swipe-item>
                    <van-swipe-item><img src="../../public/img/dexlb04.jpg" alt=""></van-swipe-item>
                </van-swipe>
            </div>
            <div class="footer-list">
                <ul>
                    <li v-for="(it2,index2) in list2" :key="index2">
                        <div class="list">
                            <div class="list-top">
                                <img :src="it2.src" alt="">
                            </div>
                            <div class="list-middle">
                                <p>{{it2.title1}}</p>
                            </div>
                            <div class="list-bottom">
                                <h6>{{it2.title2}}</h6>
                                <p>{{it2.title3}}</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

        
    </main>
</template>
<script>
export default {
     data(){
          return {
               list1:[
                    {
                         src:'dex01.jpg',
                         title:'天猫新品'
                    },
                    {
                         src:'dex02.jpg',
                         title:'今日爆款'
                    },
                    {
                         src:'dex03.jpg',
                         title:'天猫国际'
                    },
                    {
                         src:'dex04.jpg',
                         title:'飞猪旅行'
                    },
                    {
                         src:'dex05.jpg',
                         title:'天猫超市'
                    },
                    {
                         src:'dex06.jpg',
                         title:'冬奥公益'
                    },
                    {
                         src:'dex07.jpg',
                         title:'海票票'
                    },
                    {
                         src:'dex08.jpg',
                         title:'天猫好房'
                    },
                    {
                         src:'dex09.jpg',
                         title:'淘宝吃货'
                    },
                    {
                         src:'dex10.jpg',
                         title:'省钱卡'
                    },
                    {
                         src:'dex11.jpg',
                         title:'领海金币'
                    },
                    {
                         src:'dex12.jpg',
                         title:'阿里拍卖'
                    },
                    {
                         src:'dex13.jpg',
                         title:'分类'
                    },
                    {
                         src:'dex14.jpg',
                         title:'闲鱼'
                    },
                    {
                         src:'dex15.jpg',
                         title:'土货鲜食'
                    },
                    {
                         src:'dex16.jpg',
                         title:'天猫汽车'
                    },
               ],
               list2:[
                    {
                        src:"dexlist01.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist02.jpg",
                        title1:"韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同",
                        title2:"￥18.9",
                        title3:"100+人已购买"
                    },
                    {
                        src:"dexlist03.jpg",
                        title1:"外贸成品窗帘美式法式白纱窗纱帘客厅落地窗蕾丝",
                        title2:"￥21",
                        title3:"300+人已购买"
                    },
                    {
                        src:"dexlist04.jpg",
                        title1:"北美红雀冬青浆果欧式陶瓷餐具汤锅汤碗汤盆手绘",
                        title2:"￥3138",
                        title3:"4人已购买"
                    },
                    {
                        src:"dexlist05.jpg",
                        title1:"欧式金蝴蝶浮雕花朵双耳碗粉红甜品糖水碗麦片牛",
                        title2:"￥15.34",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist06.jpg",
                        title1:"粉颜 欧式花边密封罐零食罐烘焙收纳瓜子坚果曲奇",
                        title2:"￥63.9",
                        title3:"12人已购买"
                    },
                    {
                        src:"dexlist07.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist08.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist09.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },
                    {
                        src:"dexlist10.jpg",
                        title1:"外贸精品 纯亚麻浪漫 法式奢华 蕾丝花边单人枕套",
                        title2:"￥39.9",
                        title3:"200+人已购买"
                    },

               ],
          }
     }
}
</script>
<style scoped>
.list-bottom h6{
    font-size: 4vw;
    color: #FF4022;
    float: left;
    font-weight: 400;
}
.list-bottom{
    margin: 3vw 0 0 3.5vw;
}
.list-bottom p{
    font-size: 3vw;
    font-weight: 300;
    line-height: 6vw;
    color:#999;
    padding-left: 15vw;
}
.list-middle p{
    padding: 0 3.3vw;
    font-weight: 400;
    /* text-align: center; */
    color:#333;
    font-size: 3.5vw;

}
.list-top img{
    width: 46.19vw;
    margin-bottom: 2.5vw;
}
.list{
    height: 70vw;
    width: 46.19vw;
    float:left;
    margin-left: 2.54vw;
    margin-top: 2.54vw;
    border-radius: 2vw;
    background: #fff;

}
.footer-lunbo{
    float: left;
    width: 46.19vw;
    height: 70vw;
    overflow: hidden;
    border-radius: 2vw;
    margin-top: 2.54vw;
    margin-left: 2.54vw;
}
.footer-lunbo img{
    width: 46.19vw;
    height: 70vw;
}
  .my-swipe .van-swipe-item {
    width: 50vw;
    height: 70vw;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
.sec-left{
    margin-top: 6vw;
    float: left;
    margin-left: 2vw;
}
.sec-right{
    margin: 1vw;
    float: right;
}
.sec-left img{
    width: 16vw;
    height: 16vw;
}
.sec-right img{
    width: 20vw;
    height: 20vw;
}
.sec-top h3{
    float: left;
    font-size: 4vw;
}
.sec-top p{
    float: left;
    font-size: 1.5vw;
    color: #fff;
    padding: 0 1vw;
    border-radius: 1vw;
}
.section li:nth-of-type(1) p{
    background: #FF4022;
}
.section li:nth-of-type(2) p{
    background: #FF4022;
}
.section li:nth-of-type(3) p{
    background: #0090aa;
}
.section li:nth-of-type(4) p{
    background: #ff9711;
}
.sec-top{
    position: absolute;
    top:5px
}
.section ul{
    width: calc(98vw - 20px);
    height: 44vw;
    padding: 1vw;
    overflow: hidden;
    margin-left: 1.5vw;
    /* margin-top: 1vw; */
}
.section li{
    position: relative;
    margin:0 1px 1px 0;
    float: left;
    width: 45vw;
    height: 21.5vw;
    /* background: rgb(214, 255, 214); */
}
.section li:nth-of-type(1){
    border-right: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
}

.section li:nth-of-type(2){
    border-bottom: 1px solid #f1f1f1;
}
.section li:nth-of-type(3){
    border-right: 1px solid #f1f1f1;
}
.wrap-section{
    width: calc(100vw - 20px);
    height: 46vw;
    background: url("../assets/img/indexback.jpg") no-repeat;
    background-size: 100% 100%;
}
.section{
    margin-left: 10px;
    margin-top: 1vw;
    width: calc(100vw - 20px);
    height: 46vw;
    background:#fff;
    border-radius:5vw;
}
.nav{
    width:calc(100vw - 20px);
    height: 38.5vw;
    background: #fff;
    margin-left: 10px;
    margin-top:15vw;
    border-radius:5vw;
    overflow: auto;
}
.nav ul{
    height: 100%;
    width: 160%;
    
}
.nav li{
    width: 12.5%;
    height: 48%;
    float: left;
}
.nav p{
    text-align: center;
    font-size: 3.2vw;
    color:#999;
}
.nav img{
    margin-left: 10%;
    width: 80%;
}
.top-right{
    float: left;
}
.top-right img{
    height: 9vw;
    width:9vw;
    margin: 1.2vw 0 0 2vw;
}
.top-middle span:nth-of-type(1){
    float: left;
    margin:1.8vw 0 0 3vw;
    color: #999;
    font-size: 3.8vw;
}
.top-middle span:nth-of-type(2){
    float: right;
    font-size: 4vw;
    margin:0.5vw 0.5vw 0 0vw;
    padding: 1.3vw 3vw 1.5vw 3vw;
    border-radius: 4vw;
    color: #fff;
    background: linear-gradient(to right, #FF8D0E, #FF5000);
}
.top-middle{
    float: left;
    height: 9vw;
    width: 60vw;
    background: #fff;
    margin-top:5px;
    margin-left: 3vw;
    border-radius: 7vw;
    border:1px solid #ff5000;
}
.top{
    z-index: 100;

    margin: 5px 20px 10px 20px;
    height: 13vw;
    width: calc(100vw - 40px);
    background: #f3f3f3;
    overflow: auto;
    /* display: flex; */
}
.warp-top{
        position: fixed;
    height:14vw;
    width: 100vw;
    background: #f3f3f3;
    z-index: 50;
    overflow: hidden;

}
.top-left{
    float: left;
}
.top-left img{
    height: 6vw;
    width: 14vw;
    margin-top: 2.4vw;
}
main{
    background:#f4f4f4;
    /* height: 100vh; */
    overflow: hidden;
}


</style>