<template>
  <div class="newcard hot">
    <div class="hot-top"></div>
    <div class="left" @click="clickLeft">
      <i class="el-icon=arrow-left"></i>
    </div>
    <div class="carouse1">
      <div class="box" ref="box">
        <div class="imgbox" ref="imgbox" v-for="(item2,index2)in newestDatas" :key="index2">
          <img :src="item2.picUrl" class="image">
          <p class="name">{{item2.artist.name}}</p>
        </div>
      </div>
    </div>
    <div class="right">
      <i class="el-icon-arrow-right" @click="clickRight"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:'scroll',
  data(){
    return {
      newestDatas=[],//图片数组
    }
  },
  methods:{
    clickLeft(){
      let direction='left'
      this.scrollImg(direction)
    },
    clickRight(){
      let direction = 'right'
      this.scrollImg(direction)
    },
    scrollImg(direction){
      if(direction==='left'){
        let first = this.newestDatas.shift()
        this.newestDatas.push(first)
      }else{
        let last = this.newestDatas.pop()
        this.newestDatas.unshift(last)
      }
    }
  }
}
</script>
