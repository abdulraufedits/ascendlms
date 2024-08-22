<template>
    <table class="flex flex-col gap-y-4">
        <thead>
            <th>Title</th>
            <th>File</th>
        </thead>
        <tbody>
            <tr v-for="(file,j) in trash" :key="j" >
                <td>
                    <h1 class="font-big font-bold text-xl">{{ file.fileName }}</h1>
                    <time class="font-small subtitle">Date deleted: {{file.dateDeleted}}</time>
                </td>
                <td class="cursor-pointer">
                    <span class="flex gap-x-1 items-center">
                        <button class="flex gap-x-1 text-primary items-center border-primary border-2 rounded-lg px-4 py-2" >Restore</button>
                        <button class="flex gap-x-1 text-white items-center bg-red rounded-lg px-4 py-2" >Delete</button>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const props = defineProps({
    trash:{
        type: [Array],
        default: [{fileName: "Assignment 1", dateDeleted: "12/12/2021"}]
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