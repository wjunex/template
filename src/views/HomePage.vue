<template>
  <div class="container">
    <div class="menu">
      <div class="menu-group" v-for="(item, index) in menu" :key="index">
        <div class="menu-group-name">{{ item.name }}</div>
        <div class="flex align-items-center">
          <el-button
            type="primary"
            v-for="(ite, inx) in item.children"
            :key="inx"
            @click="$router.push({ path: ite.path })"
            >{{ ite.name }}</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const menu = ref([
    {
      name: "导航",
      children: [
        { name: "标签盒测试", path: "/label-box" },
        { name: "布局样式", path: "" },
      ],
    },
  ]);
</script>

<style scoped lang="scss">
  .container {
    padding: 20px;

    .menu {
      &-group {
        &-name {
          margin: 0 0 20px 0;
        }
      }
    }
  }
</style>
