<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    showNav: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
<header v-show="showNav" class="py-4 md:py-6  font-small" >
        <div class="container px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                    <RouterLink to="/" class="flex items-center font-extrabold font-big rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                        <img class="w-auto h-8" src="../assets/logo.svg" alt="" />&nbsp;&nbsp;&nbsp;Ascend LMS
                    </RouterLink>
                </div>

                <div class="flex lg:hidden">
                    <button type="button" class="text-primary">
                        <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div class="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                    <RouterLink to="about" class="nav-link text-gray-900 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About </RouterLink>

                    <RouterLink to="/" class="nav-link text-gray-900 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Services </RouterLink>

                    <RouterLink to="/" class="nav-link text-gray-900 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </RouterLink>

                    <RouterLink to="/" class="nav-link text-gray-900 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> FAQ </RouterLink>
                </div>

                <div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                    <RouterLink to="/login" class="nav-link text-primary focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Log in </RouterLink>

                    <RouterLink to="/pre-signup" class="px-5 py-2 nav-link leading-7 text-white bg-primary border border-transparent rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Get Started - It's Free!
                    </RouterLink>
                </div>
            </div>
        </div>
    </header>

    

</template>

<style scoped>
.nav-link{
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;
  &:focus{
    outline: none;

  }
  &:hover{
    opacity: 0.75
  }
}

/* text-base font-medium text-gray-900 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 */
</style>