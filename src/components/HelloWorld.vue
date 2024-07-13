<template lang="pug">
div.hello
  .ui.segment.container
    h1.ui.header 自學生
    section
      h2.ui.header 1. 一些關於自學生的刻板印象
      .ui.list
        .item 1.1 都是天才??  ➡️ 不一定!
        .item 1.2 家裡很有錢??  ➡️ 不一定!
        .item 1.3 沒有朋友??    ➡️ 完全不是!
        .item 1.4 社交能力差??    ➡️ 因人而異!
        .item 1.5 自制力很強??   ➡️ 因人而異!
    section
      h2.ui.header 2. 自學申請流程
      .ui.list
        .item
          .header 2.1 申請時間
          .list
            .item 2.1.1 每年四月和十月
              .description 
                a(href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070059") 	高級中等以下教育階段非學校型態實驗教育實施條例
                | 第六條：前條申請人應填具申請書，並檢附實驗教育計畫，至遲於每年四月三十日或十月三十一日前提出申請。
        .item
          .header 2.2 申請材料
          .list
            .item 2.2.1 申請書
            // .item 2.2.2 成績報告
            // .item 2.2.3 課程計劃
        .item
          .header 2.3 面試
          .list
            .item 2.3.1 帶家長面試
            .item 2.3.2 面試問題
        .item
          .header 2.4 審核與補件
          .list
            .item 2.4.1 補件流程
            .item 2.4.2 申請成功通知
    section
      h2.ui.header 3. 自學的種類
      .ui.list
        .item
          .header 3.1 個人自學
          .list
            .item 3.1.1 教育部掛籍
            .item 3.1.2 與學校合作
        .item
          .header 3.2 團體自學
          .list
            .item 3.2.1 自學生團體
            .item 3.2.2 分攤學費
        .item
          .header 3.3 機構自學
    section
      h2.ui.header 4. 自學生活
      .ui.list
        .item
          .header 4.1 成績評定
          .list
            .item 4.1.1 成果報告
            .item 4.1.2 評分標準
        .item
          .header 4.2 自學課程
          .list
            .item 4.2.1 線上課程
            .item 4.2.2 實體課程
        .item
          .header 4.3 自學資源
          .list
            .item 4.3.1 政府補助
              .description 目前台灣高中職階段有政府補助
            .item 4.3.2 線上資源
        .item
          .header 4.4 社交活動
          .list
            .item 4.4.1 自學生活動
            .item 4.4.2 外部講座與活動
    section
      h2.ui.header 5. 自學後的發展
      .ui.list
        .item
          .header 5.1 畢業後的選擇
          .list
            .item 5.1.1 考大學
            .item 5.1.2 工作或實習
        .item
          .header 5.2 自學經驗的影響
          .list
            .item 5.2.1 成熟度
            .item 5.2.2 自我管理能力
    section
      h2.ui.header 6. 自學的挑戰
      .ui.list
        .item
          .header 6.1 撞牆期
          .list
            .item 6.1.1 找不到目標
            .item 6.1.2 自我懷疑
        .item
          .header 6.2 家長的擔憂
          .list
            .item 6.2.1 不了解自學
            .item 6.2.2 擔心社交問題
    section
      h2.ui.header 7. 自學的溝通
      .ui.list
        .item
          .header 7.1 與家長溝通
          .list
            .item 7.1.1 共同了解自學
            .item 7.1.2 計劃與目標
        .item
          .header 7.2 與學校溝通
          .list
            .item 7.2.1 申請流程
            .item 7.2.2 合作方式

      .ui.divider 

      h3 相關連結
      .ui.vertical.large.buttons
        a.ui.teal.button(href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070059") 	高級中等以下教育階段非學校型態實驗教育實施條例
        a.ui.green.button(href="https://we.alearn.org.tw") 自學2.0
        a.ui.blue.button(href="https://galacticproject.notion.site/d7477db76ecd4ff3b453a39ba21d97ef") 自學生經驗匯流
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HelloWorld',
  });
  </script>
  
  <style scoped>
  .ui.container {
    margin-top: 20px;
    max-width: 480px !important;
  }
  .ui.header {
    margin-top: 1em !important;
  }
  .ui.list .header {
    margin-top: 10px;
  }

  .ui.list .item, .header {
    text-align: left;
    font-size: 16px;
  }

  .description {
    margin-top: .6em;
    font-style: italic;
  }
  </style>
  