<script setup>
import { RouterLink, useRouter } from 'vue-router';
import Illust from '../assets/login-img.svg';
import { ref } from 'vue';

const email=ref("");
const password=ref("");
let err = ref(false);
const router = useRouter()

function valid(eml,pass){
    fetch("http://localhost:8000/students")
    .then(res => res.json()).then(data => {
        data.forEach(user => {
            if(user.email == eml && user.password == pass){
                console.log(data)
                console.log(router.getRoutes())
                router.push(`/${user.username}/dashboard`)
            } else {
                err.value = true;
            }
        })
    }).catch(err => console.log(err))
}

</script>


<template>
    {{ email }}
    <br>
    {{ password }}
    <div class="font-small h-screen md:flex w-full justify-between items-center">
        <main class=" w-full grid place-content-center h-screen">
            <div class=" w-80 h-2xl flex flex-col gap-6">
                <RouterLink to="/" class="flex items-center font-extrabold font-big rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                        <img class="w-auto h-8" src="../assets/logo.svg" alt="" />&nbsp;&nbsp;&nbsp;Ascend LMS
                    </RouterLink>
                <h1 class="text-3xl bold text-grey font-big font-bold">Login to your account</h1>
                <form action="" class="flex flex-col gap-4" @submit.prevent="valid(email,password)">
                    <input autocomplete="email" type="email" class="input-field" placeholder="email address" v-model="email" :class="err ? 'err' : ''">
                    <input autocomplete="new-password" type="password" class="input-field" placeholder="password" v-model="password" >
                    <RouterLink to="/" class=" text-primary font-small text-right -mt-2">Forgot password?</RouterLink>
                    <input type="submit" value="Login" class="cta font-big text-white font-medium cursor-pointer hover:bg-gray-900 transition-colors duration-300">
                    <p class="font-small text-center -mt-2">Don't have an account? <RouterLink to="/pre-signup" class=" text-primary">Sign up</RouterLink></p>
                </form>
                <h3 class="font-big text-center text-2xl">OR</h3>
                <button type="submit"><img src="../assets/continue-with-google.svg" alt="Contniue with google"></button>
            </div>
        </main>
        <aside class="bg-gray-100 h-screen w-full grid place-content-center max-sm:hidden">
            <img :src="Illust" alt="login image" class="h-96">
        </aside>
    </div>
</template>

<style scoped>
    .err{
        border: 2px solid red;
    }
</style>