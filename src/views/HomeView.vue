<script setup lang="ts">
import Education from '../components/Education.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import BakToTop from '../components/BackToTop.vue'
</script>

<template>
  <div class="sidecontent">
    <main>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <BakToTop />
    </main>
  </div>
</template>
