<template>
    <div class="px-4 py-2 bg-background border-2 border-primary rounded-md font-small">
        <div class="flex gap-x-1 items-center mb-2">
            <ion-icon name="create"></ion-icon>
            <label for="instructor-name" class="font-semibold">{{announcement.instructor}}</label>
        </div>
        <label for="course-name" class="font-medium text-primary">{{ announcement.courseName }}</label>
        <blockquote class="font-big text-xl my-2">{{announcement.msg}}</blockquote>
        <time datetime="08 March, 2024, 10:20 AM" class="text-sm text-[color:rgb(0,0,0,0.5)]">{{announcement.date}}</time>
    </div>
</template>

<script setup>
const props = defineProps({
    announcement: {
        type: Object,
        default: {
            courseName: "Untitled",
            msg: "Untitled",
            instructor: "Untitled",
            date: "Untitled",
        }
    }
})
</script>