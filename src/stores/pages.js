import { defineStore } from "pinia";

export const usePagesStore = defineStore('pages', {
    state: () => {
        return {
            pages: [
                {
                    pageTitle: "Dashboard",
                    pageRoute: "/dashboard"
            },{
                pageTitle: "Courses",
                subPages: [
                    {
                        pageTitle: "My Courses",
                        pageRoute: "/mycourses",
                    },
                    {
                        pageTitle: "Assignments",
                        pageRoute: "/assignments/all",
                    },{
                        pageTitle: "Quizzes",
                        pageRoute: "/quizzes/all",
                    },{
                        pageTitle: "Announcements",
                        pageRoute: "/announcements/all",
                    }
                ]
            },{
                pageTitle:  "Rewards",
                pageRoute: "/rewards/all"
            },{
                pageTitle:  "Trash",
                pageRoute: "/trash"
            },{
                pageTitle: "Help",
                pageRoute: "/help"
            },{
                pageTitle: "Settings",
                pageRoute: "/settings"
            },{
                pageTitle:"Log out",
                pageRoute: "/logout"
            }
        ]

        }
    }
})