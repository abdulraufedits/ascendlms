<template>
    <table class="flex flex-col gap-y-4">
        <thead>
            <th>Topic</th>
            <th>Status</th>
            <th>Due Date</th>
            <th></th>
        </thead>
        <tbody>
                <template v-for="(indassignments,i) in allAssignments" :key="i">
                    <tr v-for="(assignment,j) in indassignments" :key="j" >
                        <td>
                            <h1 class="font-big font-bold text-xl">{{ assignment.assignmentName }}</h1>
                            <p class="subtitle text-xs cursor-pointer hover:text-primary hover:underline">{{ assignment.courseName }}</p>
                        </td>
                        <td><p class="font-small font-medium " :class="checkStatus(assignment.status)">{{assignment.status}}</p></td>
                        <td>
                            <time class="font-small font-bold">{{assignment.dueDate}}</time>
                        </td>
                        <td class="cursor-pointer">
                            <span class=" flex gap-x-1 text-primary items-center">
                                <label for="assignment" class="font-semibold font-small">Go to Assignment</label>
                                <ion-icon name="chevron-forward-sharp"></ion-icon>
                            </span>
                        </td>
                    </tr>
                </template>
        </tbody>
    </table>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    assignments:{
        type: Promise,
        default: [{assignmentName: "Assignment 1", status: "Completed", dueDate: "12/12/2021", courseName: "Mathematics"}]
    }

})

var allAssignments = []
props.assignments.then((data) => {
    allAssignments = data
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