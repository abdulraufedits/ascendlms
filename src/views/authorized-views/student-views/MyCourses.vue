<template>
    <main class="w-full">
        <StudentHeader :username="user.username" title="My Courses"  subtitle="Courses / My Courses"/>
        <section class="flex flex-col gap-4 px-10 py-8">
            <div class="flex justify-between items-center">
                <TimeSlot/>
                <div class="font-small font-medium  py-2 flex items-center gap-2 rounded-lg">
                    <label for="view" class="h5-title">View as</label>
                    <span class="p-1 grid place-content-center" :class="coursesView === 'list' ? 'bg-gray-200 rounded-sm': ''" @click="()=> coursesView = 'list'"><ion-icon name="list-outline" class="text-2xl"></ion-icon></span>
                    <span class="p-1 grid place-content-center" :class="coursesView === 'grid' ? 'bg-gray-200 rounded-sm': ''" @click="()=> coursesView = 'grid'"><ion-icon name="grid-outline" class="text-2xl"></ion-icon></span>
                </div>
            </div>
            <section class="grid grid-cols-3 gap-4 max-xl:flex max-xl:flex-col" >
                <RouterLink :to="`/student/${$route.params.user}/details/${course.courseName}/content`" v-for="course in userCourses.coursess"><CourseCard v-if="coursesView === 'grid'" :course="course"/></RouterLink>
            </section>
            <CoursesTable v-if="coursesView === 'list'" :courses="courses.courses"/>
        </section>
    </main>
</template>

<script setup>
import CourseCard from '../../../components/CourseCard.vue';
import CoursesTable from '../../../components/CoursesTable.vue'
import StudentHeader from '../../../components/StudentHeader.vue';
import { ref, reactive } from 'vue';
import { useCoursesStore } from '../../../stores/courses';
import TimeSlot from '../../../components/TimeSlot.vue';
import { useUserStore } from '../../../stores/user';
import { RouterLink } from 'vue-router';

const courses = reactive(useCoursesStore())
const userCourses = reactive({
    coursess: courses.courses
})

const user = reactive(useUserStore().users[0])

const props = defineProps({
    username: {
        type: String,
        default: "NOName"
    }
})


const coursesView = ref("grid")

</script>


<style>
.img-badge{
    border-radius: 999px;
    height: 2.5rem;
    width: 2.5rem;
    display: grid;
    place-content: center;
}
.badges-wrap{
    gap: -4px;
}
</style>