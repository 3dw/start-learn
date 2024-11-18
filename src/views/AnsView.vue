<template lang="pug">
  .ans
    #main-ans.ui.segment.container(v-if="faqItem")
      router-link(to="/faq")
        h1.ui.header.center.aligned
          | {{faqItem.question}}
        i.huge.orange.icon(style="display:block; margin-left:auto; margin-right:auto", :class="cataIcon(faqItem.category)")
      .ui.divider
      .ui.grid
        .row
          .column
            p.description(v-html="highlightAndMakeBr(faqItem.answer, '')")
        
        .row
          .eighteen.wide.right.aligned.column(v-if="faqItem && faqItem.links && faqItem.links.length")
            .ui.divider
            span(v-for="(link, index) in JSON.parse(faqItem.links)")
              .ui.divider(v-show="index")
              a(:href="link.h" target="_blank", :title="link.t", rel="noopener noreferrer")
                i.globe.icon
                | {{link.t}}
  
        .row
          .eight.wide.column.text-left
            button(@click="goBack" class="ui blue button")
              i.chevron.left.icon
              | 回上一頁
          .eight.wide.right.aligned.column
            router-link.ui.orange.button(to="/feedback")
              | 我有意見
              i.chevron.right.icon
  </template>
  
  <script>
  
  import { catagories } from '../data/catagories.js'
  import axios from 'axios'
  import { defineComponent } from 'vue';
  
  export default  defineComponent({
    name: 'AnsView',
    props: {
      faqs: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        faqItem: null,
        handbook: {},
        catagories: catagories,
        loading: true
      }
    },
    watch: {
      faqs: {
        immediate: true,
        handler(newVal) {
          if (newVal && newVal.length > 0) {
            this.faqItem = newVal[this.$route.params.id]
            this.loading = false
          }
        }
      }
    },
    methods: {
      // HTML特殊字元轉義，防止XSS攻擊
      escapeHtml(text) {
        return text
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
      },
      // 將空白字元轉換為HTML換行標籤
      makeBr: function (str) {
        str = str || ''
        return str.replace(/\s/g, '<br/>').replace(/&nbsp;/g, '<br/>') || ''
      },
      // 處理文字高亮顯示和換行
      highlightAndMakeBr: function (text, search) {
        text = this.makeBr(text)
        if (!search) {
          return text
        }
        return this.escapeHtml(text)
          .replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>')
      },
      cataColor: function (n) {
        return (this.catagories.filter(
          function (o) { return o.t === n }
        )[0] || {}).color || '#999'
      },
      cataIcon: function (n) {
        return (this.catagories.filter(
          function (o) { return o.t === n }
        )[0] || {}).icon || 'user'
      },
      goBack() {
        this.$router.go(-1)
      }
    }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  p {
    text-align: left;
    font-size: 16px;
  }
  
  #main-ans {
    max-width: 680px !important;
  }
  
  </style>
  