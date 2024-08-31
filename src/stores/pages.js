import { defineStore } from "pinia";

export const usePagesStore = defineStore('pages', {
    state: () => {
        return {
            student: {
                prof: "student", 
                pages: [
                    {
                        pageTitle: "Dashboard",
                        pageRoute: "/dashboard",
                        pageIcon: "analytics"
                },{
                    pageTitle: "Courses",
                    pageIcon: "book-outline",
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
                    pageRoute: "/rewards/all",
                    pageIcon: "card-outline"
                },{
                    pageTitle:  "Trash",
                    pageRoute: "/trash",
                    pageIcon: "trash-bin-outline"
                },{
                    pageTitle: "Help",
                    pageRoute: "/help",
                    pageIcon: "information-circle-outline"
                },{
                    pageTitle: "Settings",
                    pageRoute: "/settings",
                    pageIcon: "settings-outline"
                },{
                    pageTitle:"Log out",
                    pageRoute: "/logout",
                    pageIcon: "log-out-outline"
                }
            ]
            },
            instructor: {
                prof: "instructor", 
                pages: [
                    {
                        pageTitle: "Dashboard",
                        pageRoute: "/dashboard",
                        pageIcon: "analytics"
                },{
                    pageTitle: "Courses",
                    pageIcon: "book-outline",
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
                            pageRoute: "/announcements/all"
                        }
                    ]
                },{
                    pageTitle:  "Rewards",
                    pageRoute: "/rewards/all",
                    pageIcon: "card-outline"
                },{
                    pageTitle:  "Database",
                    pageRoute: "/database/all",
                    pageIcon: "server-outline"
                },{
                    pageTitle:  "Reminders",
                    pageRoute: "/reminders",
                    pageIcon: "alarm-outline"
                },{
                    pageTitle:  "Trash",
                    pageRoute: "/trash",
                    pageIcon: "trash-bin-outline"
                },{
                    pageTitle: "Help",
                    pageRoute: "/help",
                    pageIcon: "information-circle-outline"
                },{
                    pageTitle: "Settings",
                    pageRoute: "/settings",
                    pageIcon: "settings-outline"
                },{
                    pageTitle:"Log out",
                    pageRoute: "/logout",
                    pageIcon: "log-out-outline"
                }
            ]
            },
            admin: {
                prof: "admin",
                pages: [
                    {
                        pageTitle: "Dashboard",
                        pageRoute: "/dashboard",
                        pageIcon: "analytics"
                    },{
                        pageTitle: "Courses",
                        pageRoute: "/mycourses",
                        pageIcon: "book-outline"
                    },{
                        pageTitle:  "Learning Path",
                        pageRoute: "/learningpath/all",
                        pageIcon: "globe-outline"
                    },{
                        pageTitle:  "Tracking",
                        pageRoute: "/tracking",
                        pageIcon: "bar-chart-outline"
                    },
                    {
                        pageTitle:  "Database",
                        pageRoute: "/database",
                        pageIcon: "server-outline",
                        subPages: [
                            {
                                pageTitle: "Instructors",
                                pageRoute: "/database/instructors",
                            },{
                                pageTitle: "Students",
                                pageRoute: "/database/students",
                            }
                        ]
                    },{
                        pageTitle:  "Trash",
                        pageRoute: "/trash",
                        pageIcon: "trash-bin-outline"
                    },{
                        pageTitle: "Help",
                        pageRoute: "/help",
                        pageIcon: "information-circle-outline"
                    },{
                        pageTitle: "Settings",
                        pageRoute: "/settings",
                        pageIcon: "settings-outline"
                    },{
                        pageTitle:"Log out",
                        pageRoute: "/logout",
                        pageIcon: "log-out-outline"
                    }
            ]
            }
            

        }
    }
})