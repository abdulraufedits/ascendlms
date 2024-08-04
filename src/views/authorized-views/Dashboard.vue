<template>
    <div class="flex">
        <aside class=" bg-background px-10 py-8 h-screen sticky left-0 top-0">
        <TeamDropDown/>
        <nav class="my-8 grid gap-y-4">
            <div class="c1">
                <SideBtn title="Dashboard" :isActive="true" icon="analytics"/>
                <SideBtn title="Courses" :isActive="false" icon="book-outline" :isDropDown="true" :list="['My courses','Assignments','Quizzes', 'Announcements']"/>
            </div>
            <SideBtn title="Rewards" :isActive="false" icon="card-outline"/>
            <SideBtn title="Trash" :isActive="false" icon="trash-bin-outline"/>
            <div class="c2">
                <SideBtn title="Help" :isActive="false" icon="information-circle-outline"/>
                <SideBtn title="Settings" :isActive="false" icon="settings-outline"/>
                <SideBtn title="Log out" :isActive="false" icon="log-out-outline"/>
            </div>
        </nav>
    </aside>
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
                    <input type="search" name="Search" id="search-input" class=" bg-transparent outline-none font-big" placeholder="Search anything...">
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
                <ion-icon name="chevron-down-sharp"></ion-icon><label for="">Add Widget</label>
                </div>
            </div>
            <section class="grid grid-cols-18 gap-4">
                <Widget class="col-span-7 row-span-2">
                    <h1 class="h1-title">Statistics</h1>
                    <GlanceWidget/>
                </Widget>
                <Widget class="col-span-5 col-start-8 row-span-2">
                    <h1 class="h1-title">Assignments</h1>
                    <ColoredListItem/>
                    <ColoredListItem/>
                    <ColoredListItem/>
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
                    <h1 class="h1-title">Course Statistics</h1>
                </Widget>
                <Widget class="col-span-6 col-start-13 row-start-2 row-span-2">
                    <div class="flex gap-x-4 items-center">
                        <ion-icon class="h1-title" name="calendar-clear-outline"></ion-icon>
                        <h1 class="h1-title">Events</h1>
                    </div>
                    <div>
                        <div class="flex justify-between items-center p-1.5 bg-ddd rounded">
                            <ion-icon class="text-lg" name="calendar-clear-outline"></ion-icon>
                            <label for="" class="font-big font-bold">March</label>
                            <ion-icon class="text-lg" name="calendar-clear-outline"></ion-icon>
                        </div>
                    </div>
                </Widget>
            </section>
        </section>
    </main>
    </div>
</template>

<script setup>
import GlanceWidget from '../../components/GlanceWidget.vue';
import Widget from '../../components/Widget.vue';
import SideBtn from '../../components/SideBtn.vue';
import TeamDropDown from '../../components/TeamDropDown.vue';
import ColoredListItem from '../../components/ColoredListItem.vue';
import ActivityLog from '../../components/ActivityLog.vue';
defineProps({
    username: {
        type: String,
        default: "NOName"
    }
})

</script>
