<template lang="pug">
.hello
  //- 與AI對話
  .ui.container
    img.clickable(v-if="!showLineQRCode" id="logo" alt="Logo" src="../assets/logo.png", @click="showLineQRCode = true")
    img.clickable(v-else id="logo" alt="Logo" src="../assets/autobot.png", @click="showLineQRCode = false")
    h2.center.aligned.ui.header 自學AI
      .center.aligned.ui.sub.header 以自學問答集為基礎，提供更即時的回答
      .center.aligned.ui.sub.header
        a(href="https://lin.ee/CashU46", target="_blank", rel="noopener noreferrer") 將自學AI加入LINE好友
    .ui.input
      input(
        autofocus 
        type="text" 
        placeholder="問AI關於自學的任何問題..." 
        v-model="message"
        @keyup.enter="sendMessage"
      )
      button.ui.primary.button(@click="sendMessage") 送出
    .result
      p(v-if="result === '' && message !== '' && isLoading") 載入中，請稍候...
      div(v-else-if="result !== ''")
        div(v-html="parseResult(result)")
        br
        br
        p 您覺得這個回答怎麼樣呢？
        .ui.buttons
          button.ui.green.button(@click="sendFeedback('good')")
            i.thumbs.up.icon
            | 很棒
          button.ui.red.button(@click="sendFeedback('bad')")
            i.thumbs.down.icon
            | 不佳
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { marked } from 'marked';

export default defineComponent({
  name: 'AIEmbedView',
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
  },
});
</script>

<style scoped>
.ui.container {
  margin-top: 20px;
  max-width: 480px !important;
}

#logo {
  max-width: 33vmin;
}

.ui.input {
  min-width: 320px;
}

input[type="text"] {
  font-size: 1.2rem !important;
}

input[type="text"]:placeholder-shown {
  font-size: 1.2rem !important;
}

.result {
  margin-top: 1em;
  font-size: 16px;
  line-height: 1.4;
  text-align: left;
  white-space: pre-wrap;
}

/* Markdown 樣式 */
.result :deep(h1),
.result :deep(h2),
.result :deep(h3),
.result :deep(h4),
.result :deep(h5),
.result :deep(h6) {
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: bold;
}

.result :deep(p) {
  margin-bottom: 0.5em;
}

.result :deep(ul),
.result :deep(ol) {
  margin: 0.5em 0;
  padding-left: 1.5em;
}

.result :deep(li) {
  margin-bottom: 0.25em;
}

.result :deep(strong) {
  font-weight: bold;
}

.result :deep(em) {
  font-style: italic;
}

.result :deep(code) {
  background-color: #f5f5f5;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

.result :deep(pre) {
  background-color: #f5f5f5;
  padding: 1em;
  border-radius: 5px;
  overflow-x: auto;
  margin: 0.5em 0;
}

.result :deep(blockquote) {
  border-left: 4px solid #ddd;
  margin: 0.5em 0;
  padding-left: 1em;
  color: #666;
}

.result :deep(a) {
  color: #4CAF50;
  text-decoration: underline;
}

.result :deep(a:hover) {
  color: #388E3C;
}

p {
  font-size: 18px;
  line-height: 1.4;
  text-align: left;
}
</style> 