<template>
  <div class="set">
    <!-- S header -->
    <Header :title="title"></Header>
    <!-- E header -->

    <!-- S 参数设置 -->
    <div class="parameter">
      <ul>
        <li>
          <div class="title">时长（3分10秒）</div>
          <slide @percent='percent' :hover='true' :min=2 :max=10></slide>
          <div class="flex">
            <div class="left">2分钟</div>
            <div class="right">10分钟</div>
          </div>
        </li>

        <li>
          <div class="title">时长（3分10秒）</div>
          <slide @percent='percent'></slide>
          <div class="flex">
            <div class="left">弱</div>
            <div class="center">中</div>
            <div class="right">强</div>
          </div>
        </li>

        <li>
          <div class="title">转速</div>
          <slide @percent='percent'></slide>
          <div class="flex special">
            <div class="center">31000</div>
            <div class="center">35000</div>
            <div class="center">38000</div>
            <div class="center">41000</div>
            <div class="center">48000</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- E 参数设置 -->

  </div>
</template>

<script>
import Header from '../publicComponent/header'
import slide from '../publicComponent/slide'

export default {
  name: 'Clean',
  components: {
    Header,
    slide
  },
  data () {
    return {
      title: '清洁',
      enabled: false,
      per: 0
    }
  },
  methods: {
    percent (val) {
      console.log(val)
    }
  }
}
</script>

<style lang='less' scoped>
.parameter {
  .title {
    font-size: 16px;
    margin: 5px 20px;
  }
  ul li {
    border-bottom: 5px solid #f7f7f7;
    padding: 10px 0;
  }
  .flex {
    display: flex;
    margin: 5px 15px;
    &.special {
      margin: 5px 0;
    }
    div {
      flex: 1;
      &.left {
        text-align: left;
      }
      &.right {
        text-align: right;
      }
      &.center {
        text-align: center;
      }
    }
  }
}
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
