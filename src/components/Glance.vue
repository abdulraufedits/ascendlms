<template>
    <div class="flex flex-col gap-y-6">
        <h1 class="h1-subtitle">{{taskDone}}</h1>
        <label for="anything done" class="font-big text-4xl" :class="flexClass">{{ value }}</label>
    </div>
</template>

<script setup>
const props = defineProps({
    taskDone: {
        type: String,
        default: "Untitled",
    },
    value: {
        type: String,
        default: "NAN"
    },
    flexClass: {
        type: String,
        default: ""
    }
})
</script>