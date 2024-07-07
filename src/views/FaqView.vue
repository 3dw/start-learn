<template lang="pug">
.faq
  section
    h1.ui.center.aligned.header 自學問答 
    h4.ui.center.aligned.header 分類：
      .ui.small.buttons
        button.ui.button(v-for="c in catagories",
          v-bind:style="{'background-color': c.color}",
          @click="myC = c.t", :title="c.description") {{c.t}}
        button.ui.button(@click="myC = undefined") 全部
  .ui.divider
  br   
  #main.ui.four.column.doubling.stackable.relaxed.grid.container
    .column(v-for="(f, index) in faqs", v-show="(!myC || f.c == myC) && (!myKey || f.q.indexOf(myKey)>-1)")
      .inner.bordered.bottom.right.left

        h4.ui.center.aligned.icon.header
          router-link(@click="myF=f", :to="'/ans/' + index")
            i.circular.icon(v-bind:class="cataIcon(f.c)")
            .description(v-html = "highlightAndMakeBr(f.q,myKey)" v-bind:class="{orange:index % 2 == 0}")
            br

      a.ui.top.left.attached.ribbon.label(
        v-bind:style = "{'background-color': cataColor(f.c)}",
        @click="myC=(!myC && f.c)||0")
        | {{f.c}}
</template>

<script lang="typescript">

import { catagories } from '../data/catagories.js'
import { plan } from '../data/plan.js'
import { start } from '../data/start.js'
import { support } from '../data/support.js'
import { resource } from '../data/resource.js'

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FaqView',
  data () {
    return {
      myC: '',
      myKey: '',
      catagories: catagories,
      faqs: start
        .concat(plan)
        .concat(support)
        .concat(resource)
    }
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
    }
  }
})

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #35495E;
}

.bordered {
  border-radius: 0 0 15px 15px;
}
.bordered.right {
    border-right: 2px solid #aaa;
  }
.bordered.left {
  border-left: 2px solid #aaa;
}
.bordered.bottom {
  border-bottom: 2px solid #aaa;
}

</style>

