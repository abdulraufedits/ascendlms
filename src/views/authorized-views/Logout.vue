<template>
    <div class="grid place-content-center w-screen h-screen">
        <div class="flex gap-1 items-center">
            <img src="/loader/logo-loader.gif" class="size-10" alt="loading">
        <h1 class="h1-title">Logging out</h1>
        </div>
    </div>
</template>

<script setup>
import { deleteCookie } from '../../cookies';
import { useRouter } from 'vue-router';
const router = useRouter()
deleteCookie('id')

setTimeout(() => {
    router.push('/')
}, 2000);
</script>