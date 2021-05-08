import { $Profile } from "@/myStore"
import { $Notify } from '@/plugins'


const routes = [
    {
        // path: '/profile/:username(^adedayo$)',
        path: '/profile/:username',
        component: () => import(/* webpackPrefetch: true */'@/views/profile/Index.vue').then(m => m.default || m),
        // alias: '/:username',
        meta: { layout: "ProfileLayout" },
        children: [
            {
                path: '',
                name: 'user-profile',
                component: () => import(/*webpackPrefetch: true, webpackChunkName: "prf" */ '@/views/profile/Profile.vue').then(m => m.default || m),
                meta: { layout: "ProfileLayout" },
                beforeEnter: (to, from, next) => {
                    // const profile: any = $Profile.data as object
                    // const fetched = profile && profile.username === to.params.username
                    // if (fetched)
                    // {
                    //     next()
                    // }
                    // else
                    // {
                    $Profile.fetch({
                        username: to.params.username
                    }).then((loaded) => {
                        // if (fetched)
                        // {
                        next()
                        // } else
                        // {
                        //     // $Notify.error('A connection error occured')
                        //     next(false)
                        // }
                        if (!loaded)
                        {
                            $Notify.error('unable to connect')
                        }
                    })
                    // }
                }
            },
        ]
    },
]

export default routes