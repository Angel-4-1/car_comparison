<template>
  <div>
    <div v-if="current_stage.id == my_stages.INTRO_STAGE"><Home/></div>
    <div v-if="current_stage.id == my_stages.CARD_STAGE"><Cards/></div>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Cards from './views/Cards.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import { STAGES as stages_constants } from '@/consts.js';

export default {
  name: 'App',
  components: {
    Home,
    Cards
  },
  data() {
      return {
        change_state: false,
        my_stages: stages_constants, //copiar los STAGES en variable local
      }
    },
    computed: {
        ...mapState( ['stage', 'current_stage'] )
    },
    methods: {
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
