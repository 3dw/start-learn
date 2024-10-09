<template>
<div class="form-container ui container">
  <iframe
    :src="formUrl"
    width="100%"
    :height="iframeHeight"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    @load="adjustIframeHeight"
  >載入中…</iframe>
</div>
</template>

<script>
export default {
  name: 'FeedbackView',
  data() {
    return {
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc59H5Bd4-u3yaQ-N31RqaFCxTZ7WP_QomYSe-G2wSRC0QzDg/viewform?embedded=true',
      iframeHeight: '100vh',
    };
  },
  methods: {
    adjustIframeHeight() {
      this.iframeHeight = `${window.innerHeight}px`;
    },
    scrollToPosition() {
      // 檢查是否為手機版
      if (window.innerWidth <= 767) {
        // 使用 setTimeout 確保在 DOM 更新後執行滾動
        setTimeout(() => {
          window.scrollTo(0, 640);
        }, 1000);
      }
    },
  },
  mounted() {
    this.adjustIframeHeight();
    window.addEventListener('resize', this.adjustIframeHeight);
    this.scrollToPosition(); // 新增：調用滾動方法
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustIframeHeight);
  },
};
</script>

<style scoped>
.form-container {
  height: 100vh;
  overflow: hidden;
}

iframe {
  max-height: 100vh !important;
  overflow-y: scroll;
}

@media screen and (max-width: 767px) {
  .form-container {
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
