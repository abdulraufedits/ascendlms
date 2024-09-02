<template>
    <div class="flex items-center gap-x-4" :class="flexClass">
        <div :class="bgColor" class=" rounded-full min-h-11 min-w-11 grid place-content-center"><ion-icon :name="icon" class=" text-2xl" :class="iconColor"></ion-icon></div>
        <span>
            <h2 class="h2-title">{{ qty }}</h2>
            <p class="subtitle">{{ work }}</p>
        </span>
    </div>
    <button v-show="hasButton" class="text-white bg-black font-small rounded-full px-4 py-2 w-full">{{btnText}}</button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    hasButton: {
            type: Boolean,
            default: false
        },
        btnText: {
            type: String,
            default: "Button"
        },
        icon: {
            type: String,
            default: "checkmark-sharp"
        },
        work: {
            type: String,
            default: "Assignments completed"
        },
        qty: {
            type: [Number, String],
            default: 999
        },
        bgColor: {
           type: String,
           default: "bg-success" 
        },
        iconColor: {
           type: String,
           default: "text-white" 
        },
        flexClass: {
           type: String,
           default: "" 
        },
})
</script>
