import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/Home')
const Production = () => import('@/views/Production')
const ThreeNav = () => import('@/views/ThreeNav')
const FourNav = () => import('@/views/FourNav')
const FiveNav = () => import('@/views/FiveNav')
const Demo = () => import('@/views/Demo')

//面向研究人员
const ProductionBrain = () => import('@/components/production/ProductionBrain.vue')
const Production2 = () => import('@/components/production/Production2.vue')
const Production3 = () => import('@/components/production/Production3.vue')
const Production4 = () => import('@/components/production/Production4.vue')
const Production5 = () => import('@/components/production/Production5.vue')
const Production6 = () => import('@/components/production/Production6.vue')

// 面向产业界
const Industry = () => import('@/views/Industry')
const industry1 = () => import('@/components/industry/industry1.vue')
const industry2 = () => import('@/components/industry/industry2.vue')
const industry3 = () => import('@/components/industry/industry3.vue')
const industry4 = () => import('@/components/industry/industry4.vue')

//面向创业团队
const Entrepreneurship = () => import('@/views/Entrepreneurship')
const entrepreneurship1 = () => import('@/components/entrepreneurship/entrepreneurship1.vue')
const entrepreneurship2 = () => import('@/components/entrepreneurship/entrepreneurship2.vue')
const entrepreneurship3 = () => import('@/components/entrepreneurship/entrepreneurship3.vue')
const entrepreneurship4 = () => import('@/components/entrepreneurship/entrepreneurship4.vue')

//科技创新
const Innovate = () => import('@/views/Innovate')
const innovate1 = () => import('@/components/innovate/innovate1.vue')
const innovate2 = () => import('@/components/innovate/innovate2.vue')
const innovate3 = () => import('@/components/innovate/innovate3.vue')
const innovate4 = () => import('@/components/innovate/innovate4.vue')
const innovate5 = () => import('@/components/innovate/innovate5.vue')
const innovate6 = () => import('@/components/innovate/innovate6.vue')

//新闻动态
const NewsInfo = () => import('@/views/NewsInfo')
const newsInfo1 = () => import('@/components/newsInfo/newsInfo1.vue')
const newsInfo2 = () => import('@/components/newsInfo/newsInfo2.vue')

//关于我们
const AboutUs = () => import('@/views/AboutUs')
const aboutUs1 = () => import('@/components/aboutUs/aboutUs1.vue')
const aboutUs2 = () => import('@/components/aboutUs/aboutUs2.vue')
const aboutUs3 = () => import('@/components/aboutUs/aboutUs3.vue')

const ReportList = () => import('@/components/report_list/index.vue')
const NewsDetails = () => import('@/components/report_list/NewsDetails.vue')
const NewsDetailsTwo = () => import('@/components/report_list/NewsDetailsTwo.vue')
const Realize = () => import('@/components/realize/index.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/production',
    component:Production,
    children:[
      {
        path:'1',
        component:ProductionBrain
      },
      {
        path:'2',
        component:Production2
      },
      {
        path:'3',
        component:Production3
      },
      {
        path:'4',
        component:Production4
      },
      {
        path:'5',
        component:Production5
      },
      {
        path:'6',
        component:Production6
      },
    ]
  },
  {
    path:'/innovate',
    component:Innovate,
    children:[
      {
        path:'1',
        component:innovate1
      },
      {
        path:'2',
        component:innovate2
      },
      {
        path:'3',
        component:innovate3
      },
      {
        path:'4',
        component:innovate4
      },
      {
        path:'5',
        component:innovate5
      },
      {
        path:'6',
        component:innovate6
      },
    ]
  },
  {
    path:'/industry',
    component:Industry,
    children:[
      {
        path:'1',
        component:industry1
      },
      {
        path:'2',
        component:industry2
      },
      {
        path:'3',
        component:industry3
      },
      {
        path:'4',
        component:industry4
      }
    ]
  },
  {
    path:'/entrepreneurship',
    component:Entrepreneurship,
    children:[
      {
        path:'1',
        component:entrepreneurship1
      },
      {
        path:'2',
        component:entrepreneurship2
      },
      {
        path:'3',
        component:entrepreneurship3
      },
      {
        path:'4',
        component:entrepreneurship4
      }
    ]
  },
  {
    path:'/newsInfo',
    component:NewsInfo,
    children:[
      {
        path:'1',
        component:newsInfo1
      },
      {
        path:'2',
        component:newsInfo2
      },
    ]
  },
  {
    path:'/aboutUs',
    component:AboutUs,
    children:[
      {
        path:'1',
        component:aboutUs1
      },
      {
        path:'2',
        component:aboutUs2
      },
      {
        path:'3',
        component:aboutUs3
      },
    ]
  },
  {
    path:'/demo',
    component:Demo
  },
  {
    path:'/news_detail/1',
    component:NewsDetails
  },
  {
    path:'/news_detail/2',
    component:NewsDetailsTwo
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router