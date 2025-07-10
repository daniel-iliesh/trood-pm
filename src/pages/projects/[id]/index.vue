<template>
  <v-container v-if="project && !loading">
    <v-row class="align-center justify-space-between px-4">
      <h1>{{ project.name }}</h1>
      <div class="d-flex ga-2">
        <v-btn :to="`/projects/${project.id}/edit`">Edit Project</v-btn>
        <v-btn @click="deleteTheProject"> Delete project </v-btn>
      </div>
    </v-row>
    <v-card class="mt-6 pb-6">
      <v-card-text>
        <v-row>
          <v-col class="d-flex flex-column">
            <span class="text-subtitle-1font-weight-bold text-grey">
              Description
            </span>
            <span class="text-h6">{{ project.description }}</span>
          </v-col>
          <v-col class="d-flex flex-column ga-4 align-center">
            <div>
              <span class="text-subtitle-1font-weight-bold text-grey">
                Deadline
              </span>
              <div class="d-flex align-center ga-2">
                <v-icon>mdi-calendar</v-icon>
                <span class="text-subtitle-1">{{ project.deadline }}</span>
              </div>
            </div>
            <div>
              <span class="text-subtitle-1font-weight-bold text-grey">
                Experience
              </span>
              <div class="d-flex align-center ga-2">
                <v-icon>mdi-sort-clock-descending</v-icon>
                <span class="text-subtitle-1">{{ project.experience }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn> Add vacancy </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
  <v-container v-else-if="!loading && !project">
    <v-row>
      <v-col>
        <v-alert prominent color="error">404 - Not Found</v-alert>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-row>
      <v-col>
        <v-skeleton-loader type="card"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { Project } from "@/api/dtos";
import { getProject } from "@/api/projects";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { deleteProject } from "@/api/projects";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const route = useRoute("/projects/[id]/");
const router = useRouter();
const project = ref<Project | null>(null);
const loading = ref(false);

const deleteTheProject = async () => {
  try {
    if (!project.value) return;
    await deleteProject(project.value.id);
    appStore.showSnackbar("Successfully deleted project");
    router.push("/projects");
  } catch (error) {
    appStore.showSnackbar("Failed to delete project");
  }
};

onMounted(async () => {
  try {
    loading.value = true;
    const id = parseInt(route.params.id);
    if (!id) return;

    const response = await getProject(id);
    project.value = response;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>
