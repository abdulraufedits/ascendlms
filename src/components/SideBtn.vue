<template>
    <div class="w-full flex items-center gap-x-1 py-3 px-4 rounded-lg transition-all duration-300" :class="isActive ? 'bg-primary' : 'hover:bg-gray-200'">
        <ion-icon :name="icon" :class="isActive ? 'text-white' : ''"></ion-icon>
        <label for="" :class="isActive ? 'text-white' : ''" class="font-medium font-big w-full">{{title}}</label>
        <ion-icon v-if="isDropDown" name="chevron-down-sharp"></ion-icon>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Untitled"
        },
        icon: {
            type: String,
            default: "logo-ionic"
        },
        isActive: {
            type: Boolean,
            default: false
        },
        isDropDown: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>