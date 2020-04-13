<template>
  <div id="app-statistics">
    <template v-if="statistics">
      <div class="header">
        <div class="title">
          <img class="title-thumb" :src="statistics.flag" alt />
          <div class="title-text">{{ statistics.name }}</div>
        </div>
        <div class="controls">
          <button
            class="btn"
            @click.stop="isFavourite ? onRemoveBookmark(statistics.name) : onAddBookmark(statistics.name)"
          >
            <font-awesome-icon :class="isFavourite ? '' : 'unselected'" icon="thumbtack" />
          </button>
          <button class="btn" @click.stop="onDeleteItem(statistics.name)">
            <font-awesome-icon icon="times" />
          </button>
        </div>
      </div>
      <div class="info">
        <app-info>
          <template v-slot:title>
            <small>Cases</small>
          </template>
          <template v-slot:value>
            <span>{{ statistics.cases.total }}</span>
          </template>
          <template v-slot:extra>
            <small>Today: {{ statistics.cases.today }} ({{ statistics.cases.growth | toPercentage }})</small>
          </template>
        </app-info>
        <app-info>
          <template v-slot:title>
            <small>Deaths</small>
          </template>
          <template v-slot:value>
            <span>{{ statistics.deaths.total }}</span>
          </template>
          <template v-slot:extra>
            <small>Today: {{ statistics.deaths.today }} ({{ statistics.deaths.growth | toPercentage }})</small>
          </template>
        </app-info>
      </div>
      <div class="graph">
        <app-chart
          title="Daily Evolution"
          :xCategories="timelineDaily.x"
          :yValues1="timelineDaily.y1"
          :yValues2="timelineDaily.y2"
        ></app-chart>
      </div>
      <small class="last-update">Last Update: {{ lastUpdate }}</small>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppChart from "./AppChart";
import AppInfo from "./AppInfo";

export default {
  name: "app-statistics",

  components: {
    AppChart,
    AppInfo
  },

  props: {
    statistics: {
      type: Object,
      default() {
        return [];
      }
    }
  },

  computed: {
    ...mapGetters(["storeBookmarks"]),

    isFavourite() {
      return this.storeBookmarks.includes(this.statistics.name.toLowerCase());
    },

    lastUpdate() {
      return this.statistics.cases.date;
    },

    timelineDaily() {
      const { cases, deaths } = this.statistics.timeline;
      return {
        x: cases.map(item => item.date),
        y1: cases.map(item => item.today),
        y2: deaths.map(item => item.today)
      };
    },

    timelineTotal() {
      const { cases, deaths } = this.statistics.timeline;
      return {
        x: cases.map(item => item.date),
        y1: cases.map(item => item.total),
        y2: deaths.map(item => item.total)
      };
    },

    timelineGrowth() {
      const { cases, deaths } = this.statistics.timeline;
      return {
        x: cases.map(item => item.date),
        y1: cases.map(item => item.growth),
        y2: deaths.map(item => item.growth)
      };
    }
  },

  methods: {
    onAddBookmark(country) {
      this.$store
        .dispatch("addBookmark", country.trim().toLowerCase())
        .then(() => {
          this.$emit("notify", "info", `${country} added to Favourites`);
        });
    },

    onRemoveBookmark(country) {
      this.$store
        .dispatch("removeBookmark", country.trim().toLowerCase())
        .then(() => {
          this.$emit("notify", "info", `${country} removed from Favourites`);
        });
    },

    onDeleteItem(country) {
      this.$store.dispatch("removeData", country.trim().toLowerCase());
    }
  },

  filters: {
    toPercentage(value) {
      let symbol = value > 0 ? "+" : "-";
      if (value === 0) symbol = "";
      return `${symbol}${Math.abs(value).toFixed(1)}%`;
    }
  }
};
</script>

<style lang="scss">
#app-statistics {
  padding: 1rem;
  background: rgb(173, 14, 93);
  border-radius: 12px;
  margin-bottom: 0.5rem;
  color: #fff;

  .header {
    margin-bottom: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      display: inline-flex;
      align-items: center;

      .title-text {
        margin-top: 1px;
        font-weight: bold;
        font-size: 16px;
      }

      .title-thumb {
        margin-right: 0.75rem;
        display: block;
        width: 24px;
        height: 16px;
      }
    }

    .controls {
      display: inline-flex;
      align-items: center;
    }
  }

  .info {
    display: grid;
    grid-column-gap: 0.25rem;
    grid-template-columns: 0.5fr 0.5fr;
    margin-bottom: 0.25rem;
  }

  .btn {
    background: rgb(173, 14, 93);
    border: none;
    color: #fff;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 0.25rem;
    outline: none;

    .unselected {
      color: rgba(255, 255, 255, 0.25);
    }
  }

  .last-update {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.25);
    display: block;
    margin: 1rem 0 0.25rem;
    text-align: center;
  }

  .chart {
    margin-bottom: 0.25rem;
  }
}
</style>
