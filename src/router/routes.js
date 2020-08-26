import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [ 
  {
    path: '/',
    // redirect:'/news'
    component: loadView('News'),
  },
  {
    path: '/news',
    component: loadView('News'),
  },
  {
    path: '/ask',
    component: loadView('Ask'),
  },
  {
    path: '/jobs',
    component: loadView('Jobs'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

function loadView(view) {
  return () =>
    import (`../components/${view}.vue`);
}

export default router
