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
        }
    }
})