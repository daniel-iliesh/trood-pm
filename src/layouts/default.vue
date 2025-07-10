<template>
  <v-app full-height>
    <DefaultBar />
    <DefaultSidebar />
    <DefaultView />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from "./default/AppBar.vue";
import DefaultSidebar from "./default/Sidebar.vue";
import DefaultView from "./default/View.vue";
</script>
