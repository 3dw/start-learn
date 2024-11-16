<template lang="pug">
  div.faq-container
    h2.ui.header 常見問題
    .ui.container
      form.ui.form
        .two.stackable.fields
          .field(style="max-width:150px;")
            label 類別篩選
            select.ui.dropdown(v-model="selectedCategory")
              option(v-for="category in categories" :value="category") {{ category }}
          .field
            label 關鍵字篩選
            .ui.icon.input
              input(
                type="text"
                v-model="searchKeyword"
                placeholder="搜尋常見問題..."
              )
              i.search.icon
      table.ui.celled.table
        thead
          tr
            th 類別
            th 問題
            th 回答
            th 相關連結
        tbody
          tr(v-for="item in filteredAndSortedFaqItems" :key="item.id")
            td(v-html="highlightText(item.category)")
            td(v-html="highlightText(item.question)")
            td.answer-cell(v-html="highlightText(parseAnswer(item.answer))")
            td.answer-cell
              .ui.bulleted.list(v-if="item.links && parseLinks(item.links).length > 0")
                .item(v-for="link in parseLinks(item.links)" :key="link.h")
                  a(:href="link.h" target="_blank" rel="noopener noreferrer") {{ link.t }}

  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
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
      }
    },
    setup() {
      // 修改 ref 的型別定義
      const faqItems = ref<FaqItem[]>([])
      const categories = ref(['全部', '起步', '計畫', '支持', '資源', '其他'])
      const searchKeyword = ref('')
      const selectedCategory = ref('全部')
  
      onMounted(async () => {
        try {
          const response = await axios.get('https://members-backend.alearn13994229.workers.dev/api/Faq')
          faqItems.value = response.data
        } catch (error) {
          console.error('獲取FAQ資料失敗:', error)
        }
      })
  
      return {
        faqItems,
        categories,
        searchKeyword,
        selectedCategory
      }
    },
    computed: {
      sortedFaqItems(): FaqItem[] {
        return this.faqItems.slice().sort((a, b) =>
          this.categories.indexOf(a.category) - this.categories.indexOf(b.category)
        )
      },
      filteredAndSortedFaqItems(): FaqItem[] {
        const keyword = this.searchKeyword.toLowerCase().trim()
        let filtered = this.faqItems
  
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
      toggleLogin() {
        this.$emit('toggleLogin')
      },
      fetchFaq() {
        this.faqItems = []
        axios.get('https://members-backend.alearn13994229.workers.dev/api/Faq').then((response) => {
          this.faqItems = response.data
        }).catch((error) => {
          console.error('獲取FAQ資料失敗:', error)
        })
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
  