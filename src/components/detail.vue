<template>
    <main>
        <header>
            <van-swipe @change="onChange">
            <van-swipe-item><img src="../assets/img/deta03.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../assets/img/deta04.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../assets/img/deta05.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../assets/img/deta06.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../assets/img/deta07.jpg" alt=""></van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">{{ current + 1 }}/5</div>
            </template>
            </van-swipe>
            <span></span>
        </header>
        <footer>
            <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
            </van-goods-action>
        </footer>
    </main>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>
<style scoped>
header div{
    color:#fff;
}
header{
    width: 100vw;
}
header img{
    width: 100%;
}
.custom-indicator {
position: absolute;
right: 5px;
bottom: 5px;
padding: 2px 5px;
font-size: 12px;
background: rgba(0, 0, 0, 0.1);
}
</style>