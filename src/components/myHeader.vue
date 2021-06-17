<template>
  <div>
    <div >
     <el-image class="head_img" :src="url" :alt="alt"></el-image>
    </div>
  <el-menu :default-active="activeIndex" class="menu" mode="horizontal">
    <el-menu-item index='1'><router-link :to='index/information'>首页</router-link></el-menu-item>
    <router-view></router-view>
    <el-menu-item index='2'><router-link :to="index/introduction">中心简介</router-link></el-menu-item>
    <el-menu-item index='3'><router-link :to="index/dynamic">中心动态</router-link></el-menu-item>
    <el-menu-item index='4'><router-link :to="index/team">专家团队</router-link></el-menu-item>
    <el-menu-item index='5'><router-link :to="index/forum">县域论坛</router-link></el-menu-item>
    <el-menu-item index='6'><router-link :to="index/reform">县政改革</router-link></el-menu-item>
    <el-menu-item index='7'><router-link :to="index/economy">县域经济</router-link></el-menu-item>
    <el-menu-item index='8'><router-link :to="index/special">特色县市</router-link></el-menu-item>
    <el-menu-item index='9'><router-link :to="index/agriculture">三农问题</router-link></el-menu-item>
    <el-menu-item index='10'><router-link :to="index/data">统计数据</router-link></el-menu-item>
    <el-menu-item index='11'><router-link :to="index/information">政策资讯</router-link></el-menu-item>
    <el-menu-item index='12'><router-link :to="index/book">县域书目</router-link></el-menu-item>
    <router-view/>
</el-menu>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
      activeIndex: '4',
      alt: '此处显示logo图',
      url: 'http://chinaminzheng.ccnu.edu.cn/images/20/12/15/2hjy4f0g0e/8.jpg'
    }
  }
}
</script>
<style  scoped>
.head_img{
  height: 150px;
  background-color:  #475669;
}
.menu{
  display: flex;
}
.el-menu-item{
  font-size: 23px;
  margin: 0 8px;
}
</style>
