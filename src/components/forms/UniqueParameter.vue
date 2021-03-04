<template>
    <div class="parametros">

        
          
          <v-col cols="12" >
              <p v-if="!isSelected" class="msg">
                Selecione um indicador para habilitar a aba de parâmetros
                </p>
                <p v-else class="msg">
                Você pode digitar o nome do parâmetro para pesquisá-lo
            </p>

            <!-- ADICIONANDO SELECT MULTIPLO -->
            <!-- Inicio do autocomplete -->
            <v-autocomplete
              v-model="pSelected"
              :items="paramsInd"
              :disabled="!isSelected"
              filled
              chips
              label="Selecione o Parâmetro"
              item-text="name"
              item-value="name"
              persistent-hint
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >{{ data.item }}</v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-col>
     
    </div>
    
</template>

<script>
import { mapActions } from 'vuex'

export default {
    
     computed: {
      paramsInd(){
        //console.log(this.$store.state.parameters)
        return this.$store.state.form.parameters
      },
      selecionado(){
        return this.$store.state.form.indicatorSelected
      },
      pSelected: {
        get(){
          return this.$store.state.form.pSelected
        },
        set(valor){
          this.$store.commit('SET_SELECIONADO', valor)
        }
      }
    },
    created() {
      this.pSelected = []; //selecionados
    },
    data: () => ({
        //parâmetros para seleção
      isSelected: null,
      autoUpdate: true,
     
    }),
    watch: {
      selecionado: function () {
        this.habilitaCampo()
        //console.log("Entrei...")
      },
      
    },
  methods: {
     ...mapActions(['getParametersIndicator']),
    remove(item) {
      const index = this.paramsInd.indexOf(item.name);
      if (index >= 0) this.paramsInd.splice(index, 1);
    },
    removeAll() {
      //const index = this.pSelected.indexOf(item.name)
      this.paramsInd.splice();
    },
    
    habilitaCampo(){
      const dept = this.selecionado;
      if (dept != 0) {
        this.isSelected = !this.isEditing;
      }  
    }
  }
    
}
</script>

<style scoped>
    .msg{
        color:#CCCCCC;
        font-style: italic;
        font-size: 0.9em;
    }
</style>>
