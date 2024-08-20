import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            users: [{}]
            
        }
    },
    getters:{
        async getUser(){
             return this.users[0]
        }
    },
    actions:{
        getUserData(userr){
            this.users[0] = userr;
        },
        sort(sortType, obj){
            if(sortType !== "All"){
                obj = obj.filter(a => a.status == sortType)
            }
            return obj

        }
    }
})