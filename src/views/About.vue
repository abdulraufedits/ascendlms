<template>
    <NavBar/>
    <section class="pt-12 lg:pt-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col gap-y-32">
            <div class="lg:flex justify-between w-full items-center">
                <div class=" space-y-8 ">
                <h1 class="text-4xl lg:text-8xl uppercase">We're bringing the power of education to your fingertips</h1>
                <p class="text-lg font-medium font-small">Ascend is the world's most customisable and trusted eLearning solution that empowers educators to improve our world.</p>
            </div>
            <span class="flex lg:justify-end w-full">
                <RouterLink to="/pre-signup" class="mt-4 w-fit flex items-center justify-center gap-x-1 font-small text-lg font-medium px-5 py-2  text-primary border-primary border-2 rounded-full hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Get Started<ion-icon name="arrow-forward-outline"></ion-icon></RouterLink>
            </span>
            </div>
            <img class="rounded-xl" src="https://cdn.prod.website-files.com/64f89beb65c933a5beb5c8d6/64f89beb65c933a5beb5c943_us-p-1600.jpeg" alt="team img">
            <div class="lg:flex justify-between items-center">
                <div class="w-full space-y-5">
                    <label for="Our Story" class="sect-label">Our Story</label>
                <h1 class="text-5xl">It all started as a personal project</h1>
                <p class="text-lg font-medium font-small py-4">Ascend was founded in 2024 by a group of friends who wanted to make learning more accessible and engaging. We started as a small team of developers and educators, but now we're a global company with team members from all over the world.</p>
                </div>
                <img class="lg:w-1/2 aspect-din object-cover rounded-xl" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1649&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="group of friends">
            </div>
            <div class="flex justify-between items-center max-lg:flex-col-reverse gap-x-6">
                <img class="lg:w-1/2 object-cover rounded-xl" src="../assets/cloud-img.svg" alt="group of friends">
                <div class="w-full space-y-5">
                    <label for="Our Mission" class="sect-label">Our Mission</label>
                <h1 class="text-4xl">Our mission is to revolutionize education through innovative cloud-based solutions.</h1>
                <p class="text-lg font-medium font-small py-4"> We aim to make learning accessible to everyone, everywhere, by leveraging cutting-edge technology and fostering a community of lifelong learners.</p>
                
                </div>
                
            </div>
        </div>
        <div class="bg-black text-white py-48 px-8 w-full flex flex-col justify-center items-center gap-y-12 mt-32">
            <h1 class="lg:text-5xl text-4xl text-white">The best way to learn is together.</h1>
                <button class="bg-white text-black font-small text-lg font-semibold rounded-xl px-6 py-4">Get Started for free</button>
            </div>
    </section>
    <Footer/>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped>
.sect-label {
    font-family: 'Helvetica Now Display';
    text-transform: uppercase;
    color: #F97FC2;
}
</style>