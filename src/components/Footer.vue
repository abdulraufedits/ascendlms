<template>
        <section class="py-10 bg-gray-50 sm:pt-16 lg:pt-24 font-small">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <div class="flex gap-x-4 items-center">
                    <img class="w-auto h-9" src="../assets/logo.svg" alt="logo" />
                    <h1 class="h1-title">Ascend LMS</h1>
                </div>

                <p class="text-base leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                <ul class="flex items-center space-x-3 mt-9">
                    <li>
                        <a href="https://github.com/abdulraufedits/ascendlms" target="_blank" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="text-lg font-big  text-gray-400 ">Company</p>

                <ul class="mt-3 space-y-4">
                    <li>
                        <RouterLink to="/about" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/services" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Services </RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/pricing" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/careers" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </RouterLink>
                    </li>
                </ul>
            </div>

            <div>
                <p class="text-lg font-big  text-gray-400 ">Help</p>

                <ul class="mt-3 space-y-4">
                    <li>
                        <RouterLink to="#" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </RouterLink>
                    </li>

                    <li>
                        <RouterLink to="#" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> FAQ </RouterLink>
                    </li>

                    <li>
                        <RouterLink to="#" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </RouterLink>
                    </li>

                    <li>
                        <RouterLink to="#" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </RouterLink>
                    </li>
                </ul>
            </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <p class="text-sm text-center text-gray-600">Ascend LMS © Copyright 2024, All Rights Reserved</p>
    </div>
</section>



</template>

<script setup>

import { RouterLink } from 'vue-router';

</script>