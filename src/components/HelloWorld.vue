<template lang="pug">
div.hello
  .ui.segment.container
    h1.ui.header 自學
      sub.header 正式名稱為「非學校型態實驗教育」
    section
      h2.ui.header 1. 一些關於自學生的刻板印象🥸
      .ui.list
        .item 1.1 都是天才??  ➡️ 不一定!
        .item 1.2 家裡很有錢??  ➡️ 不一定!
        .item 1.3 沒有朋友??    ➡️ 完全不是!
        .item 1.4 社交能力差??    ➡️ 因人而異!
        .item 1.5 自制力很強??   ➡️ 因人而異!
    section
      h2.ui.header 2. 自學申請流程🛝
      .ui.list
        .item
          .header 2.1 申請時間
          .list
            .item 2.1.1 每年四月和十月
              .description 
                a(href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070059") 	高級中等以下教育階段非學校型態實驗教育實施條例
                | 第六條：前條申請人應填具申請書，並檢附實驗教育計畫，至遲於每年
                span.bold.text-underline 四月三十日
                | 或
                span.bold.text-underline 十月三十一日
                | 前提出申請。
        .item
          .header 2.2 申請材料
          .list
            .item 2.2.1 申請書 ➡️ 參考
              a(href="https://www.homeschool.tw/p/blog-page.html") 一週完成自學申請書
            .item 2.2.2 實驗教育計畫書 ➡️ 參考
              a(href="https://youtu.be/SUoT5P8_UOI?si=zdHxoRdRoCadmYMc") 談學習計畫-朱佳仁主講
            // .item 2.2.2 成績報告
            // .item 2.2.3 課程計劃
        // .item
          .header 2.3 面試
          .list
            .item 2.3.1 帶家長面試
            .item 2.3.2 面試問題
        .item
          .header 2.3 申請人
          .list
            .item 2.3.1 國小、國中、高中職，由法定代理人提出申請。因此，家長是申請人。想要申請自學的話，需要先和家長達成共識。
        .item
          .header 2.4 審核與補件
          .list
            .item 2.4.1 各縣市教育局審核
            .item 2.4.2 初審不通過 ➡️ 可申請補件
            .item 2.4.3 初審通過 ➡️ 受到申請成功通知
    section
      h2.ui.header 3. 自學的種類👨‍👩‍👧‍👦
      .ui.list
        .item
          .header 3.1 個人自學
          .list
            .item 3.1.1 與學校合作：掛籍在學校，可完全在家自學，也可部分時間在學校上課，部分時間自學
            .item 3.1.2 教育部掛籍：在教育部註冊，完全在家自學
        .item
          .header 3.2 團體自學
          .list
            .item 3.2.1 自學生團體：多個家庭或學生組成學習小組
            .item 3.2.2 分攤學費：共同聘請老師或分享資源，降低成本
        .item
          .header 3.3 機構自學
          .list
            .item 由專業教育機構提供課程和資源，計畫書需經過審核
    section
      h2.ui.header 4. 自學生活🧞‍♂️
      .ui.list
        .item
          .header 4.1 成績評定
          .list
            .item 4.1.1 成果報告 ➡️ 每學年結束後兩個月內(即每年九月底前)
            .item 4.1.2 評分標準 ➡️ 依自學計畫
        .item
          .header 4.2 自學課程🐙
          .list
            .item 4.2.1 線上課程：如MOOCs、Khan Academy等平台
            .item 4.2.2 實體課程：參加工作坊、講座或社區大學課程、到大學旁聽課程，也可自行設計課程
        .item
          .header 4.3 自學資源🌵
          .list
            .item 4.3.1 政府補助
              .description 目前台灣高中職階段有政府補助
            .item 4.3.2 
              router-link(to="/outer") 線上資源：包括免費教材、教學影片和學習社群
        .item
          .header 4.4 社交活動🤽‍♀️
          .list
            .item 4.4.1 自學生活動：聚會、讀書會或主題討論
            .item 4.4.2 外部講座與活動：參與各種公開活動，拓展視野
            .item 4.4.3 競賽：參加各種競賽，如科學展覽、數學競賽等
    section
      h2.ui.header 5. 自學的挑戰🧨
      .ui.list
        .item
          .header 5.1 撞牆期
          .list
            .item 5.1.1 不知道如何規畫：如果不知道自學的目標，可以參考
              a(href="https://www.youtube.com/watch?v=SUoT5P8_UOI&list=PLebzuoh5ZI3JKOarYED1ASt2kG9g5sKFj", target="_blank", rel="noopener noreferrer") 談學習計畫-朱佳仁主講
            .item 5.1.2 不知道未來：如果不知道自學的未來，可以參考
              a(href="https://www.youtube.com/watch?v=ZPzqw3x05-g&list=PLebzuoh5ZI3JKOarYED1ASt2kG9g5sKFj&index=6", target="_blank", rel="noopener noreferrer") 如何成為未來職場需要的自由人才-唐鳳主講
        .item
          .header 5.2 家長的擔憂👀
          .list
            .item 5.2.1 不了解自學：可請家長參考
              .description 
                a(href="https://www.alearn.org.tw/") 自主學習促進會
            .item 5.2.2 擔心社交問題：可請家長參考
              .description 
                a(href="https://we.alearn.org.tw") 自學2.0
    section
      h2.ui.header 6. 自學的溝通🗣️
      .ui.list
        .item
          .header 6.1 與家長溝通
          .list
            .item 計劃與目標：計劃書的撰寫、家長的期望和孩子的興趣
        .item
          .header 6.2 與學校溝通
          .list
            .item 合作方式：掛籍在學校，可完全在家自學，也可部分時間在學校上課，部分時間自學
    section
      h2.ui.header 7. 自學後的發展🎯
      .ui.list
        .item
          .header 7.1 畢業後的選擇
          .list
            .item 7.1.1 考大學
            .item 7.1.2 工作或實習
        .item
          .header 7.2 自學經驗的影響
          .list
            .item 7.2.1 成熟度 ➡️ 
              router-link(to="four") 學習自律四階段🐫
            .item 7.2.2 自我管理能力
    section
      h2.ui.header 8. 問答集❤️‍🩹

      p 請參考 ➡️ 
        router-link(to="faq") 自學問答集
      
      .ui.divider 
      
      h3 找夥伴👫
      
      p 請參考 ➡️ 
        a(href="https://we.alearn.org.tw") 自學2.0

      .ui.divider 
      
      h3 真人諮詢👩‍🏫

      p 請用「您居住的縣市」 + 「非學校」當關鍵字，即可查詢到教育局的相關業務單位，通常都會有聯絡電話。
      
      
      .ui.divider 
      

      h3 相關連結🪱
      .ui.vertical.large.buttons
        a.ui.teal.button(href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070059") 	高級中等以下教育階段非學校型態實驗教育實施條例
        // a.ui.green.button(href="https://we.alearn.org.tw") 自學2.0
        a.ui.green.button(href="https://www.alearn.org.tw") 自主學習促進會
        a.ui.blue.button(href="https://galacticproject.notion.site/d7477db76ecd4ff3b453a39ba21d97ef") 星河計畫：自學生經驗匯流
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

  .ui.list .item, .header, p {
    text-align: left;
  }

  .ui.list .item, p {
    font-size: 16px;
    line-height: 1.4;
  }

  .description {
    margin-top: .6em;
    font-style: italic;
  }
  </style>