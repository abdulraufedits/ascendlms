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
import { ref } from 'vue';

const pages = usePagesStore().instructor
const props = defineProps({
    user: String,
    page: String,
    course: String
})

const sideBarState = ref(true);
if(window.innerWidth < 1024){
    sideBarState.value =  false;
}
</script>