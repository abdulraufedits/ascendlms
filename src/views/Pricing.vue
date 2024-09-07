<template>
    <NavBar activePage="pricing"/>
    <section class="pt-12 lg:pt-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col gap-y-32">
            <div class="">
                <h1 class="text-4xl lg:text-8xl">Choose the right plan for your institution</h1>
            </div>
            <div class="grid grid-cols-3 items-start gap-x-4">
                <Widget class="gap-y-8">
                    <h3 class="h1-title">Starter</h3>
                                    <select name="users-dropdown" id="s1" v-model="selectedStarter">
                                        <option :value="1">1 - 10 users</option>
                                        <option :value="2">11 - 30 users</option>
                                        <option :value="3">31 - 50 users</option>
                                    </select>
                                    <div class="space-y-2">
                                        <div class="flex items-center justify-between">
                                        <h3 class="h2-title">$360<span class="text-gray-400">/month</span></h3>
                                        <h4 class="h3-title text-gray-400">${{360*12}}/yr</h4>
                                    </div>
                                    <div class="bg-background text-primary font-big flex items-center gap-x-1 px-3 py-1.5 rounded w-fit">
                                        <label for="billing">Billed yearly</label>
                                    </div>
                                    </div>
                                    <button class="bg-primary text-white font-small text-lg font-semibold rounded-xl px-6 py-4">Get Started for free</button>
                                    <hr>
                                    <ul class="font-medium font-small space-y-3">
                                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;Unlimited courses</li>
                                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;Unlimited students</li>
                                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;Unlimited storage</li>
                                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;24/7 support</li>
                                    </ul>
                </Widget>
                <Widget class="bg-background gap-y-8 relative">
                    <label class="cta flex justify-center items-center w-fit font-big px-4 py-2 absolute -top-6 left-4" for="recommended">Recommended</label>
                    <h3 class="h1-title">College</h3>
                    <select name="users-dropdown" id="s1" v-model="selectedStarter">
                        <option :value="1">1 - 10 users</option>
                        <option :value="2">11 - 30 users</option>
                        <option :value="3">31 - 50 users</option>
                    </select>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between">
                        <h3 class="h2-title">$360<span class="text-gray-400">/month</span></h3>
                        <h4 class="h3-title text-gray-400">${{360*12}}/yr</h4>
                    </div>
                    <div class="bg-white text-primary font-big flex items-center gap-x-1 px-3 py-1.5 rounded w-fit">
                        <label for="billing">Billed yearly</label>
                    </div>
                    </div>
                    <button class="bg-primary text-white font-small text-lg font-semibold rounded-xl px-6 py-4">Add College plan</button>
                    <hr>
                    <ul class="font-medium font-small space-y-3">
                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;Unlimited courses</li>
                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;Unlimited students</li>
                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;Unlimited storage</li>
                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;24/7 support</li>
                    </ul>
                </Widget>
                <Widget class="gap-y-8">
                    <h3 class="h1-title">University</h3>
                    <select name="users-dropdown" id="s1" v-model="selectedStarter">
                        <option :value="1">1 - 10 users</option>
                        <option :value="2">11 - 30 users</option>
                        <option :value="3">31 - 50 users</option>
                    </select>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between">
                        <h3 class="h2-title">$360<span class="text-gray-400">/month</span></h3>
                        <h4 class="h3-title text-gray-400">${{360*12}}/yr</h4>
                    </div>
                    <div class="bg-background text-primary font-big flex items-center gap-x-1 px-3 py-1.5 rounded w-fit">
                        <label for="billing">Billed yearly</label>
                    </div>
                    </div>
                    <button class="bg-primary text-white font-small text-lg font-semibold rounded-xl px-6 py-4">Add University plan</button>
                    <hr>
                    <ul class="font-medium font-small space-y-3">
                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;Unlimited courses</li>
                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;Unlimited students</li>
                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;Unlimited storage</li>
                        <li><ion-icon class="text-success" name="checkmark-outline"></ion-icon>&nbsp;24/7 support</li>
                    </ul>
                </Widget>
            </div>
        </div>
        <div class="bg-black text-white py-48 px-8 w-full flex flex-col justify-center items-center gap-y-12 mt-32">
                <h1 class="lg:text-5xl text-4xl text-white">start with a free plan and scale as you grow.</h1>
                <button class="bg-white text-black font-small text-lg font-semibold rounded-xl px-6 py-4">Get Started for free</button>
            </div>
        </section>
    <Footer/>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import Widget from '../components/Widget.vue'

const selectedStarter = ref(1);
</script>

<style scoped>
select{
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    &:focus{
        outline: none;
        background-color: #f3f3fc;
    }
    &::after {
        content: url(/src/assets/icons/down-chev.svg);
        position: absolute;
        z-index: 20;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        height: 30px;
        width: 30px;
        pointer-events: none;
    }
    & option {
        border-radius: 8px !important;
    }
}
</style>