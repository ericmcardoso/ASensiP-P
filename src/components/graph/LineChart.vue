<template>
  <div class="graph">
    <Volta />
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Gráfico Indicador x Parâmetro</h1>
          <hr />
        </v-col>
        <v-col cols="12" class="text-center">
          <h3>{{ titleLine }}</h3>
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
          <div id="chart-container"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Volta from './../forms/BackForm'
import * as d3 from "d3";

export default {
   components: {Volta},
  computed: {
    dados() {
      return this.$store.getters.getDadosLine;
    },
    titleLine() {
      return this.$store.getters.getTitleLine;
    },
    eixoSystem() {
      return this.$store.getters.getIndicatorSystemLine;
    },
    eixoSimulation() {
      return this.$store.getters.getIndicatorSimulationLine;
    },
  },
  data: () => ({
    loaded: true
  }),
  mounted(){
    if(this.$store.getters.getindicatorSelected == ''){
      this.$router.push({ path: '/formxy' })
    }else{
      this.loaded = false
    }      
  },
  watch: {
    dados() {
      this.loaded = true
      this.createChart();
    },
  },
  methods: {
    createChart() {
      var margin = { top: 20, right: 30, bottom: 40, left: 20 }, //ESPAÇAMENTO DO GRÁFICO

        width = document.getElementById('chart-container').offsetWidth - margin.left - margin.right,
        //width = 1100 - margin.left - margin.right,
        height = 470 - margin.top - margin.bottom;

        console.log(width)
      var tooltip = d3.select("body").append("div").attr("class", "toolTip");

      const svg = d3
        .select("#chart-container")
        .append("svg")
        .attr("height", height + 200 + margin.top + margin.bottom)
        .attr("width", width + 50 + margin.left + margin.right);

      //inicio do gráfico
      const chart = svg.append("g").attr("transform", `translate(50, 20)`);
      //inicio da legenda do eixo X
      var inicioX = Math.min.apply(
        Math,
        this.dados.map(function (d) {
          return d.xField;
        })
      );
      const x = d3
        .scaleLinear()
        .domain([
          inicioX,
          d3.max(this.dados, function (d) {
            return d.xField;
          })
        ]          
        )
        .range([inicioX, width]);

      //LEGENDA EIXO X
      chart
        .append("g")
        .attr("transform", "translate(-13," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-90)");

      // Add Y axis
      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(this.dados, function (d) {
            return +d.yField;
          }),
        ])
        .range([height, 0]);

      //Linha Vertical
      chart
        .append("g")
        .attr(
          "transform",
          "translate(" +
            Math.min.apply(
              Math,
              this.dados.map(function (d) {
                return d.xField;
              })
            ) +
            ",0)"
        )
        .call(d3.axisLeft(y));

      // Add caminho (linha)
      chart
        .append("path")
        .datum(this.dados)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .x(function (d) {
              return x(d.xField);
            })
            .y(function (d) {
              return y(d.yField);
            })
        );

      // Adicionando pontos
      chart
        .selectAll("pontos").data(this.dados).enter().append("circle").attr("class", "pontos")
        .attr("stroke", "none").attr("cx", function (d) { return x(d.xField); })
        .attr("cy", function (d) { return y(d.yField); })
        .attr("r", 3)
        .on("mousemove", function (d) {
          tooltip
            .style("left", d3.event.pageX - 50 + "px")
            .style("top", d3.event.pageY - 70 + "px")
            .style("display", "inline-block")
            .html(Number(d.yField).toFixed(2) + " | " + Number(d.xField).toFixed(2));
        })
        .on("mouseout", function () {
          tooltip.style("display", "none");
        });

      var eixSysx = this.eixoSystem[0];
      var eixSysy = this.eixoSystem[1];

      chart
        .append("circle")
        .attr("cx", x(eixSysx))
        .attr("cy", y(this.eixoSystem[1]))
        .attr("r", 6)
        .style("fill", "#FF0000")
        .on("mousemove", function () {
          tooltip
            .style("left", d3.event.pageX - 50 + "px")
            .style("top", d3.event.pageY - 70 + "px")
            .style("display", "inline-block")
            .html(
              "Valor padrão para o Sistema <br>" + eixSysy + " | " + eixSysx
            );
        })
        .on("mouseout", function () {
          tooltip.style("display", "none");
        });

      chart
        .append("text")
        .attr("x", x(eixSysx) - 20)
        .attr("y", y(this.eixoSystem[1]) + 20)
        .text(this.eixoSystem[1] + " | " + this.eixoSystem[0])
        .style("font", "10px sans-serif")
        .attr("alignment-baseline", "middle");

      var eixSimx = this.eixoSimulation[0];
      var eixSimy = this.eixoSimulation[1];
      

     

      //PADRÃO DA SIMULAÇÃO
      chart
        .append("circle")
        .attr("cx", x(eixSimx))
        .attr("cy", y(this.eixoSimulation[1]))
        .attr("r", 6)
        .style("fill", "#00FF00")
        .on("mousemove", function () {
          //ADICIONANDO TOOLTIP COM INFORMAÇÕES DA BARRA
          tooltip
            .style("left", d3.event.pageX - 50 + "px")
            .style("top", d3.event.pageY - 70 + "px")
            .style("display", "inline-block")
            .html(
              "Valor padrão para a Simulação <br>" + eixSimy + " | " + eixSimx
            );
        })
        .on("mouseout", function () {
          tooltip.style("display", "none");
        });

      chart
        .append("text")
        .attr("x",  x(eixSimx) - 20)
        .attr("y", y(this.eixoSimulation[1]) - 20)
        .text(this.eixoSimulation[1] + " | " + this.eixoSimulation[0])
        .style("font", "10px sans-serif")
        .attr("alignment-baseline", "middle");

      //LEGENDA EIXO X E Y
      chart
        .append("text")
        .attr("x", width / 2 - 30)
        .attr("y", height + 60)
        .text(this.$store.state.graph.LineChart.legendLineX)
        .style("font", "10px sans-serif")
        .attr("alignment-baseline", "middle");
      chart
        .append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(20," + (height / 2 - 70) + ")")
        .call(x)
        .append("text")
        .attr("x", 6)
        .attr("dx", ".71em")
        .attr("transform", "translate(" + (inicioX - 50) + ",40)  rotate(-90)")
        .style("text-anchor", "end")
        .text(this.$store.state.graph.LineChart.legendLineY);
    },
  },
};
</script>

<style>
#chart-container {
  width: 100%;
  height: 100%;
}

.value {
  fill: #000;
}

path {
  stroke: #444a58;
}
line,
circle {
  stroke: #444a58;
}

.pontos {
  fill: #dddddd;
}

.pontos:hover {
  fill: #000000;
  cursor: pointer;
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