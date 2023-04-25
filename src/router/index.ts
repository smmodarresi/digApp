import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
//import { isLoggedIn } from "../service/AuthService";
// import { isSetup } from "../service/UserService";

import Login from "../views/Unauthenticated/Login.vue";
import Register from "../views/Unauthenticated/Register.vue";
import ForgotPassword from "../views/Unauthenticated/ForgotPassword.vue";
import ResetPassword from "../views/Unauthenticated/ResetPassword.vue";
// import Profile from "../views/User/Profile.vue";
import Settings from "../views/User/Settings.vue";
import Setup from "../views/User/Setup.vue";
import Profile from "../views/tabs/Profile/Profile.vue";
import Monitoring from "../views/tabs/Monitoring/Monitoring.vue";
// import database from "../helper/DataBase.vue";
import Cartable from "../views/tabs/Cartable/Cartable.vue";
import FollowUp from "../views/tabs/FollowUp/FollowUp.vue";
import DashBoard from "../views/tabs/DashBoard/DashBoard.vue";


import Home from "../views/tabs/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/setup",
  },
  {
    path: "/Cartable",
    name: "Cartable",
    component: Cartable,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      forVisitor: true,
      mode: "Citizen"
    }
  },
  {
    name: "LoginEng",
    path: "/loginEng",
    component: Login,
    meta: {
      forVisitor: true,
      mode: "Eng"
    }
  },
  {
    name: "loginCp",
    path: "/loginCP",
    component: Login,
    meta: {
      forVisitor: true,
      mode: "Company"
    }
  },
  {
    name: "loginArzyab",
    path: "/loginArzyab",
    component: Login,
    meta: {
      forVisitor: true,
      mode: "Arzyab"
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/forgotPassword",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/resetPassword",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/tabs",
    component: Home,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        redirect: "Cartable",
      },
      {
        path: "Profile",
        name: "Profile",
        component: Profile,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "Monitoring",
        name: "Monitoring",
        component: Monitoring,
        meta: {
          requiresAuth: true,
        }
        },
      // {
      //   path: "database",
      //   name: "database",
      //   component: database,
      //   meta: {
      //     requiresAuth: true,
      //   },
      // },
      {
        path: "Cartable",
        name: "Cartable",
        component: Cartable,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "FollowUp",
        name: "FollowUp",
        component: FollowUp,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "DashBoard",
        name: "DashBoard",
        component: DashBoard,
        meta: {
          requiresAuth: true,
        },
      },
     
    ],
  },
 
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/setup",
    name: "Setup",
    component: Setup,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
