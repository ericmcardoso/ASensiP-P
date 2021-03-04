<template>
  <div class="rotulo">
    <Volta />
    <v-form @submit.prevent="onSubmit" id="check-login-form">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1>Análise de Sensibilidade - Tornado da Simulação</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>Indicadores</h3>
            <hr />
          </v-col>
          <v-col cols="12">
            <!-- COMPONENTE PARA SELEÇÃO DO INDICADOR -->
            <Indicador :indicadores="indicadores" />
          </v-col>
          <v-col cols="12">
            <h3>Parâmetros</h3>
            <hr />
             <!-- COMPONENTE PARA SELEÇÃO DO PARÂMETRO -->
            <Parametro />
          </v-col>

          <v-col cols="12">
            <v-btn type="submit" color="success" form="check-login-form" >Visualizar</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import Indicador from './Indicator.vue'
import Parametro from './Parameter.vue'
import Volta from './BackForm.vue'
import { mapActions } from 'vuex'

export default {
  components: {Indicador, Parametro, Volta},
  computed: {
    indicadores(){
      return this.$store.state.form.indicators
    }
  },
  created () {
     this.getIndicators()
     this.$store.commit("SET_TORNADOSIMULATION", "")
  },
   data() {
    return {
      errorsPresent: false,
      retorno: false
    };
  },
  methods: {
    ...mapActions(['getIndicators', 'searchRelation']),
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    },
    
    onSubmit: function() {
      if (this.$store.state.form.indicatorSelected != "" && this.isEmpty(this.$store.state.form.pSelected) != true) {

        this.searchRelation({type: 'simulation', model: 'tornado'});
        this.$router.push({ path: '/tornadosimulacao' })
      } else {
        this.errorsPresent = true;
      }
    },

  
  }
  
};
</script>

<style scoped>
</style>
