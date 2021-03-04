<template>
  <div class="graph">
    <Volta />
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Gráfico de Tornado do Sistema</h1>
          <hr />
        </v-col>
        <v-col cols="11" class="text-center">
          <!-- Caixa de dialogo -->
          <v-dialog v-model="dialog" max-width="900">
            <v-card>
              <v-img
                src="@/img/legenda-sistema.jpg"
                aspect-ratio="2"
                contain
              ></v-img>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="1" class="text-center">
          <v-btn
            class="help"
            color="primary"
            fab
            dark
            @mouseover.stop="dialog = true"
            @mouseleave.stop="dialog = false"
            >?</v-btn
          >
        </v-col>
        <v-col cols="12" class="text-center">
          <h3>{{ titleTornado }}</h3>
        </v-col>

        <v-col cols="12" class="gr">
          <div class="text-center" v-if="!loaded">
            <v-progress-circular
              :size="70"
              :width="7"
              color="primary"
              indeterminate
            ></v-progress-circular>
            <p>Calculando dados do Gráfico...</p>
          </div>

          <p id="example"></p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Volta from "./../forms/BackForm";
import * as d3 from "d3";

export default {
  components: { Volta },
  icons: {
    iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },

  computed: {
    dadosInfo() {
      return this.$store.getters.getDadosInfo;
    },
    titleTornado() {
      return this.$store.getters.getTitleTornado;
    },
  },
  data: () => ({
    //parâmetros para seleção
    dialog: false,
    loaded: true,
  }),
  mounted() {
    //console.log("Aqui "+this.$store.getters.getindicatorSelected)
    if (this.$store.getters.getindicatorSelected == "") {
      this.$router.push({ path: "/formsistema" });
    } else {
      this.loaded = false;
    }
  },
  watch: {
    dadosInfo() {
      this.loaded = true;
      var chart = this.tornadoChart();
      d3.select("#example")
        .datum(this.dadosInfo["Gráfico de Tornado do Sistema"])
        .call(chart);
    },
  },

  methods: {
    isEmpty(obj) {
      return Object.keys(obj).length === 0;
    },
    tornadoChart() {
      var margin = { top: 20, right: 30, bottom: 40, left: 100 }, //ESPAÇAMENTO DO GRÁFICO
         width = document.getElementById('example').offsetWidth - margin.left - margin.right - 40,
        height = 200 - margin.top - margin.bottom;

      var x = d3.scaleLinear().rangeRound([0, width]); //ESCALA NO EIXO X
      var y = d3.scaleBand().rangeRound([height, 0]).padding(0.1); //ESCALA NO EIXO Y | 0.1 LARGURA DAS BARRAS
      var tooltip = d3.select("body").append("div").attr("class", "toolTip");

      var xAxis = d3.axisBottom(x).tickFormat(d3.format(".2f"));
      var yAxis = d3.axisLeft(y); //LEGENDA DO EIXO Y (PRECISO AJUSTAR)

      var svg = d3
        .select(".gr")
        .append("svg")
        .attr("width", width + 120 + margin.left + margin.right) //ANEXANDO LARGURA À PÁGINA HTML
        .attr("height", height + margin.top + margin.bottom) //ANEXANDO ALTURA À PÁGINA INICIAL
        .append("g")
        .attr("transform", "translate(" + (margin.left + 40) + "," + 0 + ")"); //POSICIONAMENTO DO ELEMENTO NA TELA

      //Resgatando todos os dados do JSON
      var eixoDefault = this.$store.getters.getIndicatorSystem;
      var eixoSimulation = this.$store.getters.getIndicatorSimulation;
      var title = this.$store.state.graph.TornadoSystem.indicator;

      function chart(selection) {
        selection.each(function (dataInfo) {
          x.domain(d3.extent(dataInfo, function (d) { return d.valueIndicator;})); //RETORNA OS VALORES PARA X
          y.domain(dataInfo.map(function (d) { return d.param;})); //RETORNA OS ELEMENTOS DO EIXO Y

          yAxis.tickPadding(x(eixoDefault) + 40); //POSICIONAMENTO DA ESCALA VERTICAL
          var bar = svg.selectAll(".bar").data(dataInfo);

          //POSICIONAMENTO DAS BARRAS
          bar
          .enter().append("rect").attr("class", function (d) {return ("bar bar--"+(d.valueIndicator < eixoDefault ? (d.variation === "min" ? "negative" : "extra") : (d.variation === "min" ? "extra" :"positive")));}) //VERIFICA SE O ELEMENTO É DA ESQUERDA OU DIREITA DO EIXO
          .attr("x", function (d) { return x(Math.min(eixoDefault, d.valueIndicator));})
          .attr("y", function (d) { return y(d.param);})
          .attr("width", function (d) { return Math.abs(x(d.valueIndicator) - x(eixoDefault));}) //ONDE COMEÇA A DIVISÃO CENTRAL (EIXO)
          .attr("height", y.bandwidth())
          .on("mousemove", function (d) {
              //ADICIONANDO TOOLTIP COM INFORMAÇÕES DA BARRA
              tooltip
                .style("left", d3.event.pageX - 50 + "px").style("top", d3.event.pageY - 70 + "px")
                .style("display", "inline-block").html(title +": " + d.valueIndicator + "<br>" + d.param + ": " + d.valueParam);})
                .on("mouseout", function () {tooltip.style("display", "none");}); //REMOVENDO TOOLTIP

          //TEXTO EXTERNO REFERENTE AO INDICADOR
          bar
            .enter().append("text").attr("text-anchor", "middle")
            .attr("x", function (d) {
              //VERIFICA SE É BARRA DA ESQUERDA OU DIREITA PARA POSICIONAR O RÓTULO
              return d.valueIndicator < eixoDefault
                ? x(d.valueIndicator) - 20
                : x(Math.min(0, d.valueIndicator)) +
                    (Math.abs(x(d.valueIndicator) - x(0)) + 20);
            })
            .attr("y", function (d) { return y(d.param) + y.bandwidth() / 2; })
            .attr("dy", ".35em").text(function (d) { return d.valueIndicator.toFixed(2);});

          //TEXTO INTERNO REFERENTE AO PARÂMETRO
          bar
            .enter().append("text").attr("text-anchor", "middle")
            .attr("class", "text-int")
            .attr("x", function (d) {
              //VERIFICA SE É BARRA DA ESQUERDA OU DIREITA PARA POSICIONAR O RÓTULO
              return d.valueIndicator < eixoDefault
                ? x(d.valueIndicator) + 20
                : x(Math.min(0, d.valueIndicator)) +
                    (Math.abs(x(d.valueIndicator) - x(0)) - 20);
            })
            .attr("y", function (d) { return y(d.param) + y.bandwidth() / 2;})
            .attr("dy", ".35em").text(function (d) { return d.valueParam.toFixed(2);});

          svg
            .append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")") //POSICIONAMENTO DA LINHA DO EIXO X
            .call(xAxis).append("text").attr("x", 6).attr("dx", ".71em")
            .attr("transform", "translate(" + (x(eixoDefault) + 10) + ",40)") //POSICIONAMENTO DO EIXO CENTRAL
            .style("text-anchor", "end")
            .text(title);

          //EIXO CENTRAL
          svg
            .append("g").attr("class", "y axis").attr("transform", "translate(" + x(eixoDefault) + ",0)") //POSICIONAMENTO DO EIXO CENTRAL
            .call(yAxis).on("mousemove", function () {
              //ADICIONANDO TOOLTIP COM INFORMAÇÕES DA BARRA
              tooltip
                .style("left", d3.event.pageX - 50 + "px")
                .style("top", d3.event.pageY - 70 + "px")
                .style("display", "inline-block")
                .html("Eixo Central <br/> Valor Padrão do Indicador no Sistema <br/>" + title + ": " + eixoDefault);
            })
            .on("mouseout", function () {
              var delay = 2000;
              setTimeout(function () {
                tooltip.style("display", "none");
              }, delay);
            }); //REMOVENDO TOOLTIP

          //EIXO AUXILIAR (VALOR PADRÃO)
          svg
            .append("g")
            .append("line") //anexando uma linha
            .attr("class", "lineextra")
            .attr("stroke", "red") //COR DA LINHA
            .attr("x1", x(eixoSimulation)) //INÍCIO DO X
            .attr("y1", "0") //INÍCIO DO Y
            .attr("x2", x(eixoSimulation)) //FIM DO X
            .attr("y2", "150") //FIM DO Y
            .on("mousemove", function () {
              //ADICIONANDO TOOLTIP COM INFORMAÇÕES DA BARRA
              tooltip
                .style("left", d3.event.pageX - 50 + "px")
                .style("top", d3.event.pageY - 70 + "px")
                .style("display", "inline-block")
                .html("Eixo Auxiliar <br/> Valor Padrão do Indicador na Simulação <br/>" + title + ": " + eixoSimulation);
            })
            .on("mouseout", function () {
              var delay = 2000;
              setTimeout(function () {
                tooltip.style("display", "none");
              }, delay);
            }); //REMOVENDO TOOLTIP;

          //LEGENDA
          svg.append("circle").attr("cx", 0).attr("cy", 180).attr("r", 6).style("fill", "#007700");
          svg.append("circle").attr("cx", 90).attr("cy", 180).attr("r", 6).style("fill", "#0000FF");
          svg.append("line").attr("class", "lineextra").attr("x1", "500").attr("y1", "180").attr("x2", "510").attr("y2", "180"); 
          svg.append("text").attr("x", 10).attr("y", 180).text("Mínimo").style("font", "10px sans-serif").attr("alignment-baseline", "middle");
          svg.append("text").attr("x", 100).attr("y", 180).text("Máximo").style("font", "10px sans-serif").attr("alignment-baseline", "middle");
          svg.append("text").attr("x", 515).attr("y", 180).text("Valor padrão para o indicador na Simulação")
            .style("font", "10px sans-serif")
            .attr("alignment-baseline", "middle");
        });
      }
      return chart;
    },
  },
};
</script>

<style>
.bar--positive {
  fill: blue;
  z-index: 2;
}
.bar--positive:hover,
.bar--negative:hover {
  fill: #dddddd;
  border-color: black;
}
.bar--negative {
  fill: green;
  z-index: 2;
}
.bar--extra {
  fill: white;
  z-index: 5;
}
text {
  font: 10px sans-serif;
}
.axis path,
.axis line {
  fill: none;
  stroke: #000; /*linhas delimitadoras */
  shape-rendering: crispEdges;
}
.lineextra {
  fill: none;
  stroke: red; /*linhas delimitadoras */
  shape-rendering: crispEdges;
}
.text-int {
  color: white;
}

.toolTip {
  position: absolute;
  display: none;
  min-width: 80px;
  height: auto;
  background: none repeat scroll 0 0 #000000;
  opacity: 70%;
  color: #ffffff;
  border: 1px solid #000;
  padding: 5px;
  text-align: center;
  font-size: 10px;
  border-radius: 4%;
}
</style>
