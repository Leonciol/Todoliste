import { createRouter, createWebHistory } from "@ionic/vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Todolist from "../views/TodoList.vue";

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: Login,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: Register,
  },
  {
    path: "/todolist",
    name: "TodolistPage",
    component: Todolist,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
