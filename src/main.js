import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupCalendar } from "v-calendar";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../firebase/firebase.config";
import { VueFire } from "vuefire";
const cors = require("cors");

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const app = createApp(App);
app.use(router).use(VueFire, { firebaseApp, modules: [] }).mount("#app");
app.use(cors());
app.use(setupCalendar, {});

export { db };
