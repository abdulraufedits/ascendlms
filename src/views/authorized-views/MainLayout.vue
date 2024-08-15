<template>
    <StudentLayout :page="page"/>
</template>

<script setup>
import StudentLayout from './StudentLayout.vue';

const props = defineProps({
    user: String,
    page: String
})

console.log(props.page,props.user)
</script>