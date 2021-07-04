<template>
<div>
<div class="wrapper">
  <div class="column_name">{{data.column_name}}</div>
  <div class="grid-content bg-purple listContent ">
      <div v-for="item in data.article_list" :key="item.id" class="title"  @click="openarticle(item.id)">
        【{{item.title}}】
        <div class="summary">{{item.summary}}</div>
    </div>
  </div>
  </div>
        <div class="more" @click="more(data.column_id,data.column_name)">查看更多</div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    data: {
      type: Object,
      default: () => ({
        article_list: {
          addtime: '',
          author: '',
          cover_img_url: 'http://chinaminzheng.ccnu.edu.cn/images/20/12/15/2hjy4f0g0e/8.jpg',
          // eslint-disable-next-line no-undef
          id,
          title: ''
        },
        column_name: ''
      })
    }
  },
  methods: {
    openarticle (id) {
      // this.$router.push('./detail')
      this.$router.push(`/content?articleid=${id}`)
    },
    more (id, columnName) {
      // this.$router.push('./detail')
      this.$router.push({
        path: `/detail?id=${id}&columnName=${columnName}`
      })
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
  color: white;
  /* width: 400px; */
  background: rgba(16, 52, 128, 0.9);
  margin:0;
  padding: 10px;
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
    justify-content: center;

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
  .more{
    text-align: center;
    font-size: 24px;
    border: 1px solid white;
    border-radius: 6px;
    color: white;
    font-weight: 400;
    background-color:rgba(16, 52, 128, 0.9) ;
    padding: 10px;
    width: 200px;
    position: relative;
    left: 80%;
  }
</style>
