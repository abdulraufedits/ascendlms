<template>
    <NavBar activePage="services"/>
    <section class="pt-12 lg:pt-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col gap-y-32">
            <div class=" space-y-8 ">
                <h1 class="text-4xl lg:text-8xl">Ascend has the best services in the market.</h1>
                <p class="text-lg font-medium font-small">An investment in Anthology is just the beginning of our journey together. Rest assured that our team is with you every step of the way, from implementation through adoption and growth, ensuring you have the consulting expertise and resources needed to achieve your goals.</p>
            </div>
            <div class="flex flex-col gap-y-16">
                <label for="approach" class="sect-label">Straightforward approach</label>
                <div class="lg:flex justify-between items-center">
                    <div class="w-full">
                        <h1 class="text-5xl">Integrate</h1>
                        <p class="text-lg font-medium font-small py-8">Ascend was founded in 2024 by a group of friends who wanted to make learning more accessible and engaging. We started as a small team of developers and educators, but now we're a global company with team members from all over the world.</p>
                    </div>
                    <img class="lg:w-1/2 aspect-din object-cover rounded-xl" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="group of friends">
                </div>
                <div class="lg:flex justify-between items-center">
                    <div class="w-full">
                        <h1 class="text-5xl">Adopt</h1>
                        <p class="text-lg font-medium font-small lg:py-8 py-4">Ascend was founded in 2024 by a group of friends who wanted to make learning more accessible and engaging. We started as a small team of developers and educators, but now we're a global company with team members from all over the world.</p>
                    </div>
                    <img class="lg:w-1/2 aspect-din object-cover rounded-xl" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="group of friends">
                </div>
                <div class="flex justify-between items-center max-lg:flex-col-reverse gap-x-6">
                    <img class="lg:w-1/2 aspect-din object-cover rounded-xl" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="group of friends">
                    <div class="w-full">
                        <h1 class="text-4xl">Achieve</h1>
                        <p class="text-lg font-medium font-small py-8"> We aim to make learning accessible to everyone, everywhere, by leveraging cutting-edge technology and fostering a community of lifelong learners.</p>
                    
                    </div>
                
            </div>
                <div class="flex justify-between items-center max-lg:flex-col-reverse gap-x-6">
                    <img class="lg:w-1/2 aspect-din object-cover rounded-xl" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="group of friends">
                    <div class="w-full">
                        <h1 class="text-4xl">Grow</h1>
                        <p class="text-lg font-medium font-small py-8"> We aim to make learning accessible to everyone, everywhere, by leveraging cutting-edge technology and fostering a community of lifelong learners.</p>
                    
                    </div>
                
                </div>
            </div>
        </div>
        <div class="bg-black text-white py-48 px-8 w-full flex flex-col justify-center items-center gap-y-12 mt-32">
            <h1 class="lg:text-5xl text-4xl text-white">We can't wait to begin our journey together.</h1>
            <button class="bg-white text-black font-small text-lg font-semibold rounded-xl px-6 py-4">Get Started for free</button>
        </div>
    </section>
    <Footer/>
</template>

<script setup>

import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

</script>

<style lang="scss" scoped>

</style>