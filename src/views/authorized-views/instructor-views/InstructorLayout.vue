<template>
    <div class="flex">
        <SideMenu :isActivePage="page" v-show="sideBarState"/>
      <RouterView :name="page">
      </RouterView>

    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SideMenu from '../../../components/SideMenu.vue';
const props = defineProps({
    user: String,
    page: String,
    course: String
})
</script>