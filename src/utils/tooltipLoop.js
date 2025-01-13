const tooltipLoop = (chartObj, option) => {
  const chart = chartObj;
  let timer = null;

  const timerFunc = () => {
    let currentIndex = -1;
    timer = setInterval(() => {
      const dataLen = option.series[0].data.length;
      // 取消之前高亮的图形
      chart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      currentIndex = (currentIndex + 1) % dataLen;
      // 高亮当前图形
      chart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      // 显示 tooltip
      chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
    }, 3000);
  };

  timerFunc();

  chart.on('mouseover', (params) => {
    timer && clearInterval(timer);
    timer = null;
    chart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
    });
    // 高亮当前图形
    chart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: params.dataIndex,
    });
    // 显示 tooltip
    chart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: params.dataIndex,
    });
  });

  chart.on('mouseout', () => {
    chart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
    });
    !timer && timerFunc();
  });

  const clearLoop = () => {
    timer && clearInterval(timer);
    timer = null;
  };

  return clearLoop;
};

export default tooltipLoop;
