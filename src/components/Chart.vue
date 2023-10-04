<template>
    <div class="bg-neutral-900 h-80 p-2 md:p-8 md:mb-4 overflow-hidden">
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
        display:false,
        offset:true,
        drawOnChartArea:true
      },
      ticks: {
        color: "#8d8b95",
      },
    },
    y: {
      grid: {
        borderDash: [8, 4],
        offset:false,
      },
      ticks: {
        color: "#8d8b95",
      },
      beginAtZero: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
    tooltip: {
        usePointStyle: false,
        displayColors:false
      }
  },
  
}

</script>

