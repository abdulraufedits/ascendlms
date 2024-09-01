<template>
    <div class="flex">
        <SideMenu :isActivePage="page" :pages="pages" v-if="sideBarState.sideBarState"/>
      <RouterView :name="page">
      </RouterView>

    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SideMenu from '../../../components/SideMenu.vue';
import { usePagesStore } from '../../../stores/pages'
import {useUserStore} from '../../../stores/user'
import { ref } from 'vue';

const pages = usePagesStore().admin
const props = defineProps({
    user: String,
    page: String,
    course: String
})

const sideBarState = ref(useUserStore())
</script>