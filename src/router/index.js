import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import("views/home/Home")
const Category = () => import("views/category/Category")
const Cart = () => import("views/cart/Cart")
const Profile = () => import("views/profile/Profile")

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/category',
    meta: {
      title: '分类'
    },
    component: Category
  },
  {
    path: '/cart',
    meta: {
      title: '购物车'
    },
    component: Cart
  },
  {
    path: '/profile',
    meta: {
      title: '我的'
    },
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  next()
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
