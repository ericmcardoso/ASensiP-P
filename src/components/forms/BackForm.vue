<template>
  <div class="back">
      <v-row class="text-right">
          <v-col :cols="12">
              <v-btn
            class="ma-2"
            outlined
            color="indigo"
            v-on:click="volta1"
            >
            Novo Sistema
            </v-btn>
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            v-on:click="volta2"
            >
            Novo Gráfico
            </v-btn>
         </v-col>
         
      </v-row>
  </div>
</template>

<script>

export default {
   methods: {
       volta1(){
             this.$router.push({ path: '/' })
        },
        volta2(){
             this.$router.push({ path: '/sis' })
        }
   }
};
</script>