<template>
  <div>
    <Indicator title="测试模块4">
      <div ref="chartElementRef" class="device-chart"> </div>
    </Indicator>
  </div>
</template>
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Indicator from '../components/Indicator/index.vue';
  import echarts from '../utils/echarts';
  // import tooltipLoop from '../utils/tooltipLoop';
  import { fitChartSize } from '../utils/chartUtlis';

  let myChart;
  // let clearLoop;
  const chartElementRef = ref(null);

  const resizeFunc = () => {
    const option = getOption();
    if (myChart) {
      myChart.setOption(option);
      // clearLoop();
      // clearLoop = tooltipLoop(myChart, option);
      myChart.resize();
    }
  };

  const getOption = () => {
    const value = {
      radar: {
        // shape: 'circle',
        radius: '60%', 
        indicator: [
          { name: '指标1', max: 6500 },
          { name: '指标2', max: 16000 },
          { name: '指标3', max: 30000 },
          { name: '指标4', max: 38000 },
          { name: '指标5', max: 52000 },
          { name: '指标6', max: 25000 },
        ],
        splitArea: {
          show: true, // 是否显示分割区域
          areaStyle: {
            color: ['rgba(114, 172, 209, 0.2)', 'rgba(114, 172, 209, 0.4)'], // 分割区域的颜色
          },
        },
        axisName: {
          color: '#fff',
          fontSize: fitChartSize(12),
        },
        axisLine: {
          lineStyle: {
            color: 'white', // 坐标轴线的颜色
          },
        },
        splitLine: {
          lineStyle: {
            // color: 'red', // 分割线的颜色
          },
        },
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
            },
          ],
          itemStyle: {
            color: '#23B7E5', // 自定义数据点颜色
          },
          lineStyle: {
            color: 'rgba(0, 255, 0, 0.8)', // 自定义数据线颜色
            width: 0,
          },
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0, 0, 1, [
              {
                color: '#23B7E500',
                offset: 0,
              },
              {
                color: '#23B7E5',
                offset: 1,
              },
            ]),
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
    // clearLoop = tooltipLoop(myChart, option);

    window.addEventListener('resize', resizeFunc);
  });

  onUnmounted(() => {
    myChart.dispose();
    // clearLoop();
    window.removeEventListener('resize', resizeFunc);
  });
</script>
<style lang="less" scoped>
  .device-chart {
    .px2vh(height, 180);
  }
</style>
