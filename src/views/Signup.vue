<template>
    <div class="font-small h-screen md:flex w-full justify-between items-center">
        <main class=" w-full grid place-content-center h-screen">
            <div class=" w-80 h-2xl flex flex-col gap-6">
                <RouterLink to="/" class="flex items-center font-extrabold font-big rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                        <img class="w-auto h-8" src="../assets/logo.svg" alt="" />&nbsp;&nbsp;&nbsp;Ascend LMS
                    </RouterLink>
                <h1 class=" text-3xl bold text-grey font-big font-bold">Create a new account</h1>
                <form action="" class="flex flex-col gap-4" @submit.prevent="createAcc">
                    <div v-if="err" class="text-red flex items-center gap-x-1 text-sm"><ion-icon name="alert-circle-outline"></ion-icon>{{ alertMsg }}</div>
                    <input autocomplete="username" type="fname" class="input-field" placeholder="username" v-model="username" :class="err ? 'err' : ''">
                    <input autocomplete="email" type="email" class="input-field" placeholder="email address" v-model="email" :class="err ? 'err' : ''">
                    <input autocomplete="password" type="password" class="input-field" placeholder="password" v-model="password" :class="err ? 'err' : ''">
                    <input type="submit" value="Sign up" class="cta font-big text-white font-medium cursor-pointer hover:bg-gray-900 transition-colors duration-300">
                    <p class="font-small text-center -mt-2">Already have an account? <RouterLink to="/login" class=" text-primary">Login</RouterLink></p>
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

<script setup>
import { ref } from 'vue';
import { RouterLink,useRouter,useRoute } from 'vue-router';
import Illust from '../assets/login-img.svg';
import { useUserStore } from '../stores/user';
import { setCookie } from '../cookies';

const username=ref("");
const email=ref("");
const password=ref("");
let err = ref(false);
const alertMsg = ref("");

const router = useRouter()
const route = useRoute()
const currentUser = useUserStore()

function createAcc(){
    var user = {
        username: username.value,
        img: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Milo",
        email: email.value,
        password: password.value,
        designation: route.query.p,
        query: "",
        achievements: [

        ]
    }

    if(route.query.p == "student"){
        currentUser.query = "";
    }
    if(username.value == "" || email.value == "" || password.value == ""){
        err.value = true
        alertMsg.value = "All fields are required"
        return;
    }
    else if(password.length < 8){
        err.value = true
        alertMsg.value = "Password must be at least 8 characters long"
        return;
    }
    else {
    
    fetch(route.query.p == 'student' ? "https://ascendapi-b810cfaf8c4a.herokuapp.com/students" : route.query.p == 'instructor' ? "https://ascendapi-b810cfaf8c4a.herokuapp.com/instructors": null,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(user)
            }).then((response) => response.json())
            .then((data) => {
                router.push(`/${route.query.p}/${username.value}/dashboard`)
                
                currentUser.getUserData(user)
                setCookie('id', user.id,4)
                }).catch(err => alert("Select your profession first."))
            }
        }
</script>