/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VDateInput } from "vuetify/labs/VDateInput";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";

const troodLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242",
    "on-surface-variant": "#EEEEEE",
    primary: "#c2c5cb",
    "primary-darken-1": "#1F5592",
    secondary: "#48A9A6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
  variables: {
    "border-color": "#000000",
    "border-opacity": 0.12,
    "high-emphasis-opacity": 0.87,
    "medium-emphasis-opacity": 0.6,
    "disabled-opacity": 0.38,
    "idle-opacity": 0.04,
    "hover-opacity": 0.1,
    "focus-opacity": 0.12,
    "selected-opacity": 0.08,
    "activated-opacity": 0.12,
    "pressed-opacity": 0.12,
    "dragged-opacity": 0.08,
    "theme-kbd": "#212529",
    "theme-on-kbd": "#FFFFFF",
    "theme-code": "#F5F5F5",
    "theme-on-code": "#000000",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDateInput,
  },
  defaults: {
    VList: {
      VListItem: {
        class: "rounded-lg",
      },
    },
    VBtn: {
      class: "rounded-xl",
      style: [{ textTransform: "none" }],
      variant: "flat",
      size: "x-large",
      color: "primary",
    },
    VIcon: {
      color: "primary",
    },
    VCard: {
      class: "rounded-xl pa-8 pb-2",
      variant: "flat",
      color: "surface",
      VCardTitle: {
        class: "text-h5 font-weight-bold",
      },
    },
    VTextField: {
      class: "rounded-xl",
      variant: "outlined",
      color: "primary",
    },
    VSelect: {
      class: "rounded-xl",
      variant: "outlined",
      color: "primary",
    },
    VTextarea: {
      class: "rounded-xl",
      variant: "outlined",
      color: "primary",
    },
    VDateInput: {
      class: "rounded-xl",
      variant: "outlined",
      color: "primary",
      prependIcon: "",
    },
  },
  theme: {
    defaultTheme: "troodLightTheme",
    themes: {
      troodLightTheme,
    },
  },
});
