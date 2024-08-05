<template>
    <div class="flex">
        <SideMenu isActivePage="Dashboard"/>
    <main class="w-full">
        <header class="px-10 py-8 flex items-center w-full justify-between">
            <div class=" flex items-center gap-x-4">
                <img src="../../assets/icons/dock-icon.svg" alt="open and closing side menu" class="size-12">
                <div>
                    <h1 class="font-big text-3xl font-bold ">Welcome, {{ username }} 👋</h1>
                    <p class="font-small text-gray-500">Here's how you doing</p>
                </div>
            </div>
            <div class=" flex items-center gap-x-4">
                <form class="input-field flex justify-between items-center border-2 border-ddd">
                    <input type="search" name="Search" id="search-input" class=" bg-transparent outline-none font-big font-regular" placeholder="Search anything...">
                    <ion-icon name="search-outline" class="text-gray-700"></ion-icon>
                </form>
                <div class="grid place-content-center min-h-16 min-w-16 rounded-lg border-2 border-ddd">
                    <ion-icon name="notifications-outline" class=" text-2xl"></ion-icon>
                </div>
                <div class="border-ddd border-2 rounded-lg min-h-16 px-5 flex items-center gap-x-6">
                    <img id="user-profile-img" src="../../assets/user-profile.png" alt="user profile image" class="size-9">
                    <div>
                        <label for="user-profile-img" class=" font-big font-bold" style="line-height: 0; font-size: 18px;">{{ username }}</label>
                        <p class="subtitle -mt-1">Computer Science Student</p>
                    </div>
                    <ion-icon name="chevron-down-sharp"></ion-icon>
                </div>
            </div>
        </header>
        <section class="flex flex-col gap-4 px-10 py-8">
            <div class="flex justify-between items-center">
                <div class=" font-small font-medium px-4 py-2 border-2 border-ddd bg-background flex items-center gap-2 rounded-lg">
                <time class="w-full">2023 - 2024</time><ion-icon name="chevron-down-sharp"></ion-icon>
                </div>
                <div class="font-small font-medium px-4 py-2 bg-primary text-white flex items-center gap-2 rounded-lg">
                <ion-icon name="add-sharp"></ion-icon><label for="">Add Widget</label>
                </div>
            </div>
            <section class="grid grid-cols-18 gap-4">
                <Widget class="col-span-7 row-span-2 self-start h-full !flex flex-col justify-between">
                    <h1 class="h1-title">Statistics</h1>
                    <div class="flex flex-col gap-y-1">
                        <GlanceWidget icon="clipboard" bgColor="bg-primary"/>
                        <GlanceWidget icon="checkmark" bgColor="bg-success" qty="11" work="Courses completed"/>
                        <GlanceWidget icon="card" bgColor="bg-black" iconColor="text-secondary" qty="3" work="Badges earned"/>
                    </div>
                </Widget>
                <Widget class="col-span-5 col-start-8 row-span-2 self-start h-full">
                    <h1 class="h1-title">Assignments</h1>
                    <div class="flex flex-col gap-y-3">
                        <ColoredListItem/>
                        <ColoredListItem/>
                        <ColoredListItem/>
                    </div>
                </Widget>
                <Widget class="col-span-6 col-start-13 max-h-72 overflow-y-scroll">
                    <h1 class="h1-title">Recent Activity</h1>
                    <div class="flex flex-col gap-y-6">
                        <ActivityLog activityIcon="document-text" :username="username"/>
                        <ActivityLog/>
                        <ActivityLog/>
                        <ActivityLog/>
                        <ActivityLog/>
                    </div>
                </Widget>
                <Widget class="col-span-12 row-start-3">
                    <div class="flex justify-between items-start">
                        <h1 class="h1-title">Course Progress</h1>
                        <div class="flex gap-x-2 items-center">
                            <div class=" font-small font-medium px-2 py-1 border-2 border-ddd bg-background flex items-center gap-2 rounded-lg">
                                <time class="w-full">Active</time><ion-icon name="chevron-down-sharp"></ion-icon>
                            </div>
                            <div class=" font-small font-medium px-2 py-2 bg-accent flex items-center gap-2 rounded-full">
                                <ion-icon name="add"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <CoursesTable :courses="[{courseName: 'Untitled',percentage: 20,lecsCount: 3,assignmentCount: 3, quizCount: 3}]"/>
                </Widget>
                <Widget class="col-span-6 col-start-13 row-start-2 row-span-2 self-start">
                    <div class="flex gap-x-4 items-center">
                        <ion-icon class="h1-title" name="calendar-clear-outline"></ion-icon>
                        <h1 class="h1-title">Events</h1>
                    </div>
                    <Calendar :highlightedNum="6"/>
                </Widget>
            </section>
        </section>
    </main>
    </div>
</template>

<script setup>
import GlanceWidget from '../../components/GlanceWidget.vue';
import Widget from '../../components/Widget.vue';
import ColoredListItem from '../../components/ColoredListItem.vue';
import ActivityLog from '../../components/ActivityLog.vue';
import CoursesTable from '../../components/CoursesTable.vue';
import Calendar from '../../components/Calendar.vue';
import SideMenu from '../../components/SideMenu.vue';

defineProps({
    username: {
        type: String,
        default: "NOName"
    }
})

</script>
