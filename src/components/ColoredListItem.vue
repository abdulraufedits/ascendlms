<template>
    <div class="flex gap-1 bg-background rounded-xl px-6 py-4 items-center justify-between">
        <span class="block">
            <h4 class="h4-title">{{title}}</h4>
            <time class="subtitle">{{date}}</time>
        </span>
        <RouterLink to="/">
            <button class="bg-primary px-4 py-1 text-white font-small rounded-full">Submit</button>
        </RouterLink>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "Untitled"
    },
    date: {
        type: String,
        default: "08 March, 10:20 AM"
    }
})
</script>
