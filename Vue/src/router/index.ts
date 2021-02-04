import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "HOME",
        component: () =>
            import("../views/Home.vue")
    },
    {
        path: "/normal",
        name: "NORMAL",
        component: () =>
            import("../views/VueNormal.vue")
    },
    {
        path: "/ext",
        name: "EXT",
        component: () =>
            import("../views/VueWithLibs.vue")
    },
    {
        path: "/form",
        name: "FORM",
        component: () =>
            import("../views/Form.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;