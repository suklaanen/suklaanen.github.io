<script setup lang="ts">
import { useRoute } from 'vue-router'
import PageItem from './PageItem.vue'
import WebIcon from './icons/IconWeb.vue'
import MobileIcon from './icons/IconMobile.vue'
import DesktopIcon from './icons/IconDesktop.vue'
import GameIcon from './icons/IconGame.vue'
import JobItem from './JobItem.vue'
import jobsData from '../data/jobs.json'

const iconMap: Record<string, any> = {
  web: WebIcon,
  mobile: MobileIcon,
  desktop: DesktopIcon,
  game: GameIcon
}

const jobs = jobsData.map(p => ({
  ...p,
  icon: iconMap[p.icon.replace('Icon', '').toLowerCase()]
}))


const route = useRoute()

</script>

<template>
  <PageItem>
    <template #heading>{{ $t('career') }}</template>

    <JobItem
      v-for="job in jobs"
      :key="job.id"
      :bgimage="job.bgimage"
    >
      <template #icon>
        <component :is="job.icon" />
      </template>

      <template #heading>
        {{ $t('title-' + job.id) }} @ {{ job.agency }}
      </template>

      {{ job.date }} <br />
      {{ job.tech }} <br /><br />
      {{ $t('desc-' + job.id) }}
    </JobItem>
  </PageItem>
  
</template>




