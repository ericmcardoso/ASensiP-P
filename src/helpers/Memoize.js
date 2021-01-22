import api from './../store/idbgraph'


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
                    for (var j = 0; j <= 100; j++) {

                        //altera o valor do parâmetro para a simulação
                        Simulation.simulationData.parameters[parameter] = controle
                        //busca na base de dados local a combinação
                        let vIndicator = await api.getIndicatorParam(indicator, parameter, controle, type);

                        if (!this.isEmpty(vIndicator)) {
                            //PASSO 2: SE EXISTE O VALOR, RETORNA                            
                            console.log("Existe.. ")
                            this.valueIndicators.push(vIndicator.valueindicator)
                            controle += d; //incrementa o valor a ser analisado do parâmetro
                        } else {
                            //PASSO 3: SE NÃO EXISTE O VALOR, CHAMA A FUNÇAO DE CÁLCULO 
                            console.log("Calculando...")
                            this.valueIndicators.push(this._calculate(Simulation, type, indicator, parameter, controle, j))
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
                        let vIndicator = api.getIndicatorParam(indicator, parameter, controle, type); //busca na base de dados local a combinação

                        if (!this.isEmpty(vIndicator)) {
                            //PASSO 2: SE EXISTE O VALOR, RETORNA
                            console.log("Existe.. ")
                            this.valueIndicators.push(vIndicator.valueindicator)
                        } else {
                            //PASSO 3: SE NÃO EXISTE O VALOR, CHAMA A FUNÇAO DE CÁLCULO 
                            console.log("Calculando...")
                            this.valueIndicators.push(this._calculate(Simulation, type, indicator, parameter, controle, l + 48))
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
    _calculate(pSimulation, type, indicator, parameter, value, temp) {
        /* Falta definir esta função aqui, mas, basicamente, ela chama a função de cálculo de simulação adequadamente para o Indicador <indicator>
        assumindo o valor <value> para o Parâmetro <parameter> e assumindo os valores da simulação ou o valor padrão do sistema para os demais Parâmetros, 
        a depender se <type> é 'system' ou 'simulation'. */

        //ALTERA O VALOR DO PARÂMETRO NO JSON PADRÃO
        pSimulation.simulationData.parameters[parameter] = value;

        //CHAMADA A FUNÇÃO DE SIMULAÇÃO
        let valueI = this.Simulation(pSimulation, temp)

        let data = {
            "idSystem": pSimulation.idSystem,
            "indicator": indicator,
            "parameter": parameter,
            "valueindicator": valueI,
            "valueParameter": value
        }

        api.saveIndicatorParam(data, type)

        //DEVOLVE O VALOR DO INDICADOR PARA A COMBINAÇÃO
        return valueI

    },

    //FUNÇÃO PROPRIAMENTE DO SIMULADOR
    //ESTA FUNÇÃO PRECISA SER REFEITA, POIS ESTÁ APENAS GERANDO QUALQUER NÚMERO ALEATÓRIO
    Simulation(pSimulation, j) {

        var valor = 0
        if (j > 50)
            valor = Math.floor(Math.random() * (132 - 120 + 1) + 132);
        else
            valor = Math.floor(Math.random() * (119 - 110 + 1) + 110);

        return valor;
    },

    calculeDistance(min, max) {
        return (max - min) / 100;
    },

    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }



}