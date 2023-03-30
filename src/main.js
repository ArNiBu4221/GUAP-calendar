import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "@/firebase.config";
import { VueFire } from "vuefire";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const app = createApp(App);
app.use(router).use(VueFire, { firebaseApp, modules: [] }).mount("#app");

export { db };
