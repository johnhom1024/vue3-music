<template>
  <layout-container>
    <div>
      HelloWorld
  
      {{ counter.count }}
  
      <a-button @click="onClickAdd">新增</a-button>
    </div>
  </layout-container>
</template>

<script setup lang="ts">
import LayoutContainer from '@/components/layout/LayoutContainer/index.vue';
import { useCounterStore } from '@/store';

const counter = useCounterStore();

function onClickAdd() {
  counter.increment();
}

</script>

<style lang="scss" scoped>

</style>