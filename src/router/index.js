import Vue from 'vue'
import Router from 'vue-router'
import WasteSearch from '@/components/WasteSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WasteSearch',
      component: WasteSearch
    }
  ]
})
