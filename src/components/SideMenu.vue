<template>
    <aside class=" bg-background px-10 py-8 h-screen sticky left-0 top-0">
        <TeamDropDown/>
        <nav class="my-8 grid gap-y-4">
            <div class="c1">
                <SideBtn :pageLink="pages[0].pageRoute" :title="pages[0].pageTitle" :isActive="pages[0].pageTitle == isActivePage ? true : false" icon="analytics" />
                <SideBtn pageLink="/mycourses" :activePage="isActivePage" :title="pages[1].pageTitle" :isActive="true" icon="book-outline" :isDropDown="true" :list="pages[1].subPages"/>
            </div>
            <SideBtn :pageLink="pages[2].pageRoute" :title="pages[2].pageTitle" :isActive="pages[2].pageTitle == isActivePage ? true : false" icon="card-outline"/>
            <SideBtn :pageLink="pages[3].pageRoute" :title="pages[3].pageTitle" :isActive="false" icon="trash-bin-outline"/>
            <div class="c2">
                <SideBtn :pageLink="pages[4].pageRoute" :title="pages[4].pageTitle" :isActive="false" icon="information-circle-outline"/>
                <SideBtn :pageLink="pages[5].pageRoute" :title="pages[5].pageTitle" :isActive="false" icon="settings-outline"/>
                <SideBtn :pageLink="pages[6].pageRoute" :title="pages[6].pageTitle" :isActive="false" icon="log-out-outline"/>
            </div> 
        </nav>
    </aside>
</template>

<script setup>
import SideBtn from './SideBtn.vue';
import TeamDropDown from './TeamDropDown.vue';
import { usePagesStore } from '../stores/pages';

const props = defineProps({
    isActivePage: {
        type: String,
        default: "none"
    },
})
const pagesStore = usePagesStore()
const pages = pagesStore.pages

</script>