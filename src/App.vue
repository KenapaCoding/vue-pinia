<script setup>
import { useCounterStore } from './stores/counter';
import { useCounterOptStore } from './stores/counterOpt';

const counter = useCounterOptStore();
</script>

<template>
  <div>
    <h3>count : {{ counter.count }}</h3>
    <h3>double count : {{ counter.doubleCount }}</h3>
    <button @click="counter.increment">Increse</button>
  </div>
</template>

<style scoped></style>
