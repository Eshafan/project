<template>
  <div>
    <!-- 1、面包屑标题部分 -->

  <el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name: 'list'

}
</script>

<style scoped>
  .grid-content {
    border-radius: 4px;
    min-height: 300px;
  }
  .bg-purple {
    background: #d3dce6;
  }
</style>
