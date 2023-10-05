<script setup>

import Buttons from './components/Buttons.vue';
import Chart from './components/Chart.vue';
import { onBeforeMount} from 'vue'
import { useDnaData } from './store/data';
import { storeToRefs } from 'pinia';
const store = useDnaData()
const {chartData} =storeToRefs(store)

onBeforeMount(()=>{
  store.getData()
})

</script>

<template>
  <main class="md:bg-neutral-950 bg-neutral-900 flex flex-col items-center md:justify-center md:p-4 min-h-screen">
    <div class="md:bg-neutral-950 bg-neutral-900 md:p-4 md:w-[70%] w-full h-full">
      <h1 class="text-cyan-200 p-4 text-center">DnA traffic charts</h1>
      <Chart 
      :dataSet="chartData"/>
      <div class="px-6 md:pb-6 pt-2 pb-6">
        <h2 class="text-cyan-200 text-center">DnA Metrics 2021</h2>
      </div>
      <Buttons/>
    </div>
    <div class="p-2 mt-8">
      <p class="text-cyan-200 text-sm">By <a href="https://github.com/francescoup" target="_blank">Francesco Mangione</a> per Start2Impact</p>
    </div>
  </main>
</template>


