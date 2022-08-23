<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer">
      <router-link to="/">首页</router-link>
      <router-link to="/category">分类</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/my">我的</router-link>
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  background-color:aliceblue;
}
</style>
