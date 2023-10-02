import { defineStore } from "pinia";
import axios from "axios";

export const useDnaData = defineStore("dnaData", {
  state: () => ({
    url: "https://ott-fogliata.github.io/vuejs-s2i-repository/stats.json",
    loading: false,
    dati: [],
    newdati: [],
    subscriptionsTotal: null,
    impressionsTotal: null,
    clicksTotal: null,
    avgTime: null,
    timeSeries: null,
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
      this.dati = Object.values(data.subscriptions.history);
      this.subscriptionsTotal = data.subscriptions.total;
      this.impressionsTotal = data.impressions.total;
      this.clicksTotal = data.clicks.total;
      this.avgTime = data.avgTime.total;
      this.timeSeries = Object.keys(data.subscriptions.history);
      this.loading = false;
    },
    async getNewData(payload) {
      this.loading = true;
      const res = await axios.get(this.url);
      const data = await res.data;
      this.dati = Object.values(data[payload].history);
      this.loading = false;
    },
    testFunction() {
      this.dati = [10, 20, 30, 56, 21, 89, 123];
    },
  },
});
