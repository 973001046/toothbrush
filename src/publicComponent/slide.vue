<template>
  <div>
    <div class="wrapper align-center" ref='progress' @touchstart='touchstart($event)' @touchmove='touchmove($event)' @touchend='touchend'>
      <div class="progress">
        <div class="has-progress" :style="{width: moveX - 20 + 'px'}"></div>
        <div class="bar" :style="{left: moveX - 30 + 'px'}">
          <div class="timer" v-if="hover && flag">{{timer}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hover', 'min', 'max'],
  data () {
    return {
      value: 0,
      startX: 0,
      moveX: 20,
      clientWidth: 0,
      percent: 0,
      timer: 0,
      flag: false
    }
  },
  watch: {
    percent (val) {
      if (this.hover) {
        let minute = (((this.max - this.min) * 60) * this.percent) / 100
        this.timer = this.getTime(minute)
      }
    }
  },
  methods: {
    touchstart (event) {
      this.startX = event.targetTouches[0].pageX
      this.flag = true
    },
    getTime (time) {
      let pointer = parseInt(time / 60) + 2
      let min = parseInt(time % 60)
      console.log(pointer, min)
      return pointer + '分' + (min ? (min + '秒') : '')
    },
    touchmove (event) {
      if (event.targetTouches[0].pageX >= 20 && event.targetTouches[0].pageX <= this.clientWidth - 20) {
        this.moveX = event.targetTouches[0].pageX
        let percent = parseInt((this.moveX - 20) / (this.clientWidth - 40) * 100)
        this.percent = percent
        if (this.hover) {
          this.$emit('percent', {
            time: this.timer,
            percent: this.percent
          })
        } else {
          this.$emit('percent', percent)
        }
      }
    },
    touchend () {
      this.flag = false
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
      .timer {
        position: absolute;
        width: 60px;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        border-radius: 4px;
        top: -30px;
        left: 50%;
        margin-left: -30px;
        &:after {
          content: "";
          display: block;
          position: absolute;
          bottom: -6px;
          left: 50%;
          margin-left: -5px;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid rgba(0, 0, 0, 0.8);
        }
      }
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
