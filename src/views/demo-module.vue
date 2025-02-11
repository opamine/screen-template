<template>
  <div>
    <Indicator title="测试模块1">
      <div ref="chartElementRef" class="device-chart"> </div>
    </Indicator>
  </div>
</template>
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Indicator from '../components/Indicator/index.vue';
  import echarts from '../utils/echarts';
  import tooltipLoop from '../utils/tooltipLoop';
  import { fitChartSize } from '../utils/chartUtlis';

  let myChart;
  let clearLoop;
  const chartElementRef = ref(null);

  const resizeFunc = () => {
    const option = getOption();
    if (myChart) {
      myChart.setOption(option);
      clearLoop();
      clearLoop = tooltipLoop(myChart, option);
      myChart.resize();
    }
  };

  const getOption = () => {
    const value = {
      grid: {
        top: 40,
        bottom: 40,
      },
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth: 0,
        textStyle: {
          color: '#fff',
          fontSize: fitChartSize(13),
        },
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          color: '#fff',
          fontSize: fitChartSize(12),
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: true,
        },
        axisLabel: {
          color: '#fff',
          fontSize: fitChartSize(12),
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          itemStyle: {
            color: '#23B7E5',
          },
        },
      ],
    };
    return value;
  };

  onMounted(() => {
    myChart = echarts.init(chartElementRef.value);
    const option = getOption();
    myChart.setOption(option);
    clearLoop = tooltipLoop(myChart, option);

    window.addEventListener('resize', resizeFunc);
  });

  onUnmounted(() => {
    myChart.dispose();
    clearLoop();
    window.removeEventListener('resize', resizeFunc);
  });
</script>
<style lang="less" scoped>
  .device-chart {
    .px2vh(height, 180);
  }
</style>
