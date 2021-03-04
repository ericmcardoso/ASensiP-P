import db from './../store/dexiedb'
import {dataPseudo} from './dataPseudo'


export const memoize = {
    //valores do parâmetro para o indicadot
    valueIndicators: [],
    //Simulation: JSON padrão
    //type: system ou simulation
    //indicator: indicador a ser calculado
    //parameter: parâmetro a ser variado
    async calculation(Simulation, type, indicator, parameter) {
        this.valueIndicators = [];
        if (indicator != null) {
            if (parameter != null) {

                let min = Simulation.simulationData.systemParameters[parameter].min
                let max = Simulation.simulationData.systemParameters[parameter].max

                let d = this.calculeDistance(min, max)
                if (type == 'system') { //100 PONTOS DO MINIMO AO MÁXIMO
                    
                    //controle corresponde ao valor modificado do parâmetro analisado
                    //d corresponde à 1% da diferença entre o mínimo e o máximo do parâmetro
                    let controle = min;
                    //Invoca a função de Simulação 100 vezes para analisar o menor e maior valor
                    for (var j = 0; j < 100; j++) {
                        //busca na base de dados local a combinação
                        //let vIndicator = await api.getIndicatorParam(indicator, parameter, controle, type);
                        let vIndicator = await db.searchData({"indicator": indicator, "parameter": parameter, "valueParameter": controle}, type)
                        //console.log(vIndicator)
                        if (vIndicator != undefined) {
                            //console.log("Encontrado "+vIndicator.valueindicator)
                            //PASSO 2: SE EXISTE O VALOR, RETORNA                            
                            console.log("Existe.. ")
                            this.valueIndicators.push(vIndicator.valueindicator)
                            controle += d; //incrementa o valor a ser analisado do parâmetro
                        } else {
                            //PASSO 3: SE NÃO EXISTE O VALOR, CHAMA A FUNÇAO DE CÁLCULO 
                            console.log("Calculando...")
                            //Simulation: JSON da Simulação
                            //type: tipo do cálculo - system ou simulation
                            //indicator: indicador analisado
                            //parameter: parâmetro analisado
                            //controle: valor do parâmetro na análise
                            //j: número da interação
                            this.valueIndicators.push(this._calculate(Simulation, type, indicator, parameter, controle))
                            controle += d; //incrementa o valor a ser analisado do parâmetro
                        }

                    }
                } else { //3 PONTOS PRÓXIMOS
                    //controle corresponde ao valor modificado do parâmetro analisado
                    //d corresponde à 1% da diferença entre o mínimo e o máximo do parâmetro
                    let controle = Simulation.simulationData.parameters[parameter] - d;
                    
                    //loop para verificar 3 pontos da Simulação
                    for (var l = 1; l <= 3; l++) {

                        Simulation.simulationData.parameters[parameter] = controle //altera o valor do parâmetro para a simulação
                        let vIndicator = await db.searchData({"indicator": indicator, "parameter": parameter, "valueParameter": controle}, type)
                        
                        if (vIndicator != undefined) {
                            //PASSO 2: SE EXISTE O VALOR, RETORNA
                            console.log("Existe.. ")
                            this.valueIndicators.push(vIndicator.valueindicator)
                        } else {
                            //PASSO 3: SE NÃO EXISTE O VALOR, CHAMA A FUNÇAO DE CÁLCULO 
                            console.log("Calculando...")
                            this.valueIndicators.push(this._calculate(Simulation, type, indicator, parameter, controle))
                        }
                        controle += d; //incrementa o valor a ser analisado do parâmetro
                    }
                }
                return this.valueIndicators
            } else {
                return false
            }
        } else {
            return false
        }

    },
    _calculate(pSimulation, type, indicator, parameter, value) {

        let std = pSimulation.simulationData.systemParameters[parameter].std
        let min = pSimulation.simulationData.systemParameters[parameter].min
        let max = pSimulation.simulationData.systemParameters[parameter].max
        let vymin = dataPseudo[indicator].vymin
        let vymax = dataPseudo[indicator].vymax
        let ystd = (type == "system" ? dataPseudo[indicator].system : dataPseudo[indicator].simulation)
        let ymin = ystd*(1 + (vymin-0.5))
        let ymax = ystd*(1 + (vymax-0.5))
       
        let valueI = ystd*(value-min)*(value-max)/(std-min)/(std-max)+ymin*(value-std)*(value-max)/(min-std)/(min-max)+ymax*(value-std)*(value-min)/(max-std)/(max-min)

        let data = {
            "idSystem": pSimulation.idSystem,
            "indicator": indicator,
            "parameter": parameter,
            "valueindicator": valueI,
            "valueParameter": value
        }

        //salva na Base de Dados
        db.insertData(data, type)
        //DEVOLVE O VALOR DO INDICADOR PARA A COMBINAÇÃO
        return valueI

    },


    calculeDistance(min, max) {
        return (max - min) / 100;
    }



}
