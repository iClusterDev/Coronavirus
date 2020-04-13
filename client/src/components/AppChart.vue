<template>
  <div class="chart-container">
    <v-chart class="chart" :options="line" :autoresize="true" />
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";

export default {
  components: {
    "v-chart": ECharts
  },
  props: {
    title: {
      type: String,
      default: "Chart"
    },
    xCategories: {
      type: Array,
      default: () => {
        return [];
      }
    },
    yValues1: {
      type: Array,
      default: () => {
        return [];
      }
    },
    yValues2: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {},
  data() {
    const colors = {
      background: "transparent",
      textMuted: "#F691C3",
      textMain: "#fff",
      serie1: "#fff",
      serie2: "cyan",
      inactive: "#3333"
    };
    return {
      line: {
        grid: {
          left: 32,
          top: 32,
          right: 32,
          bottom: 32
        },
        title: {
          show: true,
          text: this.title,
          left: 24,
          top: 16,
          textStyle: {
            color: colors.textMain,
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: 12
          }
        },
        legend: {
          top: 42,
          left: 24,
          orient: "vertical",
          itemGap: 10,
          itemWidth: 8,
          data: [
            {
              name: "Cases",
              icon: "circle",
              textStyle: {
                color: colors.textMuted,
                fontSize: 10
              }
            },
            {
              name: "Deaths",
              icon: "circle",
              textStyle: {
                color: colors.textMuted,
                fontSize: 10
              }
            }
          ]
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisTick: false,
          axisLabel: {
            show: true,
            // FIXME
            // interval must be computed on the length of data array
            interval: 999,
            showMinLabel: true,
            showMaxLabel: true,
            color: colors.textMuted,
            fontSize: 10
          },
          axisLine: {
            lineStyle: {
              color: colors.textMuted
            }
          },
          data: this.xCategories
        },
        yAxis: [
          {
            type: "value",
            show: false,
            axisLabel: false
          }
        ],
        series: [
          {
            name: "Cases",
            data: this.yValues1,
            type: "line",
            symbol: "none",
            smooth: true,
            color: colors.serie1,
            lineStyle: {
              color: colors.serie1,
              width: 1.25
            }
          },
          {
            name: "Deaths",
            data: this.yValues2,
            type: "line",
            symbol: "none",
            smooth: true,
            color: colors.serie2,
            lineStyle: {
              color: colors.serie2,
              width: 1.25
            }
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
.chart-container {
  width: 100%;
  height: 150px;
  margin-bottom: 0.25rem;
}

.chart {
  width: 100%;
  height: 100%;
  background-color: lighten(rgb(173, 14, 93), 5);
}
</style>
