<template>
    <main class="w-full">
        <StudentHeader :username="user.username" :title="`Hello, ${user.username} 👋`" @close-side-bar="()=> sideBarState = sideBarState ? false : true"/>
        <section class="flex flex-col gap-4 px-10 py-8">
            <div class="flex justify-between items-center">
                <div class=" font-small font-medium px-4 py-2 border-2 border-ddd bg-background flex items-center gap-2 rounded-lg">
                <time class="w-full">2023 - 2024</time><ion-icon name="chevron-down-sharp"></ion-icon>
                </div>
                <div class="font-small font-medium px-4 py-2 bg-primary text-white flex items-center gap-2 rounded-lg">
                <ion-icon name="add-sharp"></ion-icon><label for="">Add Widget</label>
                </div>
            </div>
            <section class="grid grid-cols-18 gap-4 max-xl:flex max-xl:flex-col">
                <Widget class="col-span-7  !flex flex-col justify-between bg-black !border-0">
                    <h1 class="h1-title text-white">Lecturer Performance</h1>
                    <div class="flex flex-col gap-y-1">
                        <div class="flex">
                            <img id="user-profile-img" src="../../../assets/user-profile.png" alt="user profile image" class="size-12">
                            <div >
                                <label for="user-profile-img" class=" font-big font-bold text-white" style="line-height: 0; font-size: 18px;">uername</label>
                                <p class="subtitle -mt-1">css</p>
                            </div>
                        </div>
                        <div class="flex gap-x-2 items-center">
                            <ion-icon name="trophy-outline" class="text-white text-4xl"></ion-icon>
                            <div>
                                <label for="" class="subtitle">3 badges earned</label>
                                <div class="badges-wrap flex">
                                <img class="img-badge bg-accent -mr-2" src="https://api.dicebear.com/9.x/personas/svg?seed=Buster" alt="avatar" />
                                <img class="img-badge bg-secondary -mr-2" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bubba" alt="avatar" />
                                <img class="img-badge bg-yellow -mr-2" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bubba" alt="avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Widget>
                <div class="flex flex-col gap-y-4 col-span-5 col-start-8">
                    <Widget class=" h-full">
                        <span>
                            <h1 class="h1-title self-start">$100.00</h1>
                            <p class="subtitle">Total income</p>
                        </span>
                        <label for="" class="font-small text-sm"><span class="text-success font-semibold"><ion-icon name="arrow-up-outline"></ion-icon>24% increase</span> from last week</label>
                    </Widget>
                    <Widget class=" h-full">
                        <h1 class="h1-title self-start">$100.00</h1>
                    </Widget>
                </div>
                <Widget class="col-span-6 col-start-13 max-h-72 overflow-y-scroll">
                    <h1 class="h1-title">Recent Activity</h1>
                    <div class="flex flex-col gap-y-6">
                        <ActivityLog :username="user.username"/>
                        <ActivityLog activityObj="Quiz" :username="user.username"/>
                    </div>
                </Widget>
                <Widget class="col-span-7 row-start-2 xl:self-start !flex flex-col justify-between">
                    <h1 class="h1-title">Course Statistics</h1>
                    <div class="flex flex-col gap-y-1">
                        <!-- <GlanceWidget icon="clipboard" bgColor="bg-primary" :qty="assignmentsCompleted" work="Assignments completed"/> -->
                        <GlanceWidget icon="checkmark" bgColor="bg-success" :qty="3" work="Courses completed"/>
                        <GlanceWidget icon="card" bgColor="bg-black" iconColor="text-secondary" :qty="4" work="Badges earned"/>
                    </div>
                </Widget>
                <Widget class="col-span-5 col-start-8 row-start-2 h-full">
                    <!-- <h1 class="h1-title self-start">Reminder</h1> -->
                    <GlanceWidget icon="card" bgColor="bg-black" iconColor="text-secondary" :qty="4" work="Badges earned" hasButton/>
                </Widget>
                <Widget class="col-span-12 row-start-3">
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
                    <CoursesTable :courses="userCourses.coursess"/>
                </Widget>
                <Widget class="col-span-6 col-start-13 row-start-2 row-span-2 xl:self-start">
                    <div class="flex gap-x-4 items-center">
                        <ion-icon class="h1-title" name="calendar-clear-outline"></ion-icon>
                        <h1 class="h1-title">Events</h1>
                    </div>
                    <Calendar :highlightedNum="6"/>
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
import { reactive, ref } from 'vue';
import { useUserStore } from '../../../stores/user';
import { useCoursesStore } from '../../../stores/courses';

const user = reactive(useUserStore().users[0])
const courses = reactive(useCoursesStore())
const userCourses = reactive({
    coursess: courses.courses
})

const sideBarState = ref(true);
if(window.innerWidth < 1024){
    sideBarState.value =  false;
}

</script>