<template lang="pug">
div.hello
  //- AI對話區域 - 保持不變
  .modern-hero
    img.clickable(v-if="!showLineQRCode" id="logo" alt="Logo" src="../assets/logo.png", @click="showLineQRCode = true")
    img.clickable(v-else id="logo" alt="Logo" src="../assets/autobot.png", @click="showLineQRCode = false")
    
    h2.modern-heading-2 🤖 自學AI
    p 以自學問答集為基礎，提供更即時的回答
    p
      a(href="https://lin.ee/CashU46", target="_blank", rel="noopener noreferrer", style="color: white; text-decoration: underline;") 將自學AI加入LINE好友

    .ai-chat-container
      .ai-input-group
        input.ai-input(
          autofocus 
          type="text" 
          placeholder="問AI關於自學的任何問題..." 
          v-model="message"
          @keyup.enter="sendMessage"
        )
        button.modern-btn.modern-btn-secondary(@click="sendMessage") 送出
      .ai-result(v-if="result !== '' || (message !== '' && isLoading)")
        p(v-if="result === '' && message !== '' && isLoading") 
          span.modern-loading
          |  載入中，請稍候...
        div(v-else-if="result !== ''")
          div(v-html="parseResult(result)")
          .mt-6
            p 您覺得這個回答怎麼樣呢？
            .flex.items-center.justify-center.gap-md.mt-4
              button.modern-btn.modern-btn-secondary(@click="sendFeedback('good')")
                | 👍 很棒
              button.modern-btn.modern-btn-outline(@click="sendFeedback('bad')", style="border-color: rgba(255,255,255,0.5); color: white;")
                | 👎 不佳

  //- 主要內容區域 - 參考 atproto.com 設計
  .atproto-container
    //- 標題區域
    .atproto-hero-section
      h1.atproto-title 自學是什麼？
      p.atproto-subtitle 正式名稱為「非學校型態實驗教育」
      p.atproto-description 探索自主學習的世界，了解如何開始你的自學之旅

    //- 快速導覽卡片
    .atproto-quick-nav
      .atproto-card.atproto-card-primary(@click="scrollToSection('stereotypes')")
        h3.atproto-card-title 刻板印象
        p.atproto-card-desc 打破對自學生的常見誤解
        span.atproto-card-link 了解更多
      
      .atproto-card.atproto-card-primary(@click="scrollToSection('application')")
        h3.atproto-card-title 申請流程
        p.atproto-card-desc 完整的自學申請指南
        span.atproto-card-link 開始申請
      
      .atproto-card.atproto-card-primary(@click="scrollToSection('types')")
        h3.atproto-card-title 自學種類
        p.atproto-card-desc 個人、團體、機構自學
        span.atproto-card-link 探索選項

    //- 詳細內容區域
    .atproto-content-section
      //- 刻板印象部分
      section.atproto-section#stereotypes
        h2.atproto-section-title 1. 一些關於自學生的刻板印象
        .atproto-grid
          .atproto-feature-card
            h4.atproto-feature-title 都是天才？？
            p.atproto-feature-desc 不一定！自學生也有各種不同的學習能力和背景
          .atproto-feature-card
            h4.atproto-feature-title 家裡很有錢？？
            p.atproto-feature-desc 不一定！自學可以很經濟實惠，也有很多免費資源
          .atproto-feature-card
            h4.atproto-feature-title 沒有朋友？？
            p.atproto-feature-desc 完全不是！自學生有豐富的社交活動和社群
          .atproto-feature-card
            h4.atproto-feature-title 社交能力差？？
            p.atproto-feature-desc 因人而異！自學環境反而培養出更強的溝通能力
          .atproto-feature-card
            h4.atproto-feature-title 自制力很強？？
            p.atproto-feature-desc 因人而異！自學過程會逐步培養自我管理能力

      //- 申請流程部分
      section.atproto-section#application
        h2.atproto-section-title 2. 自學申請流程
        .atproto-process
          .atproto-process-step
            .atproto-step-number 1
            h4.atproto-step-title 申請時間
            p.atproto-step-desc 每年四月和十月
            .atproto-step-detail
              a(href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070059") 高級中等以下教育階段非學校型態實驗教育實施條例
              | 第六條：前條申請人應填具申請書，並檢附實驗教育計畫，至遲於每年
              span.atproto-highlight 四月三十日
              | 或
              span.atproto-highlight 十月三十一日
              | 前提出申請。
          
          .atproto-process-step
            .atproto-step-number 2
            h4.atproto-step-title 申請材料
            p.atproto-step-desc 準備必要的文件和計畫
            .atproto-step-detail
              p
                a(href="https://www.homeschool.tw/p/blog-page.html") 申請書 ➡️ 參考一週完成自學申請書
              p
                a(href="https://youtu.be/SUoT5P8_UOI?si=zdHxoRdRoCadmYMc") 實驗教育計畫書 ➡️ 參考談學習計畫-朱佳仁主講
          
          .atproto-process-step
            .atproto-step-number 3
            h4.atproto-step-title 申請人
            p.atproto-step-desc 法定代理人提出申請
            .atproto-step-detail
              p 國小、國中、高中職，由法定代理人提出申請。因此，家長是申請人。想要申請自學的話，需要先和家長達成共識。
          
          .atproto-process-step
            .atproto-step-number 4
            h4.atproto-step-title 審核與補件
            p.atproto-step-desc 教育局審核流程
            .atproto-step-detail
              p • 各縣市教育局審核
              p • 初審不通過 ➡️ 可申請補件
              p • 初審通過 ➡️ 受到申請成功通知
          
          .atproto-process-step
            .atproto-step-number 5
            h4.atproto-step-title 閱讀資源
            p.atproto-step-desc 更多申請相關資源
            .atproto-step-detail
              router-link(to="/senior") 「第一次申請高中自學就上手」工作坊記錄
          
          .atproto-process-step
            .atproto-step-number 6
            h4.atproto-step-title 影音資源
            p.atproto-step-desc 完整流程與常見問題解答
            .atproto-step-detail
              a(href="https://drive.google.com/file/d/1oy9VjQdcCIppB7n2vdHNl-ljBkJPylO-/view", target="_blank", rel="noopener noreferrer") 非學校型態實驗教育解密工作坊1小時完整版(推薦)

      //- 自學種類部分
      section.atproto-section#types
        h2.atproto-section-title 3. 自學的種類
        .atproto-grid
          .atproto-feature-card
            h4.atproto-feature-title 個人自學
            p.atproto-feature-desc
              strong 與學校合作：
              | 掛籍在學校，可完全在家自學，也可部分時間在學校上課，部分時間自學
            p.atproto-feature-desc
              strong 教育部掛籍：
              | 在教育部註冊，完全在家自學
          
          .atproto-feature-card
            h4.atproto-feature-title 團體自學
            p.atproto-feature-desc
              strong 自學生團體：
              | 多個家庭或學生組成學習小組
            p.atproto-feature-desc
              strong 分攤學費：
              | 共同聘請老師或分享資源，降低成本
          
          .atproto-feature-card
            h4.atproto-feature-title 機構自學
            p.atproto-feature-desc 由專業教育機構提供課程和資源，計畫書需經過審核

      //- 自學生活部分
      section.atproto-section
        h2.atproto-section-title 4. 自學生活
        .atproto-grid
          .atproto-feature-card
            h4.atproto-feature-title 成績評定
            p.atproto-feature-desc
              strong 成果報告：
              | 每學年結束後兩個月內(即每年九月底前)
            p.atproto-feature-desc
              strong 評分標準：
              | 依自學計畫
          
          .atproto-feature-card
            h4.atproto-feature-title 自學課程🐙
            p.atproto-feature-desc
              strong 線上課程：
              | 如MOOCs、Khan Academy等平台
            p.atproto-feature-desc
              strong 實體課程：
              | 參加工作坊、講座或社區大學課程、到大學旁聽課程，也可自行設計課程
          
          .atproto-feature-card
            h4.atproto-feature-title 自學資源🌵
            p.atproto-feature-desc
              strong 政府補助：
              | 目前台灣高中職階段有政府補助
            p.atproto-feature-desc
              router-link(to="/outer") 線上資源：包括免費教材、教學影片和學習社群
          
          .atproto-feature-card
            h4.atproto-feature-title 社交活動🤽‍♀️
            p.atproto-feature-desc
              strong 自學生活動：
              | 聚會、讀書會或主題討論
            p.atproto-feature-desc
              strong 外部講座與活動：
              | 參與各種公開活動，拓展視野
            p.atproto-feature-desc
              strong 競賽：
              | 參加各種競賽，如科學展覽、數學競賽等

      //- 挑戰與溝通部分
      section.atproto-section
        h2.atproto-section-title 5. 自學的挑戰
        .atproto-grid
          .atproto-feature-card
            h4.atproto-feature-title 撞牆期
            p.atproto-feature-desc
              strong 不知道如何規畫：
              | 如果不知道自學的目標，可以參考
              a(href="https://www.youtube.com/watch?v=SUoT5P8_UOI&list=PLebzuoh5ZI3JKOarYED1ASt2kG9g5sKFj", target="_blank", rel="noopener noreferrer") 談學習計畫-朱佳仁主講
            p.atproto-feature-desc
              strong 不知道未來：
              | 如果不知道自學的未來，可以參考
              a(href="https://www.youtube.com/watch?v=ZPzqw3x05-g&list=PLebzuoh5ZI3JKOarYED1ASt2kG9g5sKFj&index=6", target="_blank", rel="noopener noreferrer") 如何成為未來職場需要的自由人才-唐鳳主講
          
          .atproto-feature-card
            h4.atproto-feature-title 家長的擔憂👀
            p.atproto-feature-desc
              strong 不了解自學：
              | 可請家長參考
              a(href="https://www.alearn.org.tw/") 自主學習促進會
            p.atproto-feature-desc
              strong 擔心社交問題：
              | 可請家長參考
              a(href="https://we.alearn.org.tw") 自學2.0

      //- 溝通部分
      section.atproto-section
        h2.atproto-section-title 6. 自學的溝通
        .atproto-grid
          .atproto-feature-card
            h4.atproto-feature-title 與家長溝通
            p.atproto-feature-desc 計劃與目標：計劃書的撰寫、家長的期望和孩子的興趣
          
          .atproto-feature-card
            h4.atproto-feature-title 與學校溝通
            p.atproto-feature-desc 合作方式：掛籍在學校，可完全在家自學，也可部分時間在學校上課，部分時間自學

      //- 發展部分
      section.atproto-section
        h2.atproto-section-title 7. 自學後的發展
        .atproto-grid
          .atproto-feature-card
            h4.atproto-feature-title 畢業後的選擇
            p.atproto-feature-desc
              strong 考大學：
              | 自學經歷在申請時是加分項
            p.atproto-feature-desc
              strong 工作或實習：
              | 自學培養的自主能力很受雇主歡迎
          
          .atproto-feature-card
            h4.atproto-feature-title 自學經驗的影響
            p.atproto-feature-desc
              strong 成熟度：
              router-link(to="four") 學習自律四階段🐫
            p.atproto-feature-desc
              strong 自我管理能力：
              | 時間管理、目標設定、自我評估

      //- 問答集部分
      section.atproto-section
        h2.atproto-section-title 問答集
        .atproto-cta
          p.atproto-cta-text 請參考 ➡️
            router-link(to="faq") 自學問答集

        .atproto-divider

        h3.atproto-subsection-title 找夥伴
        .atproto-cta
          p.atproto-cta-text 請參考 ➡️
            a(href="https://we.alearn.org.tw") 自學2.0

        .atproto-divider

        h3.atproto-subsection-title 真人諮詢
        .atproto-cta
          p.atproto-cta-text 請用「您居住的縣市」 + 「非學校」當關鍵字，即可查詢到教育局的相關業務單位，通常都會有聯絡電話。

        .atproto-divider

        h3.atproto-subsection-title 公共意見徵集👥
        .atproto-cta
          p.atproto-cta-text 請上 ➡️
            a(href="https://polis.tw/5azfwmdsb6", target="_blank", rel="noopener noreferrer") Polis 意見徵集討論區
          p.atproto-cta-text 提出意見和對其他人的意見進行投票

        .atproto-divider

        h3.atproto-subsection-title 相關連結
        .atproto-link-grid
          a.atproto-link-card(href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070059") 
            span.atproto-link-text 高級中等以下教育階段非學校型態實驗教育實施條例
          a.atproto-link-card(href="https://www.alearn.org.tw") 
            span.atproto-link-text 自主學習促進會
          a.atproto-link-card(href="https://galacticproject.notion.site/d7477db76ecd4ff3b453a39ba21d97ef") 
            span.atproto-link-text 星河計畫：自學生經驗匯流

        .atproto-divider

        //- 組織信息區域
        section.atproto-section
          h3.atproto-subsection-title 關於我們
          .atproto-organization-card
            .atproto-org-header
              h4.atproto-org-title 本站由非營利組織自主學習促進會提供
            .atproto-org-content
              p.atproto-org-desc 本會是一個非營利組織，需要您的支持。
                a(href="https://p.ecpay.com.tw/2B9237F", target="_blank", rel="noopener noreferrer") 捐款請點選這個連結
              .atproto-donation-section
                h5.atproto-donation-title 以愛心碼捐助本會
                p.atproto-donation-desc 愛心碼取為「9806」，是因為最初成立的契機，在於1998~2006年的「台北市自主學習（中學六年一貫）實驗計畫」，本會第一代會員多是計畫中的親師生及關注計畫的學者賢達，別具意義。
                p.atproto-donation-desc 邀請並歡迎大家未來在開立電子發票的商家購物時，可主動向店員要求使用愛心碼，說出捐贈碼9806，或出示條碼即可。發票若中獎，將會自動捐入本會！
                .atproto-donation-code
                  span.atproto-code-label 愛心碼：
                  span.atproto-code-value 9806
                  .atproto-barcode-container
                    img.atproto-barcode(src="../assets/9806.png", alt="自主學習捐贈碼 9806")

  </template>
  
  <script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { marked } from 'marked';
  
  export default defineComponent({
    name: 'HelloWorld',
    data() {
      return {
        showLineQRCode: false,
        message: '',
        result: '',
        isLoading: false,
      };
    },
    methods: {
      sendMessage() {
        this.isLoading = true;
        this.result = '';
        console.log(this.message);
        if (!this.message.endsWith('？')) {
          this.message += '？';
        }
        axios.get('https://members-backend.alearn13994229.workers.dev/ai/' + this.message, {
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          console.log(response);
          this.result = response.data;
          this.isLoading = false;
          });
      },
      parseResult(result: string) {
        if (result === '。') {
          return '請說得詳細一點';
        }
        // 使用 marked 將 markdown 轉換為 HTML
        return marked(result);
      },
      sendFeedback(feedback: string) {
        console.log(feedback);
        if (feedback === 'good') {
          console.log('good');
          window.alert('感謝您的回饋！');
        } else if (feedback === 'bad') {
          console.log('bad');
          if (window.confirm('請告訴我們哪裡做得不好，我們會努力改進！')) {
            this.$router.push('/feedback');
          } else {
            window.alert('感謝您的回饋！');
          }
        }
      },
      scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      },
    },
  });
  </script>
  
<style scoped>
/* HelloWorld 組件特定樣式 */
.hello {
  padding: 0;
}

/* Logo 樣式在 hero 區域中 */
#logo {
  max-width: 200px;
  height: auto;
  margin-bottom: var(--space-6);
  transition: var(--transition);
  cursor: pointer;
  border-radius: var(--radius-xl);
}

