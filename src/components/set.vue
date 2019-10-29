<template>
  <div class="set">
    <!-- S header -->
    <Header :title="title"></Header>
    <!-- E header -->

    <!-- S 模式设置 -->
    <div class="setTool">
      <dl>
        <dt>模式设置</dt>
        <dd>
          <div class="left">清洁</div>
          <div class="right" @click="set">
            <span>2分钟</span>
            <img src="@/assets/imgs/ic_jiantou.png" alt="">
          </div>
        </dd>

        <dd>
          <div class="left">美白</div>
          <div class="right" @click="set">
            <span>2分钟</span>
            <img src="@/assets/imgs/ic_jiantou.png" alt="">
          </div>
        </dd>

        <dd>
          <div class="left">抛光</div>
          <div class="right" @click="set">
            <span>2分钟</span>
            <img src="@/assets/imgs/ic_jiantou.png" alt="">
          </div>
        </dd>

        <dd>
          <div class="left">护齿</div>
          <div class="right" @click="set">
            <span>2分钟</span>
            <img src="@/assets/imgs/ic_jiantou.png" alt="">
          </div>
        </dd>

        <dd>
          <div class="left">敏感</div>
          <div class="right" @click="set">
            <span>2分钟</span>
            <img src="@/assets/imgs/ic_jiantou.png" alt="">
          </div>
        </dd>
      </dl>

      <dl>
        <dt>模式设置</dt>
        <dd class="special">
          <div class="left">
            <h3>防飞溅</h3>
            <p>开启后，启动牙刷5s后才震动</p>
          </div>
          <div class="right check">
            <switches v-model="enabled" color="green"></switches>
          </div>
        </dd>

        <dd>
          <div class="left">口腔知识</div>
          <div class="right">
            <img src="@/assets/imgs/ic_jiantou.png" alt="">
          </div>
        </dd>
      </dl>

      <dl>
        <dd>
          <div class="left">固件版本</div>
          <div class="right" @click="set">
            <span>2分钟</span>
            <img src="@/assets/imgs/ic_jiantou.png" alt="">
          </div>
        </dd>
      </dl>
    </div>

    <div class="tip align-center">
      <div>当前版本已是最新版本</div>
    </div>
    <!-- E 模式设置 -->
  </div>
</template>

<script>
import Header from '../publicComponent/header'
import Switches from 'vue-switches'

export default {
  name: 'Set',
  components: {
    Header,
    Switches
  },
  data () {
    return {
      title: '刷牙设置',
      enabled: false
    }
  },
  methods: {
    set () {
      this.$router.push('/clean')
    }
  }
}
</script>

<style lang='less' scoped>
.tip {
  height: 100px;
  div {
    line-height: 30px;
    padding: 0 20px;
    color: #000;
    font-size: 12px;
    border-radius: 30px;
    background-color: #dbdbdb;
  }
}
.setTool {
  dl {
    background-color: #fff;
    padding: 0 15px;
    border-bottom: 10px solid #f7f7f7;
    &:last-child {
      border-bottom: none;
    }
    dt {
      font-size: 13px;
      color: #666;
      padding-top: 20px;
    }
    dd {
      border-bottom: 1px solid #e5e5e5;
      min-height: 45px;
      display: flex;
      align-items: center;
      position: relative;
      &.special {
        padding: 15px 0;
      }
      &:last-child {
        border-bottom: none;
      }
      .left {
        // float: left;
        font-size: 16px;
        p {
          font-size: 12px;
        }
        h3 {
          font-weight: normal;
        }
      }
      .right {
        // float: right;
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        img {
          width: 12px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
