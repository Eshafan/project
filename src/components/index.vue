<template>
<div >
  <!-- 1、头部区域 带导航的 -->
  <myHeader></myHeader>
  <router-view></router-view>
  <!-- 2、首页轮播图（不用封装成组件的形式） -->
  <el-carousel :interval="3000" type="card" height="500px">
    <el-carousel-item v-for="item in pictureSix" :key="item">
      <el-image :src="require('../assets/images/f20572221d0d511b8fa9e431438e1474.jpeg')"></el-image>
    </el-carousel-item>
  </el-carousel>
  <!-- 3、中心动态（左边轮播图，右边抽屉显示内容，最好实现动态绑定，自动弹出） -->
  <dynamic></dynamic>
  <!-- 4、传送带式轮播图还没有实现 -->

  <!-- 这个部分是重复的中心动态界面 -->
  <el-row class="grid-content bg-purple-dark" >
  <div class="introduction_title"> 中心动态</div>
  <el-col :span="12" class="introduction_img" >
    <el-carousel indicator-position="outside" height="365px">
    <el-carousel-item v-for="item in 4" :key="item">
      <el-image :src="require('../assets/images/6d9cf1fb5dbd6d4fcd3f16aad085d4a0.jpeg')"></el-image>
    </el-carousel-item>
    </el-carousel>
  </el-col>
  <!-- 这里可以直接使用一个循环来实现-->
  <el-col :span="12" class="introduction_text">
  <el-collapse v-model="activeName2" accordion class="introduction_collapse">

  <el-collapse-item :title=content1[0] name="1">
    <div><p v-for="item in content1" :key="item">{{item}}</p></div>
  </el-collapse-item>
  <el-collapse-item :title=content2[0] name="2">
    <div><p v-for="item in content2" :key="item">{{item}}</p></div>
    <div></div>
    <div></div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
    <el-collapse-item title="可控 Controllability" name="5">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
    <el-collapse-item title="可控 Controllability" name="6">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
</el-collapse>
    </el-col>
    <!-- click 点击事件要实现路由跳转功能 -->
  </el-row>
  <myFooter></myFooter>
  <myText></myText>
</div>
</template>

<script>
import dynamic from './dynamic.vue'
import myHeader from './myHeader.vue'
import myFooter from './myFooter.vue'
import myText from './myText.vue'
import { swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'index',
  components: {
    myHeader,
    dynamic,
    myFooter,
    myText
  },
  data () {
    return {
      swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          navigation: {
            nextEl: '.next',
            prevEl: '.prev'
          },
          prizeImageList: [
		        {
		          url: require('@/assets/bg.png'),
		          name: 'dshrt'
		        }
	        ]
        },
      activeIndex: '1',
      input: '',
      activeName1: '1',
      activeName2: '2',
      pictureSix: [
        '../assets/images/6c0af7ded1f5c5b30c9c79487c2ed934.jpeg',
        '../assets/images/6d9cf1fb5dbd6d4fcd3f16aad085d4a0.jpeg',
        '../assets/images/e039ffc4df5cd7a1530609baa4c5e79e.jpeg',
        '../assets/images/f1c5efd0865cb519cf5c20a448d30772.jpeg',
        '../assets/images/f20572221d0d511b8fa9e431438e1474.jpeg'],
      pictureFour: [
        '../assets/images/6c0af7ded1f5c5b30c9c79487c2ed934.jpeg',
        '../assets/images/6d9cf1fb5dbd6d4fcd3f16aad085d4a0.jpeg',
        '../assets/images/e039ffc4df5cd7a1530609baa4c5e79e.jpeg',
        '../assets/images/f1c5efd0865cb519cf5c20a448d30772.jpeg',
        '../assets/images/f20572221d0d511b8fa9e431438e1474.jpeg'],
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
