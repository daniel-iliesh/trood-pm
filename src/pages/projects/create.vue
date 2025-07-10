<template>
  <v-container>
    <v-row class="align-center justify-space-between px-4">
      <h1>Creating Project</h1>
      <v-btn @click="submitNewProject"> Create project </v-btn>
    </v-row>
    <v-card class="mt-6 pb-6">
      <v-card-text>
        <v-row>
          <v-form class="w-100">
            <v-row>
              <v-col class="flex-grow-1">
                <div class="text-black input-lbl">Name</div>
                <v-text-field v-model="newProject.name" />
              </v-col>
              <v-col>
                <div class="text-black input-lbl">Field</div>
                <v-select :items="['Design', 'Development', 'Marketing']" />
              </v-col>
            </v-row>
            <v-row>
              <v-col class="flex-grow-1">
                <div class="text-black input-lbl">Experience</div>
                <v-text-field v-model="newProject.experience" />
              </v-col>
              <v-col>
                <div class="text-black input-lbl">Deadline</div>
                <v-date-input
                  input-format="dd.mm.yyyy"
                  v-model="newProject.deadline"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="text-black input-lbl">Description</div>
                <v-textarea v-model="newProject.description" />
              </v-col>
            </v-row>
          </v-form>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { createProject } from "@/api/projects";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();

const newProject: Ref<{
  name: string;
  experience: string;
  deadline: Date;
  description: string;
}> = ref({
  name: "",
  experience: "",
  deadline: new Date(),
  description: "",
});

const submitNewProject = async () => {
  try {
    const deadlineDate = newProject.value.deadline;
    const response = await createProject({
      ...newProject.value,
      deadline: (() => {
        const day = String(deadlineDate.getDate()).padStart(2, "0");
        const month = String(deadlineDate.getMonth() + 1).padStart(2, "0");
        const year = deadlineDate.getFullYear();
        return `${day}.${month}.${year}`;
      })(),
    });
    appStore.showSnackbar("Project loaded successfully");
    router.push("/projects/" + response.id);
  } catch (error) {
    console.error("Error creating project:", error);
  }
};
</script>

<style scoped>
.input-lbl {
  font-size: 18px;
  margin-bottom: 8px;
}
</style>
