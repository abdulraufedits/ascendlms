<template>
    <div>
      <RouterView :name="page">
      </RouterView>

    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';

const props = defineProps({
    user: String,
    page: String,
    course: String
})
</script>