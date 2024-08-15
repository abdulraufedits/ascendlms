import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            users: [
                {
                    username: "Pagal",
                    email: "pagal@test.com",
                    password: "1234",
                    achievements: [
                        {
                            achievementName: "Topper",
                            achievementTask: "Achieve highest scores in 3 Quizzes.",
                            status: "Completed",
                            xp: 100,
                            date: "08 March, 2024, 10:20 AM"
                        },
                        {
                            achievementName: "Champion",
                            achievementTask: "Achieve highest scores in 3 Assignments.",
                            status: "Completed",
                            xp: 500,
                            date: "08 March, 2024, 10:20 AM"
                        },
                        {
                            achievementName: "Leader",
                            achievementTask: "Submit the assignment very first.",
                            status: "New",
                            xp: 100,
                            date: "08 March, 2024, 10:20 AM"
                        }
                    ]
                },

            ]
            
        }
    },
    getters:{
    },
    actions:{

    }
})