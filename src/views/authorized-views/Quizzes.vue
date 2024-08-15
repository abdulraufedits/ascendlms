<template>
    <div class="flex">
        <SideMenu isActivePage="Quizzes" v-show="sideBarState"/>
        <main class="w-full">
            <StudentHeader :username="$route.params.user" @close-side-bar="()=> sideBarState = sideBarState ? false : true" subtitle="Courses / Quizzes"/>
            <section class="flex px-10 pt-8">
                <Tab title="All" @click="sortType = 'All'" :sortType="sortType" obj="quizzes"/>
                <Tab title="In-progress" @click="sortType = 'In-progress'" obj="quizzes"/>
                <Tab title="Upcoming" @click="sortType = 'Upcoming'" obj="quizzes"/>
                <Tab title="Completed"@click="sortType = 'Completed'" obj="quizzes"/>
                <Tab title="Failed" @click="sortType = 'Failed'" obj="quizzes"/>
            </section>
            <section class="flex justify-between px-10 py-4 bg-background border-y-2 border-ddd">
                <div class="flex gap-x-2">
                    <input type="search" name="search-quizzes" id="search-quizzes"  class=" bg-white px-6 py-3 rounded-lg border-ddd border-2 bg-[url('/src/assets/icons/search-outline.svg')] bg-[right_1rem_center] bg-no-repeat bg-[length:18px_18px]   outline-none font-big font-light" placeholder="Search anything...">
                    <div class="grid place-content-center rounded-lg p-3 bg-white border-2 border-ddd">
                    <ion-icon name="filter-outline" class=" text-2xl"></ion-icon>
                    </div>
                </div>
                <div class="font-small font-medium  py-2 flex items-center gap-2 rounded-lg">
                    <label for="view" class="h5-title">View as</label>
                    <span class="p-1 grid place-content-center" :class="coursesView === 'list' ? 'bg-white rounded-sm': ''" @click="()=> coursesView = 'list'"><ion-icon name="list-outline" class="text-2xl"></ion-icon></span>
                    <span class="p-1 grid place-content-center" :class="coursesView === 'grid' ? 'bg-white rounded-sm': ''" @click="()=> coursesView = 'grid'"><ion-icon name="grid-outline" class="text-2xl"></ion-icon></span>
                </div>
            </section>
            <QuizzesTable :quizzes="courses.sort(sortType,courses.quizzes)"/>
        </main>
    </div>

</template>

<script setup>
import StudentHeader from '../../components/StudentHeader.vue'
import SideMenu from '../../components/SideMenu.vue'
import Tab from '../../components/Tab.vue'
import { ref } from 'vue';
import { useCoursesStore } from '../../stores/courses';
import QuizzesTable from '../../components/QuizzesTable.vue';

const props = defineProps({
    username: {
        type: String,
        default: "NOName"
    }
})
const sideBarState = ref(true);
if(window.innerWidth < 1024){
    sideBarState.value =  false;
}
const courses = useCoursesStore()
const coursesView = ref("grid")
const sortType = ref("All")
</script>


<style>

</style>