<template>
  <div class="system">
    <v-container fluid>
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
                   v-on:click="simula(card.idSystem)"
                >
                    Simular
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    
    data: () => ({
      cards: [
        { title: 'Sistema 1', src: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg', flex: 6, idSystem: 70 },
        { title: 'Sistema 2', src: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg', flex: 6, idSystem: 72 },
        { title: 'Sistema 3', src: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg', flex: 6, idSystem: 75 },
      ],
    }),
    methods: {    
        ...mapActions(['searchSimulation']),
        async simula(value) {
            //seta o valor do Sistema na store
            this.$store.state.form.idSystem = value
            
            let controle = await this.searchSimulation();
            if(controle) this.$router.push({ path: '/sis' })
        }
    }
};
</script>