<template>
  <v-main class="h-100">
    <div
      class="main h-100 pa-16"
      :class="{ 'main-rounded-left': appStore.drawerOpen }"
    >
      <router-view />
    </div>
    <v-snackbar v-model="appStore.snackbar.show">
      {{ appStore.snackbar.text }}
    </v-snackbar>
  </v-main>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.main-rounded-left {
  border-top-left-radius: 16px;
}
.main {
  background-color: #f3f4f6;
}
</style>
