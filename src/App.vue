<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Layout from '@/components/layout/index.vue';
</script>

<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>
