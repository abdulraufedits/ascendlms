<template>
    <section class="flex flex-col px-10 py-4 gap-y-4">
        <Announcement v-for="announcement in announcements" :announcement="announcement"/>
    </section>
</template>

<script setup>
import Announcement from './Announcement.vue';

const props = defineProps({
    announcements: {
        type: Array,
        default :[]
    }
})
</script>