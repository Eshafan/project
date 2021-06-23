<template>
    <div class="container" ref="container">
          <div class="move_container" :style="{'width':moveContainerWidth,'margin-left':moveContainerMarginLeft+'px','height':boxWHeight+'px'}" ref="moveContainer" @mouseenter="pause" @mouseleave="restart">
              <div class="box" v-for="item in list" :style="{'width':boxWidth+'px','height':boxWHeight+'px'}">
                  <p>图片</p>
                  <p>{{item.title}}</p>
              </div>
          </div>
    </div>
</template>

<script>
export default {
  data () {
     return {
			   list: [], // 使用数据
			   oldList: [], // 原始数据
			   boxWidth: 200, // 单个div宽度
         boxWHeight: 150, // 单个div高度
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
          // 获取数据
          let result = [
             {'img': '', 'title': '1号'},
             {'img': '', 'title': '2号'},
             {'img': '', 'title': '3号'},
             {'img': '', 'title': '4号'},
             {'img': '', 'title': '5号'},
             {'img': '', 'title': '6号'},
             {'img': '', 'title': '7号'},
             {'img': '', 'title': '8号'},
             {'img': '', 'title': '9号'},
             {'img': '', 'title': '10号'}
           ]
           this.oldList = result
           this.handle(result)
		   },
		   handle (result) {
           // 获取容器宽度
           let containerWidth = this.$refs.container.offsetWidth
           // 获取返回数据总宽度
           let boxTotalWidth = (result.length) * this.boxWidth
           // 判断返回数据是否能够铺蒲整屏
           let fillBoxNum = 0
           if (boxTotalWidth < containerWidth) {
               fillBoxNum = Math.ceil((containerWidth - boxTotalWidth) / boxTotalWidth)
               this.moveContainerWidth = (containerWidth + (fillBoxNum * boxTotalWidth)) + 'px'
           } else if (boxTotalWidth == containerWidth) {
               fillBoxNum = 1
               this.moveContainerWidth = (containerWidth + boxTotalWidth) + 'px'
           } else {
               this.moveContainerWidth = boxTotalWidth + 'px'
           }
           // 填充数据
           let new_list = result
           if (fillBoxNum) {
              for (let i = 0; i < fillBoxNum; i++) {
                 new_list = new_list.concat(result)
              }
           }
           // 重新赋值
           this.list = new_list
           // 启动
           this.start()
		   },
		   start () {
           this.timer = setInterval(() => {
               if (this.stepTotal >= this.boxWidth) {
                  this.stepTotal = 0
                  this.moveContainerWidth = (this.$refs.moveContainer.offsetWidth + this.boxWidth) + 'px'
                  this.list = this.list.concat(this.oldList[this.fillIndex]);
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
			     this.start()
		   }
    }
}
</script>

<style>
.container{
	height:150px;
	margin:auto;
	background:red;
  overflow: hidden;
}

.move_container{
	float: left;
}

.box{
	float:left;
	text-align: center;
	line-height:50px;
}
</style>
