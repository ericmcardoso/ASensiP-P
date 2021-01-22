<template>
	<v-app>
    <div class="inicio">
    <Menu />
    
    <v-container>
      
      <v-row>
        <v-col cols="12">
            <router-view />
        </v-col>
      </v-row>
    </v-container>
    </div>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
   components: { Menu }
}
</script>

<style>


</style>
