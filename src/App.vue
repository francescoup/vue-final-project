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
  <main class="bg-slate-900 flex flex-col items-center justify-center p-4 min-h-screen">
    <div class=" bg-slate-600 rounded p-2 md:p-4 md:w-[70%] w-full h-full">
      <h1 class="text-slate-200 font-bold">DNA Metrics</h1>
      <Chart 
      :dataSet="chartData"/>
      <Buttons/>
    </div>
    <div class="fixed bottom-0 p-2">
      <p class="text-slate-500">By <a href="https://github.com/francescoup" target="_blank">Francesco Mangione</a> per Start2Impact</p>
    </div>
  </main>
</template>


