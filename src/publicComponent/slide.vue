<template>
  <div>
    <div class="wrapper align-center" ref='progress' @touchstart='touchstart($event)' @touchmove='touchmove($event)'>
      <div class="progress">
        <div class="has-progress" :style="{width: moveX - 20 + 'px'}"></div>
        <div class="bar" :style="{left: moveX - 30 + 'px'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      startX: 0,
      moveX: 20,
      clientWidth: 0
    }
  },
  methods: {
    touchstart (event) {
      this.startX = event.targetTouches[0].pageX
    },
    touchmove (event) {
      if (event.targetTouches[0].pageX >= 20 && event.targetTouches[0].pageX <= this.clientWidth - 20) {
        this.moveX = event.targetTouches[0].pageX
        let percent = parseInt((this.moveX - 20) / (this.clientWidth - 40) * 100)
        this.$emit('percent', percent)
      }
    }
  },
  mounted () {
    this.clientWidth = document.body.clientWidth
  }
}
</script>

<style lang="less">
.wrapper {
  height: 20px;
  padding: 0 20px;
  .progress {
    // margin: 10px;
    height: 2px;
    content: "";
    width: 100%;
    box-sizing: border-box;
    background-color: #f2f2f2;
    border-radius: 3px;
    position: relative;
    .bar {
      width: 20px;
      height: 20px;
      background-color: #fff;
      box-shadow: 0 0 5px #ccc;
      border-radius: 50%;
      position: absolute;
      top: -9px;
      left: 40%;
    }
    .has-progress {
      width: 0;
      height: 2px;
      content: "";
      border-radius: 3px;
      background-color: #017eff;
    }
  }
}
</style>
