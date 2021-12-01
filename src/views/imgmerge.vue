<template>
  <div>
    <img id="img1" :src="bgPic" alt srcset />
    <img id="img2" :src="materialUrl" alt srcset />
    <div>
      <img :src="makePic" alt srcset />
    </div>
    <div>
      <el-button @click="drawProdPicture" type="primary">保存</el-button>
    </div>
  </div>
</template>
<script>
import matePic from '../assets/logo.png'
import bgPic from '../assets/hongbao.png'
import html2canvas from 'html2canvas'

export default {
  name: 'AddActivity',
  components: {
  },
  data () {
    return {
      bgPic: bgPic,
      materialUrl: matePic,
      makePic: ''
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    drawProdPicture () {
      let img1 = new Image()
      img1.src = this.bgPic
      img1.width = 350
      img1.height = 350
      img1.setAttribute('crossOrigin', 'anonymous')
      let canvas = document.createElement("canvas")
      let context = canvas.getContext("2d")
      canvas.width = 350
      canvas.height = 350
      let img2 = new Image()
      let flag = true
      // 将 img1 加入画布
      img1.onload = () => {
        context.drawImage(img1, 0, 0, 350, 350)
        img2.src = this.materialUrl
        img2.setAttribute('crossOrigin', 'anonymous')
        img2.width = 350
        img2.height = 350
        if (flag) {
          flag = false
        } else {
          let src = canvas.toDataURL()
          this.makePic = src
        }
      }
      // 将 img2 加入画布
      img2.onload = () => {
        context.drawImage(img2, 0, 0, 350, 350)
        if (flag) {
          flag = false
        } else {
          let src = canvas.toDataURL('image/png')
          this.makePic = src
        }
      }

    }
  }
}
</script>
<style lang='less' scoped>
</style>
