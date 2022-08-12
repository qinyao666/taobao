<template>
    <main>
        <div class="login01">
            <p><img src="../assets/img/login-logo.png" alt=""></p>
        </div>
        <div class="login02">
            <div class="dd1">
                <span>+86 <img src="../../public/login01.jpg" alt=""></span>
                <input type="number" placeholder="请输入手机号">
            </div>
            <div class="dd2">
                <input type="text" placeholder="请输入验证码">
                <p>获取验证码</p>
            </div>
            <div class="dd3">
                <p>账号密码登录</p>
            </div>
        </div>
        <div class="login03">
            <p>登录</p>
        </div>
        <div class="login04">
            <van-checkbox class="check" v-model="checked" checked-color="red"></van-checkbox>
            <p>已阅读并同意以下协议<span>淘宝平台服务协议</span>、<span>隐私权政策</span>、<span>法律声明</span>、<span>支付宝及客户端服务协议</span>,未注册手机号将自动为您创建账号</p>
        </div>
    </main>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>
<style scoped>

.check{
    float: left;
}
.login04{

    width: 90vw;
    overflow: hidden;
    margin-left: 2vw;
}
.login04 span{
    font-size: 4vw;
    color: #d86703;
}
.login04 p{
    font-size: 4vw;
    float: left;
    width: 85%;
    color:#444;
    margin-left: 5vw;
}
.login03 p{
    display: block;
    width: 90vw;
    height: 12vw;
    background: #ff8513;
    border-radius: 12vw;
    text-align: center;
    line-height: 12vw;
    margin-left: 5vw;
    margin-top: 8vw;
    color:#fff;

}
.dd3{
    margin-top: 5vw;
}
.dd3 p{
    font-size: 3.6vw;
    color:rgb(62, 62, 62);
}
.dd2 p{
    font-size: 4vw;
    color: #d86703;
    margin: 15vw 0 0 70vw;
}
.dd1 span{
    line-height: 6vw;
    display: inline-block;
    margin-top: 15vw;
}
.dd1 img{
    width: 5vw;
}
.dd1 input{
    border: none;
    outline: none;
    position: absolute;
    bottom: 0;
    left: 15vw;
}
.dd2 input{
    border: none;
    outline: none;
    position: absolute;
    bottom: 0;
    left: 0vw;
}
.dd1{
    position: relative;
    width: 100%;
    height: 20vw;
    border-bottom: 1px solid rgb(255, 89, 12);
}
.dd2{
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 20vw;
    border-bottom: 1px solid rgb(255, 89, 12);
}
.login02{
    width: 92vw;
    margin: 0 4vw;
    height: 50vw;

}
.login01{
    width:100vw;
    height: 40vw;
}
.login01 img{
    width:22vw;
    margin-top: 14vw;
}
.login01 p{
    text-align: center;
}

</style>