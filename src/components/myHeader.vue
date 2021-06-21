<template>
  <div>
    <div >
     <el-image class="head_img" :src="url" :alt="alt"></el-image>
    </div>
  <el-menu :default-active="activeIndex" class="menu" mode="horizontal">
    <el-menu-item key='0'><router-link :to="{path:'/'}">首页</router-link></el-menu-item>
    <el-menu-item key='000'><router-link :to="{path:'/content'}">内容详情页</router-link></el-menu-item>

    <el-menu-item v-for="(operate,path,index) in navTo.operate" :key="index"><router-link :to="{path:'/detail'}">{{operate.name}}</router-link></el-menu-item>
    <router-view/>
</el-menu>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
      navTo: {
        'operate': [
          {'name': '中心简介', 'id': 1},
          {'name': '中心动态', 'id': 2},
          {'name': '专家团队', 'id': 3},
          {'name': '县域论坛', 'id': 4},
          {'name': '县政改革', 'id': 5},
          {'name': '县域经济', 'id': 6},
          {'name': '特色县市', 'id': 7},
          {'name': '三农问题', 'id': 8},
          {'name': '统计数据', 'id': 9},
          {'name': '政策资讯', 'id': 10},
          {'name': '县域书目', 'id': 11}
        ]
      },
      activeIndex: '4',
      alt: '此处显示logo图',
      url: 'http://chinaminzheng.ccnu.edu.cn/images/20/12/15/2hjy4f0g0e/8.jpg'
    }
  },
  methods: {
    change (index) {
      console.log(this)
      console.log(index)
      this.current = index
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
