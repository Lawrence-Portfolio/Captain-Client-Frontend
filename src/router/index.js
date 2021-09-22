import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/index'),
    meta: {
      layout: 'default'
    },
    children: [

    ]
  },
  {
    path: '/project-:id',
    name: 'project',
    component: () => import('@/pages/project/index'),
    meta: {
      layout: 'default'
    },
    children: [
      {
        path: 'board',
        name: 'board',
        component: () => import('@/pages/project/board'),
        meta: {
          layout: 'default'
        }
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/pages/project/list'),
        meta: {
          layout: 'default'
        }
      },
      {
        path: 'timeline',
        name: 'timeline',
        component: () => import('@/pages/project/timeline'),
        meta: {
          layout: 'default'
        }
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: () => import('@/pages/project/calendar'),
        meta: {
          layout: 'default'
        }
      }
    ]
  },
  {
    path: '/team-:id',
    name: 'team',
    component: () => import('@/pages/team/index.vue'),
    meta: {
      layout: 'default'
    },
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: () => import('@/pages/team/overview'),
        meta: {
          layout: 'default'
        }
      },
      {
        path: 'messages',
        name: 'messages',
        component: () => import('@/pages/team/messages'),
        meta: {
          layout: 'default'
        }
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: () => import('@/pages/team/calendar'),
        meta: {
          layout: 'default'
        }
      }
    ]
  },
  {
    path: '/auth/sign-in',
    name: 'sign-in',
    component: () => import('@/pages/auth/sign-in.vue'),
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/auth/sign-up',
    name: 'sign-up',
    component: () => import('@/pages/auth/sign-up.vue'),
    meta: {
      layout: 'auth'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
