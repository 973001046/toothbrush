<template>
  <div class="detail">

    <!-- S header -->
    <Header :title="title"></Header>
    <!-- E header -->

    <div class="alerm">
      <img src="@/assets/imgs/important.png" alt="">
      <div>设备未链接，请点击重试</div>
    </div>

    <div class="img">
      <img src="@/assets/imgs/tool.png" alt="">
    </div>

    <!-- S 参数 -->
    <div class="connect">
      <div class="flex lef">未链接</div>
      <div class="flex center">
        <h3>90天</h3>
        <p>刷头可用 &gt;</p>
      </div>
      <div class="flex right">--</div>
    </div>
    <!-- E 参数 -->

    <!-- S 牙刷设置 -->
    <div class="set">
      <div class="top clearfix">
        <div class="left">牙刷设置</div>
        <div class="right">更多 &gt;</div>
      </div>
      <div class='four'>
        <div>
          <h3>清洁</h3>
          <p>模式</p>
        </div>

        <div>
          <h3>2分30秒</h3>
          <p>模式</p>
        </div>

        <div>
          <h3>中</h3>
          <p>强度</p>
        </div>

        <div @click="set">
          <img src="@/assets/imgs/yuan.png" alt="">
        </div>
      </div>
    </div>
    <!-- E 牙刷设置 -->

    <!-- S 记录 -->
    <div class="record set">
      <div class="top clearfix">
        <div class="left">记录</div>
        <div class="right">更多 &gt;</div>
      </div>
      <dl>
        <dt>今日 星期二</dt>
        <dd>
          <div class="left-part">88</div>
          <div class="right-par">
            <h3>刷牙时长2分11秒</h3>
            <p>20:00:45</p>
          </div>
        </dd>

        <dd>
          <div class="left-part">88</div>
          <div class="right-par">
            <h3>刷牙时长2分11秒</h3>
            <p>20:00:45</p>
          </div>
        </dd>
      </dl>
    </div>
    <!-- E 记录 -->
  </div>
</template>

<script>
import Header from '../publicComponent/header'

export default {
  name: 'Detail',
  data () {
    return {
      msg: '分销系统',
      title: '罗曼牙刷'
    }
  },
  methods: {
    set () {
      this.$router.push('/set')
    }
  },
  components: { Header }
}
</script>

<style lang='less' scoped>
.alerm {
  height: 40px;
  background-color: #ffe5e5;
  color: #ff3320;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    margin: 0 15px 0;
  }
}
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
      height: 5px;
      width: 5px;
      content: " ";
      background-color: #000;
      border-radius: 50%;
      margin: 5px;
    }
  }
}
.detail {
  background-color: #f7f7f7;
}
.record {
  dl {
    padding: 0 15px;
    dd {
      border-bottom: 1px solid #e5e5e5;
      position: relative;
      margin-left: 45px;
      padding: 8px 0;
      .left-part {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        left: -40px;
        background-color: #3ccba0;
        text-align: center;
        color: #fff;
        line-height: 30px;
        top: 12px;
      }
    }
  }
}
.set {
  width: 95%;
  background-color: #fff;
  border-radius: 8px;
  margin: 10px auto;
  padding-bottom: 15px;
  .top {
    padding: 15px 15px 18px;
    .left {
      float: left;
    }
    .right {
      float: right;
    }
  }
  .four {
    display: flex;
    align-items: center; /*垂直居中*/
    div {
      flex: 1;
      text-align: center;
      h3 {
        font-size: 15px;
        font-weight: normal;
      }
      &:nth-child(1) {
        border-right: 1px solid #ccc;
      }
      &:nth-child(2) {
        border-right: 1px solid #ccc;
      }
      img {
        width: 40px;
        display: inline-block;
      }
    }
  }
}
.connect {
  width: 95%;
  background-color: #fff;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  align-items: center; /*垂直居中*/
  height: 80px;
  .flex {
    flex: 1;
    text-align: center;
  }
}
</style>
