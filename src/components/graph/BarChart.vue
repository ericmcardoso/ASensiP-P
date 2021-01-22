<template>
  <div class="graph">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Histograma</h1>
          <hr />
        </v-col>
        <v-col cols="12" class="text-center">
          <h3>{{ titleBar }}</h3>
        </v-col>
        <v-col cols="12" class="gr">
          <div id="chart-container"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  computed: {
    dados() {
      return this.$store.getters.getDadosBar;
    },
    titleBar() {
      return this.$store.getters.getTitleBar;
    },
  },
  watch: {
    dados() {
      this.createChart();
    },
  },
  methods: {
    createChart() {

      var margin = { top: 20, right: 30, bottom: 40, left: 20 }, //ESPAÇAMENTO DO GRÁFICO
        width = 1100 - margin.left - margin.right,
        height = 420 - margin.top - margin.bottom;

      var legendX = this.$store.state.graph.BarChart.legendXBar;
      var legendY = this.$store.state.graph.BarChart.legendYBar;
      console.log("Legenda "+legendX)

      const svg = d3
        .select("#chart-container")
        .append("svg")
        .attr("height", height + 200 + margin.top + margin.bottom)
        .attr("width", width + 50 + margin.left + margin.right);

      const chart = svg.append("g").attr("transform", `translate(50, 5)`);

      const xAxis = d3
        .scaleBand()
        .range([0, width])
        .domain(
          this.dados.map(function (d) {
            return d.xField;
          })
        )
        .padding(0.03);

      var teste = d3.extent(this.dados, function (d) {
        return d.yField;
      });
      const yAxis = d3
        .scaleLinear()
        .range([height, 0])
        .domain([0, teste[1] + 1]);

      chart.append("g").call(d3.axisLeft(yAxis));

      chart
        .append("g")
        .attr("transform", "translate(0, " + height + ")")
        .call(d3.axisBottom(xAxis));

      chart
        .selectAll()
        .data(this.dados)
        .enter()
        .append("rect")
        .attr("class", "barras")
        .attr("x", (s) => xAxis(s.xField))
        .attr("y", (s) => yAxis(s.yField) - 10)
        .attr("height", (s) => height - yAxis(s.yField) + 10)
        .attr("width", xAxis.bandwidth());

      chart
        .selectAll()
        .data(this.dados)
        .enter()
        .append("text")
        .attr("class", "value")
        .attr("x", (a) => xAxis(a.xField) + xAxis.bandwidth() / 2)
        .attr("y", (a) => yAxis(a.yField) - 15)
        .attr("text-anchor", "middle")
        .text((a) => a.yField + "%");

      chart
        .append("text")
        .attr("x", width / 2 - 30)
        .attr("y", height + 50)
        .text(legendX)
        .style("font", "10px sans-serif")
        .attr("alignment-baseline", "middle");
      
      svg
        .append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(0," + (height / 2 - 70) + ")")
        .call(xAxis)
        .append("text")
        .attr("x", 6)
        .attr("dx", ".71em")
        .attr("transform", "translate(" + 20 + ",40)  rotate(-90)")
        .style("text-anchor", "end")
        .text(legendY);
    },
  },
};
</script>

<style>
#chart-container {
  width: 100%;
  height: 420px;
  top: -280px;
  margin: 0 auto;
}

.value {
  fill: #000;
}

path {
  stroke: #444a58;
}
line {
  stroke: #444a58;
}
rect.barras {
  cursor: pointer;
  fill: blue;
  border-radius: 10px;
}

rect.barras:hover {
  fill: #dddddd;
  border-color: black;
}
</style>