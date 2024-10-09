<template lang="pug">
  .ans
    #main-ans.ui.segment.container
      router-link(to="/")
        h1.ui.header.center.aligned
          | {{myQ.q}}
        i.huge.orange.users.icon(style="display:block; margin-left:auto; margin-right:auto")
      .ui.divider
      .ui.grid
        .row
          .column
            p.description(v-for = "line in myQ.as" v-html = "highlightAndMakeBr(line, myKey)")
        
        .row
          .eighteen.wide.right.aligned.column(v-show="myQ.es && myQ.es[0]")
            .ui.divider
            span(v-for = "(e,index) in myQ.es")
              .ui.divider(v-show="index")
              | 參考:&nbsp;&nbsp;
              a(:href = "e.h" target="_blank")
                i.globe.icon
                | {{e.t}}
  
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
  import { plan } from '../data/plan.js'
  import { start } from '../data/start.js'
  import { support } from '../data/support.js'
  import { resource } from '../data/resource.js'
  
  import { defineComponent } from 'vue';
  
  export default  defineComponent({
    name: 'AnsView',
    props: ['myKey'],
    data () {
      return {
        myQ: {q: '', as: [], es: []},
        handbook: {},
        catagories: catagories,
        faqs: start
          .concat(plan)
          .concat(support)
          .concat(resource)
      }
    },
    mounted () {
      this.myQ = this.faqs[this.$route.params.id]
    },
    methods: {
      makeBr: function (str) {
        str = str || ''
        return str.replace(/\s/g, '<br/>').replace(/&nbsp;/g, '<br/>') || ''
      },
      highlightAndMakeBr: function (text, search) {
        text = this.makeBr(text)
        if (!search) {
          return text
        }
        return text.replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>')
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
  