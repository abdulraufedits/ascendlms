<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView/>
</template>

<style>

.cta{
    padding: 1rem;
    background-color: #3C3ACF;
    border-radius: 4px;
}

.input-field{
    height: 3.5rem;
    background: #eeeeee;
    border-radius: 4px;
    padding: 0 2rem;
    &:focus{
        outline: none;
    }
}
</style>