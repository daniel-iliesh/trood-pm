<template>
  <v-app-bar app flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click.prevent="appStore.toggleDrawer()"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class="py-10" height="40px">
      <router-link style="text-decoration: none; color: inherit" to="/">
        <h1 class="align-content-center">TROOD COMMUNITY</h1>
      </router-link>
    </v-app-bar-title>

    <template v-slot:append>
      <div class="d-flex align-center ga-2 mr-4">
        <div class="d-flex align-center">
          <v-btn color="#DBE3E1" icon="mdi-message"></v-btn>
          <v-btn color="#DBE3E1" icon="mdi-bell"></v-btn>
        </div>

        <div class="d-flex align-center ga-2">
          <v-avatar color="#DBE3E1"></v-avatar>
          <span color="#9CA3AF">Alex Smith</span>
        </div>
      </div>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss">
h1 {
  height: 40px;
  font-size: 24px;
}
</style>
