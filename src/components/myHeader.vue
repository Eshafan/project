<template>
  <div>
    <div >
     <el-image class="head_img" :src="url" :alt="alt"></el-image>
    </div>
  <el-menu :default-active="activeIndex" class="menu" mode="horizontal">
    <el-menu-item key='0'><router-link :to="{path:'/'}">首页</router-link></el-menu-item>
    <el-menu-item v-for="(operate) in operate" :key="operate.id" @click="routerpath(operate.style_id,operate.id,operate.name)">{{operate.name}}</el-menu-item>

</el-menu>
<router-view :key="channelCode"></router-view>
  </div>
</template>

<script>
import { get } from '../utils/request'

export default {
  name: 'myHeader',
  data () {
    return {
      navTo: {},
      activeIndex: '4',
      alt: '此处显示logo图',
      url: 'http://chinaminzheng.ccnu.edu.cn/images/20/12/15/2hjy4f0g0e/8.jpg',
      operate: [],
      channelCode: ''
    }
  },
  created () {
    this.getNav()
  },
  watch: {
    '$route':
    function (to, from) {
      if (to.query.id !== from.query.id) {
        window.location.reload()
      }
    },
    deep: true
  },
  methods: {
    async getNav () {
      const {data} = await get('http://cc.xiaochengyun.net/api/column/getList')
      this.operate = data.results
    },
    change (index) {
      console.log(this)
      console.log(index)
      this.current = index
    },
    routerpath (style, columnId, columnName) {
      if (style === 1) {
        this.$router.push({
          path: '/content',
          query: {
            id: `${columnId}`
          }
        })
      } else {
        this.$router.push({
          path: '/detail',
          query: {
            id: `${columnId}`,
            columnName: `${columnName}`

          }
        })
      }
      // this.$emit('backcontent',columnId)
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
  width:100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content:space-around;
}
.el-menu-item{
  font-size: 24px;
  text-decoration: none!important;

}
</style>
