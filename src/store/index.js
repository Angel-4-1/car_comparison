import Vue from 'vue'
import Vuex from 'vuex'
import { STAGES as stages_constants } from '@/consts.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //Definicion de los distintos estados del juego
    stage: [
      { name: 'IntroStage',    id: stages_constants.INTRO_STAGE,    change: false, change_to: 0 },
      { name: 'CardStage',     id: stages_constants.CARD_STAGE,     change: false, change_to: 0 }
    ],
    current_stage: { name: 'IntroStage', id: 0 }
  },
  mutations: {
    changeState( state, payload ) {
      //payload = { index, destination }
      state.stage[payload.index].change = true;
      state.stage[payload.index].change_to = payload.destination;
      state.current_stage.id = payload.destination;
      state.current_stage.name = state.stage[payload.destination].name;
    },
  },
  actions: {
  },
  modules: {
  }
})
