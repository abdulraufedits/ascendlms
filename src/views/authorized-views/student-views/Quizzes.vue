<template>
        <main class="w-full">
            <StudentHeader :username="user.username" title="Quizzes"  subtitle="Courses / Quizzes"/>
            <section class="flex px-10 pt-8">
                <Tab title="All" @click="sortType = 'All'" :sortType="sortType" obj="quizzes"/>
                <Tab title="In-progress" @click="sortType = 'In-progress'" obj="quizzes"/>
                <Tab title="Upcoming" @click="sortType = 'Upcoming'" obj="quizzes"/>
                <Tab title="Completed"@click="sortType = 'Completed'" obj="quizzes"/>
                <Tab title="Failed" @click="sortType = 'Failed'" obj="quizzes"/>
            </section>
            <TableControls/>
            <QuizzesTable :quizzes="courses.sort(sortType,userCourses.coursess, 'quizzes')"/>
        </main>
</template>

<script setup>
import StudentHeader from '../../../components/StudentHeader.vue'
import Tab from '../../../components/Tab.vue'
import { ref ,reactive} from 'vue';
import { useCoursesStore } from '../../../stores/courses';
import QuizzesTable from '../../../components/QuizzesTable.vue';
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