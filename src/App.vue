<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.m-popover .m-popover-container {
  height: auto;
}
.m-calendar
  .m-months-container
  .m-months-wrapper
  .m-months
  .m-row
  .m-day
  .m-today {
  background: #fff;
  border: 1px solid #007aff;
}
.m-calendar
  .m-months-container
  .m-months-wrapper
  .m-months
  .m-row
  .m-day
  .m-today.m-select {
  color: #007aff;
}
.m-calendar .m-months-container .m-months-wrapper .m-months .m-row:before {
  height: 0;
}
.m-calendar .m-week-header {
  padding: 10px 0;
}
</style>
