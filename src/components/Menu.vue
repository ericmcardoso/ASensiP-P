<template>
  <div>
    <v-toolbar dark color="blue darken-4">
    

    <v-toolbar-title class="white--text">Embrapa - Análise de Sensibilidade</v-toolbar-title>
    <v-spacer></v-spacer><!-- <v-list>
     <v-toolbar-items >
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn
            text
            large
            v-on="on"
            >
            Formulários
            </v-btn>
        </template>
        
            <v-list-item
            v-for="(item, index) in items"
            :key="index"
            
            >
            <v-list-item-title><router-link class="lin" :to="{path: item.link}">{{ item.title }}</router-link></v-list-item-title>
            </v-list-item>
        </v-list> 
        </v-menu>

       
        
        </v-toolbar-items>-->
      
     </v-toolbar>
  </div>
</template>


<script>

export default {
   data: () => ({
    items: [
      { title: 'Tornado Simulação', link: '/formsimulacao' },
      { title: 'Tornado Sistema', link: '/formsistema'  },
      { title: 'XY', link: '/formxy'  },
      { title: 'Histograma', link: '/formhistograma'  },
    ],
    items2: [
      { title: 'Tornado Simulação', link: '/tornadosimulacao' },
      { title: 'Tornado Sistema', link: '/tornadosistema' },
      { title: 'XY', link: '/line' },
      { title: 'Histograma', link: '/bar' },
    ],
  }),
}
</script>

<style scoped>
    .lin{
        text-decoration: none;
        color: black;
    }
</style>