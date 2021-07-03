<template>
<div>
<div class="wrapper">
  <div class="column_name">{{data.column_name}}</div>
  <div class="grid-content bg-purple listContent " @click="openarticle">
      <div v-for="item in data.article_list" :key="item.id" class="title">
        【{{item.title}}】
        <div class="summary">{{item.summary}}</div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props:{
      data:{
      type:Object,
      default: () => ({
        article_list:{
          addtime:'',
          author:'',
          cover_img_url:'http://chinaminzheng.ccnu.edu.cn/images/20/12/15/2hjy4f0g0e/8.jpg',
          id,
          title:'',
        },
        column_name:'',
      })
      }
  },
  methods:{
    openarticle(){
      this.$router.push('./detail')
    }
  }

}
</script>

<style scoped>
.wrapper{
  align-items: center;
}
.column_name{
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #043285;
  margin:0;
  padding: 0;
}
  .grid-content {
    padding-top:20px;

  }
  .bg-purple {
    border-radius: 30px;
    background: url('../assets/images/background.png')
  }
  .listContent{
    display: flex;
    flex-wrap:wrap;
    margin:20px 105px;
    max-width: 1800px;
    word-wrap:break-word;

  }
  .title{
    padding-top: 20px;
    text-align: center;
    width:280px;
    height:100px;
    border: 1px solid black;
    margin:15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    border-radius: 10px;
    font-weight: bold;
  }
  .summary{
    font-weight: initial;
    white-space: initial;
    margin-top:10px;
    height: 68px;
    overflow: hidden;
    font-size: 16px;
    /* text-overflow: ellipsis; */
    /* display: -webkit-box; */
    /* -webkit-line-clamp: 3; */
    /* -webkit-box-orient: vertical； */
  }
</style>
