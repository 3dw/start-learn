<template lang="pug">
.hello
  #ad
    a(href="https://www.alearn.org.tw", target="_blank", rel="noopener noreferrer")
      img.ad(src="/ad-be.jpg" alt="本站由自主學習促進會製作")
      | 本站由自主學習促進會製作
</template>

<script>

export default {
  name: 'AdComp',
  data() {
    return { };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#ad {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: rgba(255,255,255,0.8);
  border-radius: 5px;
  padding: .5em .5em;
  font-size: 16px;
  transition: all 0.5s ease;
  /* display: none; 暫時隱藏 */
}

#ad:hover {
  font-size: 20px;
}

.ad {
  width: 3em;
}

</style>
