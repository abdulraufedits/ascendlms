<template>
    <table class="flex flex-col gap-y-4">
        <thead>
            <th>Course name</th>
            <th>Progress</th>
            <th>Status</th>
        </thead>
        <tbody>
            <tr v-for="course in courses">
                <td class="font-big font-bold text-xl">{{ course.courseName }}</td>
                <td class="pr-7"><ProgressBar :percentage="course.percentage"/></td>
                <td class="flex items-center gap-x-3">
                    <div class="summary-with-icon font-small">
                        <ion-icon name="albums-outline" class="text-primary"></ion-icon>
                        <label for="lecture notes">{{course.lecsCount}}</label>
                    </div>
                    <div class="summary-with-icon font-small">
                        <ion-icon name="clipboard-outline" class="text-accent"></ion-icon>
                        <label for="assignments">{{course.assignmentCount}}</label>
                    </div>
                    <div class="summary-with-icon font-small">
                        <ion-icon name="document-text-outline" class="text-secondary"></ion-icon>
                        <label for="quizzes">{{course.quizCount}}</label>
                    </div>
                </td>
                
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import ProgressBar from './ProgressBar.vue';

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
    gap: 20px;
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