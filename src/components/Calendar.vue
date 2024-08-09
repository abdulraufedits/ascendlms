<template>
    <div class="grid gap-y-5">
        <div class="flex justify-between items-center p-1.5 bg-ddd rounded">
            <ion-icon class="text-lg" name="chevron-back"></ion-icon>
            <label for="" class="font-big font-bold">{{month}}</label>
            <ion-icon class="text-lg" name="chevron-forward"></ion-icon>
        </div>
        <div class="grid  auto-cols-fr grid-flow-col gap-1">
            <label for="days" v-for="day,i in days" class="p-0.5 bg-background rounded min-w-6 text-center font-small font-bold" :key="i">
                {{ day }}
            </label>
        </div>
        <div class="grid grid-cols-7 gap-1">
            <label for="days" v-for="i in numberOfDays" class="p-0.5 rounded text-center font-small font-semibold" :class="i == highlightedNum ? 'bg-accent' :''">{{ i }}</label>
        </div>
    </div>
</template>

<script setup>
const days = ["S","M", "T", "W", "T", "F", "S"];

const props = defineProps({
    month: {
        type: String,
        default: "January"
    },
    numberOfDays:{
        type: Number,
        default: 30
    },
    highlightedNum: {
        type: Number,
        default: 0
    },
})
</script>