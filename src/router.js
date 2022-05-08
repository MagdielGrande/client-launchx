import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  //New feature
  {
    path: "/misioncomanders",
    name: "misioncomanders",
    component: () => import("./components/misioncomanderslist")
  },
  {
    path: "/addmc",
    name: "add-misioncomander",
    component: () => import("./components/AddMisionComander")
  },
  {
    path: "/misioncomanders/:id",
    name: "misioncomanders-details",
    component: () => import("./components/MissionComander")
  }
  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
