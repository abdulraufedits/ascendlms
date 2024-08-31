import { defineStore } from "pinia";

export const useStudentStore = defineStore('student', {
    state: () => {
        return {
            students: [{}],
            
        }
    },
    getters:{

    },
    actions:{
        getStudentData(std){
            if((crs.id-1) != 0){
                this.students.push(std)
            } else {
                this.students[0] = std;
            }
        },
    }
})