import { defineStore } from "pinia";

export const useInstructorStore = defineStore('instructor', {
    state: () => {
        return {
            instructors: [{}],
            
        }
    },
    getters:{

    },
    actions:{
        getInstructorData(inst){
            if((crs.id-1) != 0){
                this.instructors.push(inst)
            } else {
                this.instructors[0] = inst;
            }
        },
    }
})