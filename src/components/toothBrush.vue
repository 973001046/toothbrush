<template>
  <div class="wraper">
    <div class="bottom-tip">
      <div>本牙区有3个页面 <br /> 请按引导顺序科学清洁每个牙面</div>
      <div>请暂停牙刷后退出页面<br />手动返回或后台运行会造成刷牙数据丢失</div>
    </div>
    <div class="top-title">实时引导</div>
    <div class="tooth align-center">
      <div class="content">
        <div class="canvas">
          <canvas id="canvas"></canvas>
        </div>
        <!-- <div class="tips">姿势错误</div> -->
        <div class="timer align-center">
          <div>
            <h3>14<span>s</span></h3>
            <p>00:00</p>
          </div>
        </div>
        <div class="imgs">
          <img src="@/assets/imgs/yaTop.png" alt="">
          <img src="@/assets/imgs/yaBottom.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getCanvas (start, end, color) {
      var c = document.getElementById('canvas')
      var ctx = c.getContext('2d')
      ctx.beginPath()
      ctx.lineWidth = 10
      ctx.strokeStyle = color
      ctx.arc(45, 45, 35, start * 2 * Math.PI, end * 2 * Math.PI, true)
      ctx.stroke()
    }
  },
  mounted () {
    this.getCanvas(0, 1, 'rgba(103, 167, 230, 0.5)')
    this.getCanvas(0.25, 1, 'rgba(255, 255, 255, 1)')
  }
}
</script>

<style lang="less">
.wraper {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #eee;
  background: url("~@/assets/imgs/custom.png") no-repeat left center;
  background-size: 100% 100%;
}
.top-title {
  line-height: 1.5;
  width: 100%;
  position: fixed;
  text-align: center;
  top: 30px;
  left: 0;
  color: #fff;
  z-index: 9;
}
.bottom-tip {
  line-height: 1.5;
  width: 100%;
  position: fixed;
  text-align: center;
  bottom: 15px;
  left: 0;
  color: #fff;
  z-index: 9;
  div {
    margin-top: 5px;
  }
}
.tooth {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: -15px;
  .content {
    text-align: center;
    .imgs {
      width: 60%;
      display: inline-block;
    }
    position: relative;
    .timer {
      width: 90px;
      height: 90px;
      position: absolute;
      left: 50%;
      margin-left: -45px;
      top: 50%;
      margin-top: -45px;
      // line-height: 90px;
      font-size: 12px;
      color: #fff;
      h3 {
        font-size: 14px;
        font-weight: normal;
        span {
          font-size: 12px;
        }
      }
    }
    .tips {
      width: 90px;
      height: 90px;
      position: absolute;
      left: 50%;
      margin-left: -45px;
      top: 50%;
      margin-top: -45px;
      line-height: 90px;
      font-size: 12px;
      color: #fff;
    }
    .canvas {
      width: 90px;
      height: 90px;
      // background-color: #fff;
      position: absolute;
      left: 50%;
      margin-left: -45px;
      top: 50%;
      margin-top: -45px;
      transform: rotate(-90deg);
    }
  }
  .align-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
