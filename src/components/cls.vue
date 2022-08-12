<template>
    <main>
            <ul class="left">
                <li v-bind:class="{'current':index1==num}" v-for="(it1,index1) in list1" :key="index1" v-on:click="select(index1)"><p>{{it1.title1}}</p></li>
            </ul>
                <ul class="right">
                    <li>
                        <div class="ddd">
                            <h4>上装</h4>
                            <ul class="uu1">
                                <router-link to="/list">
                                    <li>
                                        <div class="ddd01">
                                            <p><img src="../../public/img/cls01.jpg" alt=""></p>
                                            <p>T恤</p>
                                        </div>
                                    </li>
                                </router-link>

                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls02.jpg" alt=""></p>
                                        <p>衬衫</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls03.jpg" alt=""></p>
                                        <p>毛衣</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls04.jpg" alt=""></p>
                                        <p>卫衣</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls05.jpg" alt=""></p>
                                        <p>雪纺衫</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls06.jpg" alt=""></p>
                                        <p>马甲</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="ddd">
                            <h4>女裙</h4>
                            <ul class="uu1">
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls07.jpg" alt=""></p>
                                        <p>连衣裙</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls08.jpg" alt=""></p>
                                        <p>半身裙</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls09.jpg" alt=""></p>
                                        <p>旗袍</p>
                                    </div>
                                </li>
    
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="ddd">
                            <h4>女裤</h4>
                            <ul class="uu1">
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls10.jpg" alt=""></p>
                                        <p>休闲裤</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls11.jpg" alt=""></p>
                                        <p>牛仔裤</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls12.jpg" alt=""></p>
                                        <p>打底裤</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls13.jpg" alt=""></p>
                                        <p>打底裤</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="ddd">
                            <h4>特色女装</h4>
                            <ul class="uu1">
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls14.jpg" alt=""></p>
                                        <p>大码女装</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls15.jpg" alt=""></p>
                                        <p>中老年女装</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="ddd">
                            <h4>外套</h4>
                            <ul class="uu1">
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls16.jpg" alt=""></p>
                                        <p>短外套</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls17.jpg" alt=""></p>
                                        <p>西装</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls18.jpg" alt=""></p>
                                        <p>风衣</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls19.jpg" alt=""></p>
                                        <p>羽绒服</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls20.jpg" alt=""></p>
                                        <p>毛呢大衣</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls21.jpg" alt=""></p>
                                        <p>棉衣棉服</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls22.jpg" alt=""></p>
                                        <p>皮草</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls23.jpg" alt=""></p>
                                        <p>皮衣</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>                   
                    <li>
                        <div class="ddd">
                            <h4>套装</h4>
                            <ul class="uu1">
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls24.jpg" alt=""></p>
                                        <p>时尚套装</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls25.jpg" alt=""></p>
                                        <p>运动套装</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="ddd">
                            <h4>服饰服务</h4>
                            <ul class="uu1">
                                <li>
                                    <div class="ddd01">
                                        <p><img src="../../public/img/cls26.jpg" alt=""></p>
                                        <p>洗衣服务</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>                


    </main>
</template>
<script>
    export default {
        data(){

            return{
                num:0,
                list1:[
                    {
                        title1:"女装"
                    },
                    {
                        title1:"手机"
                    },
                    {
                        title1:"母婴"
                    },
                    {
                        title1:"鞋靴"
                    },
                    {
                        title1:"食品"
                    },
                    {
                        title1:"进口"
                    },
                    {
                        title1:"饰品"
                    },
                    {
                        title1:"箱包"
                    },
                    {
                        title1:"百货"
                    },
                    {
                        title1:"美妆"
                    },
                    {
                        title1:"男装"
                    },
                    {
                        title1:"洗护"
                    },
                    {
                        title1:"家装"
                    },
                    {
                        title1:"运动"
                    },
                    {
                        title1:"电器"
                    },
                    {
                        title1:"内衣"
                    },
                    {
                        title1:"数码"
                    },
                    {
                        title1:"企业"
                    },
                    {
                        title1:"保健"
                    },
                    {
                        title1:"车品"
                    },
                    {
                        title1:"生鲜"
                    },
                    {
                        title1:"医药"
                    },
                    {
                        title1:"奢品"
                    },
                ],
            }

        },
        methods:{
            select:function(index1){
                console.log(index1)
                this.num=index1;
            }
        }
    }
</script>
<style scoped>
.ddd01{
    width: 33%;
    float: left;
    margin-top: 3.5vw;
}
.ddd h4{
    font-size: 5vw;
    font-weight: 600;
}
.ddd01 p{
    text-align: center;
    font-size: 3vw;
    color: #666;
    font-weight: 300;
}
.ddd img{
    width: 15vw;
    height: 15vw;
}
.ddd{
    overflow: hidden;
    width: 65vw;
    padding: 3vw 3vw;
    margin: 2.5vw 2.5vw 0 0;
    border-radius:3vw;
    background: #fff;
}

::-webkit-scrollbar {
     width: 0 !important;
   }
::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }

.current p{
    color: rgb(255, 0, 0);
    font-size: 5vw;
    font-weight: 700;
}
.left{
    overflow: auto;
    width: 25%;
    height: 100vh;
}
.right{
    overflow: auto;
    width: 75%;
    height: 100vh;
}
.left li{
    color:#444;
    font-size: 3.5vw;
    font-weight: 350;
    display: flex;
    padding: 5vw;
    align-items: center;
    justify-content: center;

}
main{

    background: #f3f3f3;
    display: flex;
    overflow: hidden;
}

</style>