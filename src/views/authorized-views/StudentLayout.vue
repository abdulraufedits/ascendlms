<template>
    <div>
      <!-- <Dashboard v-if="page == 'dashboard'"/>
      <MyCourses v-if="page == 'mycourses'"/>
      <Assignments v-if="page =='assignments'"/>
      <Quizzes v-if="page == 'quizzes'"/>
      <Announcements v-if="page == 'announcements'"/>
       -->
      <RouterView :name="page"></RouterView>
    </div>
</template>

<script setup>
import Dashboard from './Dashboard.vue';
import MyCourses from './MyCourses.vue';
import Assignments from './Assignments.vue';
import Quizzes from './Quizzes.vue';
import Announcements from './Announcements.vue';
import { RouterView } from 'vue-router';

const props = defineProps({
    user: String,
    page: String
})

console.log(props.page)
</script>