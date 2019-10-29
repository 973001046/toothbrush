<template>
  <div>
    <div class="canvas">
      <canvas width="190" height="110" id="myCanvas">Your browser does not support the HTML5 canvas tag.</canvas>
    </div>
  </div>
</template>
<script>
export default {
  props: ['percent'],
  methods: {
    getCanvas () {
      var c = document.getElementById('myCanvas')
      var ctx = c.getContext('2d')
      ctx.lineWidth = 8
      ctx.lineCap = 'round'
      ctx.strokeStyle = '#f0f0f0'
      ctx.beginPath()
      ctx.arc(95, 100, 90, 1 * Math.PI, 2 * Math.PI)
      ctx.stroke()

      ctx.beginPath()
      ctx.strokeStyle = 'red'
      var gr = ctx.createLinearGradient(50, 50, 25, 100, 100, 100)
      gr.addColorStop(0.1, '#f5c34a')
      gr.addColorStop(1, '#e5803c')
      ctx.strokeStyle = gr
      ctx.arc(95, 100, 90, 1 * Math.PI, (1 + this.percent) * Math.PI)
      ctx.stroke()
    }
  },
  mounted () {
    this.getCanvas()
  }
}
</script>

<style lang="less">
.canvas {
  margin: 20px auto 0;
  text-align: center;
}
</style>
