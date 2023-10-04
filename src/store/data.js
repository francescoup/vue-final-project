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
    options: {
      month: "short",
      day: "numeric",
    },
    active: "subscriptions",
  }),
  getters: {
    dataSet(state) {
      return Object.values(state.dati);
    },
  },
  // fetch api and return firts chart's date
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
        labels: Object.keys(data.subscriptions.history).map((date) => {
          let newDate = new Date(date);
          return new Intl.DateTimeFormat("en-Gb", this.options).format(newDate);
        }),
        datasets: [
          {
            data: Object.values(data.subscriptions.history),
            tension: 0.4,
            borderColor: "#ffc65c",
            color: "#8d8b95",
          },
        ],
      };
      this.loading = false;
    },
    // call and change chart's date and set active class on buttons
    upgradeChart(payload) {
      this.chartData = {
        labels: Object.keys(this.data[payload].history).map((date) => {
          let newDate = new Date(date);
          return new Intl.DateTimeFormat("en-Gb", this.options).format(newDate);
        }),
        datasets: [
          {
            data: Object.values(this.data[payload].history),
            tension: 0.4,
            borderColor: "#ffc65c",
          },
        ],
      };
      this.active = payload;
    },
  },
});
