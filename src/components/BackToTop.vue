<script setup lang="ts">
import PageItem from './PageItem.vue'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
<template>
  <PageItem>
    <button @click="scrollToTop" class="back-to-top">
      Palaa alkuun
    </button>
  </PageItem>
</template>

<style scoped>
.back-to-top {

  padding: 15px 22px;
  font-size: 16px;
  background: rgba(5, 3, 41, 0.4); 
  color: rgba(255, 255, 255, 0.757);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.1s;
}

.back-to-top:hover {
  opacity: 0.7;
}

@media print {
  .back-to-top {
    display: none;
  }
}

</style>
