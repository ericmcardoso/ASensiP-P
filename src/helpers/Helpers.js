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
  setParametersHistogram(y) {

    //var histogram;
    var ncols = 20
    var xstd = 15
    var triang = []
    var prob = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var hist = []

    //histogram = (y, xstd, ncol) => {
    var c, i, j, k, l, ref, ref1, ref2, ref3, ref4, x, ygap, ymax, ymin, total;
    // y: array com os valores calculados para o Indicador, para um Parâmetro variando de seu valor min (tendo como resultado o valor y[0] para o Indicador),
    // e indo até o valor max do Parâmetro (dando como resultado o valor y[y.length-1] para o Indicador).
    // xstd: posição de y que corresponde ao valor do Parâmetro mais próximo do valor std. Usa-se o mais próximo porque os valores de Parâmetros 
    // usados para montar y[] estão igualmente espaçados, de modo que o valor std exato pode não ter sido usado para compor y[]
    // ncol: número de colunas que se quer montar no histograma.

    // O máximo da distribuição triangular ocorre no valor std do Parâmetro, aproximado para a posição xstd
    // e a área do triângulo dá a probalidade total, i.e., 1, logo, usando a fórmula da área do triângulo para calcular a sua altura em xstd: 
    triang[xstd] = 2 / y.length;
    // Para calcular a distribuição triangular do lado esquerdo, usamos a equação de reta ascendente começando em zero e indo até triang[xtsd]:
    for (x = i = 0, ref = xstd - 1; (0 <= ref ? i <= ref : i >= ref); x = 0 <= ref ? ++i : --i) {
      triang[x] = triang[xstd] * x / xstd;
    }

    // Para calcular a distribuição triangular do lado direito, usamos a equação de reta descendente começando em triang[xtsd] e indo até zero:
    for (x = j = ref1 = xstd + 1, ref2 = y.length - 1; (ref1 <= ref2 ? j <= ref2 : j >= ref2); x = ref1 <= ref2 ? ++j : --j) {
      triang[x] = triang[xstd] - triang[xstd] * (x - xstd) / (y.length - 1 - xstd);
    }

    // Encontra o menor e maior valores de y.
    ymin = Math.min(...y);
    ymax = Math.max(...y);

    // Define a largura das colunas de probabilidade.
    ygap = (ymax - ymin) / ncols;
    // Acumula as probabilidades de y em colunas
    for (x = k = 0, ref3 = y.length - 1; (0 <= ref3 ? k <= ref3 : k >= ref3); x = 0 <= ref3 ? ++k : --k) {
      // Descobre em que coluna y[x] deve cair
      c = Math.floor((y[x] - ymin) / ygap);
      // Na coluna do histograma em que y[x] caiu, acumula a probabilidade triagular do valor do Parâmetro que corresponde ao valor de y. 
      if (c < ncols)
        prob[c] += triang[x];
    }
    // Ajusta as probabilidades para que o total seja 1 e salva pares com o centro da faixa de valores de y e a probabilidade respectiva.
    total = 0
    for (i = 0; i < prob.length; i++) {
      total += prob[i];
    }

    for (c = l = 0, ref4 = ncols - 1; (0 <= ref4 ? l <= ref4 : l >= ref4); c = 0 <= ref4 ? ++l : --l) {
      let v = ymin + (c + 1) * ygap / 2
      let p = (prob[c] / total) * 100
      hist.push({
        "yField": p.toFixed(3),
        "xField": v.toFixed(2)
      });
    }
    return hist;   

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