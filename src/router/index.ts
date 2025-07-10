/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";

const router = createRouter({
  history: createWebHistory("/trood-pm/"),
  extendRoutes: setupLayouts,
});

export default router;
