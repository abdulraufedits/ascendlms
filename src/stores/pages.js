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
                        pageRoute: "/assignments",
                    },{
                        pageTitle: "Quizzes",
                        pageRoute: "/quizzes",
                    },{
                        pageTitle: "Announcements",
                        pageRoute: "/announcements",
                    }
                ]
            },{
                pageTitle:  "Rewards",
                pageRoute: "/rewards"
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