// Echarts图表字体、间距自适应
export const fitChartSize = (size, defaultHeight = 1080) => {
  const clientHeight =
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  if (!clientHeight) return size;
  const scale = clientHeight / defaultHeight;
  return Number((size * scale).toFixed(3));
};
