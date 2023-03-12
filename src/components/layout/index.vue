<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar/index.vue'
</script>

<template>
  <div style="--sider-width:250px">
    <Sidebar />
    <div class="ml-$sider-width">
      <main class="h-screen">
        <div class="h-full overflow-auto">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>