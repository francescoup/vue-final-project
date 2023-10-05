<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
        <button @click="store.upgradeChart('subscriptions')" :class="` ${active === 'subscriptions' ? 'bg-neutral-950 border-l-cyan-300 border-r-transparent' : 'bg-neutral-900 border-transparent'} md:hover:bg-neutral-950/80 p-4 border-x-[6px] transition ease-in-out duration-500 flex flex-col items-start`" ><h2 class="text-cyan-200">Subscriptions</h2><h3 class="text-slate-100 text-xl"><count-up :startVal='0' :endVal='subscriptionsTotal' :duration="3"></count-up></h3></button>
        <button @click="store.upgradeChart('impressions')" :class="`${active === 'impressions' ? 'bg-neutral-950 border-l-lime-300 border-r-transparent' : 'bg-neutral-900 border-transparent'} md:hover:bg-neutral-950/80  p-4 border-x-[6px] transition ease-in-out duration-500 flex flex-col items-start relative`" ><h2 class='text-lime-300'>Impressions</h2><h3 class="text-slate-100 text-xl">{{ impressionsTotal }}</h3><h4 :class="` ${showIncrement ? 'opacity-100' : 'opacity-0'} text-sm font-bold transition ease-in-out duration-500 absolute text-neutral-700 bg-lime-300 h-6 w-6 flex rounded-full justify-center items-center right-8 top-8 md:-right-3 md:-top-3 `">{{ update }}</h4></button>
        <button @click="store.upgradeChart('clicks')" :class="` ${active === 'clicks' ? 'bg-neutral-950 border-l-cyan-500 border-r-transparent' : 'bg-neutral-900 border-transparent'} md:hover:bg-neutral-950/80 p-4 border-x-[6px] transition ease-in-out duration-500 flex flex-col items-start`" ><h2 class='text-slate-500'>Clicks</h2><h3 class="text-slate-100 text-xl"><count-up :startVal='0' :endVal='clicksTotal' :duration="4"></count-up></h3></button>
        <button @click="store.upgradeChart('avgTime')" :class="` ${active === 'avgTime' ? 'bg-neutral-950 border-l-rose-400 border-r-transparent' : 'bg-neutral-900 border-transparent'} md:hover:bg-neutral-950/80  p-4 border-x-[6px] transition ease-in-out duration-500 flex flex-col items-start`" ><h2 class='text-rose-400'>Time</h2><h3 class="text-slate-100 text-xl"><count-up :startVal='0' :endVal='avgTime' :duration="4" :options="options" ></count-up></h3></button>
    </div>
</template>

<script setup>

import CountUp from 'vue-countup-v3'
import {onMounted, watch, ref} from 'vue'
import { useDnaData } from '../store/data';
import { storeToRefs } from 'pinia';
const store = useDnaData()
const { subscriptionsTotal, impressionsTotal, clicksTotal, avgTime, active } = storeToRefs(store)
const update = ref(0)

// options for countUp library
const options = {
    decimal: ".",
    decimalPlaces: 2
}

// declare a ref for upgrade and show impressions total
const showIncrement = ref(false)

function showLabels(){
    showIncrement.value = true
    setTimeout(()=>{
    showIncrement.value = false
    }, 1900)
}

// upgrade impressions value every 2.5s from 1 to 5
onMounted(()=> {
    setInterval(()=> {
        update.value = Math.floor(Math.random() * (5 - 1 + 1) + 1)
        impressionsTotal.value += update.value
    }, 2500)
})

// every time impression total change call that function for showing change in ui
watch(impressionsTotal,(newValue, oldValue)=>{
    showLabels()
})

</script>

