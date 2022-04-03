import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import router from "./router";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createPinia } from "pinia";
import { apolloClient } from "@/apollo";

createApp(App)
    .use(createPinia())
    .use(router)
    .provide(DefaultApolloClient, apolloClient)
    .mount("#app");
