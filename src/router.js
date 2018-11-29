import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PlayerInfo from './views/PlayerInfo.vue'
import EachTeam from './views/EachTeam.vue'
import Teams from './views/Teams.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/playerInfo/:Name',
      name: 'playerInfo',
      component: PlayerInfo
    },
    {
    path: '/eachTeam/:Team/:Team_name',
    name: 'eachTeam',
    component: EachTeam
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    }
  ]
})
