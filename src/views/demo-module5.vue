<template>
  <div>
    <Indicator title="测试模块5">
      <div class="container">
        <div class="cus-table-header">
          <div class="header-content">
            <div class="header-content-item">项目名称</div>
            <div class="header-content-item">总投资额</div>
            <div class="header-content-item">状态</div>
            <div class="header-content-item">项目类别</div>
            <div class="header-content-item">公司名称</div>
          </div>
        </div>
        <div class="table-body">
          <SeamlessScroll
            v-if="data.length"
            :list="data"
            :singleHeight="50"
            :hover="true"
            :limitScrollNum="6"
            :singleWaitTime="2000"
            :wheel="false"
          >
            <ul class="scroll-list">
              <li class="scroll-list-item" v-for="(item, ind) in data" :key="ind">
                <div class="item-value">{{ item.prjName }}</div>
                <div class="item-value">{{ item.totalAmount }}</div>
                <div class="item-value">{{
                  item.prjState === '1' ? '筹建' : item.prjState === '2' ? '在建' : '完工'
                }}</div>
                <div class="item-value">{{ item.industryName }}</div>
                <div class="item-value">{{ item.companyName }}</div>
              </li>
            </ul>
          </SeamlessScroll>
        </div>
      </div>
    </Indicator>
  </div>
</template>
<script setup>
  import Indicator from '../components/Indicator/index.vue';
  import SeamlessScroll from '../components/seamless-scroll/index.vue';
  import { ref, onMounted, onUnmounted } from 'vue';

  const vheight = ref((50 / 1080) * (window.innerHeight || document.documentElement.clientHeight));

  const data = ref([]);

  const resizeFunc = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    vheight.value = (50 / 1080) * viewportHeight;
  };

  const getData = () => {
    data.value = [
      {
        prjName: '测试项目',
        totalAmount: 2000,
        prjState: '1',
        industryName: '测试类别',
        companyName: '测试贵公司',
      },
      {
        prjName: '测试项目',
        totalAmount: 2000,
        prjState: '1',
        industryName: '测试类别',
        companyName: '测试贵公司',
      },
      {
        prjName: '测试项目',
        totalAmount: 2000,
        prjState: '1',
        industryName: '测试类别',
        companyName: '测试贵公司',
      },
      {
        prjName: '测试项目',
        totalAmount: 2000,
        prjState: '1',
        industryName: '测试类别',
        companyName: '测试贵公司',
      },
      {
        prjName: '测试项目',
        totalAmount: 2000,
        prjState: '1',
        industryName: '测试类别',
        companyName: '测试贵公司',
      },
      {
        prjName: '测试项目',
        totalAmount: 2000,
        prjState: '1',
        industryName: '测试类别',
        companyName: '测试贵公司',
      },
      {
        prjName: '测试项目',
        totalAmount: 2000,
        prjState: '1',
        industryName: '测试类别',
        companyName: '测试贵公司',
      },
      {
        prjName: '测试项目',
        totalAmount: 2000,
        prjState: '1',
        industryName: '测试类别',
        companyName: '测试贵公司',
      },
    ];
  };

  onMounted(() => {
    getData();
    window.addEventListener('resize', resizeFunc);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resizeFunc);
  });
</script>
<style scoped lang="less">
  .container {
    .cus-table-header {
      .header-content {
        display: flex;
        background: linear-gradient(
          90deg,
          rgba(97, 177, 255, 0.16) 2%,
          rgba(255, 255, 255, 0.16) 100%
        );
        .header-content-item {
          .px2vh(height, 40);
          .px2vh(line-height, 40);
          .px2font(15);
          text-align: center;
          &:nth-of-type(1) {
            width: 20%;
          }
          &:nth-of-type(2) {
            width: 20%;
          }
          &:nth-of-type(3) {
            width: 10%;
          }
          &:nth-of-type(4) {
            width: 20%;
          }
          &:nth-of-type(5) {
            width: 30%;
          }
        }
      }
    }
    .table-body {
      .px2vh(height, 250);
      overflow: hidden;
      .scroll-list {
        .scroll-list-item {
          display: flex;
          .px2vh(height, 50);
          .px2vh(line-height, 50);
          .px2font(15);
          &:nth-of-type(odd) {
            background: linear-gradient(
              90deg,
              rgba(97, 177, 255, 0) 0%,
              rgba(97, 177, 255, 0.16) 50%,
              rgba(97, 177, 255, 0) 100%
            );
          }
          .item-value {
            text-align: center;
            &:nth-of-type(1) {
              width: 20%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            &:nth-of-type(2) {
              width: 20%;
            }
            &:nth-of-type(3) {
              width: 10%;
            }
            &:nth-of-type(4) {
              width: 20%;
            }
            &:nth-of-type(5) {
              width: 30%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
</style>
