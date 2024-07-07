<template lang="pug">
div.hello
  h2.ui.header 一樣米養百樣人，一種教育不會適合所有人
    div.sub.header 認識自學社群

  a(href="https://we.alearn.org.tw") 自學2.0
  br
  a(href="https://galacticproject.notion.site/d7477db76ecd4ff3b453a39ba21d97ef") 自學生經驗匯流
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
