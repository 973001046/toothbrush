<template>
  <div class="set">
    <!-- S header -->
    <Header :title="title"></Header>
    <!-- E header -->
    <Progress :percent='0.2'></Progress>
    <!-- S 剩余天数 -->
    <div class="days">
      <div class="top align-center">
        <div>
          <h2>20<span>天</span></h2>
          <p>刷头可用</p>
        </div>
      </div>
      <div class="tip">
        <div>牙医建议：每三个月更换一次刷头</div>
        <a href="javascript:;">购买刷头</a>
      </div>
    </div>
    <!-- E 剩余天数 -->

    <!-- S reset -->
    <div class="reset">
      <div class="ruler" @click="enabled = !enabled">
        <img v-if="!enabled" src="@/assets/imgs/ic_xuanze_off.png" alt="">
        <img v-else src="@/assets/imgs/ic_xuanze_on.png" alt="">
        <div>请确定您已您更换新刷头，点击一下按钮重新开始统计</div>
      </div>
      <div class="btn">
        <div>复位可用时间</div>
      </div>
    </div>
    <!-- E reset -->
  </div>
</template>

<script>
import Header from '../publicComponent/header'
import Progress from '../publicComponent/progress'

export default {
  name: 'Tooth',
  components: {
    Header,
    Progress
  },
  data () {
    return {
      title: '刷头可用',
      enabled: true,
      options: 9,
      value: 100
    }
  }
}
</script>

<style lang='less' scoped>
.reset {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  .btn {
    text-align: center;
    div {
      display: inline-block;
      background-color: #f2f2f2;
      color: #0078fd;
      height: 30px;
      padding: 0 20px;
      line-height: 30px;
      border-radius: 30px;
      margin: 15px 0;
    }
  }
  .ruler {
    padding: 0 20px;
    display: flex;
    // align-items: center;
    font-size: 14px;
    line-height: 18px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
}
.days {
  margin-top: -110px;
  .tip {
    text-align: center;
    a {
      color: #0078fd;
    }
  }
  .top {
    height: 120px;
    h2 {
      font-size: 24px;
      font-weight: normal;
      color: #000;
      span {
        font-size: 14px;
      }
    }
  }
}
</style>
