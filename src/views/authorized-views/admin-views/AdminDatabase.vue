<template>
    <main class="w-full">
        <StudentHeader :username="user.username" :title="$route.params.filter" subtitle=" "/>
        <section class="flex flex-col gap-4 px-10 py-8">
            <div class="flex flex-col gap-y-3 items-end">
                <div class="flex gap-x-2">
                    <div class="grid place-content-center rounded-lg p-2 bg-white border-2 border-ddd">
                    <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <div class="font-small font-medium pl-2 pr-4 py-2 bg-primary text-white flex items-center gap-1 rounded-lg">
                    <ion-icon name="add-outline" class="text-xl"></ion-icon><label for="">Add {{$route.params.filter}}</label>
                </div>
                </div>
                <div class="font-small font-medium  py-2 flex items-center gap-2 rounded-lg">
                    <label for="view" class="h5-title">View as</label>
                    <span class="p-1 grid place-content-center" :class="coursesView === 'list' ? 'bg-gray-200 rounded-sm': ''" @click="()=> coursesView = 'list'"><ion-icon name="list-outline" class="text-2xl"></ion-icon></span>
                    <span class="p-1 grid place-content-center" :class="coursesView === 'grid' ? 'bg-gray-200 rounded-sm': ''" @click="()=> coursesView = 'grid'"><ion-icon name="grid-outline" class="text-2xl"></ion-icon></span>
                </div>
            </div>
            <section class="grid grid-cols-4 gap-4 max-xl:flex max-xl:flex-col" >
                <ContactCard v-if="$route.params.filter == 'students'" v-for="stud in students" :name="stud.username" designation="Student" :imgsrc="stud.img"/>
                <ContactCard v-if="$route.params.filter == 'instructors'" v-for="inst in instructors" :name="inst.username" :designation="inst.designation" :imgsrc="inst.img"/>
            </section>
            
        </section>
    </main>
</template>

<script>
import StudentHeader from '../../../components/StudentHeader.vue';
import { reactive, ref} from 'vue';
import { useUserStore } from '../../../stores/user';
import { useCoursesStore } from '../../../stores/courses';
import ContactCard from '../../../components/ContactCard.vue';
import { useStudentStore } from '../../../stores/students';
import { useInstructorStore } from '../../../stores/instructors';

export default {
    data(){
        return {
            coursesView: ref("grid"),
        }
    },
    components: {
        StudentHeader,
        ContactCard
    },
    setup(){
        const user = reactive(useUserStore().users[0])
        const students = reactive(useStudentStore().students)
        const instructors = reactive(useInstructorStore().instructors)
        const courses = reactive(useCoursesStore())
        const userCourses = reactive({
            coursess: courses.courses
        })

    return { user, userCourses, students, instructors}
    }
}
</script>