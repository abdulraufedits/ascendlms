<template>
    <aside class=" bg-background px-10 py-8 h-screen sticky left-0 top-0 !block" v-if="sideBarState.sideBarState">
        <TeamDropDown/>
        <nav class="my-8 grid gap-y-4">
            <template v-if="pages.prof == 'student'">
                <div class="c1">
                    <SideBtn :prof="prof" :pageLink="thePages[0].pageRoute" :title="thePages[0].pageTitle" :isActive="thePages[0].pageRoute == `/${isActivePage}` ? true : false" icon="analytics" />
                    <SideBtn :prof="prof" pageLink="/mycourses" :activePage="isActivePage" :title="thePages[1].pageTitle" :isActive="thePages[1].pageRoute == `/${isActivePage}` ? true : false" icon="book-outline" :isDropDown="true" :list="thePages[1].subPages"/>
                </div>
                <SideBtn :prof="prof" :pageLink="thePages[2].pageRoute" :title="thePages[2].pageTitle" :isActive="thePages[2].pageRoute == `/${isActivePage}` ? true : false" icon="card-outline"/>
                <SideBtn :prof="prof" :pageLink="thePages[3].pageRoute" :title="thePages[3].pageTitle" :isActive="thePages[3].pageRoute == `/${isActivePage}` ? true : false" icon="trash-bin-outline"/>
                <div class="c2">
                    <SideBtn :prof="prof" :pageLink="thePages[4].pageRoute" :title="thePages[4].pageTitle" :isActive="thePages[4].pageRoute == `/${isActivePage}` ? true : false" icon="information-circle-outline"/>
                    <SideBtn :prof="prof" :pageLink="thePages[5].pageRoute" :title="thePages[5].pageTitle" :isActive="thePages[5].pageRoute == `/${isActivePage}` ? true : false" icon="settings-outline"/>
                    <SideBtn :prof="prof" :pageLink="thePages[6].pageRoute" :title="thePages[6].pageTitle" :isActive="thePages[6].pageRoute == `/${isActivePage}` ? true : false" icon="log-out-outline"/>
                </div> 
            </template>
            <template v-if="pages.prof == 'instructor'">
                <div class="c1">
                    <SideBtn :prof="prof" :pageLink="thePages[0].pageRoute" :title="thePages[0].pageTitle" :isActive="thePages[0].pageRoute == `/${isActivePage}` ? true : false" :icon="thePages[0].pageIcon"/>
                    <SideBtn :prof="prof" pageLink="/mycourses" :activePage="isActivePage" :title="thePages[1].pageTitle" :isActive="thePages[1].pageRoute == `/${isActivePage}` ? true : false" :isDropDown="true" :list="thePages[1].subPages" :icon="thePages[1].pageIcon"/>
                </div>
                <SideBtn :prof="prof" :pageLink="thePages[2].pageRoute" :title="thePages[2].pageTitle" :isActive="thePages[2].pageRoute == `/${isActivePage}` ? true : false" :icon="thePages[2].pageIcon"/>
                <SideBtn :prof="prof" :pageLink="thePages[3].pageRoute" :title="thePages[3].pageTitle" :isActive="thePages[3].pageRoute == `/${isActivePage}` ? true : false" :icon="thePages[3].pageIcon"/>
                <SideBtn :prof="prof" :pageLink="thePages[4].pageRoute" :title="thePages[4].pageTitle" :isActive="thePages[4].pageRoute == `/${isActivePage}` ? true : false" :icon="thePages[4].pageIcon"/>
                <div class="c2">
                    <SideBtn :prof="prof" :pageLink="thePages[5].pageRoute" :title="thePages[5].pageTitle" :isActive="thePages[5].pageRoute == `/${isActivePage}` ? true : false" :icon="thePages[5].pageIcon"/>
                    <SideBtn :prof="prof" :pageLink="thePages[6].pageRoute" :title="thePages[6].pageTitle" :isActive="thePages[6].pageRoute == `/${isActivePage}` ? true : false" :icon="thePages[6].pageIcon"/>
                    <SideBtn :prof="prof" :pageLink="thePages[7].pageRoute" :title="thePages[7].pageTitle" :isActive="thePages[7].pageRoute == `/${isActivePage}` ? true : false" :icon="thePages[7].pageIcon"/>
                </div>
            </template>
            <template v-if="pages.prof == 'admin'">
                <div class="c1">
                    <SideBtn :prof="prof" :pageLink="thePages[0].pageRoute" :title="thePages[0].pageTitle" :isActive="thePages[0].pageRoute == `/${isActivePage}` ? true : false" :icon="thePages[0].pageIcon"/>
                    <SideBtn :prof="prof" :pageLink="thePages[1].pageRoute"  :title="thePages[1].pageTitle" :isActive="thePages[1].pageRoute ==`/${isActivePage}` ? true : false" :icon="thePages[1].pageIcon"/>
                </div>
                <div class="c2">
                    <SideBtn :prof="prof" :pageLink="thePages[2].pageRoute" :title="thePages[2].pageTitle" :isActive="thePages[2].pageRoute ==`/${isActivePage}` ? true : false" :icon="thePages[2].pageIcon"/>
                    <SideBtn :prof="prof" :pageLink="thePages[3].pageRoute" :title="thePages[3].pageTitle" :isActive="thePages[3].pageRoute ==`/${isActivePage}` ? true : false" :icon="thePages[3].pageIcon"/>
                </div>
                <SideBtn :prof="prof" :pageLink="thePages[4].pageRoute" :title="thePages[4].pageTitle" :isActive="thePages[4].pageRoute ==`/${isActivePage}` ? true : false" :icon="thePages[4].pageIcon":activePage="isActivePage" :isDropDown="true" :list="thePages[4].subPages"/>
                <div class="c3">
                    <SideBtn :prof="prof" :pageLink="thePages[5].pageRoute" :title="thePages[5].pageTitle" :isActive="thePages[5].pageRoute == `/${isActivePage}` ? true : false" :icon="thePages[5].pageIcon"/>
                    <SideBtn :prof="prof" :pageLink="thePages[6].pageRoute" :title="thePages[6].pageTitle" :isActive="thePages[6].pageRoute ==`/${isActivePage}` ? true : false" :icon="thePages[6].pageIcon"/>
                    <SideBtn :prof="prof" :pageLink="thePages[7].pageRoute" :title="thePages[7].pageTitle" :isActive="thePages[7].pageRoute ==`/${isActivePage}` ? true : false" :icon="thePages[7].pageIcon"/>
                    <SideBtn :prof="prof" :pageLink="thePages[8].pageRoute" :title="thePages[8].pageTitle" :isActive="thePages[8].pageRoute ==`/${isActivePage}` ? true : false" :icon="thePages[8].pageIcon"/>
                </div>
            </template>
        </nav>
    </aside>
</template>

<script setup>
import SideBtn from './SideBtn.vue';
import TeamDropDown from './TeamDropDown.vue'
import { useUserStore } from '../stores/user';

const sideBarState = useUserStore()

const props = defineProps({
    isActivePage: {
        type: String,
        default: "none"
    },
    pages: {
        type: Object,
        default: []
    }
})

const thePages = props.pages.pages


const prof = props.pages.prof
</script>