<template>
    <div class="flex">
        <SideMenu isActivePage="Courses" v-show="sideBarState"/>
    <main class="w-full">
        <StudentHeader :username="username" @close-side-bar="()=> sideBarState = sideBarState ? false : true" subtitle="Courses / My Courses"/>
        <section class="flex flex-col gap-4 px-10 py-8">
            <div class="flex justify-between items-center">
                <div @click="courses" class=" font-small font-medium px-4 py-2 border-2 border-ddd bg-background flex items-center gap-2 rounded-lg">
                <time class="w-full">2023 - 2024</time><ion-icon name="chevron-down-sharp"></ion-icon>
                </div>
                <div class="font-small font-medium  py-2 flex items-center gap-2 rounded-lg">
                    <label for="view" class="h5-title">View as</label>
                    <span class="p-1 grid place-content-center"><ion-icon name="list-outline"></ion-icon></span>
                    <span class="p-1 grid place-content-center bg-gray-200 rounded-sm"><ion-icon name="grid-outline"></ion-icon></span>
                </div>
            </div>
            <section class="grid grid-cols-3 gap-4 max-xl:flex max-xl:flex-col" >
                <CourseCard/>
            </section>
        </section>
    </main>
    </div>

</template>

<script setup>
import CourseCard from '../../components/CourseCard.vue';
import SideMenu from '../../components/SideMenu.vue';
import StudentHeader from '../../components/StudentHeader.vue';
import { ref } from 'vue';

const courses = async () => {
    var data = await fetch("../../assets/database/courses.json");
    console.log(data);
}

defineProps({
    username: {
        type: String,
        default: "NOName"
    }
})
const sideBarState = ref(true);
if(window.innerWidth < 1024){
    sideBarState.value =  false;
}
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