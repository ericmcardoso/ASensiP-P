<template>
    <div class="select">
        <v-select
              :items="indicadores"
              name="indicador"
              label="Selecione um indicador"
              v-model="selecionado"
              item-text="name"
              item-value="name"
              chips
              required
              @change="indicadorMudou"
        ></v-select>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['indicadores'], 
     data: () => ({
        selecionado: "", //id do indicador selecionado   
     }),
     
     methods: {
          ...mapActions(['getParametersIndicator']),
         indicadorMudou(){
             
             this.$store.commit('SET_INDICATORSELECTED', this.selecionado)
             this.getParametersIndicator()   
                     
         }
     }
}
</script>