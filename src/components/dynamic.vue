<template>
<!-- 首页的内容展示页面：左轮播图，右折叠框 -->
  <div>
  <el-row class="grid-content bg-purple-dark" >
  <div class="introduction_title">{{data.column_name}}</div>
  <!-- <div class="introduction_title">data.name</div> -->
  <el-col :span="12" class="introduction_img" >
    <el-carousel indicator-position="outside" height="365px" @change="bind">
    <el-carousel-item v-for="item in data.article_list" :key="item.id" @click="articleDetail()">
        <el-image :src="item.cover_img_url"></el-image>
    </el-carousel-item>
    </el-carousel>
  </el-col>
  <el-col :span="12"  class="introduction_text">
  <el-collapse v-for="(item,index) in data.article_list" :key="item.id" v-model="activeName" accordion class="introduction_collapse">
    <el-collapse-item :title="item.title" :name="index.toString()">
      <div @click="articleDetail()" class="summary">{{item.summary}}</div>
    </el-collapse-item>
  </el-collapse>
    </el-col>
    <div class="more" @click="more(data.article_list.id)">查看更多>>></div>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'dynamic',
  data () {
    return {
      activeName: ''
    }
  },
  props: {

    data: {
      type: Object,
      default: () => ({
        article_list: {
          addtime: '',
          author: '',
          cover_img_url: 'http://chinaminzheng.ccnu.edu.cn/images/20/12/15/2hjy4f0g0e/8.jpg',
          id: 0,
          title: ''
        },
        column_name: ''
      })
    }
  },
  methods: {
    bind (val) {
      this.activeName = val.toString()
    },
    more (id) {
      this.$router.push({
        path: 'detail',
        query: {
          id: id
        }})
    },
    articleDetail () {
      this.$router.push('/detail')
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
    background: url('../assets/images/background.png')
  }
.introduction_title{
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #043285;

}
.introduction_img{
  padding-right: 40px;
  margin-top: 50px;
}
.introduction_text{
  margin-top: 50px;
  border-radius: 20px;
}
.introduction_collapse{
  opacity: 0.6;
  /* background:transparent; */
}
.more{
  position:absolute;
  bottom: 20px;
  right: 20px;
}
</style>
