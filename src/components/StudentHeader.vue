<template>
    <header class="px-10 py-8 flex items-center w-full justify-between">
            <div class=" flex items-center gap-x-4">
                <img src="../assets/icons/dock-icon.svg" alt="open and closing side menu" class="size-12 cursor-pointer" @click="sideBarState.changeSideBarState()">
                <div>
                    <h1 class="font-big text-3xl font-bold ">{{ title }}</h1>
                    <p class="font-small text-gray-500">{{subtitle}}</p>
                </div>
            </div>
            <div class=" flex items-center gap-x-4">
                <input type="search" name="search-assignments" id="search-assignments"  class=" bg-white px-6 py-4 rounded-lg border-ddd border-2 bg-[url('/src/assets/icons/search-outline.svg')] bg-[right_1rem_center] bg-no-repeat bg-[length:18px_18px]   outline-none font-big font-light" placeholder="Search anything...">
                <div class="grid place-content-center rounded-lg p-4 bg-white border-2 border-ddd">
                    <ion-icon name="notifications-outline" class=" text-2xl"></ion-icon>
                </div>
                <div class="border-ddd border-2 rounded-lg min-h-16 px-5 flex items-center gap-x-6">
                    <img id="user-profile-img" src="../assets/user-profile.png" alt="user profile image" class="size-9">
                    <div v-show="showInMobile">
                        <label for="user-profile-img" class=" font-big font-bold" style="line-height: 0; font-size: 18px;">{{ username }}</label>
                        <p class="subtitle -mt-1">{{dept}}</p>
                    </div>
                    <ion-icon name="chevron-down-sharp"></ion-icon>
                </div>
            </div>
        </header>
</template>

<script setup>
import { useUserStore } from '../stores/user';

const sideBarState = useUserStore()
const props = defineProps({
    username: {
        type: String,
        default: "Untitled"
    },
    title: {
        type: String,
        default: "Untitled"
    },
    dept: {
        type: String,
        default: "Untitled"
    },
    subtitle: {
        type: String,
        default: "Dashboard"
    },
})

const showInMobile = window.innerWidth < 1024 ? false : true;
</script>