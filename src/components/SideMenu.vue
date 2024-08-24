<template>
    <aside class=" bg-background px-10 py-8 h-screen sticky left-0 top-0">
        <TeamDropDown/>
        <nav class="my-8 grid gap-y-4">
            <template v-if="prof == 'student'">
                <div class="c1">
                    <SideBtn :pageLink="studentPages.pages[0].pageRoute" :title="studentPages.pages[0].pageTitle" :isActive="studentPages.pages[0].pageTitle == isActivePage ? true : false" icon="analytics" />
                    <SideBtn pageLink="/mycourses" :activePage="isActivePage" :title="studentPages.pages[1].pageTitle" :isActive="true" icon="book-outline" :isDropDown="true" :list="studentPages.pages[1].subPages"/>
                </div>
                <SideBtn :pageLink="studentPages.pages[2].pageRoute" :title="studentPages.pages[2].pageTitle" :isActive="studentPages.pages[2].pageTitle == isActivePage ? true : false" icon="card-outline"/>
                <SideBtn :pageLink="studentPages.pages[3].pageRoute" :title="studentPages.pages[3].pageTitle" :isActive="studentPages.pages[3].pageTitle == isActivePage ? true : false" icon="trash-bin-outline"/>
                <div class="c2">
                    <SideBtn :pageLink="studentPages.pages[4].pageRoute" :title="studentPages.pages[4].pageTitle" :isActive="false" icon="information-circle-outline"/>
                    <SideBtn :pageLink="studentPages.pages[5].pageRoute" :title="studentPages.pages[5].pageTitle" :isActive="false" icon="settings-outline"/>
                    <SideBtn :pageLink="studentPages.pages[6].pageRoute" :title="studentPages.pages[6].pageTitle" :isActive="false" icon="log-out-outline"/>
                </div> 
            </template>
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

const studentPages = pagesStore.student
const prof = studentPages.prof
</script>