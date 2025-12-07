<script setup>
import { useCounterStore } from './stores/counter';
import { useCounterOptStore } from './stores/counterOpt';
import { storeToRefs } from 'pinia';

const counter = useCounterStore();

const {count,mssg,doubleCount} = storeToRefs(counter)

const {increment} = counter;

function handleClick () {
  counter.$patch((state)=> {
    state.count++
    state.mssg = "hello"
  })
}

</script>

<template>
  <div>
    <h3>count : {{ count }}</h3>
    <p>mssg: {{ mssg }}</p>
    <h3>double count : {{ doubleCount }}</h3>
    <button @click="handleClick">Increse</button>
  </div>
</template>

<style scoped></style>
