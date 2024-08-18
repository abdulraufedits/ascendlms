<template>
    <table class="flex flex-col gap-y-4">
        <thead>
            <th>Topic</th>
            <th>Status</th>
            <th>Lecture Notes</th>
        </thead>
        <tbody>
            <tr v-for="course in courses">
                <td class="font-big font-bold text-xl">
                    <RouterLink :to="`/student/${$route.params.user}/mycourses/${course.courseName}`">
                        <div class="flex items-center gap-x-2">
                            <label for="topic">Introduction</label>
                            <ion-icon name="play-circle"></ion-icon>
                        </div>
                    </RouterLink>
                </td>
                <td class="pr-7">
                    <div>
                        <ion-icon name="checkmark-circle"></ion-icon>
                        <label for="status">Completed</label>
                    </div>
                </td>
                <td>
                    <button class="cta">Lect</button>
                </td>
                
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    courses:{
        type: Array,
        default: []
    }

})
</script>

<style scoped>
thead {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding: 6px 0 6px 40px;
}
th{
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
    color: #919191;
    text-align: left;
    width: 45%;
}
tr{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

tbody{
    display: flex;
    flex-direction: column;
    gap: 24px 0;
    padding-left: 40px;
}
td{
    text-align: left;
    width: 45%;
}
.summary-with-icon{
    display: flex;
    align-items: center;
    font-weight: 600
}
</style>