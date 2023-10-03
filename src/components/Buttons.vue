<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button @click="store.upgradeChart('subscriptions')" class="rounded p-4 bg-slate-900 flex flex-col items-start" ><h2 class="text-slate-300">Subscriptions</h2><h3 class="text-slate-100 text-xl"><count-up :startVal='0' :endVal='subscriptionsTotal' :duration="3"></count-up></h3></button>
        <button @click="store.upgradeChart('impressions')" class="rounded p-4 bg-slate-900 flex flex-col items-start relative" ><h2 class='text-slate-300'>Impressions</h2><h3 class="text-slate-100 text-xl">{{ impressionsTotal }}</h3><h4 :class="` ${showIncrement ? 'opacity-100' : 'opacity-0'} text-sm font-bold transition ease-in-out duration-500 absolute bg-yellow-500 h-6 w-6 flex rounded-full justify-center items-center -right-3 -top-3 `  ">+{{ update }}</h4></button>
        <button @click="store.upgradeChart('clicks')" class="rounded p-4 bg-slate-900 flex flex-col items-start" ><h2 class='text-slate-300'>Clicks</h2><h3 class="text-slate-100 text-xl"><count-up :startVal='0' :endVal='clicksTotal' :duration="4"></count-up></h3></button>
        <button @click="store.upgradeChart('avgTime')" class="rounded p-4 bg-slate-900 flex flex-col items-start" ><h2 class='text-slate-300'>Time</h2><h3 class="text-slate-100 text-xl"><count-up :startVal='0' :endVal='avgTime' :duration="4" :options="options" ></count-up></h3></button>
    </div>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
import {onMounted, watch, ref} from 'vue'
import { useDnaData } from '../store/data';
import { storeToRefs } from 'pinia';
const store = useDnaData()
const { subscriptionsTotal, impressionsTotal, clicksTotal, avgTime } = storeToRefs(store)
const update = ref(0)
const options = {
    decimal: ".",
    decimalPlaces: 2
}

const showIncrement = ref(false)

function showLabels(){
    showIncrement.value = true
    setTimeout(()=>{
showIncrement.value = false
    }, 1800)
}

onMounted(()=> {
    setInterval(()=> {
        update.value = Math.floor(Math.random() * (5 - 1 + 1) + 1)
        impressionsTotal.value += update.value
    }, 2000)
})
watch(update,(newValue, oldValue)=>{
    
    showLabels()
})
</script>

