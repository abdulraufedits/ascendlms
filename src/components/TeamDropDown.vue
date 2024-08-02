<template>
    <div class="bg-white p-4 shadow-sm rounded-md flex gap-x-3 items-center">
        <img class="rounded-full h-8" src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Milo" alt="avatar" />
        <label for="email" class="font-big font-bold text-2xl w-24 truncate">{{title}}</label>
        <ion-icon name="chevron-expand-sharp" class="text-2xl"></ion-icon>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Untitled"
        }
    }
}
</script>