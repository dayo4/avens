const routes = [
  {
    path: "/admin-dashboard",
    component: () => import("@/views/admin/Index.vue").then(m => m.default || m),

    children: [
      {
        path: "",
        name: "admin-dashboard",
        component: () => import(/* webpackChunkName: "dsh" */ "@/views/admin/Dashboard.vue").then(m => m.default || m)
      },
    ]
  }
]

export default routes.map(route => {
  return { ...route, meta: { adminOnly: true } }
})
