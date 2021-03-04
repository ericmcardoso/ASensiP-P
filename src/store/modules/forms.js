import { memoize } from './../../helpers/Memoize';
import { helpersimulation } from './../../helpers/Helpers';
import  db  from './../dexiedb';
import {dataPseudo} from './../../helpers/dataPseudo'

export default {
  state: {
    idSystem: 70,
    dadosGerais: [],
    indicators: [], //lista de indicadores
    indicatorSelected: "", //indicador selecionado pelo usuário
    parameters: [], //lista de parâmetros
    defaultParameters: [], //lista de parâmetros sugeridos (pode estar vazia)
    pSelected: [], //lista de parametros selecionados
    totalParam: 6, //máximo de parâmetros permitidos
  },
  getters: {
    getindicatorSelected(state) {
      return state.indicatorSelected
    }
  },
  mutations: {
    SET_INDICATORS(state, indicators) {
      state.indicators = indicators
    },

    SET_INDICATORSELECTED(state, indicador) {
      state.indicatorSelected = indicador
    },


    SET_PARAMETERS(state, parameters) {
      state.parameters = parameters
    },

    SET_DEFAULT(state, defaultParameters) {
      state.defaultParameters = defaultParameters
    },

    SET_SELECIONADO(state, selecionado) {
      state.pSelected = selecionado
    },

    SET_VALUEPARAMETERS(state, param) {
      state.valueParameters = param
    },

    SET_DADOS(state, param) {
      state.dadosGerais = param
    }

  },
  actions: {

    //BUSCA RELAÇÃO DE PARÂMETROS E INDICADORES
    async getParametersIndicator({ commit, state }) {
      let parameters = []
      let paramsDefault = []
      var parameter

      //preenchimento dos parâmetros padrões
      paramsDefault = (function() {
        var i, len, ref, results;
        ref = state.dadosGerais[state.indicatorSelected].default;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          parameter = ref[i];
          results.push(parameter);
        }
        return results;
      })();

     //preenchimento de todos os parâmetros      
      parameters = (function() {
        var i, len, ref, results;
        ref = state.dadosGerais[state.indicatorSelected].other;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          parameter = ref[i];
          results.push(parameter);
        }
        ref = state.dadosGerais[state.indicatorSelected].default;
        for (i = 0, len = ref.length; i < len; i++) {
          parameter = ref[i];
          results.push(parameter);
        }
        return results;
      })();

      await commit('SET_PARAMETERS', parameters)
      await commit('SET_DEFAULT', paramsDefault)
      await commit('SET_SELECIONADO', paramsDefault)

    },

    //BUSCA LISTA DE INDICADORES DE UM DETERMINADO SISTEMA
    async getIndicators({commit, state}){
      let indicators = [];
      //dados contém a simulação
      let dados = await db.searchIndicators(state.idSystem)
    
      for(var prop in dados.simulationData.indicatorParameters){
        indicators.push(prop)
      }
      commit('SET_INDICATORS', indicators)
      commit('SET_DADOS', dados.simulationData.indicatorParameters)
    },

    //FUNÇÃO RESPONSÁVEL POR ANALISAR OS DADOS SELECIONADOS NO FORMULÁRIO,
    //CHAMADA DA FUNÇÃO DE CÁLCULO DA ANÁLISE DE SENSIBILIDADE, E ALIMENTAÇÃO
    //DOS DADOS PARA PLOTAGEM DO GRÁFICO
    searchRelation: async function ({ state, commit, dispatch }, form) {

      //O INDICADOR SELECIONADO ESTÁ EM STATE.INDICATORSELECTED
      //OS PARÂMETROS EM STATE.PSELECTED

      //resgata o JSON padrão da Simulação
      //é necessário mudar o ID da Simulação para um ID Real
      let Simulation = await db.searchSimulation(state.idSystem);

      //caso o typo do formulário preenchido seja de Sistema
      if (form.type == "system") {

        //verifica o tipo do gráfico de sistema
        if (form.model == "tornado") { //GRÁFICO DE TORNADO DO SISTEMA
          //array temporário para armazenar os dados do gráfico final
          let tornadoGraph = []; //array dos valores para o gráfico        

          //loop para todos os parâmetros selecionados (máximo 6)
          for (var i = 0; i < state.pSelected.length; i++) {

            //para gráficos do sistema, os valores do parâmetros não analisados são os padrões
            //função que altera no JSON PADRÃO o valor dos parâmetros para os valores padrões
            //await helpersimulation.updateParameters(Simulation)
            //chamada à função de cálculo da análise de sensibilidade com retorno dos valores para o indicador naquele parâmetro
            let valueIndicators = await memoize.calculation(Simulation, form.type, state.indicatorSelected, state.pSelected[i])

            //calculo dos menores e maiores valores para inserção no gráfico
            let values = helpersimulation.maiorMenor(valueIndicators);
            let min = Simulation.simulationData.systemParameters[state.pSelected[i]].min
            let max = Simulation.simulationData.systemParameters[state.pSelected[i]].max
            let d = memoize.calculeDistance(min, max);

            //função que preenche os menores e maiores valores de cada parâmetro 
            helpersimulation.insertTornado(tornadoGraph, state.pSelected[i], values, min, d)
          }
          //setando os dados para o gráfico
          dispatch( "setDataGraph", { type: "system", model: "tornado", dataGraph: tornadoGraph })

        } else {

          //await helpersimulation.updateParameters(Simulation);
          //chamada à função de cálculo da análise de sensibilidade com retorno dos valores para o indicador naquele parâmetro
          let valueIndicators = await memoize.calculation(Simulation, form.type, state.indicatorSelected, state.pSelected)

          if (form.model == "xy") { // GRÁFICO XY
            
            let xy = []; //array dos valores para o gráfico
            let min = Simulation.simulationData.systemParameters[state.pSelected].min
            let max = Simulation.simulationData.systemParameters[state.pSelected].max
            let d = memoize.calculeDistance(min, max);

            xy = helpersimulation.setParametersXY(valueIndicators, min, d)
            //setando os dados para o gráfico
            dispatch( "setDataGraph", { type: "system", model: "xy", dataGraph: xy })          

          } else { //HISTOGRAMA
           
            let histograma = []            
            let max = Math.max(...valueIndicators)
            let min = Math.min(...valueIndicators)
            let d = memoize.calculeDistance(min, max) * 5; //apenas 20 pontos

            histograma = helpersimulation.setParametersHistogram(valueIndicators, min, d)
            //setando os dados para o gráfico
            dispatch( "setDataGraph", { type: "system", model: "histograma", dataGraph: histograma })

          }
        }
      } else { //TORNADO DA SIMULAÇÃO
       
        let tornadoGraph = []; //array dos valores para o gráfico

        //resgata o JSON padrão da Simulação
        let Simulation = await db.searchSimulation(state.idSystem);

        //loop para todos os parâmetros selecionados
        for (i = 0; i < state.pSelected.length; i++) {

          //chamada à função de cálculo da análise de sensibilidade com retorno dos valores para o indicador naquele parâmetro
          let valueIndicators = await memoize.calculation(Simulation, form.type, state.indicatorSelected, state.pSelected[i])

          let values = helpersimulation.maiorMenor(valueIndicators);

          let min = Simulation.simulationData.systemParameters[state.pSelected[i]].min
          let max = Simulation.simulationData.systemParameters[state.pSelected[i]].max
          let d = memoize.calculeDistance(min, max);

          helpersimulation.insertTornado(tornadoGraph, state.pSelected[i], values, min, d)
        }
        //setando os dados para o gráfico
        dispatch( "setDataGraph", { type: "simulation", model: "tornado", dataGraph: tornadoGraph })       
      }
      commit('SET_INDICATORSELECTED', "")
    },

    setDataGraph({ state, commit }, dataGraph) {

      if (dataGraph.type == "system") {
        if (dataGraph.model == "tornado") {
          let tornadoFinal = {}
          tornadoFinal = {
            "titleTornado": state.indicatorSelected + " - Sistema",
            "default": dataPseudo[state.indicatorSelected].simulation, //Valor Padrão na Simulação
            "defaultSystem": dataPseudo[state.indicatorSelected].system, //valor padrão para o Sistema
            "indicator": state.indicatorSelected,
            "parameters": state.pSelected,
            "dadosInfo": {
              "Gráfico de Tornado do Sistema": dataGraph.dataGraph
            }
          }
          commit('SET_TORNADOSYSTEM', tornadoFinal)
        }else if(dataGraph.model == "xy"){
          let xyFinal = {}
          let xSys, xSim
          
          dataGraph.dataGraph.forEach(function(element){
            if(parseInt(element.yField) == dataPseudo[state.indicatorSelected].system)
              xSys= element.xField
            if(parseInt(element.yField) == dataPseudo[state.indicatorSelected].simulation)
              xSim = element.xField            
          })
          
          xyFinal = {
            "titleLine": state.indicatorSelected + " X " + state.pSelected,
            "legendLineX": state.pSelected,
            "legendLineY": state.indicatorSelected,
            "dadosLine": dataGraph.dataGraph,
            "defaultSimulation": [xSim, dataPseudo[state.indicatorSelected].simulation], //parâmetro / indicador
            "defaultSystem": [xSys, dataPseudo[state.indicatorSelected].system] //parâmetro / indicador
          // console.log(xyFinal)
          }
          commit('SET_LINECHART', xyFinal)
        }else{
          let histogramaFinal = {}
          histogramaFinal = {
            "titleBar": "Distribuição de Probabilidade - " + state.indicatorSelected + " X " + state.pSelected,
            "indicator": state.indicatorSelected,
            "parameter": state.pSelected,
            "legendXBar": state.indicatorSelected,
            "legendYBar": "Probabilidade",
            "dadosBar": dataGraph.dataGraph,
            "eixo": dataPseudo[state.indicatorSelected].system, //mudar valores fixos
          }
         // console.log("Final "histogramaFinal)
          commit('SET_BARCHART', histogramaFinal)
        }
      }else{
        let tornadoFinal = {}

        tornadoFinal = {
          "titleTornado": state.indicatorSelected + " - Simulação",
          "default": dataPseudo[state.indicatorSelected].simulation, //Valor Padrão na Simulação
          "defaultSystem": dataPseudo[state.indicatorSelected].system, //valor padrão para o Sistema
          "indicator": state.indicatorSelected,
          "parameters": state.pSelected,
          "dadosInfo": {
            "Gráfico de Tornado da Simulacao": dataGraph.dataGraph
          }
        }

        commit('SET_TORNADOSIMULATION', tornadoFinal)
      }

    }

  }
}

