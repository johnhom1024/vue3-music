<template>
  <div>
    HelloWorld

    {{ counter.count }}

    <a-button @click="onClickAdd">新增</a-button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store';

const counter = useCounterStore();

function onClickAdd() {
  counter.increment();
}

</script>

<style lang="scss" scoped>

</style>