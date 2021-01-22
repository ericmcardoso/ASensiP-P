<template>
  <div class="parametros">
    <v-row>
      <v-col cols="12">
        <v-dialog
          v-model="dialog"
          max-width="300"
          outlined
          >
          <v-card>  
            <v-card-title class="text-center">
              Atenção
            </v-card-title>
            <v-card-text>
              Você só pode selecionar no máximo {{totalParam}} parâmetro(s)!
            </v-card-text>
                            
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
                >
                Ok!
              </v-btn>
            </v-card-actions>
                            
          </v-card>
        </v-dialog>
      </v-col>

      <v-col cols="12" v-if="selecionado != ' '">
        <v-switch v-if="switch1"
           v-model="switch1"
           :disabled="!isSelected"
           :label="`Visualização de parâmetros default para o indicador: Habilitado`"
        ></v-switch>
        <v-switch v-else
            v-model="switch1"
            :disabled="!isSelected"
            :label="`Visualização de parâmetros default para o indicador: Desabilitado`"
        ></v-switch>
      </v-col>
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
          :items="paramsInd"
              v-model="pSelected"
              :disabled="!isSelected"
              filled
              chips
              label="Selecione o Parâmetro"
              item-text="name"
              item-value="name"
              persistent-hint
              multiple
              v-on:input="limiter"
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
        </v-row>
    </div>
    
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
      paramsInd(){
        //console.log(this.$store.state.form.parameters)
        return this.$store.state.form.parameters
      },
      
      selecionado(){
        return this.$store.state.form.indicatorSelected
      },

      totalParam(){
        return this.$store.state.form.totalParam
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
      dialog: false,
      isSelected: null,
      autoUpdate: true,
      switch1: true,
    }),
    watch: {
      selecionado: function () {
        this.habilitaCampo()
        console.log("Entrei...")
      },
      switch1(newValue){
        if(newValue){
            this.pSelected = this.$store.state.form.defaultParameters; 
        }else{            
            this.pSelected = []; //selecionados
        }
      }
    },
  methods: {
    ...mapActions(['getParametersIndicator']),
    remove(item) {
      const index = this.pSelected.indexOf(item);
      if (index >= 0) this.pSelected.splice(index, 1);
    },
    removeAll() {
      //const index = this.pSelected.indexOf(item.name)
      this.pSelected.splice();
    },
    limiter(e) {
      if (e.length > this.$store.state.form.totalParam) {
        //melhorar mensagem de erro
        this.dialog = true;
        e.pop();
      }
    },
    habilitaCampo(){
      const dept = this.selecionado;
        if (dept != "") {
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
