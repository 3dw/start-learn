<template lang="pug">
  div.faq-container
    h2.ui.header 常見問題
    .ui.container
      form.ui.form
        .two.stackable.fields
          .field(style="max-width:150px;")
            label 類別篩選
            select.ui.dropdown(v-model="selectedCategory")
              option(value="全部")
                | 全部
              option(v-for="category in categories" :value="category.t")
                | {{ category.t }}
          .field
            label 關鍵字篩選
            .ui.icon.input
              input(
                type="text"
                v-model="searchKeyword"
                placeholder="搜尋常見問題..."
              )
              i.search.icon
      table.ui.celled.collapsing.table
        thead
          tr
            th 類別
            th 問題
            th 操作
        tbody
          tr(v-for="(item, index) in filteredAndSortedFaqItems" :key="item.id")
            td
              i.icon(:class="cataIcon(item.category)")
              span(v-html="highlightText(item.category)")
              
            td
              div(v-html="highlightText(item.question)")
            td
              router-link.ui.green.button(:to="'/ans/' + (item.id - 1)")
                | 查看回答
                i.chevron.right.icon
            
  </template>
  
  <script lang="ts">
  import { catagories } from '../data/catagories.js'
  import { defineComponent, ref, onMounted, PropType } from 'vue'
  import axios from 'axios'
  
  // 添加介面定義
  interface FaqItem {
    id: string
    category: string
    question: string
    answer: string
    links?: string
  }
  
  export default defineComponent({
    name: 'FaqView',
    props: {
      uid: {
        type: String,
        required: true
      },
      faqs: {
        type: Array as PropType<FaqItem[]>,
        required: true
      }
    },
    setup(props) {
      const categories = ref(catagories)
      const searchKeyword = ref('')
      const selectedCategory = ref('全部')
  
      return {
        searchKeyword,
        selectedCategory,
        categories
      }
    },
    computed: {
      sortedFaqItems(): FaqItem[] {
        return this.faqs.slice().sort((a, b) =>
          this.categories.indexOf(a.category) - this.categories.indexOf(b.category)
        )
      },
      filteredAndSortedFaqItems(): FaqItem[] {
        const keyword = this.searchKeyword.toLowerCase().trim()
        let filtered = this.faqs || []
  
        // 先依類別過濾
        if (this.selectedCategory !== '全部') {
          filtered = filtered.filter(item => item.category === this.selectedCategory)
        }
  
        // 再依關鍵字過濾
        if (keyword) {
          filtered = filtered.filter(item =>
            item.category.toLowerCase().includes(keyword) ||
            item.question.toLowerCase().includes(keyword) ||
            item.answer.toLowerCase().includes(keyword)
          )
        }
  
        // 最後依類別排序
        return filtered.sort((a, b) =>
          this.categories.indexOf(a.category) - this.categories.indexOf(b.category)
        )
      }
    },
    methods: {
      cataIcon(n) {
        const category = this.categories.find(o => o.t === n)
        return category?.icon || 'user'
      },
      toggleLogin() {
        this.$emit('toggleLogin')
      },
      parseLinks(links: string) {
        console.log(links)
        return JSON.parse(links)
      },
      parseAnswer(answer: string) {
        console.log(answer)
        return answer.replace(/\\n/g, '\n')
      },
      escapeHtml(text: string): string {
        return text
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;')
      },
      highlightText(text: string): string {
        if (!this.searchKeyword.trim()) return this.escapeHtml(text)
  
        const escapedText = this.escapeHtml(text)
        const keyword = this.escapeHtml(this.searchKeyword.toLowerCase().trim())
        const regex = new RegExp(`(${keyword})`, 'gi')
  
        return escapedText.replace(regex, '<span class="highlight">$1</span>')
      }
    }
  })
  </script>
  
  <style scoped>
  .faq-container {
    padding: 2rem 0;
  }
  
  .answer-cell {
    min-width: 20rem;
    white-space: pre-line;
  }
  
  th, td {
    min-width: 9rem;
    font-size: 1.2rem;
  }
  
  </style>
  