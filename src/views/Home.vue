<template>
    <NavBar/>
    <section class="pt-12 pb-12 sm:pb-16 lg:pt-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="flex flex-col max-w-lg mx-auto lg:max-w-full lg:gap-y-12 lg:gap-x-16">
                <div>
                    <div class="text-center lg:text-left flex flex-col gap-4 items-start w-3/4">
                        <h1 class="text-4xl font-big font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-8xl font-pj">Your All-in-One Learning Solution.</h1>
                        <p class="text-lg text-gray-600 font-small w-9/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>

                        <RouterLink to="/" class="px-5 py-2 nav-link leading-7 text-white bg-primary border border-transparent rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Get Started - It's Free!
                    </RouterLink>
                    </div>
                </div>

                <div>
                    <img class="w-full" src="../assets/lms-dashboard.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import NavBar from '../components/NavBar.vue';
</script>