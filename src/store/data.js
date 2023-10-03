import { defineStore } from "pinia";
import axios from "axios";

export const useDnaData = defineStore("dnaData", {
  state: () => ({
    url: "https://ott-fogliata.github.io/vuejs-s2i-repository/stats.json",
    loading: false,
    data: {},
    subscriptionsTotal: null,
    impressionsTotal: null,
    clicksTotal: null,
    avgTime: null,
    chartData: null,
  }),
  getters: {
    dataSet(state) {
      return Object.values(state.dati);
    },
  },
  actions: {
    async getData() {
      this.loading = true;
      const res = await axios.get(this.url);
      const data = await res.data;
      this.data = data;
      this.subscriptionsTotal = data.subscriptions.total;
      this.impressionsTotal = data.impressions.total;
      this.clicksTotal = data.clicks.total;
      this.avgTime = data.avgTime.total;

      this.chartData = {
        labels: Object.keys(data.subscriptions.history),
        datasets: [
          {
            data: Object.values(data.subscriptions.history),
            tension: 0.3,
            borderColor: "yellow",
            color: "white",
          },
        ],
      };
      this.loading = false;
    },
    // async getNewData(payload) {
    //   this.loading = true;
    //   const res = await axios.get(this.url);
    //   const data = await res.data;
    //   this.dati = Object.values(data[payload].history);
    //   this.loading = false;
    // },
    upgradeChart(payload) {
      this.chartData = {
        labels: Object.keys(this.data[payload].history),
        datasets: [
          {
            data: Object.values(this.data[payload].history),
            tension: 0.3,
            borderColor: "yellow",
          },
        ],
      };
    },
  },
});
