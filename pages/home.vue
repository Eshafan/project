<template>
<div >
  <!-- 1、头部区域 带导航的 -->
  <myHeader></myHeader>
  <router-view></router-view>
  <!-- 2、首页轮播图（不用封装成组件的形式） -->
  <el-carousel :interval="3000" type="card" height="500px">
    <el-carousel-item v-for="item in picture" :key="item">
      <!-- <el-image :src="item"></el-image> -->
      <el-image :src="require('../src/assets/images/f20572221d0d511b8fa9e431438e1474.jpeg')"></el-image>
    </el-carousel-item>
  </el-carousel>
  <!-- 3、中心动态（左边轮播图，右边抽屉显示内容，最好实现动态绑定，自动弹出） -->
  <dynamic></dynamic>
  <!-- 4、传送带式轮播图还没有实现 -->
  <myFooter></myFooter>
  <!-- <list></list> -->
</div>
</template>

<script>
import dynamic from '@/components/dynamic.vue'
import myHeader from '@/components/myHeader.vue'
import myFooter from '@/components/myFooter.vue'
import list from '@/components/list.vue'
export default {
  name: 'home',
  components: {
    myHeader,
    dynamic,
    myFooter,
    list
  },
  data () {
    return {
      activeIndex: '1',
      input: '',
      activeName1: '1',
      activeName2: '2',
      picture: [ //  后台传入图片url数组
        '../src/assets/images/6c0af7ded1f5c5b30c9c79487c2ed934.jpeg',
        '../src/assets/images/e039ffc4df5cd7a1530609baa4c5e79e.jpeg',
        '../src/assets/images/f1c5efd0865cb519cf5c20a448d30772.jpeg'],
      content1: ['一致性 Consistency', '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等', '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等'],
      content2: ['反馈 Feedback', '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；', '页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。']
    }
  }
}
</script>

<style scoped>

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.grid-content {
    border-radius: 20px;
    min-height: 600px;
    margin:80px;
  }
.bg-purple-dark {
    background: #99a9bf;
  }
.introduction_title{
  font-size: 50px;
  text-align: center;
  color: blue;

}
.introduction_img{
  padding-right: 40px;
  margin-top: 100px;
}
.introduction_text{
  margin-top: 100px;
  border-radius: 20px;
}
.introduction_text_title{
  font-size: 30px;
  text-align: center;
}
.introduction_collapse{
  opacity: 0.5;
}
</style>
