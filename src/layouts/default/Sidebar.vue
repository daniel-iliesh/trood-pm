<template>
  <v-navigation-drawer
    v-model="appStore.drawerOpen"
    border="none"
    class="pl-10 pr-8 d-flex justify-between"
  >
    <v-list nav>
      <v-list-item
        active-class="nav-li"
        title="Main page"
        to="/"
        link
      ></v-list-item>
      <v-list-item
        active-class="nav-li"
        title="Projects"
        to="/projects"
        link
      ></v-list-item>
      <v-list-item
        active-class="nav-li"
        title="Vacancies"
        to="/vacancies"
        link
      ></v-list-item>
      <v-list-item active-class="nav-li" title="People" link></v-list-item>
      <v-list-item active-class="nav-li" title="Tests" link></v-list-item>
      <v-list-item active-class="nav-li" title="Settings" link></v-list-item>
    </v-list>
    <v-list>
      <v-list-item color="error" title="Logout" link></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
$primary: #c2c5cb;

.nav-li {
  background-color: $primary;
  color: #fff;
}
</style>
