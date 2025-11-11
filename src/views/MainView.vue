<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ChangeLocale from '../components/ChangeLocale.vue'
</script>

<template>
  
  <div class="topleft">
    <ChangeLocale />
  </div>
  
    <header>
      <div class="wrapper">
          <img alt="Rebecca Soisenniemi" class="logo" src="@/assets/repic.png" width="220" />
          <div class="main"><RouterLink to="who"><h1 class="title">Rebecca Soisenniemi</h1></RouterLink></div>

          <h1 class="secondtitle">{{ $t('degree') }} </h1>
          <h1 class="secondtitle">{{ $t('worktitle') }}</h1>
          
          <nav>
              <RouterLink to="work">{{ $t('career') }}</RouterLink>
              <RouterLink to="skills">{{ $t('skills') }}</RouterLink>
              <RouterLink to="projects">{{ $t('projects') }}</RouterLink>
          </nav>

          <div class="contact">
            <a href="https://www.linkedin.com/in/rebecca-soisenniemi-72607a2a3"><img src="../assets/in.png" alt="https://www.linkedin.com/in/rebecca-soisenniemi-72607a2a3" class="tiny"></a>
            <a href="https://github.com/suklaanen/reso-projektit"><img src="../assets/git.png" alt="https://github.com/suklaanen/reso-projektit" class="tiny"></a>
          </div>

      </div>
    </header>

    <RouterView />

</template>

<style scoped>

.topleft {
  position: fixed;
  top: 0rem;
  left: 0rem;
  z-index: 20;
  background-color: rgb(30, 30, 30);
  padding: 0.5rem 2.3rem 2rem 1rem;
  border-radius: 0rem 0rem 6rem 0rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.topleft:hover {
  background-color: rgb(36, 36, 36);
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  padding: 2rem 0; 
  top: 0;
  z-index: 10;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 0rem;
  border-radius: 0 50% 0% 23%;
  border: 2px solid var(--color-border);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}

.title {
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
}

.secondtitle {
  font-size: 1.2rem;
  text-align: center;
  margin-top: 0.5rem;
  font-style: italic;
}

nav {
  font-size: 1.4rem;
  text-align: center;
  margin-top: 1rem;
}

.contact {
  margin-top: 1rem;
}

nav, .contact, .title, .secondtitle, .main {
  display: flex;
  justify-content: center;  
  align-items: center;      
  width: 100%;        
}

nav a{
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav a:hover{
  background-color: hsla(160, 77%, 26%, 0.2);
}

.main a:hover{
  color: hsla(163, 100%, 46%, 0.426);
}

.tiny {
  width: 2.2rem;
  height: 2.2rem;
  margin: 0 0.5rem;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 1));
}

.tiny:hover, .tiny:focus, .tiny:active {
  transform: scale(1.4);
  transition: transform 0.5s;
  background-color: none;
}


@media (min-width: 1024px) {

  header {
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    padding-right: calc(var(--section-gap) / 2);
    position: sticky; 
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    font-size: 1.3rem;
  }
}


@media (max-width: 1023px) {

  .topleft {
    position: absolute;
    z-index: 20;
    opacity: 0.7;
  }

}

</style>