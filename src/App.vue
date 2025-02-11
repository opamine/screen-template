<script setup></script>

<template>
  <div class="screen-container">
    <!-- 大屏头部 -->
    <div class="screen-header">大屏标题</div>
    <!-- 大屏背部场景 -->
    <div class="screen-scene"> </div>
    <!-- 大屏左侧内容区 -->
    <div class="screen-left">
      <DemoModule />
      <DemoModule2 :style="{ 'margin-top': px2vh(20) }" />
      <DemoModule3 :style="{ 'margin-top': px2vh(20) }" />
    </div>
    <!-- 大屏右侧内容区 -->
    <div class="screen-right">
      <DemoModule4 />
      <DemoModule5 :style="{ 'margin-top': px2vh(20) }" />
      <DemoModule :style="{ 'margin-top': px2vh(20) }" />
    </div>
    <!-- 大屏底部 -->
    <div class="screen-footer"></div>
  </div>
</template>
<script setup>
  import DemoModule from './views/demo-module.vue';
  import DemoModule2 from './views/demo-module2.vue';
  import DemoModule3 from './views/demo-module3.vue';
  import DemoModule4 from './views/demo-module4.vue';
  import DemoModule5 from './views/demo-module5.vue';
  import { px2vh } from './utils/index.js';
</script>
<style lang="less" scoped>
  // 定义头部高度
  @screenHeaderHeight: 80;
  // 定义底部高度
  @screenFooterHeight: 32;
  //  定义左右内容区宽度
  @screenLeftRightWidth: 420;
  //  定义左右内容区内边距
  @screenLeftRightPadding: 16;
  .screen-container {
    position: relative;
    .px2vw(width, @designWidth);
    .px2vh(height, @designHeight);
    .screen-scene {
      position: absolute;
      .px2vw(width, @designWidth);
      .px2vh(height, @designHeight);
      background-color: #000;
      z-index: 0;
    }
    .screen-header {
      position: absolute;
      .px2vw(width, @designWidth);
      .px2vh(height, @screenHeaderHeight);
      background: url('./assets/imgs/header-background.png');
      background-size: 100% 100%;
      .px2font(30);
      text-align: center;
      line-height: calc((@screenHeaderHeight / @designHeight) * 100vh);
      font-family: PangMenZhengDao;
      z-index: 1;
    }
    .screen-left {
      position: absolute;
      left: 0;
      top: calc((@screenHeaderHeight / @designHeight) * 100vh);
      .px2vw(width, @screenLeftRightWidth);
      .px2vh(height, @designHeight - @screenHeaderHeight - @screenFooterHeight);
      padding: calc((@screenLeftRightPadding / @designHeight) * 100vh);
      box-sizing: border-box;
      overflow: auto;
      z-index: 1;
    }
    .screen-right {
      position: absolute;
      right: 0;
      top: calc((@screenHeaderHeight / @designHeight) * 100vh);
      .px2vw(width, @screenLeftRightWidth);
      .px2vh(height, @designHeight - @screenHeaderHeight - @screenFooterHeight);
      padding: calc((@screenLeftRightPadding / @designHeight) * 100vh);
      box-sizing: border-box;
      overflow: auto;
      z-index: 1;
    }
    .screen-footer {
      position: absolute;
      bottom: 0;
      .px2vw(width, @designWidth);
      .px2vh(height, @screenFooterHeight);
      z-index: 1;
    }
  }
</style>
