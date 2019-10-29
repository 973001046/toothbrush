<template>
  <div class="detail">

    <!-- S header -->
    <Header :title="title"></Header>
    <!-- E header -->

    <!-- S tab -->
    <div class="tab">
      <div class="flex">
        <div class="center" :class="{active: tabFlag == 1}" @click="tabFlag = 1">日</div>
        <div class="center" :class="{active: tabFlag == 2}" @click="tabFlag = 2">周</div>
        <div class="center" :class="{active: tabFlag == 3}" @click="tabFlag = 3">月</div>
      </div>
    </div>
    <!-- E tab -->

    <div class="week-timer align-center" v-if="tabFlag == 2" @click="selectDate('during')">
      <img src="@/assets/imgs/left.png" alt="">
      <div>2019-09-19 ~ 2019-10-19</div>
      <img src="@/assets/imgs/right.png" alt="">
    </div>

    <div class="charts">
      <div class="timer" v-if="tabFlag == 1">
        <!-- <calendar @dayClick="onChange" /> -->
        <!-- <inlineCalendar  /> -->
        <inlineCalendar @change="onChange">
          <template v-slot:day="scope">
            <div v-if="getDate(scope.date.dateTime) === '2019-10-25'" class="point"></div>
          </template>
        </inlineCalendar>
      </div>
      <div class="tabs" v-if="tabFlag == 2">
        <v-chart ref="demo" :data="weekData">
          <v-bar />
          <v-tooltip :show-item-marker="false" />
        </v-chart>
      </div>

      <div class="tabs" v-if="tabFlag == 3">
        <v-chart ref="demo" :data="monthData">
          <v-bar />
          <v-tooltip :show-item-marker="false" />
        </v-chart>
      </div>
    </div>

    <!-- S 记录 日 -->
    <div class="record set" v-if="tabFlag == 1">
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

    <!-- S 记录 周 -->
    <div class="week" v-else>
      <div class="title">本周刷牙次数：14次</div>
      <ul>
        <li>
          <div class="icon">
            <img src="@/assets/imgs/ic_shuaya.png" alt="">
          </div>
          <div class="txt clearfix">
            <div class="left">刷牙天数</div>
            <div class="right">7天</div>
          </div>
        </li>

        <li>
          <div class="icon">
            <img src="@/assets/imgs/ic_tianshu.png" alt="">
          </div>
          <div class="txt clearfix">
            <div class="left">平均得分</div>
            <div class="right">82分</div>
          </div>
        </li>

        <li>
          <div class="icon">
            <img src="@/assets/imgs/ic_shichang.png" alt="">
          </div>
          <div class="txt clearfix">
            <div class="left">平均时长</div>
            <div class="right">2分10秒</div>
          </div>
        </li>
      </ul>

      <div class="progress">
        <div class="title">平均得分</div>
        <div class="flex">
          <div class="center">有待改善</div>
          <div class="center">正常</div>
          <div class="center">好</div>
        </div>
        <div class="hover">
          <div class="blank" :style="{left: progress}"></div>
          <div class="flex step">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- E 记录 周 -->

    <calendar :show.sync="show" :mode="mode" :defaultDate="defaultDate" :disabledDate="disabledDate" @change="onChange" />
  </div>
</template>

<script>
import Header from '../publicComponent/header'
import { VChart, VBar, VTooltip } from 'vux'

export default {
  name: 'Detail',
  data () {
    return {
      title: '记录',
      progress: '80%',
      tabFlag: 1,
      calendarShow: true,
      arr: ['2019-10-25', '2019-10-28'],
      weekData: [
        { year: '周日', sales: 38 },
        { year: '周一', sales: 52 },
        { year: '周二', sales: 61 },
        { year: '周三', sales: 145 },
        { year: '周四', sales: 48 },
        { year: '周五', sales: 38 },
        { year: '周六', sales: 38 }
      ],
      monthData: [
        { year: '1', sales: 32 },
        { year: '2', sales: 3 },
        { year: '3', sales: 54 },
        { year: '4', sales: 157 },
        { year: '5', sales: 100 },
        { year: '6', sales: 60 },
        { year: '7', sales: 30 },
        { year: '8', sales: 32 },
        { year: '9', sales: 3 },
        { year: '10', sales: 54 },
        { year: '11', sales: 157 },
        { year: '12', sales: 100 },
        { year: '13', sales: 60 },
        { year: '14', sales: 30 },
        { year: '15', sales: 30 },
        { year: '16', sales: 30 },
        { year: '17', sales: 30 },
        { year: '18', sales: 30 },
        { year: '19', sales: 30 },
        { year: '20', sales: 30 }
      ],
      show: false,
      mode: 'single',
      date: '',
      defaultDate: [],
      disabledDate: []
    }
  },
  methods: {
    onChange (date) {
      if (this.mode === 'single') {
        // this.date = date.format('YYYY-MM-DD')
        console.log(date)
      } else {
        // this.date = JSON.stringify(date.map((item) => item.format('YYYY-MM-DD')))
        console.log(date)
      }
    },
    getDate (data) {
      let d = new Date(data)
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    },
    selectDate (mode) {
      this.show = true
      this.mode = mode
      this.defaultDate = []
      this.date = ''
    }
  },
  components: {
    Header,
    VChart,
    VTooltip,
    VBar
  }
}
</script>

<style lang='less' scoped>
.week-timer {
  margin-top: 10px;
  font-size: 14px;
  img {
    width: 10px;
    margin: 0 15px;
  }
}
.point {
  width: 6px;
  height: 6px;
  background-color: #007cff;
  border-radius: 50%;
  position: absolute;
  bottom: 5px;
  left: 50%;
  margin-left: -3px;
}
.charts {
  width: 100%;
  overflow-x: auto;
}
.tab {
  width: 210px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 40px;
  .active {
    border-bottom: 1px solid #007dfe;
    color: #007dfe;
  }
}
.progress {
  margin-top: 20px;
  .title {
    margin-bottom: 12px;
  }
}
.hover {
  width: 100%;
  height: 3px;
  position: relative;
  .blank {
    position: absolute;
    content: "";
    width: 13px;
    height: 13px;
    background-color: #fff;
    border: 3px solid #3ccba0;
    left: 0;
    top: -8px;
    border-radius: 50%;
  }
}
.flex {
  display: flex;
  div {
    flex: 1;
  }
  .center {
    text-align: center;
    margin: 5px 0 12px;
  }

  .item {
    &:first-child {
      content: "";
      width: 100%;
      height: 3px;
      background-color: #ff9b00;
    }
    &:nth-child(2) {
      content: "";
      width: 100%;
      height: 3px;
      background-color: #2ebaef;
    }
    &:last-child {
      content: "";
      width: 100%;
      height: 3px;
      background-color: #3ccba0;
    }
  }
}
.week {
  padding: 0 20px;
  margin-top: 15px;
  .title {
    font-size: 14px;
  }
  ul {
    li {
      position: relative;
      padding-left: 40px;
      line-height: 45px;
      .txt {
        border-bottom: 1px solid #ccc;
        .left {
          float: left;
          font-size: 14px;
          color: #000;
        }
        .right {
          float: right;
        }
      }
      .icon {
        position: absolute;
        top: 12px;
        left: 4px;
        img {
          width: 24px;
        }
      }
    }
  }
}
.record {
  margin-top: 15px;
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
</style>
