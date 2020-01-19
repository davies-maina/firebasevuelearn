import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from '../components/Chat/Welcome.vue';
import AddSmoothie from '../components/AddSmoothie.vue';
import EditSmoothie from '../components/EditSmoothie.vue';
import Chat from '../components/Chat/Chat.vue';
import Gmap from '../components/Home/Gmap.vue';
import Signup from '../components/Auth/SignUp.vue';
import Login from '../components/Auth/Login.vue';

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Gmap",
        component: Gmap
    },

    {
        path: "/signup",
        name: "Signup",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Signup
    },
    {
        path: "/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Login
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
    },
    {
        path: "/chat",
        name: "Chat",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Chat,
        props: true,
        beforeEnter: (to, from, next) => {
            if (to.params.name) {
                next()
            } else {
                next({ name: 'Welcome' })
            }
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;