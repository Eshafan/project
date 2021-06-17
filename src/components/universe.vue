<template>
<div>
  <router-view></router-view>
  <my-header></my-header>
<!-- <div>
  <el-image class="head_img" :src="url"></el-image>
</div> -->
<el-divider></el-divider>
<!-- 侧边栏导航 -->
<el-row class="content">
  <el-col :span="12" class="nav">
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">>></el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
  </el-col>
  <!-- 主要内容展示区 -->
  <el-col :span="12" class="container">
  <el-page-header class="page_header" @back="goBack" content="中心简介">
  </el-page-header>
  <el-row>
  <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="url"></el-image></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">2222</div></el-col>
  </el-row>
  <el-row>
  <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="url"></el-image>11111</div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">2222</div></el-col>
  </el-row>
  <el-row>
  <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="url"></el-image>11111</div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">2222</div></el-col>
  </el-row>
  <el-row>
  <el-col :span="6"><div class="grid-content bg-purple"><el-image :src="url"></el-image>11111</div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">2222</div></el-col>
  </el-row>
  </el-col>
</el-row>
<my-footer></my-footer>
</div>
</template>

<script>
import myFooter from './myFooter.vue';
import MyHeader from './myHeader.vue';
export default {
  components: { myFooter, MyHeader },
  name: 'HelloWorld',
  data () {
    return {
      url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2852983301,1964711058&fm=26&gp=0.jpg',
      isCollapse: true,
    }
  },
  methods:{
    goBack () {
      console.log(1)
    },
    handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
    handleClose (key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style scoped>
.head_img{
  height: 300px;
  background-color:  #475669;
}
.container{
  height: auto;
  background-color: gainsboro;
  margin-top:30px;
  width: 1400px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
    min-height: 400px;
  }
.content{
  display: flex;
}
.nav{
  width:300px;
}
.grid-content {
  margin-top:20px;
  margin-right: 50px;
  height: 300px;
  border-radius: 4px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light{
  margin-right: 20px;
  background:wheat;
}

</style>
