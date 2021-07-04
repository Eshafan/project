<template>
    <div class="container" ref="container">
          <div class="move_container" :style="{'width':moveContainerWidth,'margin-left':moveContainerMarginLeft+'px','height':boxWHeight+'px'}" ref="moveContainer" @mouseenter="pause" @mouseleave="restart">
              <div class="box" v-for="item in list" :key="item.id" :style="{'width':boxWidth+'px','height':boxWHeight+'px'}">
                  <el-image class="image_wrapper" :src="item.cover_img_url"></el-image>
                  <div class="title">
                  {{item.title}}
                  </div>
              </div>
          </div>
    </div>
</template>

<script>
export default {
  name: 'conveyorBelt',
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
  data () {
    return {
      list: [], // 使用数据
      oldList: [], // 原始数据
      boxWidth: 200, // 单个div宽度
      boxWHeight: 400, // 单个div高度
      moveContainerWidth: 0, // 移动容器宽度
      moveContainerMarginLeft: 0, // 移动容器宽度margin-left
      timer: null, // 计时器
      step: 5, // 移动步长
      stepTotal: 0, // 步长计数
      interval: 200, // 间隔时间
      fillIndex: 0 // 填充下标
    }
  },

  mounted () {
    this.getData()
  },
  watch: {

  },
  methods: {
    getData () {
      this.oldList = this.data.article_list
      this.handle(this.data.article_list)
    },
    handle (result) {
      // 获取容器宽度
      let containerWidth = this.$refs.container.offsetWidth
      // 获取返回数据总宽度
      let boxTotalWidth = (result.length) * this.boxWidth
      console.log(containerWidth,boxTotalWidth)
      // 判断返回数据是否能够铺蒲整屏
      let fillBoxNum = 0
      if (boxTotalWidth < containerWidth) {
        fillBoxNum = Math.ceil((containerWidth - boxTotalWidth) / boxTotalWidth)
        console.log(11111,fillBoxNum)
        this.moveContainerWidth = (containerWidth + (fillBoxNum * boxTotalWidth)) + 'px'
      } else if (boxTotalWidth == containerWidth) {
        fillBoxNum = 1
        this.moveContainerWidth = (containerWidth + boxTotalWidth) + 'px'
      } else {
        this.moveContainerWidth = boxTotalWidth + 'px'
        console.log(111, this.moveContainerWidth)
      }
      // 填充数据
      let newList = result
      if (fillBoxNum) {
        for (let i = 0; i < fillBoxNum; i++) {
          newList = newList.concat(result)
        }
      }
      console.log(111, newList)
      // 重新赋值
      this.list = newList
      // 启动
      this.start()
      },
      start () {
      this.timer = setInterval(() => {
        if (this.stepTotal >= this.boxWidth) {
          this.stepTotal = 0
          this.moveContainerWidth = (this.$refs.moveContainer.offsetWidth + this.boxWidth) + 'px'
          this.list = this.list.concat(this.oldList[this.fillIndex]);
          console.log(66666, this.list)
          (this.fillIndex == this.oldList.length - 1) ? this.fillIndex = 0 : this.fillIndex++
        } else {
          this.moveContainerMarginLeft -= this.step
          this.stepTotal += this.step
        }
      }, this.interval)
		   },
		   pause () {
			     clearInterval(this.timer)
			     this.timer = null
		   },
		   restart () {
			    //  this.start()
		   }
  }
}
</script>

<style>
.container{
	height:400px;
  /* width:1580px; */
  width: 88%;
  border-radius: 20px;
	margin: 0 6%;
	background:url('../assets/images/background.png');
  overflow: hidden;
}
.image_wrapper{
  width:auto;
  height: 300px;
}
.move_container{
	float: left;
}

.box{
  /* height: 400px; */
	float:left;
	text-align: center;
	line-height:50px;
  margin:40px 30px;
}
.title{
  height: 100px;
}
</style>
