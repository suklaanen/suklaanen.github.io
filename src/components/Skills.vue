<script setup lang="ts">
import ContentItem from './ContentItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import PageItem from './PageItem.vue'
import AndroidIcon from './icons/IconAndroid.vue'
import WebIcon from './icons/IconWeb.vue'
import MobileIcon from './icons/IconMobile.vue'
import DesktopIcon from './icons/IconDesktop.vue'
import GameIcon from './icons/IconGame.vue'
import DatabaseIcon from './icons/IconDatabase.vue'
import MindsetIcon from './icons/IconMindset.vue'
import MediaIcon from './icons/IconMedia.vue'
import TestingIcon from './icons/IconTesting.vue'
import DockerIcon from './icons/IconDocker.vue'
import CloudIcon from './icons/IconCloud.vue'
</script>

<template>
  <PageItem>

  <template #heading>{{ $t('skills') }}</template>

  <ContentItem>
    <template #icon>
      <MindsetIcon />
    </template>
    <template #heading>{{ $t('mindset') }}</template>
    DevOps, Kanban <br/>
    Video-esitys. 29.7.2025: <br/>
    <a href="https://www.youtube.com/watch?v=dB4Lem41IOI">Mukaan pelialalle - tuurilla vai taidolla?</a>
  </ContentItem>

  <ContentItem>
    <template #icon>
      <DesktopIcon />
    </template>
    <template #heading>{{ $t('softwareDevelopment') }}</template>
    C, C++, Java, Python, Node.js, Express.js, Qt Framework, Spring Boot
  </ContentItem>

  <ContentItem>
    <template #icon>
      <WebIcon />
    </template>
    <template #heading>{{ $t('webDevelopment') }}</template>
    React.js, Vue, Vite, HTML, CSS, Bootstrap, JavaScript, TypeScript
  </ContentItem>

  <ContentItem>
    <template #icon>
      <MobileIcon />
    </template>
    <template #heading>{{ $t('mobileDevelopment') }}</template>
    Android, Kotlin, React Native
  </ContentItem>

  <ContentItem>
    <template #icon>
      <DatabaseIcon />
    </template>
    <template #heading>{{ $t('databases') }}</template>
    PostgreSQL, MySQL, Firestore
  </ContentItem>

  <ContentItem>
    <template #icon>
      <DockerIcon />
    </template>
    <template #heading>{{ $t('docks') }}</template>
    Docker
  </ContentItem>

  <ContentItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ $t('versionControl') }}</template>
   GitLab, GitHub, Markdown, UML, ERD, SD
  </ContentItem>

  <ContentItem>
    <template #icon>
      <TestingIcon />
    </template>
    <template #heading>{{ $t('testingAndAutomation') }}</template>
    Robot Framework, Postman, CI/CD, GitHub Actions
  </ContentItem>

  <ContentItem>
    <template #icon>
      <MediaIcon />
    </template>
    <template #heading>{{ $t('mediaCreation') }}</template>
    Blender, Adobe, Corel, Magix, Audacity, OBS, Miro, LucidChart, Figma
  </ContentItem>

  <ContentItem>
    <template #icon>
      <GameIcon />
    </template>
    <template #heading>{{ $t('gameDevelopment') }}</template>
    Unreal Engine
  </ContentItem>

  <ContentItem>
    <template #icon>
      <CloudIcon />
    </template>
    <template #heading>{{ $t('cloudServices') }}</template>
    Render, Firebase, AWS, Azure
  </ContentItem>

</PageItem>

</template>