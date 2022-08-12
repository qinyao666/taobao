<template>
    <main>
        <router-view></router-view>
        <ul class="bot">
            <li>
                <router-link to="/index">
                    <span class="span-index"></span>
                    <br>
                    首页</router-link>
            </li>
            <li>
                <router-link to="/shop">
                    <span class="span-shop"></span>
                    <br>
                    购物车</router-link>
            </li>
            <li>
                <router-link to="/my">
                    <span class="span-my"></span>
                    <br>
                    我的淘宝</router-link>
            </li>
        </ul>
    </main>
</template>
<style>
*{
    margin:0px;
    padding:0px;
    list-style:none;
}
</style>
<style scoped>

.bot{
    position: fixed;
    bottom:0px;
    left: 0px;
    width:100vw;
    padding:1vw 0 0 0;
    background: #fff;

}
.bot li{
    font-size: 3.2vw;
    width:33.33vw;
    float: left;
    text-align: center;
    background: #fff;
}
.bot a{
    text-decoration: none;
    color:black;
}
.bot .router-link-active{
    color:red;
}
.bot span{
    display: inline-block;
    /* background: lime; */
    width:5.33vw;
    height: 5.33vw;
}
.span-index{
    background: url("../assets/img/frist01.png") no-repeat;
    background-size:100% 100%;
}
.span-shop{
    background: url("../assets/img/frist03.png") no-repeat;
    background-size:100% 100%;
}
.span-my{
    background: url("../assets/img/frist05.png") no-repeat;
    background-size:100% 100%;
}
</style>
<script src="../assets/jquery-2.1.4/jquery.js"></script>
<script>


</script>