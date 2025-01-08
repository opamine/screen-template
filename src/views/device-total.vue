<template>
  <div>
    <Indicator title="设备总览">
      <div ref="chartElementRef" class="device-chart"> </div>
    </Indicator>
  </div>
</template>
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Indicator from '../components/Indicator/index.vue';
  import echarts from '../utils/echarts';

  let myChart;
  const chartElementRef = ref(null)

  const resizeFunc = () => {
    myChart && myChart.resize();
  };

  onMounted(() => {
    myChart = echarts.init(chartElementRef.value);
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    });

    window.addEventListener('resize', resizeFunc);
  });

  onUnmounted(() => {
    myChart.dispose();
    window.removeEventListener('resize', resizeFunc);
  });
</script>
<style lang="less" scoped>
  .device-chart {
    .px2vh(height, 200);
  }
</style>
