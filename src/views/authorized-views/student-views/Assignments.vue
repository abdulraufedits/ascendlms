<template>
        <main class="w-full">
            <StudentHeader :username="user.username" title="Assignments"  subtitle="Courses / Assignments"/>
            <section class="flex px-10 pt-8">
                <Tab title="All" @click="sortType = 'All'" :sortType="sortType" obj="assignments"/>
                <Tab title="In-progress" @click="sortType = 'In-progress'" obj="assignments"/>
                <Tab title="Upcoming" @click="sortType = 'Upcoming'" obj="assignments"/>
                <Tab title="Completed"@click="sortType = 'Completed'" obj="assignments"/>
                <Tab title="Failed" @click="sortType = 'Failed'" obj="assignments"/>
            </section>
            <TableControls hasDiffViews/>
            <AssignmentsTable :assignments="courses.sort(sortType, userCourses.coursess, 'assignments')"/>
        </main>
</template>

<script setup>
import StudentHeader from '../../../components/StudentHeader.vue'
import Tab from '../../../components/Tab.vue'
import { ref,reactive } from 'vue';
import AssignmentsTable from '../../../components/AssignmentsTable.vue';
import { useCoursesStore } from '../../../stores/courses';
import { useUserStore } from '../../../stores/user';
import TableControls from '../../../components/TableControls.vue';

const props = defineProps({
    username: {
        type: String,
        default: "NOName"
    }
})

const courses = reactive(useCoursesStore())
const userCourses = reactive({
    coursess: courses.courses
})


const user = reactive(useUserStore().users[0])

const sortType = ref("All")
</script>


<style>

</style>