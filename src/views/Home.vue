<template>
    <NavBar/>
    <section class="pt-12 pb-12 sm:pb-16 lg:pt-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col gap-y-32">
            <div class="flex flex-col items-center max-w-lg mx-auto lg:max-w-full lg:gap-y-12 lg:gap-x-16">
                    <div class=" text-center lg:text-left flex flex-col gap-4 items-center lg:items-start sm:w-3/4 max-lg:pb-8">
                        <h1 class=" font-big font-bold leading-tight text-gray-900 text-5xl sm:leading-tight lg:leading-tight lg:text-8xl font-pj">Your All-in-One Learning Solution.</h1>
                        <p class="text-lg text-gray-600 font-small w-9/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>

                        <RouterLink to="/pre-signup" class="font-small text-lg font-medium px-5 py-2 nav-link  text-white bg-primary border border-transparent rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Get Started - It's Free!
                    </RouterLink>
                    </div>
                <div>
                    <img class="w-full" src="../assets/lms-dashboard.png" alt="" />
                </div>
            </div>
            <div class="trusted-brands">
                <h3>Trusted by</h3>
                <div class="flex justify-between">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>
            <div class="simple-section">
                <h1 class="text-5xl">Your LMS, your way</h1>
                <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
                <div class="grid grid-cols-16 grid-rows-4 w-full gap-4">
                    <Widget class="col-span-10 row-span-3 !block">
                        <h1 class="text-2xl">Customizable widgets</h1>
                        <p class="subtitle">lorem ipsum</p>
                        <video class="translate-y-4" src="../assets//diagrams/widgets.mp4" autoplay muted loop></video>
                    </Widget>
                    <Widget class="col-span-6 row-span-2 !block">
                        <h1  class="text-2xl">In-app Reminders</h1>
                        <p class="subtitle">lorem ipsum</p>
                        <video src="../assets/diagrams/reminders.mp4" autoplay muted loop></video>
                    </Widget>
                    <Widget class="col-span-10 row-span-3 row-start-4 !block">
                        <h1 class="text-2xl">Dark Mode</h1>
                        <p class="subtitle">lorem ipsum</p>
                    </Widget>
                    <Widget class="col-span-6 row-span-4 row-start-3 !block overflow-hidden">
                        <h1 class="text-2xl">Works everywhere</h1>
                        <p class="subtitle">lorem ipsum</p>
                        <video class=" lg:translate-x-16 lg:translate-y-16 h-full scale-125" src="../assets/diagrams/devices-sync.mp4" loop autoplay muted></video>
                    </Widget>
                </div>
            </div>
            <div class="simple-section">
                <h1 class="text-5xl">Boost your workflow in a collaborative environment</h1>
                <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
                <div class="flex gap-4 w-full items-center justify-between max-lg:flex-col ">
                    <Widget class="feature-widget">
                        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                        <label for="feature">Chat with classmates and mentors</label>
                    </Widget>
                    <Widget class="feature-widget">
                        <ion-icon name="people-circle-outline"></ion-icon>
                        <label for="feature">Live meeting with host controls</label>
                    </Widget>
                    <Widget class="feature-widget">
                        <ion-icon name="cloudy-outline"></ion-icon>
                        <label for="feature">Sharing on the cloud</label>
                    </Widget>
                    <Widget class="feature-widget">
                        <ion-icon name="trophy-outline"></ion-icon>
                        <label for="feature">Gamification and badges</label>
                    </Widget>
                </div>
            </div>
            
        </div>
    </section>
    <section>
        <div class="testimonials">
                <blockquote >"Ascend helps us host content that would other ise be inaccessible to those Mithout the privilege of expensive knoMledge. By building free content, we can continue bridging the gap."</blockquote>
                <div class="flex items-center">
                    <img class="bg-background" src="https://api.dicebear.com/9.x/adventurer/svg?seed=Angel" alt="author">
                    <span>
                        <label for="author">John Doe</label>
                        <p>Co-Founder</p>
                    </span>
                </div>
            </div>
            <div class=" py-32 flex justify-center items-center text-center">
                <div class="lg:px-24 lg:!py-20 py-8 bg-primary rounded-2xl simple-section !items-center w-full mx-4 lg:w-4/5">
                    <h1 class="lg:text-5xl text-4xl text-white">Manage your institution like never before</h1>
                <p class="text-white font-small">Get started today with 10,000 free slots.</p>
                <div class="ctas font-small font-medium flex max-lg:flex-col gap-x-4">
                    <button class="bg-black rounded-xl text-white px-6 py-4">Start with a free plan</button>
                    <button class=" px-6 py-4 text-white">See other plans</button>
                </div>
                </div>
                
            </div>
    </section>
    <Footer/>
    

</template>

<script setup>
import { RouterLink } from 'vue-router'
import NavBar from '../components/NavBar.vue';
import Widget from '../components/Widget.vue';
import Footer from '../components/Footer.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap');
.simple-section{
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: center;
    & > div {
        margin-top: 1rem;
    }
    @media screen and (max-width: 1024px) {
        align-items: flex-start ;
        
    }
}

.feature-widget{
    width: 100%;
    padding: 16px !important;
    display: flex !important;
    flex-direction: column !important;
    row-gap: 6px !important;
    align-items: flex-start !important;
    & ion-icon {
        font-size: 32px;
        color: #3C3ACF;
    }
    & label {
        font-weight: 600;
        font-family: 'Roboto';
    }
    @media screen and (max-width: 1024px) {
        align-items: center !important;
        
    }
}

.testimonials {
    background-color: #f3f3fc;
    padding: 32px;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: center;
    justify-content: center;
    & blockquote {
        width: 80%;
        font-size: 28px;
        font-weight: 600;
        text-align: center;
        font-family: 'Old Standard TT';
        font-style: italic;
    }
    & div {
        column-gap: 8px;
        align-items: center;
        & img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }
        & label {
            font-size: 18px;
            font-weight: 600;
            font-family: 'Roboto';
        }
        & p {
            font-size: 16px;
            font-weight: 400;
            font-family: 'Roboto';
        }
    }
}
</style>
