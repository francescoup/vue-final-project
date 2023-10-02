<template>
    <div class="grid grid-cols-1 md:grid-col-2 lg:grid-col-4 gap-4">
        <button @click="store.getNewData('subscriptions')" class="rounded p-4 bg-slate-900 flex flex-col items-start" ><span>Subscriptions</span><span>{{ subscriptionsTotal }}</span></button>
        <button @click="store.getNewData('impressions')" class="rounded p-4 bg-slate-900 flex flex-col items-start" ><span>Impressions</span>{{ impressionsTotal }}</button>
        <button @click="store.getNewData('clicks')" class="rounded p-4 bg-slate-900 flex flex-col items-start" ><span>Clicks</span>{{ clicksTotal }}</button>
        <button @click="store.getNewData('avgTime')" class="rounded p-4 bg-slate-900 flex flex-col items-start" ><span>Time</span>{{ avgTime }}</button>
    </div>
</template>

<script setup>
import {onMounted} from 'vue'
import { useDnaData } from '../store/data';
import { storeToRefs } from 'pinia';
const store = useDnaData()
const { subscriptionsTotal, impressionsTotal, clicksTotal, avgTime } = storeToRefs(store)

onMounted(()=> {
    setInterval(()=> {
      impressionsTotal.value +=2
    }, 2000)
})

</script>

