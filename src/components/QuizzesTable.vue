<template>
    <table class="flex flex-col gap-y-4">
        <thead>
            <th>Topic</th>
            <th>Status</th>
            <th>Due Date</th>
            <th></th>
        </thead>
        <tbody>
            <tr v-for="quiz in quizzes">
                <td>
                    <h1 class="font-big font-bold text-xl">{{ quiz.quizName }}</h1>
                    <p class="subtitle text-xs cursor-pointer hover:text-primary hover:underline">{{ quiz.courseName }}</p>
                </td>
                <td><p class="font-small font-medium " :class="checkStatus(quiz.status)">{{quiz.status}}</p></td>
                <td>
                    <time class="font-small font-bold">{{quiz.dueDate}}</time>
                </td>
                <td class="cursor-pointer">
                    <span class=" flex gap-x-1 items-center" :class="quizAction(quiz.status)[1]">
                        <label for="quiz" class="font-semibold font-small">{{quizAction(quiz.status)[0]}}</label>
                        <ion-icon name="chevron-forward-sharp"></ion-icon>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>

const props = defineProps({
    quizzes:{
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

const quizAction = (status) => {
    switch(status){
        case "Completed": 
        return ["See results","text-black"];
        case "In-progress":
            return ["Start quiz","text-primary"];
        case "Upcoming":
            return ["Start quiz","text-gray-500"];
        case "Failed":
            return ["See results","text-black"]
        default: 
            return ""
    }
}
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
    gap: 20px;
    padding: 0 40px;
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