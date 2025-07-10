<template>
  <v-container>
    <!-- Section -->
    <v-row class="flex-column">
      <v-row class="align-center justify-space-between px-4">
        <h1>Active projects</h1>
        <v-btn to="/projects/create"> Create project </v-btn>
      </v-row>

      <v-row class="flex-wrap mt-6">
        <v-col
          class="card-col"
          v-for="project in projects.filter((p) => {
            const currDate = new Date(
              p.deadline.split('.').reverse().join('.'),
            ).getTime();
            return Date.now() < currDate;
          })"
          :key="project.id"
        >
          <ProjectCard :project="project" />
        </v-col>
      </v-row>
    </v-row>
    <!-- End Section -->
    <v-row class="flex-column mt-12">
      <v-row class="align-center justify-space-between px-4">
        <h1>Passed projects</h1>
      </v-row>

      <v-row class="flex-wrap mt-6">
        <v-col
          class="card-col"
          v-for="project in projects.filter((p) => {
            const currDate = new Date(
              p.deadline.split('.').reverse().join('.'),
            ).getTime();
            return Date.now() > currDate;
          })"
          :key="project.id"
        >
          <ProjectCard :project="project" />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from "vue";
import { getProjects } from "@/api/projects";
import { Project } from "@/api/dtos";
import ProjectCard from "@/components/ProjectCard.vue";

const projects: Ref<Project[]> = ref([]);
const loading = ref(false);

onMounted(() => {
  loading.value = true;
  getProjects()
    .then((res) => {
      projects.value = res;
    })
    .finally(() => {
      loading.value = false;
    });
});
</script>

<style scoped>
.card-col {
  min-width: 400px;
}

@media (min-width: 912px) {
  .card-col {
    max-width: 50%;
  }
}
</style>
