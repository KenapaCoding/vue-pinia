<script setup>
import { useCounterStore } from './stores/counter';
import { useCounterOptStore } from './stores/counterOpt';
import { storeToRefs } from 'pinia';

const counter = useCounterOptStore();

const {count,doubleCount} = storeToRefs(counter)

const {increment} = counter

</script>

<template>
  <div>
    <h3>count : {{ count }}</h3>
    <h3>double count : {{ doubleCount }}</h3>
    <button @click="increment">Increse</button>
  </div>
</template>

<style scoped></style>
