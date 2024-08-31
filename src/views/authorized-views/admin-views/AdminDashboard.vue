<template>
    <main class="w-full">
        <StudentHeader :username="user.username" :title="`Hello, ${user.username} 👋`" />
        <section class="flex flex-col gap-4 px-10 py-8">
            <div class="flex justify-between items-center">
                <div class=" font-small font-medium flex items-center ">
                    <ion-icon class="bg-secondary rounded-lg p-2" name="calendar"></ion-icon>
                    <div class="flex gap-x-5 items-center relative font-semibold">
                        <span class=" absolute h-full w-full z-20 bg-gradient-to-r from-white"</span>
                        <time>11 Apr</time>
                        <time>12 Apr</time>
                        <time>Yesterday</time>
                        <time class=" py-2 px-4 bg-background rounded-lg">Today</time>
                    </div>
                </div>
                <div class="font-small font-medium px-4 py-2 bg-primary text-white flex items-center gap-2 rounded-lg">
                <ion-icon name="add-sharp"></ion-icon><label for="">Add Widget</label>
                </div>
            </div>
            <section class="grid grid-cols-18 gap-4 max-xl:flex max-xl:flex-col">
                <div class="col-span-7 grid grid-cols-[repeat(2,1fr)] gap-4">
                    <Widget >
                        <GlanceWidget icon="school" bgColor="bg-background" iconColor="text-gray-400" :qty="students.length" work="New students"/>
                    </Widget>
                    <Widget >
                        <GlanceWidget icon="people" bgColor="bg-background" iconColor="text-gray-400" :qty="instructors.length" work="New instructors"/>
                    </Widget>
                    <Widget >
                            <GlanceWidget icon="clipboard" bgColor="bg-background" iconColor="text-gray-400" :qty="userCourses.coursess.length" work="Total courses"/>
                    </Widget>
                    
                    <Widget >
                            <GlanceWidget icon="person-circle" bgColor="bg-background" iconColor="text-gray-400" :qty="1" work="Admins active"/>
                    </Widget>
                </div>
                <Widget class="flex flex-col gap-y-4 col-span-5 col-start-8">
                    <h1 class="h1-title self-start">Student Queries</h1>
                    <div class="flex items-center justify-between">
                        <DoughnutGraph/>
                    <div>
                        
                        <div class="flex gap-x-2 items-center">
                        <span class="size-4 rounded-full bg-primary"></span>
                        <label for="" class="font-small font-semibold">Resolved</label>
                    </div>
                    <div class="flex gap-x-2 items-center">
                        <span class="size-4 rounded-full bg-background"></span>
                        <label for="" class="font-small font-semibold">Not resolved</label>
                    </div>
                    </div>
                    </div>
                </Widget>
                <Widget class="col-span-6 col-start-13 max-h-72 overflow-y-scroll">
                    <h1 class="h1-title">Recent Activity</h1>
                    <div class="flex flex-col gap-y-6">
                        <ActivityLog :username="user.username"/>
                        <ActivityLog activityObj="Quiz" :username="user.username"/>
                    </div>
                </Widget>
                
                <Widget class="col-span-12 row-start-2">
                    <div class="flex justify-between items-start">
                        <h1 class="h1-title">Course Progress</h1>
                        <div class="flex gap-x-2 items-center">
                            <div class=" font-small font-medium px-2 py-1 border-2 border-ddd bg-background flex items-center gap-2 rounded-lg">
                                <time class="w-full">Active</time><ion-icon name="chevron-down-sharp"></ion-icon>
                            </div>
                            <div class=" font-small font-medium px-2 py-2 bg-accent flex items-center gap-2 rounded-full">
                                <ion-icon name="add"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <CoursesTable :courses="userCourses.coursess" prof="admin"/>
                </Widget>
                <Widget class="col-span-6 col-start-13 row-start-2 row-span-2 xl:self-start">
                    <div class="flex gap-x-4 items-center">
                        <ion-icon class="h1-title" name="calendar-clear-outline"></ion-icon>
                        <h1 class="h1-title">Events</h1>
                    </div>
                    <Calendar :highlightedNum="6" prof="admin"/>
                </Widget>
            </section>
        </section>
    </main>
</template>

<script setup>
import StudentHeader from '../../../components/StudentHeader.vue';
import GlanceWidget from '../../../components/GlanceWidget.vue'
import Widget from '../../../components/Widget.vue'
import Calendar from '../../../components/Calendar.vue'
import CoursesTable from '../../../components/CoursesTable.vue'
import ActivityLog from '../../../components/ActivityLog.vue'
import { reactive} from 'vue';
import { useUserStore } from '../../../stores/user';
import { useCoursesStore } from '../../../stores/courses';
import { useStudentStore } from '../../../stores/students';
import { useInstructorStore } from '../../../stores/instructors';
import DoughnutGraph from '../../../components/DoughnutGraph.vue';
const user = reactive(useUserStore().users[0])
const courses = reactive(useCoursesStore())
const userCourses = reactive({
    coursess: courses.courses
})
const students = reactive(useStudentStore().students)
const instructors = reactive(useInstructorStore().instructors)

</script>