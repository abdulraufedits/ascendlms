<template>
    <table class="flex flex-col gap-y-4">
        <thead>
            <th>Topic</th>
            <th>Status</th>
            <th>Lecture Notes</th>
        </thead>
        <tbody>
            <tr v-for="course in courses">
                <td class="font-big font-bold text-xl">
                
                    <div class="flex items-center gap-x-2">
                        <label for="topic">Introduction</label>
                        <ion-icon name="play-circle"></ion-icon>
                    </div>
                </td>
                <td>
                    <div class="flex items-center gap-x-2">
                        <ion-icon name="checkmark-circle" class="text-accent text-lg"></ion-icon>
                        <label for="status" class="font-small font-semibold">Completed</label>
                    </div>
                </td>
                <td>
                    <button class="cta px-4 py-2 flex items-center gap-x-3"><ion-icon name="cloud-download-outline"></ion-icon>Lecture notes</button>
                </td>
                
            </tr>
        </tbody>
    </table>
</template>

<script setup>

const props = defineProps({
    courses:{
        type: Array,
        default: []
    }

})
</script>

<style scoped>
thead {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding: 6px 0 6px 40px;
}
th{
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
    color: #919191;
    text-align: left;
    width: 45%;
}
tr{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

tbody{
    display: flex;
    flex-direction: column;
    gap: 24px 0;
    padding-left: 40px;
}
td{
    text-align: left;
    width: 45%;
}
.summary-with-icon{
    display: flex;
    align-items: center;
    font-weight: 600
}
</style>