import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieList from '../views/MovieList.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Detail from '../views/Detail.vue'
import MovieCast from '../components/MovieDetail/MovieCast.vue'
import MovieMedia from '../components/MovieDetail/MovieMedia.vue'
import MovieOverview from '../components/MovieDetail/MovieOverview.vue'
import MovieReview from '../components/MovieDetail/MovieReview.vue'
import RelatedMovie from '../components/MovieDetail/RelatedMovie.vue'
import Community from '../views/Community.vue'
import ReviewDetail from '../views/ReviewDetail.vue'
import UserProfile from '../views/UserProfile.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movielist',
    name: 'MovieList',
    component: MovieList
  },
  {
    path: '/movie-:movieId',    
    name: 'MovieDetail',
    component: MovieDetail,
    children: [
      {
        path: "overview",
        name: "MovieOverview",
        component: MovieOverview
      },
      {
        path: "review",
        name: "MovieReview",
        component: MovieReview
      },
      {
        path: "cast",
        name: "MovieCast",
        component: MovieCast
      },
      {
        path: "media",
        name: "MovieMedia",
        component: MovieMedia
      },
      {
        path: "related-movie",
        name: "RelatedMovie",
        component: RelatedMovie
      },

    ]
  
  },
  {
    path: '/detail-:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/review-:id',
    name: 'Review',
    component: ReviewDetail
  },
  {
    path: '/profile-:username',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFoundComponent
  },
  {
    path: '*',
    redirect: "/404"
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


