<template>
  <v-card @click.stop :to="`/projects/${project.id}`">
    <v-card-title class="d-flex align-center justify-space-between">
      <span>
        {{ project.name }}
      </span>
      <span class="text-subtitle-2 d-flex ga-2">
        <v-icon>mdi-calendar</v-icon>
        <span>
          {{ project.deadline }}
        </span>
      </span>
    </v-card-title>
    <v-card-text>{{ project.description }}</v-card-text>
    <v-card-actions class="justify-space-between">
      <div class="d-flex align-center ga-2">
        <v-icon>mdi-account</v-icon>
        {{ project.name }}
      </div>
      <div class="d-flex align-center">
        <v-btn
          color="#DBE3E1"
          icon="mdi-message"
          @click.prevent
          size="md"
        ></v-btn>
        <v-btn color="#DBE3E1" icon="mdi-bell" @click.prevent size="md"></v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { Project } from "@/api/dtos";

defineProps<{
  project: Project;
}>();
</script>
