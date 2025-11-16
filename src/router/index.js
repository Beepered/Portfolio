import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} from "vue-router";

import Home from "@pages/Home.vue";
import CtC from "@pages/CtC.vue";
import Fight from "@pages/Fight.vue";
import OtherProjects from "@pages/Other-Projects.vue";
import Funny from "@pages/Funny.vue";
import Secret from "@pages/Secret.vue";
import NotFound from "@pages/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/CtC",
    name: "CtC",
    component: CtC,
    meta: {
      backgroundColor: "#1f1f1fff",
    },
  },
  {
    path: "/Fight",
    name: "Fight",
    component: Fight,
  },
  {
    path: "/OtherProjects",
    name: "OtherProjects",
    component: OtherProjects,
  },
  {
    path: "/Funny",
    name: "Funny",
    component: Funny,
    meta: {
      backgroundColor: "#edededff",
    },
  },
  {
    path: "/Secret",
    name: "Secret",
    component: Secret,
    meta: {
      backgroundColor: "black",
    },
  },
  {
    path: "/:pathMatch(.*)",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
