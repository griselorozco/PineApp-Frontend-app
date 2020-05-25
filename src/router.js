import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/home/Index"),
      children: [
        {
          name: "Welcome",
          path: "welcome",
          component: () => import("@/views/home/Welcome")
        }
      ]
    },
    {
      path: "/pages",
      component: () => import("@/views/pages/Index"),
      children: [
        {
          name: "Login",
          path: "login",
          component: () => import("@/views/pages/Login")
        },
        {
          name: "Register",
          path: "register",
          component: () => import("@/views/pages/Register")
        }
      ]
    },
    {
      path: "/app",
      component: () => import("@/views/container/Index"),
      children: [
        // Dashboard
        {
          name: "Dashboard",
          path: "",
          component: () => import("@/views/container/Dashboard")
        },
        // Pages
        {
          name: "RTL",
          path: "pages/rtl",
          component: () => import("@/views/container/pages/Rtl")
        },
        {
          name: "User Profile",
          path: "pages/user",
          component: () => import("@/views/container/pages/UserProfile")
        },
        {
          name: "Create Post",
          path: "pages/create_post",
          component: () => import("@/views/container/pages/CreatePost")
        },
        {
          name: "Timeline",
          path: "pages/timeline",
          component: () => import("@/views/container/pages/Timeline")
        },
        // Components
        {
          name: "Buttons",
          path: "components/buttons",
          component: () => import("@/views/container/component/Buttons")
        },
        {
          name: "Grid System",
          path: "components/grid-system",
          component: () => import("@/views/container/component/Grid")
        },
        {
          name: "Tabs",
          path: "components/tabs",
          component: () => import("@/views/container/component/Tabs")
        },
        {
          name: "Notifications",
          path: "components/notifications",
          component: () => import("@/views/container/component/Notifications")
        },
        {
          name: "Icons",
          path: "components/icons",
          component: () => import("@/views/container/component/Icons")
        },
        {
          name: "Typography",
          path: "components/typography",
          component: () => import("@/views/container/component/Typography")
        },
        // Forms
        {
          name: "Regular Forms",
          path: "forms/regular",
          component: () => import("@/views/container/forms/RegularForms")
        },
        {
          name: "Extended Forms",
          path: "forms/extended",
          component: () => import("@/views/container/forms/ExtendedForms")
        },
        {
          name: "Validation Forms",
          path: "forms/validation",
          component: () => import("@/views/container/forms/ValidationForms")
        },
        {
          name: "Wizard",
          path: "forms/wizard",
          component: () => import("@/views/container/forms/Wizard")
        },
        // Tables
        {
          name: "Regular Tables",
          path: "tables/regular-tables",
          component: () => import("@/views/container/tables/RegularTables")
        },
        {
          name: "Extended Tables",
          path: "tables/extended-tables",
          component: () => import("@/views/container/tables/ExtendedTables")
        },
        {
          name: "Data Tabels",
          path: "tables/data-tables",
          component: () => import("@/views/container/tables/DataTables")
        },
        // Maps
        {
          name: "Google Maps",
          path: "maps/google-maps",
          component: () => import("@/views/container/maps/GoogleMaps")
        },
        {
          name: "Full Screen Map",
          path: "maps/full-screen-map",
          component: () => import("@/views/container/maps/FullScreenMap")
        },
        // Root level
        {
          name: "Widgets",
          path: "widgets",
          component: () => import("@/views/container/Widgets")
        },
        {
          name: "Charts",
          path: "charts",
          component: () => import("@/views/container/Charts")
        },
        {
          name: "Calendar",
          path: "calendar",
          component: () => import("@/views/container/Calendar")
        }
      ]
    },
    {
      path: "*",
      component: () => import("@/views/pages/Index"),
      children: [
        {
          name: "404 Error",
          path: "",
          component: () => import("@/views/pages/Error")
        }
      ]
    }
  ]
});
