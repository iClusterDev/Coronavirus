import Vue from "vue";
import Storage from "../tools/Storage";

export default {
  state: {
    bookmarks: []
  },
  getters: {
    storeBookmarks: state => {
      return state.bookmarks;
    }
  },
  mutations: {
    ["BOOKMARKS_LOAD"](state, payload) {
      Vue.set(state, "bookmarks", payload.bookmarks);
    },
    ["BOOKMARKS_UPDATE"](state, payload) {
      Vue.set(state, "bookmarks", payload.bookmarks);
    }
  },
  actions: {
    loadBookmarks: async ({ commit }) => {
      try {
        const bookmarks = await Storage.async_getItems();
        commit({ type: "BOOKMARKS_LOAD", bookmarks: bookmarks || [] });
      } catch (error) {
        throw new Error(`Error (loadBookmarks): ${error}`);
      }
    },

    updateBookmarks: async ({ commit }, bookmarks) => {
      try {
        await Storage.async_setItems(bookmarks);
        commit({ type: "BOOKMARKS_LOAD", bookmarks: bookmarks });
      } catch (error) {
        throw new Error(`Error (updateBookmarks): ${error}`);
      }
    },

    addBookmark: async ({ getters, commit }, country) => {
      if (!getters.storeBookmarks.includes(country)) {
        const bookmarks = [...getters.storeBookmarks, country];
        try {
          await Storage.async_setItems(bookmarks);
          commit({ type: "BOOKMARKS_LOAD", bookmarks: bookmarks });
        } catch (error) {
          throw new Error(`Error (addBookmarks): ${error}`);
        }
      }
    },

    removeBookmark: async ({ getters, commit }, country) => {
      if (getters.storeBookmarks.includes(country)) {
        const bookmarks = getters.storeBookmarks.filter(item => item !== country);
        try {
          await Storage.async_setItems(bookmarks);
          commit({ type: "BOOKMARKS_LOAD", bookmarks: bookmarks });
        } catch (error) {
          throw new Error(`Error (removeBookmarks): ${error}`);
        }
      }
    }
  }
};
