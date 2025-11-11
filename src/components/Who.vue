<script setup lang="ts">
import ContentItem from './ContentItem.vue'
import PageItem from './PageItem.vue'
</script>

<template>
  <PageItem>
    <template #heading>{{ $t('who') }}</template>
    <ContentItem>
      {{ $t('aboutmetext') }}
    </ContentItem>

    <div class="video-wrapper">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/8s-Yso2Ldbg" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>

    </div>

  </PageItem>
</template>

<style scoped>
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background-color: #000;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>