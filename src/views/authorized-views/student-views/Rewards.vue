<template>
    <div class="flex">
        <SideMenu isActivePage="Rewards" v-show="sideBarState"/>
        <main class="w-full">
            <StudentHeader :username="user.username" title="Rewards"  subtitle="Rewards"/>
                <section class="flex flex-col gap-10 px-10 py-8">
                    <div class="flex justify-between">
                        <div>
                            <img src="../../../assets/user-profile.png" alt="user-img">
                            <h1 class="h1-title">{{ user.username }}</h1>
                        </div>
                        <div class="flex items-center gap-x-5 w-3/5">
                            <div>
                                <div class="star_12 grid place-content-center "><label class="relative z-30 text-white font-big text-xl text-center" for="level">{{ level }}</label></div>
                            </div>
                            <div class="w-full h-7 rounded-full bg-background overflow-hidden">
                                <div class="progress h-full bg-success" :style="`width: 40% ;`"></div>
                                </div>
                            <label for="progress" class="font-semibold text-3xl font-big">376/400</label>
                        </div>
                    </div>
                    <div class="flex gap-x-12 mt-2">
                        <Glance taskDone="Badges earned" value="3"/>
                        <Glance taskDone="Achievements done" value="20"/>
                        <Glance taskDone="Position" value="1st" flexClass="text-success"/> 
                    </div>
                </section>
                <section>
                    <h1 class="h1-subtitle ml-10 mb-4">Achievements</h1>
                        <div class="flex ml-10">
                            <Tab title="All" @click="sortType = 'All'" :sortType="sortType" obj="rewards"/>
                            <Tab title="New" @click="sortType = 'New'" obj="rewards"/>
                            <Tab title="Completed" @click="sortType = 'Completed'" obj="rewards"/>
                        </div>
                        <RewardsTable :achievements="useUserStore().sort(sortType,user.achievements)"/>
                </section>
        </main>
    </div>
</template>

<script setup>
import Glance from '../../../components/Glance.vue';
import SideMenu from '../../../components/SideMenu.vue'
import StudentHeader from '../../../components/StudentHeader.vue'
import { ref,reactive } from 'vue';
import Tab from '../../../components/Tab.vue';
import RewardsTable from '../../../components/RewardsTable.vue';
import { useUserStore } from '../../../stores/user';

const user = reactive(useUserStore().users[0])

const props = defineProps({
    username: {
        type: String,
        default: "NOName"
    },
    level: {
        type: Number,
        default: 1
    }
})
const sideBarState = ref(true);
if(window.innerWidth < 1024){
    sideBarState.value =  false;
}
const sortType = ref("All")

</script>

<style scoped>
.star_12 {
  background: #46BD84;
  width: 30px;
  height: 30px;
  position: relative;
  border-radius: 2px;
}

.star_12:before,
.star_12:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background: #46BD84;
  border-radius: 2px;
}

.star_12:before {
  transform: rotate(60deg);
}
.star_12:after {
  transform: rotate(30deg);
}.star_12 {
  background: #46BD84;
  width: 30px;
  height: 30px;
  position: relative;
}

.star_12:before,
.star_12:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background: #46BD84;
}

.star_12:before {
  transform: rotate(60deg);
}
.star_12:after {
  transform: rotate(30deg);
}
</style>