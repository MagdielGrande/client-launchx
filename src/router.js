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
    component: () => import("./components/misioncomanderslist.vue")
  },
  {
    path: "/addmc",
    name: "add-misioncomander",
    component: () => import("./components/AddMisionComander")
  }
  
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
