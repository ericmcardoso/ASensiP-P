<template>
    <div class="graph">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h1>Gráfico de Tornado da Simulação</h1>
                    <hr>
                </v-col>
                <v-col cols="11" class="text-center">

                    <!-- Caixa de dialogo -->
                    <v-dialog
                        v-model="dialog"
                        max-width="900"
                        >
                        <v-card>
                            

                            <v-img src="@/img/legenda-tornado.jpg" aspect-ratio="2" contain></v-img>
                           
                        </v-card>
                        </v-dialog>
                    
                </v-col>
                <v-col cols="1" class="text-center">
                    <v-btn class="help" color="primary"
                    fab dark
                    @mouseover.stop="dialog = true"
                     @mouseleave.stop="dialog = false">?</v-btn>
                </v-col>
                <v-col cols="12" class="text-center">
                    <h3>{{ titleTornado }}</h3>
                </v-col>
                
                 <v-col cols="12" class="gr">
                    <p id="example" ></p> 
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

import * as d3 from 'd3';

export default {  
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    computed: {
        dadosInfo() {
        return this.$store.getters.getDadosInfoSimulation;
        },
        titleTornado() {
            //console.log(this.$store.getters.getTitleTornado)
        return this.$store.getters.getTitleTornadoSimulation;
        },
    },
    data: () => ({
        //parâmetros para seleção
        dialog: false,
    }),  
    
    watch: {
    dadosInfo() {
      var chart = this.tornadoChart();
      d3.select("#example")
        .datum(this.dadosInfo["Gráfico de Tornado da Simulacao"])
        .call(chart);
    },
  },
   methods: {
       tornadoChart() {
            var margin = {top: 20, right: 30, bottom: 40, left: 100}, //ESPAÇAMENTO DO GRÁFICO
            width = 800 - margin.left - margin.right,
            height = 200 - margin.top - margin.bottom;

            
            var x = d3.scaleLinear().rangeRound([0, width]); //ESCALA NO EIXO X
            var y = d3.scaleBand().rangeRound([height, 0]).padding(0.1); //ESCALA NO EIXO Y | 0.1 LARGURA DAS BARRAS
            var tooltip = d3.select("body").append("div").attr("class", "toolTip");

            var xAxis = d3.axisBottom(x).tickFormat(d3.format(".2f"));
            //console.log("X "+ xAxis );
            var yAxis = d3.axisLeft(y); //LEGENDA DO EIXO Y (PRECISO AJUSTAR)
            //console.log("Y "+ yAxis );

            var svg = d3.select(".gr").append("svg")
                .attr("width", (width+350) + margin.left + margin.right) //ANEXANDO LARGURA À PÁGINA HTML
                .attr("height", (height+200) + margin.top + margin.bottom) //ANEXANDO ALTURA À PÁGINA INICIAL
                .append("g")
                .attr("transform", "translate(" + (margin.left + 80) + "," + 0 + ")"); //POSICIONAMENTO DO ELEMENTO NA TELA
            
             //Resgatando todos os dados do JSON
            var eixoDefault = this.$store.getters.getIndicatorSimulation2;
            var eixoSystem = this.$store.getters.getIndicatorSystem2;
            var title = this.$store.state.graph.TornadoSimulation.indicator;

            function chart(selection) {
                //var title = this.titleTornado
                
                selection.each(function(dataInfo) {
                
                    x.domain(d3.extent(dataInfo, function(d) { return d.valueIndicator; })); //RETORNA OS VALORES PARA X
                    y.domain(dataInfo.map(function(d) { return d.param; })); //RETORNA OS ELEMENTOS DO EIXO Y
                    
                    //var minvalueIndicator = Math.min.apply(Math, dataInfo.map(function(d){return d.valueIndicator;}))
                    yAxis.tickPadding(x(eixoDefault) + 20); //POSICIONAMENTO DA ESCALA VERTICAL
                    var bar = svg.selectAll(".bar")
                             .data(dataInfo)
                   
                    // //POSICIONAMENTO DAS BARRAS
                    bar.enter().append("rect")
                        .attr("class", function(d) { return "bar bar--" + (d.valueIndicator < eixoDefault ? (d.valueIndicator < eixoDefault ? "negative" : "extra") : (d.valueIndicator < eixoDefault ? "extra" :"positive")); }) //VERIFICA SE O ELEMENTO É DA ESQUERDA OU DIREITA DO EIXO
                        .attr("x", function(d) { return x(Math.min(eixoDefault, d.valueIndicator)); })
                        .attr("y", function(d) { return y(d.param); })
                        .attr("width", function(d) { return Math.abs(x(d.valueIndicator) - x(eixoDefault)); }) //ONDE COMEÇA A DIVISÃO CENTRAL (EIXO)
                        .attr("height", y.bandwidth())
                        .on("mousemove", function(d){ //ADICIONANDO TOOLTIP COM INFORMAÇÕES DA BARRA
                            tooltip
                            .style("left", d3.event.pageX - 50 + "px")
                            .style("top", d3.event.pageY - 70 + "px")
                            .style("display", "inline-block")
                            .html((title + ": " + d.valueIndicator) + "<br>" + (d.param) + ": "+ (d.valueParam));
                        })
                        .on("mouseout", function(){ tooltip.style("display", "none");}); //REMOVENDO TOOLTIP

                    //TEXTO EXTERNO REFERENTE AO INDICADOR 
                    bar.enter().append('text')
                        .attr("text-anchor", "middle")
                        .attr("x", function(d) {
                            //VERIFICA SE É BARRA DA ESQUERDA OU DIREITA PARA POSICIONAR O RÓTULO
                            return d.valueIndicator < eixoDefault ? x(d.valueIndicator) - 10 : x(Math.min(0, d.valueIndicator)) +(Math.abs(x(d.valueIndicator) - x(0)) +10);
                        })
                        .attr("y", function(d) {
                            //console.log(y(d.param) + (y.bandwidth() / 2));
                            return y(d.param) + (y.bandwidth() / 2);
                        })
                        .attr("dy", ".35em")
                        .text(function (d) { return d.valueIndicator})

                    //TEXTO INTERNO REFERENTE AO PARÂMETRO
                    bar.enter().append('text')
                        .attr("text-anchor", "middle")
                        .attr("class", "text-int")
                        .attr("x", function(d) {
                            //VERIFICA SE É BARRA DA ESQUERDA OU DIREITA PARA POSICIONAR O RÓTULO
                            return d.valueIndicator < eixoDefault ? x(d.valueIndicator) + 15 : x(Math.min(0, d.valueIndicator)) +(Math.abs(x(d.valueIndicator) - x(0)) -15);
                        })
                        .attr("y", function(d) {
                            return y(d.param) + (y.bandwidth() / 2);
                        })
                        .attr("dy", ".35em")
                        .text(function (d) { return d.valueParam}) //colocar aqui os valore dos parâmetros

                    svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")") //POSICIONAMENTO DA LINHA DO EIXO X
                    .call(xAxis)
                    .append("text")
                    .attr("x", 6)
                    .attr("dx", ".71em")
                    .attr("transform", "translate(" + (x(eixoDefault) + 10) + ",40)") //POSICIONAMENTO DO EIXO CENTRAL
                    .style("text-anchor", "end")
                    .text("Lucratividade (R$/ha/ano) ")
                    ;

                    //EIXO CENTRAL
                    svg.append("g")
                        .attr("class", "y axis")
                        .attr("transform", "translate(" + x(eixoDefault) + ",0)") //POSICIONAMENTO DO EIXO CENTRAL
                        .call(yAxis)
                        .on("mousemove", function(){ //ADICIONANDO TOOLTIP COM INFORMAÇÕES DA BARRA
                            tooltip
                            .style("left", d3.event.pageX - 50 + "px")
                            .style("top", d3.event.pageY - 70 + "px")
                            .style("display", "inline-block")
                            .html("Eixo Central <br/> Valor Padrão do Indicador na Simulação<br/>"+title+": "+eixoDefault);
                        })
                        .on("mouseout", function(){ 
                            var delay=2000; //1 seconds
                            setTimeout(function(){
                                    tooltip.style("display", "none");
                                    //your code to be executed after 1 seconds
                            },delay);
                        }); //REMOVENDO TOOLTIP

                    
                    //EIXO AUXILIAR (VALOR PADRÃO)
                    svg.append("g")
                        //.attr("class", "y axis")
                        //.attr("transform", "translate(" + x(126) + ",0)") //POSICIONAMENTO DO EIXO CENTRAL
                        //.call(yAxis)
                        .append("line") //anexando uma linha
                        .attr('class','lineextra')
                        .attr("stroke", "red") //COR DA LINHA
                        .attr('x1',x(eixoSystem)) //INÍCIO DO X
                        .attr('y1','0') //INÍCIO DO Y
                        .attr('x2',x(eixoSystem)) //FIM DO X
                        .attr('y2','150') //FIM DO Y
                        .on("mousemove", function(){ //ADICIONANDO TOOLTIP COM INFORMAÇÕES DA BARRA
                            tooltip
                            .style("left", d3.event.pageX - 50 + "px")
                            .style("top", d3.event.pageY - 70 + "px")
                            .style("display", "inline-block")
                            .html("Eixo Auxiliar <br/> Valor Padrão do Indicador no Sistema <br/>"+title+": "+eixoSystem);
                        })
                        .on("mouseout", function(){ 
                            var delay=2000; //1 seconds
                            setTimeout(function(){
                                    tooltip.style("display", "none");
                                    //your code to be executed after 1 seconds
                            },delay);
                            
                        }); //REMOVENDO TOOLTIP;

                    //LEGENDA
                    svg.append("circle").attr("cx",0).attr("cy",180).attr("r", 6).style("fill", "#007700")
                    svg.append("circle").attr("cx",90).attr("cy",180).attr("r", 6).style("fill", "#0000FF")
                    svg.append("line").attr('class','lineextra') //COR DA LINHA
                        .attr('x1','500') //INÍCIO DO X
                        .attr('y1','180') //INÍCIO DO Y
                        .attr('x2','510') //FIM DO X
                        .attr('y2','180') //FIM DO Y
                    svg.append("text").attr("x", 10).attr("y", 180).text("Mínimo (-1%)").style("font", "10px sans-serif").attr("alignment-baseline","middle")
                    svg.append("text").attr("x", 100).attr("y", 180).text("Máximo (+1%)").style("font", "10px sans-serif").attr("alignment-baseline","middle")
                    svg.append("text").attr("x", 515).attr("y", 180).text("Valor padrão para o indicador no Sistema").style("font", "10px sans-serif").attr("alignment-baseline","middle")
                });
            }
            return chart;
        }
         
        
    },
    
}
</script>

<style>
.bar--positive {
  fill: blue;
  z-index: 2;
}
.bar--positive:hover, .bar--negative:hover {
  fill: #DDDDDD;
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
.lineextra{
  fill: none;
  stroke: red; /*linhas delimitadoras */
  shape-rendering: crispEdges;
}
.text-int{
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
