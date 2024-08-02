<template>
    <div class="cursor-pointer w-full flex items-center gap-x-2 py-3 px-4 rounded-lg transition-all duration-300" :class="isActive ? 'bg-primary' : 'hover:bg-gray-200'" @click="()=> clicked = clicked ? false : true">
        <ion-icon :name="icon" :class="isActive ? 'text-white' : ''" class="text-gray-600 text-2xl"></ion-icon>
        <label for="icon" :class="isActive ? 'text-white' : ''" class="font-medium font-big w-full text-gray-600">{{title}}</label>
        <ion-icon v-if="isDropDown" name="chevron-down-sharp"></ion-icon>
        
    </div>
    <div v-if="isDropDown && clicked" v-for="li in list" class="cursor-pointer ml-5 w-full flex items-center gap-x-1 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-200">
            <label for="icon" :class="isActive ? 'text-white' : ''" class="font-medium font-big w-full text-gray-600">{{li}}</label>
        </div>
</template>

<script>
import { ref } from 'vue';
export default {
    data(){
        return {
            clicked: ref(false)
        }
    },
    props: {
        title: {
            type: String,
            default: "Untitled"
        },
        icon: {
            type: String,
            default: "logo-ionic"
        },
        isActive: {
            type: Boolean,
            default: false
        },
        isDropDown: {
            type: Boolean,
            default: false
        },
        list: {
            type: Array,
            default: ["Untitled"]
        }
    }
}
</script>

<style scoped>

</style>