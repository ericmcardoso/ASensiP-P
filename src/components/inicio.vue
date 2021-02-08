<template>
  <div class="inicio">
    <v-container fluid>
      <Volta />
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                   v-on:click="simula(card.id)"
                >
                    Visualizar
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Volta from './forms/VoltarSistema.vue'
import { mapActions } from 'vuex'
export default {
    components: {Volta},
    data: () => ({
      cards: [
        { title: 'Gráfico de Tornado do Sistema', src: 'https://www.geracaoemacao.com.br/img2.jpg', flex: 6, id: 1 },
        { title: 'Gráfico de Tornado da Simulação', src: 'https://www.geracaoemacao.com.br/img1.JPG', flex: 6, id: 2 },
        { title: 'Gráfico Indicador x Parâmetro (XY)', src: 'https://www.geracaoemacao.com.br/img3.JPG', flex: 6, id: 3 },
        { title: 'Gráfico de Probabilidade (Histograma)', src: 'https://www.geracaoemacao.com.br/img4.JPG', flex: 6, id: 4 }
      ],
    }),
    methods: {    
        ...mapActions(['searchSimulation']),
        simula(value) {
            //seta o valor do Sistema na store
            switch(value){
                case 1:
                    this.$router.push({ path: '/formsistema' })
                    break;
                case 2:
                    this.$router.push({ path: '/formsimulacao' })
                    break;
                case 3:
                    this.$router.push({ path: '/formxy' })
                    break;
                case 4:
                    this.$router.push({ path: '/formhistograma' })
                    break;

            }
           
        },
        
    }
};
</script>