#logo:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}



/* 現代化風格樣式 */
.modern-style {
  max-width: 1000px !important;
  margin: 0 auto !important;
  padding: var(--space-16) var(--space-10) !important;
  text-align: center !important;
  line-height: 1.8 !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
}

.modern-section {
  margin-bottom: var(--space-16) !important;
  text-align: center !important;
  max-width: 900px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}

.modern-text {
  font-size: 1.9rem !important;
  line-height: 1.7 !important;
  color: var(--text-primary) !important;
  text-align: center !important;
  max-width: 850px !important;
  margin: 0 auto !important;
  padding: var(--space-6) 0 !important;
}

/* 確保所有內容都置中 */
.ui.segment.container.modern-style {
  text-align: center !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
}

.ui.segment.container.modern-style h1,
.ui.segment.container.modern-style h2,
.ui.segment.container.modern-style h3,
.ui.segment.container.modern-style p,
.ui.segment.container.modern-style .item,
.ui.segment.container.modern-style .header,
.ui.segment.container.modern-style .list,
.ui.segment.container.modern-style .list .item {
  text-align: center !important;
  width: 100% !important;
  max-width: 900px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

/* 覆蓋 Semantic UI 的預設對齊 */
.ui.header {
  text-align: center !important;
}

.ui.list .item {
  text-align: center !important;
}

.ui.list .item .header {
  text-align: center !important;
}

.ui.list .item .list {
  text-align: center !important;
}

.ui.list .item .list .item {
  text-align: center !important;
}



/* 響應式設計 */
@media (max-width: 768px) {
  #logo {
    max-width: 150px;
  }
  
  .modern-grid-cols-1 {
    grid-template-columns: 1fr;
  }
  
  .ai-input-group {
    flex-direction: column;
  }
  
  .modern-btn-lg {
    padding: var(--space-3) var(--space-5);
    font-size: 0.9rem;
  }
  
  .modern-style {
    padding: var(--space-10) var(--space-6) !important;
    max-width: 95% !important;
  }
  
  .modern-section {
    max-width: 95% !important;
  }
  
  .modern-text {
    font-size: 1.7rem !important;
    max-width: 95% !important;
  }
  

}

