<script setup lang="ts">
  import { useMouse, useDark, useTitle, debounceFilter } from "@vueuse/core";
  const { x, y } = useMouse({ eventFilter: debounceFilter(100) });
  const isDark = useDark();
  
</script>

<template>
  <div>useMouse(鼠标位置): {{ x }}, {{ y }}</div>
  <div>useDark(黑暗模式): {{ isDark }}</div>
  <div>
    useTitle(修改标题):
    <a @click="useTitle('标题修改测试')">修改标题为：标题修改测试</a>
  </div>
</template>

<style lang="scss" scoped></style>
