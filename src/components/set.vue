<template>
    <main>
        <div class="top">
            <div class="top-left">
                <img src="../assets/img/my01.jpg" alt="">
            </div>
            <div class="top-middle">
                <p>哇哈哈哈哈哈哈</p>
                <span>淘宝账号：tb1111111 </span>
            </div>
            <div class="top-right">
                <img src="../assets/img/set01.png" alt="">
            </div>
        </div>
        <router-link to="/login1">
            <div class="bot">
                <p>退出登录</p>
            </div>
        </router-link>

        
    </main>
</template>
<style scoped>
.bot p{
    font-size: 5vw;
    text-align: center;
    line-height: 15vw;
    color: rgb(49, 49, 49);
}
.bot{
    background: #fff;
    height: 15vw;
    margin-top: 15vw;
}
.top-right img{
    margin-left: 38vw;
    height: 3.2vw;
    width: 3.2vw;
}
.top-middle{
    margin-left: 3vw;
}
.top-middle span{
    font-size: 1.8vw;
    color:#999
}
.top-middle p{
    font-size: 4.5vw;
    font-weight: 500;
}
main{
    width: 100vw;
    height: 100vh;
    background: rgb(246, 246, 246);
}
.top-left img{
    width: 16vw;
    height: 16vw;
    border-radius: 16vw;
    margin-left: 3vw;
}
.top{
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    height: 23.46667vw;
    width: 100vw;
}
</style>