@media (max-width: 480px) {
  #logo {
    max-width: 120px;
  }
  
  .modern-btn-lg {
    padding: var(--space-3) var(--space-4);
    font-size: 0.85rem;
  }
  
  .modern-style {
    padding: var(--space-8) var(--space-4) !important;
    max-width: 100% !important;
  }
  
  .modern-section {
    max-width: 100% !important;
    margin-bottom: var(--space-10) !important;
  }
  
  .modern-text {
    font-size: 1.6rem !important;
    max-width: 100% !important;
  }
  

}

/* 確保分隔線樣式 */
.ui.divider {
  border-top: 1px solid var(--border-color) !important;
  margin: var(--space-8) 0 !important;
}

/* Markdown 樣式 */
.ai-result :deep(h1),
.ai-result :deep(h2),
.ai-result :deep(h3),
.ai-result :deep(h4),
.ai-result :deep(h5),
.ai-result :deep(h6) {
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: bold;
  color: white;
}

.ai-result :deep(p) {
  margin-bottom: 0.5em;
  color: white;
}

.ai-result :deep(ul),
.ai-result :deep(ol) {
  margin: 0.5em 0;
  padding-left: 1.5em;
}

.ai-result :deep(li) {
  margin-bottom: 0.25em;
  color: white;
}

.ai-result :deep(strong) {
  font-weight: bold;
  color: white;
}

.ai-result :deep(em) {
  font-style: italic;
  color: white;
}

.ai-result :deep(code) {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  color: white;
}

.ai-result :deep(pre) {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 1em;
  border-radius: 5px;
  overflow-x: auto;
  margin: 0.5em 0;
}

.ai-result :deep(blockquote) {
  border-left: 4px solid rgba(255, 255, 255, 0.5);
  margin: 0.5em 0;
  padding-left: 1em;
  color: rgba(255, 255, 255, 0.8);
}

.ai-result :deep(a) {
  color: #81C784;
  text-decoration: underline;
}

.ai-result :deep(a:hover) {
  color: #4CAF50;
}
</style>