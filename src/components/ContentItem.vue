<template>
  <div class="item">
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

<style scoped>

.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.item:hover, .item:focus, .item:active {
  transform: scale(1.1);
  transition: transform 0.4s;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
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
