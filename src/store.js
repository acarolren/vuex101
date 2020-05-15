import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		games: [],
  },

  // used to get data from the store
	getters: {
    gameTitles(state) {
      return state.games.map(game => game.title);
    }
  },

  // used to mutate or change the data in the store
	mutations: {
    setGames(state, games) {
      state.games = games;
    },
    addGame(state, game) {
      state.games.push(game);
    }
  },

  // commit the mutations and can hold other logic
	actions: {
    addGame(context, game) {
      if (typeof game !== 'object' && game !== null) return;
      context.commit("addGame", game);
    },
    removeGame({ commit, state }, game) {
      const games = [...state.games];
      const storedGame = games.find(g => g.title === game.title);
      if (!storedGame) return;

      games.splice(games.indexOf(storedGame), 1);
      commit("setGames", games);
    }
  }

});

export default store;