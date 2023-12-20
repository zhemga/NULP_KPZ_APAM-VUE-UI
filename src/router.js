import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./views/home-page";

import AutoPartCategories from "./views/table-pages/auto-part-categories-page";
import AutoParts from "./views/table-pages/auto-parts-page";

import defaultLayout from "./layouts/side-nav-outer-toolbar";

const router = new createRouter({
  routes: [
    {
      path: "/home",
      name: "home",
      meta: {
        requiresAuth: false,
        layout: defaultLayout
      },
      component: HomePage
    },
    {
      path: "/auto-part-categories",
      name: "auto-part-categories-page",
      meta: {
        requiresAuth: false,
        layout: defaultLayout
      },
      component: AutoPartCategories
    },
    {
      path: "/auto-parts",
      name: "auto-parts-page",
      meta: {
        requiresAuth: false,
        layout: defaultLayout
      },
      component: AutoParts
    },
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/home"
    }
  ],
  history: createWebHashHistory()
});

export default router;
