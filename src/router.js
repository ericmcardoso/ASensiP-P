import Vue from 'vue'
import Router from 'vue-router'
//importar componentes
import TornadoSimulacao from './components/graph/TornadoSimulation'
import TornadoSistema from './components/graph/TornadoSystem'
import Bar from './components/graph/BarChart'
import Line from './components/graph/LineChart'

import Inicio from './components/inicio'

import FormSimulacao from './components/forms/FormSimulation'
import FormSistema from './components/forms/FormSystem'
import FormHistograma from './components/forms/FormHistogram'
import FormXY from './components/forms/FormXY'

import Sistemas from './components/extra/System'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/tornadosistema',
        component: TornadoSistema
    },{
        path: '/tornadosimulacao',
        component: TornadoSimulacao
    },{
        path: '/bar',
        component: Bar
    },{
        path: '/line',
        component: Line
    },{
        path: '/formsistema',
        component: FormSistema
    },{
        path: '/formsimulacao',
        component: FormSimulacao
    },{
        path: '/formhistograma',
        component: FormHistograma
    },{
        path: '/formxy',
        component: FormXY
    },{
        path: '/sis',
        component: Inicio
    },{
        path: '/',
        component: Sistemas
    }]
})