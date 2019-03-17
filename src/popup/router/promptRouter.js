import Vue from 'vue'
import Router from 'vue-router'

// prompt
import PromptSignature from '../pages/prompts/signature'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/prompt_signature'
  },
  {
    path: '/prompt_signature',
    name: 'prompt_signature',
    component: PromptSignature
  }
]
export default new Router({
  routes: routes
})
