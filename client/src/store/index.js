import Vue from "vue";
import Vuex from "vuex";
import types from "./mutations";
import Service from "./tools/Service";
import Bookmarks from "./modules/Bookmarks";
import errorTypes from "./errors";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Bookmarks,
  },

  state: {
    userData: [],
    userOptions: [],
    error: errorTypes.NULL(),
    loading: false,
  },

  getters: {
    storeUserData: (state) => {
      return state.userData;
    },

    storeUserOptions: (state) => {
      return state.userOptions.map((option) => {
        return { country: option.country.toLowerCase(), flag: option.flag };
      });
    },

    storeIsLoading: (state) => {
      return state.loading;
    },

    storeError: (state) => {
      return state.error;
    },
  },

  mutations: {
    [types.USERDATA_LOAD](state, payload) {
      Vue.set(state, "userData", payload.data);
    },
    [types.USEROPTIONS_LOAD](state, payload) {
      Vue.set(state, "userOptions", payload.options);
    },
    [types.ERROR](state, payload) {
      Vue.set(state, "error", payload.error);
    },
    [types.LOADING](state, payload) {
      Vue.set(state, "loading", payload.loading);
    },
  },

  actions: {
    initialize: async ({ getters, dispatch }) => {
      await dispatch("loadBookmarks");
      await dispatch("loadOptions");
      if (!getters.storeError.status && getters.storeBookmarks.length > 0) {
        await dispatch("loadData", getters.storeBookmarks);
      }
    },

    loadOptions: async ({ commit }) => {
      let {
        data: { options },
        errors,
      } = await Service.getOptions();
      if (errors) {
        commit({
          type: "ERROR",
          error: errorTypes.SERVER("loadOptions"),
        });
      } else {
        commit({
          type: "USEROPTIONS_LOAD",
          options: options || [],
        });
      }
    },

    loadData: async ({ commit, dispatch }, names) => {
      commit({
        type: "LOADING",
        loading: true,
      });
      let {
        data: { countries },
        errors,
      } = await Service.getCountries(names);
      commit({
        type: "LOADING",
        loading: false,
      });
      if (errors) {
        let userData = countries.filter((country) => country);
        if (userData.length === 0) {
          commit({
            type: "ERROR",
            error: errorTypes.SERVER("loadData"),
          });
        } else {
          let userNames = userData.map((country) => country.name.toLowerCase());
          console.log(userNames);
          commit({
            type: "USERDATA_LOAD",
            data: userData,
          });
          await dispatch("updateBookmarks", userNames);
        }
      } else {
        commit({
          type: "USERDATA_LOAD",
          data: countries,
        });
      }
    },

    addData: async ({ state, commit }, name = "") => {
      commit({
        type: "LOADING",
        loading: true,
      });
      let {
        data: { country },
        errors,
      } = await Service.getCountry(name);
      commit({
        type: "LOADING",
        loading: false,
      });
      if (errors) {
        let [{ message }] = errors;
        if (message.includes("404")) {
          commit({
            type: "ERROR",
            error: errorTypes.NOTFOUND("addData", name),
          });
        } else {
          commit({
            type: "ERROR",
            error: errorTypes.SERVER(),
          });
        }
      } else {
        commit({
          type: "USERDATA_LOAD",
          data: [country, ...state.userData],
        });
      }
    },

    removeData: ({ state, commit }, country) => {
      const userData = [...state.userData].filter((item) => {
        return item.name.toLowerCase() !== country.toLowerCase();
      });
      commit({ type: "USERDATA_LOAD", data: userData });
    },

    resetError: ({ commit }) => {
      commit({
        type: "ERROR",
        error: { ...errorTypes.NULL() },
      });
    },
  },
});
