<template lang="pug">
.hello
  //- 與AI對話
  .ui.container
    img(id="logo" alt="Logo" src="../assets/logo.png")
    h2.center.aligned.ui.header 自學AI
      .center.aligned.ui.sub.header 以自學問答集為基礎，提供更即時的回答
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
        p {{ parseResult(result) }}
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

export default defineComponent({
  name: 'AIEmbedView',
  data() {
    return {
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
      return result;
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

p {
  font-size: 18px;
  line-height: 1.4;
  text-align: left;
}
</style> 