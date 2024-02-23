import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import FaqsPage from '@/views/FaqsPage.vue'
import NotFound from '@/views/NotFoundPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import SignInPage from '@/views/SignInPage.vue'
import WishListPage from '@/views/WishListPage.vue'
import ShoppingCartPage from '@/views/ShoppingCartPage.vue'
import ProductPage from '@/views/ProductPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import TheOrderHistory from '@/components/TheOrderHistory.vue'
import TheDashboard from '@/components/TheDashboard.vue'
import ProductDetalizedPage from '@/views/ProductDetalizedPage.vue'
import CheckoutPage from '@/views/CheckoutPage.vue'
import OrderDetailsPage from '@/views/OrderDetailsPage.vue'

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
      path: '/account/create-account',
      name: 'sign-up',
      component: SignUpPage
    },
    {
      path: '/account/order-history/details/:id',
      name: 'order-details',
      component: OrderDetailsPage
    },
    {
      path: '/category/:category/:title',
      name: 'product-detalized',
      component: ProductDetalizedPage
    },
    {
      path: '/account/order-history',
      name: 'orders',
      component: TheOrderHistory
    },
    {
      path: '/account/login',
      name: 'sign-in',
      component: SignInPage
    },
    {
      path: '/account/dashboard',
      name: 'dashboard',
      component: TheDashboard
    },
    {
      path: '/shopping-cart',
      name: 'cart',
      component: ShoppingCartPage
    },

    {
      path: '/wish-list',
      name: 'wish-list',
      component: WishListPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/product/:title',
      name: 'product',
      component: ProductPage
    },
    {
      path: '/shopping-cart/checkout',
      name: 'checkout',
      component: CheckoutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
