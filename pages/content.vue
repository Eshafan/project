<template>
<div>
  <my-header>
  </my-header>

  <div class="wrapper">
      <div class="title">{{contentData.title}}
      </div>
        <div class="author">发稿时间:{{contentData.addtime}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作者:{{contentData.author}}</div>
        <p></p>
      <p class="article" v-html="contentData.content"></p>
  </div>
  <my-footer></my-footer>
  </div>
</template>
<script>
import myFooter from '../src/components/myFooter'
import MyFooter from '../src/components/myFooter.vue'
import MyHeader from '../src/components/myHeader'
import { get } from '../src/utils/request'

export default {
  components: {
    MyHeader,
    MyFooter
  },
  data () {
    return {
      contentData: {},
      id: ''
    }
  },
  mounted () {
  },
  created () {
    this.getId()
    this.getColunm()
  },
  methods: {
    async getId () {
      let id = this.$route.query.articleid
      await this.getArticleContent(id)
      // return
    },
    async getColunm () {
      let id = this.$route.query.id
      if (id) {
      // this.name=this.$route.query.columnName
        const {data} = await get('http://cc.xiaochengyun.net/api/article/getList', {column_id: id})
        console.log(111111, data)
        this.contentData = data.results
    }else{
        console.log('不是从栏目进来的')
      }

    },
    async getArticleContent(id){
      if(id){
      console.log('-000000',id)
      const {data} = await get('http://cc.xiaochengyun.net//api/article/detail',{id:id})
      this.contentData=data.results
      console.log('this.contentData',this.contentData)
      }
      else{
        // return
        console.log('没有id')
        return
      }

      },
  }
}
</script>
<style scoped>
.wrapper{
  /* position: relative; */
  display: flex;
  flex-direction: column;
  /* height: 1000px; */
  width: 80%;
  margin:auto;
  /* background-color:rebeccapurple; */
}

.title{
  height:100px;
  /* background-color: turquoise; */
  font-size: 60px;
  text-align: center;
  color:#0a42a4;;
}
.author{
  text-align: center;
  font-size: 20px;
}
.article{
  /* height:500px; */
  display:flex;
  flex-direction: column;
  margin:30px;
}
</style>
