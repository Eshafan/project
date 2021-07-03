<template>
<div>
    <myHeader
  ></myHeader>
<div class="content">
<el-divider></el-divider>
<div class="header">
  <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">{{name}}</a></el-breadcrumb-item>
  </el-breadcrumb>
  <div class="search">
  <el-input v-model="keyWord" placeholder="请输入内容" size="small" style="width:200px" clearable @keyup.enter.native="search"></el-input>
  <el-button type="primary" size="small" icon="el-icon-search"  @click="search" >搜索</el-button>
  </div>
  <div class="title">{{name}}</div>

</div>
<el-container class="container" v-for="item in pageList" :key="item.id" >
  <el-container>
    <el-aside width="300px" >
      <el-scrollbar style="height:100%">
      <el-image :src="item.cover_img_url" class="image"></el-image>
      </el-scrollbar>
      </el-aside>
    <el-container>
      <el-main >
       <div @click="article(item.id)" class="contentTitle">{{item.title}}</div>
       <div class="contentSummary">{{item.summary}}</div>

      </el-main>
    </el-container>
  </el-container>
</el-container>
<el-pagination class="page"
  @current-change="handleCurrentChange"
  @size-change='handleSizeChange'
  :current-page="page_num"
  :page-szie="page_size"
  :page-sizes='[5,10,15,20,50]'
  layout="total,sizes,prev,pager,next,jumper"
  background
  :total="total">
</el-pagination>
</div>
<my-footer class="footer"></my-footer>

</div>
</template>

<script>
import myFooter from '../src/components/myFooter'
import MyHeader from '../src/components/myHeader'
import { get } from '../src/utils/request'
export default {
  components: { myFooter, MyHeader },
  name: 'detail',
  data () {
    return {
      url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2852983301,1964711058&fm=26&gp=0.jpg',
      isCollapse: true,
      name: '',
      pageList: [],
      page_num: 1, // 当前在第几页
      page_size: 4, // 一页显示几条
      total: 10,
      keyWord: ''
      // id,
    }
  },

  created () {
    this.getArticleList()
    // this.handleCurrentChange()
  },
  methods: {
    async getArticleList () {
      let id = this.$route.query.id
      this.name = this.$route.query.columnName
      const {data} = await get('http://cc.xiaochengyun.net/api/article/getList', {
        page_num: this.page_num,
        page_size: this.page_size,
        column_id: id})
      console.log(11111, data)
      // return
      this.pageList = data.results.data
      this.total = data.results.count
    },

    goBack () {
      console.log(1)
    },
    article (id) {
      // this.id=id,
      this.$router.push({
        path: '/content',
        query: {
          articleid: id
        }
      })
      // console.log(1)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSizeChange (val) {
      this.page_size = val
      this.getArticleList()
    },
    handleCurrentChange (val) {
      this.page_num = val
      this.getArticleList()
    },
    async search () {
      let id = this.$route.query.id
      const { data } = await get('http://cc.xiaochengyun.net/api/article/getList', {
        column_id: id,
        keyword: this.keyWord})
      this.pageList = data.results
      this.total = data.results.length
      console.log(data)
    }
  }
}
</script>

<style scoped>
.head_img{
  height: 300px;
  background-color:  #475669;
}
.image{
  margin:10px 0;
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
}

.content{
  margin-left: 15%;
  margin-right: 15%;

}
.header{
  position: relative;
  height: 240px;
  background:url('../src/assets/images/1120.jpeg');
}
.breadcrumb{
  margin-top:20px;
  font-size: 24px;
  display: inline-block;
}
.contentTitle{
  font-size: 30px;
  text-align: center;
}
.contentTitle:hover{
  /* text-decoration: underline; */
  background-color: ghostwhite;
}
.contentSummary{
  height: 60px;
  margin-top: 20px;
  color:gray;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.title{
  position: absolute;
  left:15%;
  font-size: 68px;
  bottom:0;
  color: #043285;
}
.container{
  border-radius: 20px;
  margin:20px 0;
  height: 200px;
  background-color: gainsboro;
  width: auto;
}
.el-aside{
  /* line-height: 200px; */
  align-items: center;
}
.el-input{
  width: 400px;
}
.search{
  margin-bottom:20px;
  width: 300px;
  position: absolute;
  right:0;
  /* top:0; */
  bottom:0;

}
.page{
width:auto;
position: relative;
margin: 0 200px;
}

</style>
