import VueRouter from 'vue-router';

const routes = [
    {
        path: '/tempo-tracker/',
        component: () => import('@/components/pages/SongList.vue'),
    },
    {
        path: '/song/:song',
        component: () => import('@/components/pages/Song.vue'),
        props: true,
    },
    {
        path: '/tempo-tap',
        component: () => import('@/components/pages/TempoTap.vue'),
    },
    
];

// Initialize our router
const router = new VueRouter({
    routes,
    mode: 'history'
})

// router.beforeEach(async (to, from, next) => {

//     // const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//     // const decide = () => {
//     //     if (requiresAuth && !store.state.user) {
//     //         next('/denied');
//     //     }
//     //     else {
//     //         next();
//     //     }
//     // }

//     // If we don't have the user yet, dispatch our Vuex authUser action
//     // if (store.state.user === null) {
//     //     store.dispatch('authUser').then(() => {
//     //         decide();
//     //     });
//     // } else {
//     //     decide();
//     // }

// });


export default router;