export default{
    state: {
        BarChart: {}, //FINAL DO BARCHART
        LineChart: {},
        TornadoSimulation: {},
        TornadoSystem: {},
        
    },
    getters: {
        //GETTERS GRÁFICOS DE SISTEMA
        getTornadoSystem(state){
            return state.TornadoSystem
        },
        getDadosInfo(state){
            return state.TornadoSystem.dadosInfo
        },
        getTitleTornado(state){
            return state.TornadoSystem.titleTornado
        },
        getIndicatorSimulation(state){
            return state.TornadoSystem.default
        },
        getIndicatorSystem(state){
            return state.TornadoSystem.defaultSystem
        },
        getDadosLine(state){
            return state.LineChart.dadosLine
        },
        getTitleLine(state){
            return state.LineChart.titleLine
        },
        getIndicatorSimulationLine(state){
            return state.LineChart.defaultSimulation
        },
        getIndicatorSystemLine(state){
            return state.LineChart.defaultSystem
        },
        getDadosBar(state){
            return state.BarChart.dadosBar
        },
        getTitleBar(state){
            return state.BarChart.titleBar
        },

        //GETTERS GRÁFICOS SIMULAÇÃO
        getTornadoSimulation(state){
            return state.TornadoSimulation
        },
        getDadosInfoSimulation(state){
            return state.TornadoSimulation.dadosInfo
        },
        getTitleTornadoSimulation(state){
            return state.TornadoSimulation.titleTornado
        },

        getIndicatorSimulation2(state){
            return state.TornadoSimulation.default
        },
        getIndicatorSystem2(state){
            return state.TornadoSimulation.defaultSystem
        }
    },
    mutations: {
        SET_BARCHART (state, bar){
            state.BarChart = bar
        },
        SET_LINECHART (state, line){
            state.LineChart = line
        },
        SET_TORNADOSIMULATION (state, sim){
            state.TornadoSimulation = sim
        },
        SET_TORNADOSYSTEM (state, sim){
            state.TornadoSystem = sim
        },
    }
}