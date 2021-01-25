import Vue from 'vue'
import Vuex from 'vuex'

import form from './modules/forms'
import graph from './modules/graph'
import extra from './modules/extra'


Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    form, graph, extra
  }
})
