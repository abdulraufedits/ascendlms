<template>
    <div class="flex gap-x-2 items-center">
        <div class="w-full h-1.5 rounded-full bg-background overflow-hidden">
        <div class="progress h-full rounded-e-full bg-success" :style="`width: ${percentage}% ;`"></div>
        </div>
        <label for="progress" class="font-semibold font-big">{{percentage}}%</label>
    </div>
</template>

<script setup>
defineProps({
    percentage:{
        type: Number,
        default: 50
    }
})
</script>