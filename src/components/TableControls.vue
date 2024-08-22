<template>
    <section class="flex justify-between px-10 py-4 bg-background border-y-2 border-ddd">
        <div class="flex gap-x-2">
            <input type="search" name="search-assignments" id="search-assignments"  class=" bg-white px-6 py-3 rounded-lg border-ddd border-2 bg-[url('/src/assets/icons/search-outline.svg')] bg-[right_1rem_center] bg-no-repeat bg-[length:18px_18px]   outline-none font-big font-light" placeholder="Search anything...">
            <div class="grid place-content-center rounded-lg p-3 bg-white border-2 border-ddd">
            <ion-icon name="filter-outline" class=" text-2xl"></ion-icon>
            </div>
        </div>
        <div v-if="hasDiffViews" class="font-small font-medium  py-2 flex items-center gap-2 rounded-lg">
            <label for="view" class="h5-title">View as</label>
            <span class="p-1 grid place-content-center" :class="coursesView === 'list' ? 'bg-white rounded-sm': ''" @click="()=> coursesView = 'list'"><ion-icon name="list-outline" class="text-2xl"></ion-icon></span>
            <span class="p-1 grid place-content-center" :class="coursesView === 'grid' ? 'bg-white rounded-sm': ''" @click="()=> coursesView = 'grid'"><ion-icon name="grid-outline" class="text-2xl"></ion-icon></span>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    hasDiffViews: {
        type: Boolean,
        default: false
    }
})
const coursesView = ref("grid")
</script>