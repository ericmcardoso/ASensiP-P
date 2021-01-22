import Vue from 'vue'
import Vuex from 'vuex'

import form from './modules/forms'
import graph from './modules/graph'


Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    form, graph
  }
})
