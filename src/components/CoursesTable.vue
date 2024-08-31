<template>
    <table class="flex flex-col gap-y-4" v-if="prof == 'student'">
        <thead>
            <th>Course name</th>
            <th>Progress</th>
            <th>Status</th>
        </thead>
        <tbody>
            <tr v-for="course in courses">
                <td class="font-big font-bold text-xl"><RouterLink :to="`/student/${$route.params.user}/details/${course.courseName}`">{{ course.courseName }}</RouterLink></td>
                <td class="pr-7"><ProgressBar :percentage="course.percentage"/></td>
                <td class="flex items-center gap-x-3">
                    <div class="summary-with-icon font-small">
                        <ion-icon name="albums-outline" class="text-primary"></ion-icon>
                        <label for="lecture notes">{{course.lectureNotes.length}}</label>
                    </div>
                    <div class="summary-with-icon font-small">
                        <ion-icon name="clipboard-outline" class="text-accent"></ion-icon>
                        <label for="assignments">{{course.assignments.length}}</label>
                    </div>
                    <div class="summary-with-icon font-small">
                        <ion-icon name="document-text-outline" class="text-secondary"></ion-icon>
                        <label for="quizzes">{{course.quizzes.length}}</label>
                    </div>
                </td>
                
            </tr>
        </tbody>
    </table>
    <table class="flex flex-col gap-y-4" v-if="prof == 'admin'">
        <thead>
            <th class="!w-4/5">Course name</th>
            <th class="!w-3/5">Category</th>
            <th>Students</th>
            <th>Ratings</th>
            <th>Value</th>
            <th>Earnings</th>
        </thead>
        <tbody>
            <tr v-for="course in courses" class="font-semibold font-small">
                <td class="font-big font-bold text-xl !w-4/5"><RouterLink :to="`/student/${$route.params.user}/category`">{{ course.courseName }}</RouterLink></td>
                <td class="!w-3/5">
                    <span class=" flex gap-x-1 items-center">
                        <label for="assignment" >{{course.category}}</label>
                        <ion-icon name="chevron-forward-sharp"></ion-icon>
                    </span>
                </td>
                <td>
                    {{ course.students.length }}
                </td>
                <td>
                    {{ course.rating }}
                </td>
                <td>
                    {{"$" + course.value }}
                </td>
                <td :class="course.earning < avgEarning ? 'text-red' : 'text-success'">
                    {{ "$" + course.earning}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import ProgressBar from './ProgressBar.vue'
const props = defineProps({
    courses:{
        type: Array,
        default: []
    },
    prof: {
        type: String,
        default: 'student'
    }

})

const avgEarning= () => {
    var amount = 0.0
    props.courses.forEach(course => {
        amount += course.earning
    })
    return amount/props.courses.length
}
</script>

<style scoped>
thead {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding-bottom: 6px;
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