<template>
    <RouterLink :to="`/student/${route + pageLink}`">
        <div class="cursor-pointer w-full flex items-center gap-x-2 py-3 px-4 rounded-lg transition-all duration-300" :class="isActive && !isDropDown ? 'bg-primary' : 'hover:bg-gray-200'" @click="()=> clicked = clicked ? false : true">
        <ion-icon :name="icon" :class="isActive && !isDropDown ? 'text-white' : ''" class="text-gray-600 text-2xl"></ion-icon>
        <label for="icon" :class="isActive && !isDropDown ? 'text-white' : ''" class="font-medium font-big w-full text-gray-600">{{title}}</label>
        <ion-icon v-if="isDropDown" name="chevron-down-sharp"></ion-icon>
        
    </div>
    </RouterLink>
    <div v-for="li in list">
        <RouterLink :to="`/student/${route + li.pageRoute}`">
            <div v-if="isDropDown && clicked" class="cursor-pointer ml-5 w-full flex items-center gap-x-1 py-3 px-4 rounded-lg transition-all duration-300 " :class="activePage == li.pageTitle && isDropDown ? 'bg-primary ' : 'hover:bg-gray-200'">
            <label for="icon" class="font-medium font-big w-full text-gray-600" :class="activePage == li.pageTitle && isDropDown ? 'text-white ' : ''">{{li.pageTitle}}</label>
        </div>
        </RouterLink>
    </div>
</template>

<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

export default {
    data(){
        return {
            clicked: ref(true),
            route: this.$route.params.user
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
        activePage: {
            type: String,
            default: "My Courses"
        },
        isDropDown: {
            type: Boolean,
            default: false
        },
        list: {
            type: Array,
            default: [{pageTitle: "Untitled", pageRoute: "/"}]
        },
        pageLink: {
            type: String,
            default: "/"
        },
        },
    methods:{
        getTitle(){
            this.$emit('getTitle', this.$props.list)
        }
    }
}
</script>

<style scoped>

</style>