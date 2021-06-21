<template>
<div>
  <my-header></my-header>
<!-- <div>
  <el-image class="head_img" :src="url"></el-image>
</div> -->
<div class="content">
<el-divider></el-divider>
<div class="header">
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">所选中的栏目名称</a></el-breadcrumb-item>
  </el-breadcrumb>
  <div class="search">
  <el-input v-model="input" placeholder="请输入内容"></el-input>
  <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
  <div class="title">所选中的栏目名称</div>

</div>
<el-container class="container" v-for="item in data" :key="item">
  <!-- 直接遍历展示内容 -->
  <el-container>
    <el-aside width="300px" >内容图片</el-aside>
    <el-container>
      <el-main>内容标题</el-main>
    </el-container>
  </el-container>
</el-container>
<el-pagination class="page"
  background
  layout="prev, pager, next"
  :total="30">
</el-pagination>
</div>
<my-footer class="footer"></my-footer>

</div>
</template>

<script>
import myFooter from '../src/components/myFooter'
import MyHeader from '../src/components/myHeader'
export default {
  components: { myFooter, MyHeader },
  name: 'detail',
  data () {
    return {
      url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2852983301,1964711058&fm=26&gp=0.jpg',
      isCollapse: true,
      data: ['1', '2', '3', '4', '5', '6', '7']
    }
  },
  methods: {
    goBack () {
      console.log(1)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.head_img{
  height: 300px;
  background-color:  #475669;
}

.content{
  margin-left: 15%;
  margin-right: 15%;

}
.header{
  height: 300px;
  background-image: url('../src/assets/images/f20572221d0d511b8fa9e431438e1474.jpeg');
}
.breadcrumb{
  font-size: 24px;
}
.title{
  font-size: 32px;
  margin-top: 215px;
  width: 300px;
  height: 60px;
  background-color: gray;
  border:1px solid black;
  /* border-radius: 20px; */
}
.container{
  margin-bottom: 20px;
  height: auto;
  background-color: gainsboro;
  width: auto;
}
.el-aside{
  line-height: 300px;
}
.el-input{
  width: 400px;
}
.search{
  position: absolute;
  margin-top: 235px;
  right:280px;

}
.page{
width:auto;
position: relative;
margin: 0 200px;
}

</style>
