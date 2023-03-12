<template>
  <div class="fixed top-0 left-0 h-full w-$sider-width bg-[rgb(var(--gray-2))]">
    <a-menu>
      <a-sub-menu v-for="menu in menuList" :key="menu.key">
        <template #icon><icon-apps></icon-apps></template>
        <template #title>
          <div>menu.title</div>
        </template>
        <a-menu-item v-for="menuItem in menu.subMenu" :key="menuItem.key">{{ menuItem.title }}</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const menuList = reactive([
  {
    title: '导航',
    key: '0',
    subMenu: [
      {
        title: '音乐列表',
        key: '0_0'
      }
    ]

  }
])
</script>

<style lang="scss" scoped></style>
