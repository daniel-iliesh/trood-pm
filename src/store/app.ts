// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    drawerOpen: true,
    snackbar: {
      text: "",
      show: false,
    },
  }),
  actions: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    showSnackbar(text: string) {
      this.snackbar.text = text;
      this.snackbar.show = true;
    },
  },
});
