import admin from "./admin"
// import auth from "./auth"
import users from "./users"
import pages from "./pages"
import posts from "./posts"
// import message from "./message"
import settings from "./settings"
// import notifications from "./notifications"

/* OTHER FEATURES */
import gallery from "./gallery"

const NotFound = () => import("@/views/pages/ERRORS/404.vue").then(m => m.default || m)

export default [
    ...admin,
    // ...auth,
    ...users,
    ...pages,
    ...posts,
    ...settings,
    // ...gallery,
    { path: '/:pathMatch(.*)*', component: NotFound }
]
