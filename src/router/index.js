import Vue from "vue";
import VueRouter from "vue-router";
import Index from '../components/Index.vue';
import AddSmoothie from '../components/AddSmoothie.vue';
import EditSmoothie from '../components/EditSmoothie.vue';

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Index",
        component: Index
    },
    {
        path: "/add-smoothie",
        name: "AddSmoothie",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AddSmoothie
    },
    {
        path: "/edit-smoothie/:smoothie_slug",
        name: "EditSmoothie",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: EditSmoothie
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;