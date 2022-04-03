<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
    const html = document.querySelector("html");
    html!.setAttribute("data-theme", "dark");
});
</script>

<style></style>
