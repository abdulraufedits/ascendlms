<template>
    <RouterLink :to="obj == 'details' ? `/student/${$route.params.user}/${obj}/${titleRoute}/${courseFilter}` : `/student/${$route.params.user}/${obj}/${titleRoute}`" >
        <div class="px-4 py-3 bg-white flex items-center gap-1.5" :class="$route.params.filter == titleRoute || title == sortType ? 'shadow-material' : ''">
            <label class="font-small font-semibold" :class="$route.params.filter == titleRoute || title == sortType ? 'text-black' : 'text-gray-400'" for="tab">{{ title }}</label>
            <div v-if="badge" class="rounded-full h-4 px-1 grid place-content-center" :class="$route.params.filter == titleRoute || title == sortType ? 'bg-black' : 'bg-gray-400'"><label for="tab" class="text-sm text-white">{{ n }}</label></div>
        </div>
    </RouterLink>
</template> 

<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: "Untitled"
    },
    n: {
        type: Number,
        default: 0
    },
    badge: {
        type: Boolean,
        default: false
    },
    sortType: {
        type: String,
        default: "All"
    },
    obj: {
        type: String,
        default: "NAN"
    },
    courseFilter: {
        type: String,
        default: "All"
    }
})
const titleRoute= props.title.toLocaleLowerCase();
</script>