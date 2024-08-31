<template>
    <Widget class="gap-y-10">
        <div class="flex gap-x-3 items-center">
            <img id="user-profile-img" :src="imgsrc" alt="user profile image" class="size-16 rounded-full">
            <div >
                <label for="user-profile-img" class=" font-big font-bold " style="line-height: 0; font-size: 20px;">{{name}}</label>
                <p class="subtitle -mt-1">{{designation}}</p>
            </div>
        </div>
        <div class="controls flex justify-between items-center gap-x-1">
            <div >
                <ion-icon name="call-outline" class=" text-xl"></ion-icon>
            </div>
            <div >
                <ion-icon name="chatbox-ellipses-outline" class=" text-xl"></ion-icon>
            </div>
            <div >
                <ion-icon name="information-circle-outline" class=" text-xl"></ion-icon>
            </div>
            <div >
                <ion-icon name="ellipsis-horizontal" class=" text-xl"></ion-icon>
            </div>
        </div>
    </Widget>
</template>

<script setup>
import Widget from './Widget.vue'

const props = defineProps({
    name: {
        type: String,
        default: "Unititled"
    },
    designation: {
        type: String,
        default: "Unititled"
    },
    imgsrc: {
        type: String,
        default: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Milo"
    }
})
</script>


<style scoped>
.controls > *{
    flex: 1;
    display: grid;
    place-content: center;
    border-radius: 99px;
    padding: 8px;
    background-color: #ffffff;
    border: 2px solid #ddd;
}
</style>