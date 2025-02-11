<template>
  <div>
    <Indicator title="测试模块3">
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
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderWidth: 0,
        textStyle: {
          color: '#fff',
          fontSize: fitChartSize(13),
        },
      },
      legend: {
        orient: 'vertical',
        top: 'center',
        right: 0,
      },
      series: [
        {
          name: 'status',
          type: 'pie',
          radius: ['40%', '60%'],
          itemStyle: {
            borderWidth: 0,
          },
          label: {
            show: false,
            position: 'center',
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'online', itemStyle: { color: '#23B7E5' } },
            { value: 735, name: 'offline', itemStyle: { color: '#23B7E533' } },
          ],
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
