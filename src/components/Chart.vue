<template>
    <div class="bg-slate-900 h-80 rounded p-2 md:p-8 mb-4 overflow-hidden">
        <Line 
            v-if="date"
            id="my-chart-id"
            :options="options"
            :data="date"
        />  
    </div>

</template>

<script setup>
import {computed, defineProps}from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, PointElement, LinearScale, LineElement)

const props = defineProps({
  dataSet:Object,
    
})

const date = computed(()=> {
  return props.dataSet
})
    

const options = {
  scales: {
    x: {
      grid: {
        borderDash: [8, 4],
      },
      ticks: {
        color: "#f1f5f9",
      },
    },
    y: {
      grid: {
        borderDash: [8, 4],
      },
      ticks: {
        color: "#ffffff",
      },
      beginAtZero: true,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
  },
  
  
 
  }

</script>

