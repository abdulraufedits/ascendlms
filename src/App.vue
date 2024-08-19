<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView/>
</template>

<style>
.font-big {
	font-feature-settings: "calt" 1, "liga" 1, "rlig" 1, "rvrn" 1, "kern" 1, "rclt" 1, "ss01" 1, "ss02" 1, "ss03" 1;
}
.font-small{
	font-feature-settings: "calt" 1, "rlig" 1, "rvrn" 1, "kern" 1, "rclt" 1, "ss01" 1, "ss06" 1, "liga" 1;
}
.cta{
    background-color: #3C3ACF;
    font-family: 'Roboto';
    color: #fefefe;
    border-radius: 999px;
    &[type="submit"]{
        padding: 1rem 2rem;
        border-radius: 4px;
    }
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
.subtitle{
    font-family: 'Roboto';
    color: #919191;
    font-size: 14px;
}

.h1-title{
    font-weight: bold;
    font-size: 32px;
}
.h1-subtitle{
    font-weight: bold;
    font-size: 24px;
}
.h2-title{
    font-weight: bold;
    font-size: 28px;
}
.h3-title{
    font-weight: bold;
    font-size: 20px;
}
.h4-title{
    font-weight: bold;
    font-size: 16px;
}
.h5-title{
    font-weight: bold;
    font-size: 16px;
}
</style>