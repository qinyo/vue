<template>
  <div class="my">
    <div class="nickname" @click="onClickNickname">
      <!-- {{ nickname }} -->
      nickname
      <!-- <van-icon name="arrow"></van-icon> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "My",
  // data(){
  //   return {

  //   }
  // },
  methods: {
    onClickNickname() {
      // this.$router.push({ name: "Myinfo" });
      this.$router.push({ path: "Myinfo" })
    },
  }

}
</script>
<style>

</style>