// import { $Posts } from "@/myStore"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/*webpackPrefetch: true, webpackChunkName: "hm" */ "@/views/pages/Home.vue").then(m => m.default || m),
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/*webpackPrefetch: true, webpackChunkName: "abt" */ "@/views/pages/About.vue").then(m => m.default || m)
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import(/* webpackPrefetch: true, webpackChunkName: "cntct" */ "@/views/pages/Contact.vue").then(m => m.default || m)
  },
  {
    path: "/project-enquiry",
    name: "project-enquiry",
    component: () => import(/* webpackPrefetch: true, webpackChunkName: "prjenq" */ "@/views/pages/ProjectEnquiry.vue").then(m => m.default || m)
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("@/views/pages/Privacy.vue")
  },
  // {
  //   path: "/services",
  //   name: "services",
  //   component: () => import(/* webpackChunkName: "srvc" */ "@/views/pages/Services.vue")
  // },
  {
    path: "/401",
    name: "401",
    component: () => import(/* webpackPrefetch: true */"@/views/pages/ERRORS/401.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import(/* webpackPrefetch: true */"@/views/pages/ERRORS/404.vue")
  },
]

export default routes
