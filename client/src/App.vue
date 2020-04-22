<template>
  <div id="app">
    <div class="app-container">
      <app-autocomplete
        class="elevated"
        :world-countries="storeUserOptions"
        :options="storeUserOptions"
        @select="onSelect"
      ></app-autocomplete>

      <div v-show="!serverError">
        <div v-for="stats of storeUserData" :key="stats.name">
          <app-statistics class="elevated list-shift-item" :statistics="stats" @notify="onNotify"></app-statistics>
        </div>
        <div v-show="storeUserData.length === 0" class="no-data">
          <div>No Countries Selected</div>
          <div>Add Some</div>
        </div>
      </div>

      <div v-show="serverError" class="no-data">
        <div>{{storeError.message}}</div>
        <div>Come Back Later!</div>
      </div>
      <app-toast :duration="1500" :flashMessage="flashMessage"></app-toast>
    </div>
  </div>
</template>

<script>
import AppAutocomplete from "./components/AppAutocomplete";
import AppStatistics from "./components/AppStatistics";
import AppToast from "./components/AppToast";
import { mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    AppAutocomplete,
    AppStatistics,
    AppToast
  },

  data() {
    return {
      flashMessage: {
        type: "",
        message: ""
      }
    };
  },

  computed: {
    ...mapGetters([
      "storeBookmarks",
      "storeUserData",
      "storeUserOptions",
      "storeError"
    ]),

    serverError() {
      return this.storeError.type === 500 ? true : false;
    },

    userCountries() {
      return this.storeUserData.map(item => item.name.toLowerCase());
    }

    // userStats() {
    //   return this.storeUserData.map(item => {
    //     // let { name, flag, cases, deaths, todayCases, todayDeaths, timeline } = item;
    //     // let { cases, deaths } = timeline;
    //     return {
    //       name: name,
    //       flag: flag,
    //       cases: { ...cases[cases.length - 1] },
    //       deaths: { ...deaths[cases.length - 1] },
    //       timeline
    //     };
    //   });
    // }
  },

  created() {
    this.$store.dispatch("initialize");
  },

  methods: {
    onSelect(country) {
      if (!this.userCountries.includes(country.toLowerCase())) {
        this.$store.dispatch("addData", country.trim().toLowerCase());
      }
    },

    onNotify(type, message) {
      this.flashMessage = Object.create({
        message,
        type
      });
    }
  },

  watch: {
    storeError() {
      let { status, type, message } = this.storeError;
      if (status && type === 404) {
        this.onNotify("error", message);
        this.$store.dispatch("resetError");
      }
    }
  }
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  line-height: 1.5;
  box-sizing: border-box;
  font-family: "Montserrat", "Helvetica Neue", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #000;
  background: lighten(#000, 95);
}

.elevated {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.no-data {
  text-align: center;
  margin-top: 3rem;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgb(173, 14, 93);
}

#app {
  .app-container {
    min-width: 320px;
    max-width: 425px;
    height: 100vh;
    margin: 0 auto;
    padding: 0.5rem;
  }
}
</style>
