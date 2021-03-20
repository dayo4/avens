

const routes = [
    {
        path: '/manage-settings',
        name: 'manage-settings',
        component: () => import(/* webpackChunkName: "stns" */ '@/views/settings/Settings.vue').then(m => m.default || m),
        meta: { userOnly: true }
    }
]

export default routes