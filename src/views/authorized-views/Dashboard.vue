<template>
    <div class="flex">
        <aside class=" bg-background px-10 py-8 h-screen">
        <div class="bg-white p-4 shadow-sm rounded-md flex gap-x-3 items-center">
            <img class="rounded-full h-8" src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Milo" alt="avatar" />
            <label for="email" class="font-big font-bold text-2xl w-24 truncate">Hello</label>
            <ion-icon name="chevron-expand-sharp" class="text-2xl"></ion-icon>
        </div>
        <nav class="my-8">
            <SideBtn title="Dashboard" :isActive="true" icon="analytics"/>
            <SideBtn title="Courses" :isActive="false" icon="book-outline" :isDropDown="true"/>
            <SideBtn title="Rewards" :isActive="false" icon="card-outline"/>
        </nav>
    </aside>
    <main>
        <header></header>
        <section></section>
    </main>
    </div>
</template>

<script setup>
import SideBtn from '../../components/SideBtn.vue';


</script>

<style>
 .font-big {
	font-feature-settings: "calt" 1, "liga" 1, "rlig" 1, "rvrn" 1, "kern" 1, "rclt" 1, "ss01" 1, "ss02" 1, "ss03" 1;
}
</style>