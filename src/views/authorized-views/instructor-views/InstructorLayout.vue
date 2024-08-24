<template>
    <div class="flex">
        <SideMenu :isActivePage="page" :pages="pages" v-show="sideBarState"/>
      <RouterView :name="page">
      </RouterView>

    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SideMenu from '../../../components/SideMenu.vue';
import { usePagesStore } from '../../../stores/pages'

const pages = usePagesStore().instructor
const props = defineProps({
    user: String,
    page: String,
    course: String
})
</script>