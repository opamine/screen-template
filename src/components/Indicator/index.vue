<template>
  <div class="indicator-container">
    <div class="title">
      <div class="text">{{ title }}</div>
      <div class="deco">
        <img src="../../assets/imgs/indicator-title-background.png" alt="" srcset="" />
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
  defineProps({
    title: {
      type: String,
      default: '指标标题',
    },
  });
</script>
<style lang="less" scoped>
  // 指标内容边距
  @indicatorPadding: 12;
  // 标题文字左内边距
  @indicatorTextPaddingLeft: 10;
  // 标题装饰线距离文字上外边距
  @indicatorTitleDecoMarginTop: 4;
  // 标题装饰线距离文字上外边距
  @indicatorTitleDecoHeight: 7;
  .indicator-container {
    padding: calc((@indicatorPadding / @designHeight) * 100vh)
      calc((@indicatorPadding / @designWidth) * 100vw);
    background: url('../../assets/imgs/indicator-background.png');
    background-size: 100% 100%;
    .title {
      .text {
        padding-left: calc((@indicatorTextPaddingLeft / @designWidth) * 100vw);
        .px2font(15);
        // font-family: Douyu;
      }
      .deco {
        img {
          display: block;
          width: 100%;
          height: calc((@indicatorTitleDecoHeight / @designHeight) * 100vh);
          margin-top: calc((@indicatorTitleDecoMarginTop / @designHeight) * 100vh);
        }
      }
    }
  }
</style>
