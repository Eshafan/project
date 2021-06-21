<template>
<!-- 首页的内容展示页面：左轮播图，右折叠框 -->
  <div>
  <el-row class="grid-content bg-purple-dark" >
  <!-- <div class="introduction_title">{{data.name}}</div> -->
  <div class="introduction_title">data.name</div>
  <el-col :span="12" class="introduction_img" >
    <el-carousel indicator-position="outside" height="365px" @change="bind">
    <el-carousel-item v-for="item in picture" :key="item">
        <!-- <el-image :src="item"></el-image> -->
        <el-image :src="require('../assets/images/f1c5efd0865cb519cf5c20a448d30772.jpeg')"></el-image>
    </el-carousel-item>
    </el-carousel>
  </el-col>
  <el-col :span="12" class="introduction_text">
  <el-collapse v-model="activeName" accordion class="introduction_collapse">
  <el-collapse-item title="一致性 Consistency" name="0">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback" name="1">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="2">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="3">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
    <el-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
    <el-collapse-item title="可控 Controllability" name="5">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>

</el-collapse>
    </el-col>
    <!-- click 点击事件要实现路由跳转功能 -->
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'dynamic',
  data () {
    return {
      data: {},
      activeName: '4',
      picture: ['00000', '11111', '22222', '33333', '44444']
    }
  },
  methods: {
    bind (val) {
      // console.log(1111, val)
      this.activeName = val.toString()
    }
  }
}
</script>

<style scoped>
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
.introduction_collapse{
  opacity: 0.5;
}
</style>
