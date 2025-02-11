<template>
  <div>
    <Indicator title="测试模块2">
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
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          itemStyle: {
            color: '#23B7E5',
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#23B7E5',
              },
              {
                offset: 1,
                color: '#23B7E500',
              },
            ]),
          },
          smooth: true
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
