<template>
    <table class="flex flex-col gap-y-4">
        <thead>
            <th>Topic</th>
            <th>Status</th>
            <th>Date</th>
            <th>Reward</th>
        </thead>
        <tbody>
            <tr v-for="achievement in achievements">
                <td class="flex gap-2">
                    <img src="../assets/achievement.png" alt="achievement icon">
                    <div>
                        <h1 class="font-big font-bold text-xl">{{ achievement.achievementName }}</h1>
                        <p class="subtitle text-xs cursor-pointer hover:text-primary hover:underline">{{ achievement.achievementTask }}</p>
                    </div>
                </td>
                <td><p class="font-small font-medium " :class="checkStatus(achievement.status)">{{achievement.status}}</p></td>
                <td>
                    <time class="font-small font-bold">{{achievement.date}}</time>
                </td>
                <td>
                    <label for="assignment" class="font-semibold font-small text-accent">{{achievement.xp}} XP</label>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>

const props = defineProps({
    achievements:{
        type: Array,
        default: []
    }

})

const checkStatus = (status) => {
    switch(status){
        case "Completed": 
        return "text-success";
        case "In-progress":
            return "text-yellow";
        case "Upcoming":
            return "text-primary";
        case "Failed":
            return "text-red"
        default: 
            return ""
    }
}
</script>

<style scoped>
thead {
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
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
    align-items: center;
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
