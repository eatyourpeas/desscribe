import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DragAndDrop from "../views/DragAndDrop.vue";
import Autocomplete from "../views/Autocomplete.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/draganddrop",
    name: "Drag and Drop",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DragAndDrop,
  },
  {
    path: "/autocomplete",
    name: "Autocomplete",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Autocomplete,
  },
];
const router = createRouter({
  history: createWebHistory("http://localhost/"),
  routes,
});
export default router;
