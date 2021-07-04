<template>
<!-- 首页的内容展示页面：左轮播图，右折叠框 -->
  <div>
  <div class="introduction_title">{{data.column_name}}</div>

  <el-row class="grid-content bg-purple-dark" >
  <!-- <div class="introduction_title">data.name</div> -->
  <el-col :span="12" class="introduction_img" >
    <el-carousel indicator-position="outside" height="365px" @change="bind">
    <el-carousel-item v-for="item in data.article_list" :key="item.id">
        <el-image :src="item.cover_img_url"  @click="articleDetail(item.id)"></el-image>
    </el-carousel-item>
    </el-carousel>
  </el-col>
  <el-col :span="12"  class="introduction_text">
  <el-collapse v-for="(item,index) in data.article_list" :key="item.id" v-model="activeName" accordion class="introduction_collapse">
    <el-collapse-item :title="item.title" :name="index.toString()">
      <div @click="articleDetail(item.id)" class="summary">{{item.summary}}</div>
    </el-collapse-item>
  </el-collapse>
    </el-col>
    <div class="more" @click="more(data.column_id,data.column_name)">查看更多>>></div>
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
    more (id, columnName) {
      this.$router.push({
        path: `/detail?id=${id}&columnName=${columnName}`
      })
    },
    articleDetail (id) {
      this.$router.push(`/content?articleid=${id}`)
    }
  }
}
</script>

<style scoped>
.grid-content {
    border-radius: 20px;
    min-height: 500px;
    margin:0 80px 80px 80px;
  }
.bg-purple-dark {
    background: url('../assets/images/background.png')
  }
.introduction_title{
  margin-top: 80px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: white;
  padding:10px;
  background: rgba(16, 52, 128, 0.9);

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
