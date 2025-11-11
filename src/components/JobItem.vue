<template>
  <div class="item" :style="backgroundStyle">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  bgimage?: string
}

const props = defineProps<Props>()

const backgroundStyle = computed(() => ({
  backgroundImage: props.bgimage ? `url(${props.bgimage})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}))
</script>

<style scoped>

.item {
  margin-top: 1rem;
  display: flex;
  position: relative;
  border-radius: 0.9rem;
  overflow: hidden;
  padding: 1.4rem;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item:hover {
 transform: scale(1.02);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}
.details {
  opacity: 1;
  transform: translateY(1px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 0.6rem;
  padding: 1rem;
}

.details:hover {
  background: rgba(0, 0, 0, 0.85);
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
  z-index: 1;
}

.item::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 0;
  transition: backdrop-filter 0.3s ease-in-out, background 0.3s ease-in-out;
}

.item:hover::before {
  backdrop-filter: blur(20px); 
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: rgb(6, 223, 169);
}

@media (max-width: 1024px) {

.item:hover, .item:focus, .item:active {
  transform: none;
}

h3:hover, h3:focus, h3:active {
  color: #11ff90;
}

}

@media print {

i {
color: #232823;
}

h3 {
color: #0d115e;
}

}

</style>
