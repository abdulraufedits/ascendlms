<template>
    <main class="w-full">
        <StudentHeader :username="user.username" title="Trash"  subtitle="Trash"/>
        <TableControls/>
        <TrashTable/>
        </main>
</template>

<script setup>
import StudentHeader from '../../../components/StudentHeader.vue';
import { reactive, ref } from 'vue';
import { useUserStore } from '../../../stores/user';
import { useCoursesStore } from '../../../stores/courses';
import TableControls from '../../../components/TableControls.vue';
import TrashTable from '../../../components/TrashTable.vue';

const user = reactive(useUserStore().users[0])

const courses = reactive(useCoursesStore())
const userCourses = reactive({
    coursess: courses.courses
})

</script>