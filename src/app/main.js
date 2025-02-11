/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Card from "primevue/card";

import axios from "axios";

import "primeicons/primeicons.css";
import "./assets/tailwind.css";

const app = createApp(App);
const pinia = createPinia();
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("Card", Card);

app.use(PrimeVue, {
  unstyled: false,
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "none",
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities",
      },
    },
  },
});

app.use(router);
app.use(PiniaVuePlugin);
app.use(pinia);

app.mount("#app");
