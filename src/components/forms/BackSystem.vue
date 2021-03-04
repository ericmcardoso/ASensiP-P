<template>
  <div class="back">
      <v-row class="text-right">
          <v-col :cols="12">
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            v-on:click="volta"
            >
            Novo Sistema
            </v-btn>
         </v-col>
      </v-row>
  </div>
</template>

<script>

export default {
   methods: {
       volta(){
             this.$router.push({ path: '/' })
        }
   }
};
</script>