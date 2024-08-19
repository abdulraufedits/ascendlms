<template>
    <div class="flex">
        <SideMenu isActivePage="Dashboard" v-show="sideBarState"/>
    <main class="w-full">
        <StudentHeader :username="user.username" @close-side-bar="()=> sideBarState = sideBarState ? false : true"/>
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
                <Widget class="col-span-7 row-span-2 xl:self-start h-full !flex flex-col justify-between">
                    <h1 class="h1-title">Statistics</h1>
                    <div class="flex flex-col gap-y-1">
                        <GlanceWidget icon="clipboard" bgColor="bg-primary"/>
                        <GlanceWidget icon="checkmark" bgColor="bg-success" qty="11" work="Courses completed"/>
                        <GlanceWidget icon="card" bgColor="bg-black" iconColor="text-secondary" qty="3" work="Badges earned"/>
                    </div>
                </Widget>
                <Widget class="col-span-5 col-start-8 row-span-2 xl:self-start h-full">
                    <h1 class="h1-title">Assignments</h1>
                    <div class="flex flex-col gap-y-3">
                        <ColoredListItem/>
                        <ColoredListItem/>
                        <ColoredListItem/>
                    </div>
                </Widget>
                <Widget class="col-span-6 col-start-13 max-h-72 overflow-y-scroll">
                    <h1 class="h1-title">Recent Activity</h1>
                    <div class="flex flex-col gap-y-6">
                        <ActivityLog :username="user.username"/>
                        <ActivityLog activityObj="Quiz" :username="user.username"/>
                    </div>
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
                    <CoursesTable :courses="courses.courses"/>
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
    </div>
</template>

<script setup>
import GlanceWidget from '../../components/GlanceWidget.vue';
import Widget from '../../components/Widget.vue';
import ColoredListItem from '../../components/ColoredListItem.vue';
import ActivityLog from '../../components/ActivityLog.vue';
import CoursesTable from '../../components/CoursesTable.vue';
import Calendar from '../../components/Calendar.vue';
import SideMenu from '../../components/SideMenu.vue';
import StudentHeader from '../../components/StudentHeader.vue';
import { reactive, ref } from 'vue';
import { useUserStore } from '../../stores/user';
import { useCoursesStore } from '../../stores/courses';

const user = reactive(useUserStore().users[0])

const courses = reactive(useCoursesStore())


// console.log(courses.courses)
// courses.consoleKar()
const sideBarState = ref(true);
if(window.innerWidth < 1024){
    sideBarState.value =  false;
}


</script>
