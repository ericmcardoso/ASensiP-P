export const helpersimulation = {
  maiorMenor(valueIndicators) {
    //verificação 
    let values = [];

    values[0] = Number.NEGATIVE_INFINITY; //maior
    values[1] = Infinity; //menor
    values[2] = -1; //posMaior
    values[3] = -1 //posMenor

    //verifica os menores e maiores valores e suas posições
    valueIndicators.forEach(function (item, key) {
      if (Number(item) >= values[0]) {
        values[0] = item;
        values[2] = key;
      }
      if (Number(item) < values[1]) {
        values[1] = item;
        values[3] = key;
      }
    });

    return values;
  },

  async updateParameters(Simulation) {

    Object.keys(Simulation.simulationData.parameters).forEach(function (item) {
      //setando o valor padrão do sistema para os parâmetros
      Simulation.simulationData.parameters[item] = Simulation.simulationData.systemParameters[item].std
    });

  },
  //setando os parâmetros
  setParametersXY(valueIndicators, min, d) {
    let xy = [];
    let controle = min;
    valueIndicators.forEach(function (item) {
      //console.log(min)
      //console.log(item)
      xy.push({
        "yField": item,
        "xField": controle.toFixed(2)
      });
      controle += d;
    });
    return xy;
  },
  setParametersHistogram(valueIndicators, min, d) {

    let prob = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let histograma = []
    let controle;
    valueIndicators.forEach(function (item) {
      controle = min;
      for (let i = 0; i < 20; i++) { //percorre todas as possibilidades
        if (item >= controle && item < (controle + d)) { //está no intervalo
          prob[i] += 1;
        }
        controle += d
      }

    });
    //ao final tenho a quantidade de valores em cada intervalo
    controle = min;
    for (let i = 0; i < 20; i++) { //percorre todas as possibilidades
      histograma.push({
        "yField": prob[i],
        "xField": controle.toFixed(2)
      });
      controle += d
    }

    return histograma

  },

  insertTornado(tornadoGraph, pSelected, values, min, d) {
    if (tornadoGraph.length < 2) { //primeiro elemento
      tornadoGraph.push({
        "param": pSelected,
        "valueIndicator": values[0],
        "valueParam": (min + (values[2] * d)),
        "variation": "max"
      }, {
        "param": pSelected,
        "valueIndicator": values[1],
        "valueParam": (min + (values[3] * d)),
        "variation": "min"
      });

    } else { //procurar posição correta a inserir
      let tam = tornadoGraph.length
      let controle = false
      for (var i = 0; i < tam; i = i + 2) {
        let aInserir = values[0] - values[1]
        let aVerificar = tornadoGraph[i].valueIndicator - tornadoGraph[i + 1].valueIndicator

        if (aInserir < aVerificar) {
          //inserir nesta posição
          tornadoGraph.splice((i), 0, {
            "param": pSelected,
            "valueIndicator": values[0],
            "valueParam": (min + (values[2] * d)),
            "variation": "max"
          }, {
            "param": pSelected,
            "valueIndicator": values[1],
            "valueParam": (min + (values[3] * d)),
            "variation": "min"
          });
          controle = true;

        }

        if (controle)
          i = tam;
      }
      if (!controle) { //a inserção é no final
        tornadoGraph.push({
          "param": pSelected,
          "valueIndicator": values[0],
          "valueParam": (min + (values[2] * d)),
          "variation": "max"
        }, {
          "param": pSelected,
          "valueIndicator": values[1],
          "valueParam": (min + (values[3] * d)),
          "variation": "min"
        });

      }

    }



  }


}