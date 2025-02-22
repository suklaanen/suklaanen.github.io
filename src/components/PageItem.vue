<template>
  <div class="item">
    <h3>
      <slot name="heading"></slot>
    </h3>
    <slot></slot>
  </div>
</template>
  
<style scoped>

.item {
  min-width: 90%;
  margin: 1rem 1rem;
}

  .details {
  margin: 0 1rem; 
  }

  h3 {
  font-size: 2rem;
  margin-bottom: 2.3rem;
  background: linear-gradient(90deg, rgb(111, 132, 238), rgb(57, 182, 124), rgb(5, 60, 72), green, rgb(7, 7, 171), indigo, violet, rgb(177, 111, 238), rgb(111, 132, 238));
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text; 
  color: transparent; 
  animation: rainbow-border 11s linear infinite;
}

@keyframes rainbow-border {
  0% {
      background-position: 0%;
  }
  100% {
      background-position: 200%;
}
}

@media (min-width: 1024px) {
  .item {
    width: 50vh;
    background-color: rgb(10, 10, 10);
    padding: 1.5rem 3.5rem;
    margin: 0rem 0rem;
    border-left: 12px solid rgba(200, 200, 200, 0.3);
    border-right: 12px solid rgba(200, 200, 200, 0.3);
  }

}

@media print {

  h3 {
  color: #04701e;
  }
  
}
  
</style>
  