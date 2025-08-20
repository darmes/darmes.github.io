import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/skills',
      name: 'skills',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/SkillsView.vue'),
      // Can't use lazy loading and still have direct URLs :(
      component: SkillsView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

const routeRanks = router.getRoutes().map((val, idx) => {
  return {
    name: val.name?.toString(),
    idx: idx,
  }
})

function getRouteRank(name: string) {
  return routeRanks.findIndex((obj) => obj.name === name)
}

router.afterEach((to, from) => {
  const toRank = getRouteRank(to.name?.toString() || '')
  const fromRank = getRouteRank(from.name?.toString() || '')
  to.meta.transition = toRank < fromRank ? 'slide-right' : 'slide-left'
})

export default router
