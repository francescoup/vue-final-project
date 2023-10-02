<template>
    <div class="bg-slate-800 rounded p-8 mb-4">
        <Line
            id="my-chart-id"
            :options="options"
            :data="chartData"
        />
        <p>{{ date }}</p>
    </div>
</template>

<script setup>
import { useDnaData } from '../store/data';
import {reactive,computed, defineProps, watch, onMounted}from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, PointElement, LinearScale, LineElement)
const store = useDnaData()



const props = defineProps({
    dataSet:Array,
    time:Array
})

const time = computed(()=> {
return props.time})
const date = computed(()=> {
    return props.dataSet
})

const chartData = reactive({
    labels:time,
    datasets:[ { data: date, tension: 0.1 }]
})
        



    
  



const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: false,
  },
  transitions: {
      show: {
        animations: {
          x: {
            from: 0
          },
          y: {
            from: 0
          }
        }
      },
      hide: {
        animations: {
          x: {
            to: 0
          },
          y: {
            to: 0
          }
        }
      }
    }
  
  
 
  }

</script>

