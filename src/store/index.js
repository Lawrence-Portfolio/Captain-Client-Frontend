import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import projects from './projects';
import teams from './teams';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, projects, teams }
});
