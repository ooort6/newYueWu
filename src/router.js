import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Advertisement from './views/Advertisement.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
},
  routes: [
    {
      path: '/',
      name: 'advertisement',
      component: Advertisement
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
        {
      path: '/case',
      name: 'case',
      component: () => import(/* webpackChunkName: "about" */ './views/Case.vue')
    },
    {
      path: '/successcase',
      name: 'successcase',
      component: () => import(/* webpackChunkName: "about" */ './views/SuccessCase.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/solution',
      name: 'solution',
      component: () => import(/* webpackChunkName: "about" */ './views/Solution.vue')
    },
    {
      path: '/f_solution',
      name: 'f_solution',
      component: () => import(/* webpackChunkName: "about" */ './views/FSolution.vue')
    },
    {
      path: '/z_solution',
      name: 'z_solution',
      component: () => import(/* webpackChunkName: "about" */ './views/ZSolution.vue')
    },
    // {
    //   path: '/case',
    //   name: 'case',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Case.vue')
    // },
    // {
    //   path: '/cooperation',
    //   name: 'cooperation',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Cooperation.vue')
    // },
    // {
    //   path: '/aboutus',
    //   name: 'aboutus',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Aboutus.vue')
    // },
    // {
    //   path: '/download',
    //   name: 'download',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Download.vue')
    // },
    // {
    //   path: '/protect',
    //   name: 'protect',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Protect.vue')
    // },
    // {
    //   path: '/inteldns',
    //   name: 'inteldns',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Inteldns.vue')
    // },
    // {
    //   path: '/erpxt',
    //   name: 'erpxt',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Erpxt.vue')
    // },
    // {
    //   path: '/examine',
    //   name: 'examine',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Examine.vue')
    // },
    // {
    //   path: '/integrated',
    //   name: 'integrated',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Integrated.vue')
    // },
    // {
    //   path: '/others',
    //   name: 'others',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Others.vue')
    // },
    // {
    //   path: '/networkda',
    //   name: 'networkda',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Networkda.vue')
    // },
    // {
    //   path: '/contentda',
    //   name: 'contentda',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Contentda.vue')
    // },
    // {
    //   path: '/businessda',
    //   name: 'businessda',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Businessda.vue')
    // },
    // {
    //   path: '/Presale',
    //   name: 'Presale',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Presale.vue')
    // },
   
    // {
    //   path: '/Aftersale',
    //   name: 'Aftersale',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Aftersale.vue')
    // },
    // {
    //   path: '/Wwcooper',
    //   name: 'Wwcooper',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Wwcooper.vue')
    // },
    // {
    //   path: '/Consultation',
    //   name: 'Consultation',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Consultation.vue')
    // },
    // {
    //   path: '/Pspartners',
    //   name: 'Pspartners',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Pspartners.vue')
    // },
    // {
    //   path: '/SupplyPartners',
    //   name: 'SupplyPartners',
    //   component: () => import(/* webpackChunkName: "about" */ './views/SupplyPartners.vue')
    // },
    // {
    //   path: '/AfterConsultation',
    //   name: 'AfterConsultation',
    //   component: () => import(/* webpackChunkName: "about" */ './views/AfterConsultation.vue')
    // },
    // {
    //   path: '/formDemo',
    //   name: 'formDemo',
    //   component: () => import(/* webpackChunkName: "about" */ './views/formDemo.vue')
    // },

    
    



    
     

    
    
  ]
  
})

