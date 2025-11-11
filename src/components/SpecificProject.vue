<script setup lang="ts">
import { useRoute } from 'vue-router'
import PageItem from './PageItem.vue'
import WebIcon from './icons/IconWeb.vue'
import MobileIcon from './icons/IconMobile.vue'
import DesktopIcon from './icons/IconDesktop.vue'
import GameIcon from './icons/IconGame.vue'
import ProjectItem from './ProjectItem.vue'

const route = useRoute()
//aikalailla hylkäsin tän, otan ne nyt ulos toisaalta

const projects = [
  {
    //pankkiautomaatti
    id: 'project-1',
    icon: DesktopIcon,
    date: 'Q4/2023',
    tech: 'Qt, Node.js, MySQL',
    link: 'https://github.com/suklaanen/reso-projektit#2023-Q4-ATM-pankkiautomaatti',
    bgimage: 'https://tse1.mm.bing.net/th/id/OIP.1uSwDhjo457sjYW5ckRLtgHaE8?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    //leffaysi
    id: 'project-2',
    icon: WebIcon,
    date: 'Q2/2024',
    tech: 'React, Node.js, PostgreSQL, Render',
    link: 'https://github.com/suklaanen/reso-projektit#2024-Q2-Leffaysi'
  },
  {
    //little bit
    id: 'project-3',
    icon: GameIcon,
    date: 'Q2-Q3/2024',
    tech: 'Unreal Engine, Audacity, Blender',
    link: 'https://github.com/suklaanen/reso-projektit#2024-Q2Q3-LittleBit'
     },
  {
    //kierttis
    id: 'project-4',
    icon: MobileIcon,
    date: 'Q4/2024',
    tech: 'Android, React Native, Firebase, Firestore',
    link: 'https://github.com/suklaanen/reso-projektit#2024-Q4-Kierttis'
  },
  {
    //cozy house tour
    id: 'project-5',
    icon: GameIcon,
    date: 'Q1/2025',
    tech: 'Unreal Engine, C++, Blueprint, Sweet Home 3D, Audacity, Blender',
    link: 'https://github.com/suklaanen/reso-projektit#2025-Q1-CozyHouseTour'
  },
  {
    //horox alptraum
    id: 'project-6',
    icon: GameIcon,
    date: 'Q2-Q3/2025',
    tech: 'Unreal Engine, Blender, Adobe, Audacity',
    link: 'https://github.com/suklaanen/reso-projektit#2025-Q2Q3-HoroxAlptraum'
  },
]

const projectId = route.params.section as string
const selectedProject = projects.find(p => p.id === projectId)

</script>

<template>
  <PageItem>
    <template #heading>
      
    </template>

  </PageItem>
</template>

