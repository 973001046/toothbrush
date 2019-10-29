<template>
  <!-- S header -->
  <div class="header">
    <div class="back" @click="back">
      <img src="@/assets/imgs/pointer.png" alt="">
    </div>
    <div class="title">{{title}}</div>
    <div class="control">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <!-- E header -->
</template>

<script>
export default {
  props: ['title'],
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang='less'>
.header {
  background-color: #f7f7f7;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .back {
    margin: 0 10px;
    img {
      width: 25px;
    }
  }
  .control {
    align-items: right;
    position: absolute;
    right: 0;
    width: 30px;
    span {
      display: block;
      height: 4px;
      width: 4px;
      content: " ";
      background-color: #000;
      border-radius: 50%;
      margin: 4px;
    }
  }
}
</style>
