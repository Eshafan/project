<template>
<div >
  <!-- 1、头部区域 带导航的 -->
  <myHeader
  ></myHeader>
  <!-- 2、首页轮播图 -->
  <el-carousel :interval="3000" type="card" height="500px">
    <el-carousel-item v-for="item in bannerPicture" :key="item.id">
      <el-image :src="item.img_url" @click="skip(item.skip_url)"></el-image>
    </el-carousel-item>
  </el-carousel>
  <!-- 3、文章展示方式：联动 -->
  <dynamic
  v-for="item in picture" :data="item" :key="item.id"
  ></dynamic>
  <!-- 4、文章展示方式：列表 -->
  <list
  v-for="item in list" :data="item" :key="item.id"
  ></list>

  <!-- 4、作者展示方式：传送带 -->
  <conveyor-belt
  v-for="item in belt" :data="item" :key="item.id"
  ></conveyor-belt>
  <myFooter></myFooter>
</div>
</template>

<script>
import dynamic from '@/components/dynamic.vue'
import myHeader from '@/components/myHeader.vue'
import myFooter from '@/components/myFooter.vue'
import list from '@/components/list.vue'
import conveyorBelt from '@/components/conveyorBelt.vue'
import { get } from '../src/utils/request'
export default {
  name: 'home',
  components: {
    myHeader,
    dynamic,
    myFooter,
    list,
    conveyorBelt
  },
  data () {
    return {
      activeIndex: '1',
      input: '',
      activeName1: '1',
      activeName2: '2',
      bannerPicture: [],
      list: [],
      picture: [],
      belt: []
    }
  },
  created () {
    this.getbanner()
    // this.getNav()
    this.getModule()
  },
  methods: {
    async getbanner () {
      const {data} = await get('http://cc.xiaochengyun.net/api/banner/getList')
      if (data) {
        this.bannerPicture = data.results
      }
    },
    skip (url) {
      if (url) {
        window.location.href = url
      }
    },
    async getModule () {
      const { data } = await get('http://cc.xiaochengyun.net/api/module/getList',{page:'index'})
      const result = data.results
      for (let i = 0; i < result.length ;i++) {
           if (result[i].style_id ===1) {
            this.list.push(result[i])
          }else if (result[i].style_id===2){
            this.picture.push(result[i])
          }else if (result[i].style_id===3){
            this.belt.push(result[i])
          }
      }
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
