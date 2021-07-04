<template>
  <div>
    <div class="footer">
      <div class="link">
        <em>友情链接:</em>
        <p class="others">
        <a href="#">友情链接1</a>
        <a href="#">友情链接2</a>
        <a href="#">友情链接3</a>
        <a href="#">友情链接4</a>
        <a href="#">友情链接5</a>
        <a href="#">友情链接6</a>
        </p>
      </div>
      <el-image :src="require('../assets/images/WechatIMG40.jpeg')" class="qrCode"></el-image>
    </div>
    <div class="copyright">
      <i>@copyright</i>
      <i>地址：四川省成都市成都市一环路南一段24号</i>
      <i>邮编610065</i>
      <i>荐稿邮箱：xyyjccnu@163.com</i>
    </div>

  </div>
</template>
<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
.footer {
  position: relative;
    height: 260px;
    width: 100%;
    margin-top:30px;
    background-color:  rgba(16, 52, 128, 0.9);
  }
  .link{
    position: absolute;
    top:30%;
    left:10%;
    font-size: 20px;
    color: white;
  }
  .qrCode{
    position: absolute;
    height: 200px;
    width: 200px;
    background-repeat: no-repeat;
    top:50%;
    right: 10%;
    transform: translate(0%,-50%);
  }
  a{
    margin-left: 100px;
    text-decoration: none;
    color: white;
  }
  a:hover{
    text-decoration: underline;
  }
  .copyright{
    text-align: center;
    background-color: white;
    height: 28px;
  }
  .email{
    margin-left: 100px;
  }
</style>
