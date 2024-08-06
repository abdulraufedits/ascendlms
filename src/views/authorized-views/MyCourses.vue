<template>
    <div class="flex">
        <SideMenu isActivePage="Courses" v-show="sideBarState"/>
    <main class="w-full">
        <StudentHeader :username="username" @close-side-bar="()=> sideBarState = sideBarState ? false : true" subtitle="Courses / My Courses"/>
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
            </section>
        </section>
    </main>
    </div>

</template>

<script setup>
import GlanceWidget from '../../components/GlanceWidget.vue';
import Widget from '../../components/Widget.vue';
import SideMenu from '../../components/SideMenu.vue';
import StudentHeader from '../../components/StudentHeader.vue';
import { ref } from 'vue';

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