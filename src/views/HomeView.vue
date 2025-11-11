<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Who from '../components/Who.vue'
import Education from '../components/Education.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Work from '../components/Work.vue'
import SpecificProject from '../components/SpecificProject.vue'
import BakToTop from '../components/BackToTop.vue'


const route = useRoute()
const section = computed(() => route.params.section as string || 'who')
</script>

<template>
  <div class="sidecontent">

    <main>
      <section v-if="section === 'who'">
        <Who />
      </section>

      <section v-if="section === 'education' || section === 'all'">
        <Education />
        <BakToTop />
      </section>

      <section v-if="section === 'skills' || section === 'all'">
        <Skills />
        <BakToTop />
      </section>

      <section v-if="section === 'projects' || section === 'all'">
        <Projects />
        <BakToTop />
      </section>

      <section v-if="section === 'work' || section === 'all'">
        <Work />
        <BakToTop />
      </section>

      <section v-if="section.startsWith('project-')">
        <SpecificProject />
      </section>
      
    </main>
  </div>
</template>