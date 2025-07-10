<template>
  <v-container v-if="project && !loading">
    <v-row class="align-center justify-space-between px-4">
      <h1>{{ project.name }}</h1>
      <div class="d-flex ga-2">
        <v-btn @click="submitProjectUpdate"> Save </v-btn>
        <v-btn :to="`/projects/${project.id}`"> Cancel </v-btn>
      </div>
    </v-row>
    <v-card class="mt-6 pb-6">
      <v-card-text>
        <v-row>
          <v-form class="w-100">
            <v-row>
              <v-col class="flex-grow-1">
                <div class="text-black input-lbl">Name</div>
                <v-text-field v-model="project.name" />
              </v-col>
              <v-col>
                <div class="text-black input-lbl">Field</div>
                <v-select :items="['Design', 'Development', 'Marketing']" />
              </v-col>
            </v-row>
            <v-row>
              <v-col class="flex-grow-1">
                <div class="text-black input-lbl">Experience</div>
                <v-text-field v-model="project.experience" />
              </v-col>
              <v-col>
                <div class="text-black input-lbl">Deadline</div>
                <v-date-input v-model="project.deadline" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="text-black input-lbl">Description</div>
                <v-textarea v-model="project.description" />
              </v-col>
            </v-row>
          </v-form>
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
import { getProject, updateProject } from "@/api/projects";
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router/auto";

const route = useRoute("/projects/[id]/edit");
const router = useRouter();
const project = ref<Project | null>(null);
const loading = ref(false);

const submitProjectUpdate = async () => {
  try {
    loading.value = true;
    await updateProject(project.value!.id, project.value!);
    await router.push("/projects");
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  try {
    loading.value = true;
    const id = parseInt(route.params.id);
    if (id) {
      const response = await getProject(id);
      project.value = response;
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>
