<template>
  <div class="home">
    <img id="logo" alt="Logo" src="../assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>

<style scoped>

#logo {
  max-width: 33vmin;
}

</style>