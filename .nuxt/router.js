import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _409fdf0e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _aa91ac22 = () => interopDefault(import('..\\pages\\index2.vue' /* webpackChunkName: "pages/index2" */))
const _29ff5cea = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _526292e4 = () => interopDefault(import('..\\pages\\more.vue' /* webpackChunkName: "pages/more" */))
const _6b9cbb81 = () => interopDefault(import('..\\pages\\new\\index.vue' /* webpackChunkName: "pages/new/index" */))
const _61a69e30 = () => interopDefault(import('..\\pages\\project\\index.vue' /* webpackChunkName: "pages/project/index" */))
const _62462d67 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _1b14b5a1 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _4799a7e1 = () => interopDefault(import('..\\pages\\test2.vue' /* webpackChunkName: "pages/test2" */))
const _47a7bf62 = () => interopDefault(import('..\\pages\\test3.vue' /* webpackChunkName: "pages/test3" */))
const _47b5d6e3 = () => interopDefault(import('..\\pages\\test4.vue' /* webpackChunkName: "pages/test4" */))
const _47c3ee64 = () => interopDefault(import('..\\pages\\test5.vue' /* webpackChunkName: "pages/test5" */))
const _47d205e5 = () => interopDefault(import('..\\pages\\test6.vue' /* webpackChunkName: "pages/test6" */))
const _1e11061c = () => interopDefault(import('..\\pages\\project\\config.vue' /* webpackChunkName: "pages/project/config" */))
const _a8234088 = () => interopDefault(import('..\\pages\\continent\\_mountains.vue' /* webpackChunkName: "pages/continent/_mountains" */))
const _6057b9d3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _409fdf0e,
    name: "about"
  }, {
    path: "/index2",
    component: _aa91ac22,
    name: "index2"
  }, {
    path: "/login",
    component: _29ff5cea,
    name: "login"
  }, {
    path: "/more",
    component: _526292e4,
    name: "more"
  }, {
    path: "/new",
    component: _6b9cbb81,
    name: "new"
  }, {
    path: "/project",
    component: _61a69e30,
    name: "project"
  }, {
    path: "/signup",
    component: _62462d67,
    name: "signup"
  }, {
    path: "/test",
    component: _1b14b5a1,
    name: "test"
  }, {
    path: "/test2",
    component: _4799a7e1,
    name: "test2"
  }, {
    path: "/test3",
    component: _47a7bf62,
    name: "test3"
  }, {
    path: "/test4",
    component: _47b5d6e3,
    name: "test4"
  }, {
    path: "/test5",
    component: _47c3ee64,
    name: "test5"
  }, {
    path: "/test6",
    component: _47d205e5,
    name: "test6"
  }, {
    path: "/project/config",
    component: _1e11061c,
    name: "project-config"
  }, {
    path: "/continent/:mountains?",
    component: _a8234088,
    name: "continent-mountains"
  }, {
    path: "/",
    component: _6057b9d3,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
