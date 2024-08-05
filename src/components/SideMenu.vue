<template>
    <aside class=" bg-background px-10 py-8 h-screen sticky left-0 top-0">
        <TeamDropDown/>
        <nav class="my-8 grid gap-y-4">
            <div class="c1">
                <SideBtn :title="pageTitles[0]" :isActive="pageTitles[0] == isActivePage ? true : false" icon="analytics" />
                <SideBtn :title="pageTitles[1]" :isActive="pageTitles[1] == isActivePage ? true : false" icon="book-outline" :isDropDown="true" :list="['My courses','Assignments','Quizzes', 'Announcements']"/>
            </div>
            <SideBtn :title="pageTitles[2]" :isActive="pageTitles[2] == isActivePage ? true : false" icon="card-outline"/>
            <SideBtn :title="pageTitles[3]" :isActive="false" icon="trash-bin-outline"/>
            <div class="c2">
                <SideBtn :title="pageTitles[4]" :isActive="false" icon="information-circle-outline"/>
                <SideBtn :title="pageTitles[5]" :isActive="false" icon="settings-outline"/>
                <SideBtn :title="pageTitles[6]" :isActive="false" icon="log-out-outline"/>
            </div>
        </nav>
    </aside>
</template>

<script setup>
import SideBtn from './SideBtn.vue';
import TeamDropDown from './TeamDropDown.vue';

const props = defineProps({
    isActivePage: {
        type: String,
        default: "none"
    },
})
const pageTitles = ["Dashboard", "Courses", "Rewards", "Trash", "Help","Settings","Log out"]

</script>