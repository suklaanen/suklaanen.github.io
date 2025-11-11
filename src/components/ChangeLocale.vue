<template>
  <div class="lang-switch">
    <button
      v-for="lang in languages"
      :key="lang"
      :class="{ active: locale === lang }"
      @click="switchLanguage(lang)"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = ['fi', 'en']

function switchLanguage(lang: string) {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>

<style scoped>
.lang-switch {
  display: flex;
  margin: 0 auto;
  margin-top: 1rem;
  justify-content: center;
  gap: 0.55rem;
}

button {
  border: 1px solid var(--color-border, #555);
  border-radius: 0.4rem;
  padding: 0.3rem 0.8rem;
  background: transparent;
  color: var(--color-text, #fff);
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}

button:hover {
  background: #486356;
}

button.active {
  background: var(--color-accent, #00ff88);
  color: #000;
}
</style>
