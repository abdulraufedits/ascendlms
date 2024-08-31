<template>
    <Widget class="xl:self-start h-full !flex flex-col justify-between">
        <h1 class="h1-title">{{course.courseName}}</h1>
        <p class="subtitle">{{ course.courseDesc }}</p>
        <div class="grid grid-flow-col">
            <div>
                <h5  class="h5-title">Members</h5>
                <div class="badges-wrap flex">
                    <img class="img-badge bg-accent -mr-2" src="https://api.dicebear.com/9.x/personas/svg?seed=Buster" alt="avatar" />
                    <img class="img-badge bg-secondary -mr-2" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bubba" alt="avatar" />
                    <img class="img-badge bg-yellow -mr-2" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bubba" alt="avatar" />
                    <label for="members" class="img-badge bg-gray-200 text-sm font-bold font-small">+93</label>
                </div>
            </div>
            <div>
                <h5  class="h5-title">Mentors</h5>
                <div class="badges-wrap flex">
                    <img class="img-badge bg-accent -mr-2" src="https://api.dicebear.com/9.x/personas/svg?seed=Buster" alt="avatar" />
                    <img class="img-badge bg-secondary -mr-2" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bubba" alt="avatar" />
                </div>
            </div>
        </div>
        <div v-if="$route.params.user == 'admin'" class="font-small font-semibold flex justify-between items-center pt-4 -mb-3">
            <button class="text-primary">MANAGE</button>
            <button class="text-red">DELETE</button>
        </div>
        <div v-else>
            <h4 class="h4-title">Progress</h4>
            <ProgressBar :percentage="course.percentage"/>
        </div>
    </Widget>
</template>

<script setup>
import Widget from './Widget.vue';
import ProgressBar from './ProgressBar.vue'
import { defineProps } from 'vue';
const props = defineProps({
    course: {
        type: Object,
        default: {}
    }
})
</script>

<style scoped>

</style>