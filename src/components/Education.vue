<script setup lang="ts">
import ContentItem from './ContentItem.vue'
import PageItem from './PageItem.vue'
</script>

<template>
  <PageItem>
    <template #heading>{{ $t('education') }}</template>
    <ContentItem>
      Insinööri AMK, tietotekniikka, 4. vuoden opiskelija<br/>
    </ContentItem>

  </PageItem>
</template>