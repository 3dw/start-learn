<template lang="pug">
  .outer
    vue-headful(title="線上資源推薦", description="推薦三個非營利且免費使用的教育資源網站。")
    .ui.segment.container
      h1 線上資源推薦🌐
  
      p 這裡推薦三個優質的非營利教育網站，這些網站提供免費的學習資源，適合自學者、學生和教育工作者使用。
  
      h2 維基百科🌍
  
      img(src="../assets/wikipedia.png", alt="Wikipedia")
      p 維基百科是世界上最大的免費百科全書，由志願者共同編輯維護，涵蓋了各種領域的知識，是一個極佳的學術資源。
      a(href="https://zh.wikipedia.org/zh-tw/Wikipedia:%E9%A6%96%E9%A1%B5" target="_blank") 前往 ➡️ 維基百科
  
      h2 Khan Academy📘
  
      img(src="../assets/khanacademy.png", alt="Khan Academy")
      p Khan Academy 是一個非營利組織，提供從數學到科學等多種課程，完全免費使用。學生可以依照自己的進度學習，擁有豐富的教學影片和練習資源。
      a(href="https://zh.khanacademy.org/" target="_blank") 前往 ➡️  Khan Academy
  
      h2 自由數學📐
  
      img(src="../assets/freemath.png", alt="自由數學")
      p 自由數學是非營利組織「自主學習促進會」提供的開源數學學習平台，致力於推動自主學習與教學創新，資源完全免費。
      a(href="https://math.alearn.org.tw" target="_blank") 前往 ➡️ 自由數學
  
      .ui.divider

      p 這些網站的資源完全免費，無論你是想自我提升還是協助學生，這些都是很好的選擇。
  </template>
  
  <script lang="typescript">
  
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ResourceRecommendation',
    data () {
      return {
      }
    }
  })
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  img {
    max-height: 33vh;
  }
  
  h2, h3 {
    text-align: left;
  }
  
  p {
    text-align: left;
    font-size: 16px;
  }
  
  .ui.container {
    margin-top: 20px;
    max-width: 480px !important;
  }
  
  img {
    width: 33vmax;
    max-width: 180px !important;
    height: auto;
    border-radius: 15px;
    margin: .6em;
  }
  
  a {
    color: #4183c4;
    text-decoration: underline;
  }
  
  </style>
  