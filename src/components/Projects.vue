<script setup lang="ts">
import PageItem from './PageItem.vue'
import WebIcon from './icons/IconWeb.vue'
import MobileIcon from './icons/IconMobile.vue'
import DesktopIcon from './icons/IconDesktop.vue'
import GameIcon from './icons/IconGame.vue'
import ContentItem from './ContentItem.vue'
</script>

<template>
  <PageItem>

  <template #heading>Projektit</template>

  <ContentItem>
    <template #icon>
      <DesktopIcon />
    </template>
    <template #heading><a href="https://github.com/suklaanen/reso-projektit#2023-Q4-ATM-pankkiautomaatti">Pankkiautomaatti - ATM</a></template>
    Q4/2023 <br/>
    Qt, Node.js, MySQL 
  </ContentItem>

  <ContentItem>
    <template #icon>
      <WebIcon />
    </template>
    <template #heading><a href="https://github.com/suklaanen/reso-projektit#2024-Q2-Leffaysi">Leffaysi -elokuvasivusto</a></template>
    Q2/2024 <br/>
    React, Node.js, PostgreSQL, Render <br/>
    <a href="https://leffaysi.onrender.com/">Sivusto julkaistu @ render.com </a>
  </ContentItem>

  <ContentItem>
    <template #icon>
      <GameIcon />
    </template>
    <template #heading><a href="https://github.com/suklaanen/reso-projektit#2024-Q2Q3-LittleBit">Little Bit</a></template>
    Q2-Q3/2024<br/>
    Unreal Engine, Audacity, Blender <br/>
    <a href="https://lejdi.itch.io/littlebit">Pelin exe julkaistu @ itch.io</a>
  </ContentItem>

  <ContentItem>
    <template #icon>
      <MobileIcon />
    </template>
    <template #heading><a href="https://github.com/suklaanen/reso-projektit#2024-Q4-Kierttis">Kierrätyssovellus Kierttis</a></template>
    Q4/2024<br/>
    Android, React Native, Firebase, Firestore
  </ContentItem>
  
  <ContentItem>
    <template #icon>
      <GameIcon />
    </template>
    <template #heading><a href="https://github.com/suklaanen/reso-projektit#2025-Q1-CozyHouseTour">Cozy House Tour</a></template>
    Q1/2025<br/>
    Unreal Engine, C++, Blueprint, Sweet Home 3D, Audacity, Blender
  </ContentItem>

  <ContentItem>
    <template #icon>
      <GameIcon />
    </template>
    <template #heading>Horox: Alptraum</template>
    Q2-Q3/2025<br/>
    Unreal Engine, Blender, Adobe, Audacity <br/>
    1st person kauhupeli, julkaisu suunnitteilla 2025 Q3
  </ContentItem>

</PageItem>

</template>