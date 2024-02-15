import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import FaqsPage from '@/views/FaqsPage.vue'
import NotFound from '@/views/NotFoundPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import SignInPage from '@/views/SignInPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/main',
      redirect: '/'
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: FaqsPage,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpPage
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInPage
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
