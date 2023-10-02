<script setup>
import Buttons from './components/Buttons.vue';
import Chart from './components/Chart.vue';
import { onMounted} from 'vue'
import { useDnaData } from './store/data';
const store = useDnaData()

onMounted(()=> {
  store.getData()  
})

</script>

<template>
  <main class="bg-slate-700 flex justify-center p-4 min-h-screen">
    <div class=" bg-slate-600 p-4 w-[70%] h-full">
      <Chart v-if="!store.loading"
      :time="store.timeSeries"
      :dataSet="store.dati"/>
      <Buttons/>
    </div>
  </main>
</template>


