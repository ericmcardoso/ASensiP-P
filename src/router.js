import Vue from 'vue'
import Router from 'vue-router'
//importar componentes
import TornadoSimulacao from './components/graph/TornadoSimulacao'
import TornadoSistema from './components/graph/TornadoSistema'
import Bar from './components/graph/BarChart'
import Line from './components/graph/LineChart'

import Inicio from './components/inicio'

import FormSimulacao from './components/forms/FormSimulacao'
import FormSistema from './components/forms/FormSistema'
import FormHistograma from './components/forms/FormHistograma'
import FormXY from './components/forms/FormXY'

import Sistemas from './components/extra/Sistemas'

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