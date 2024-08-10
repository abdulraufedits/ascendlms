import { defineStore } from "pinia";

export const useCoursesStore = defineStore('courses', {
    state: () => ({
            courses: [
                {
                    courseName: "UX Laws",
                    courseDesc: "This course covers all the laws of UX theoretically and practically. UX laws are essential to understand the user experience of stakeholders.",
                    percentage: 69,
                    lecsCount: 1,
                    assignmentCount: 1,
                    quizCount: 1,
                },
                {
                    courseName: "Fundamentals of UI",
                    courseDesc: "This course covers all the laws of UX theoretically and practically. UX laws are essential to understand the user experience of stakeholders.",
                    percentage: 25,
                    lecsCount: 4,
                    assignmentCount: 3,
                    quizCount: 7,
                }
            ],
            assignments: [
                {
                    assignmentName: "UX Fundamentals",
                    courseName: "UX Laws",
                    status: "Completed",
                    dueDate: "08 March, 2024, 10:20 AM"
                },
                {
                    assignmentName: "Research",
                    courseName: "Fundamentals of UI",
                    status: "In-progress",
                    dueDate: "08 March, 2024, 10:20 AM"
                },
                {
                    assignmentName: "Research",
                    courseName: "Fundamentals of UI",
                    status: "Completed",
                    dueDate: "08 March, 2024, 10:20 AM"
                },
                {
                    assignmentName: "Research",
                    courseName: "Fundamentals of UI",
                    status: "Upcoming",
                    dueDate: "08 March, 2024, 10:20 AM"
                },
                {
                    assignmentName: "Research",
                    courseName: "Fundamentals of UI",
                    status: "Failed",
                    dueDate: "08 March, 2024, 10:20 AM"
                }
            ],
            quizzes: [
                {
                    quizName: "UX Fundamentals",
                    courseName: "UX Laws",
                    status: "Completed",
                    dueDate: "08 March, 2024, 10:20 AM"
                },
                {
                    quizName: "Research",
                    courseName: "Fundamentals of UI",
                    status: "In-progress",
                    dueDate: "08 March, 2024, 10:20 AM"
                },
                {
                    quizName: "Research",
                    courseName: "Fundamentals of UI",
                    status: "Completed",
                    dueDate: "08 March, 2024, 10:20 AM"
                },
                {
                    quizName: "Research",
                    courseName: "Fundamentals of UI",
                    status: "Upcoming",
                    dueDate: "08 March, 2024, 10:20 AM"
                },
                {
                    quizName: "Research",
                    courseName: "Fundamentals of UI",
                    status: "Failed",
                    dueDate: "08 March, 2024, 10:20 AM"
                }
            ],
            announcements: [
                {
                    courseName: "UX Laws",
                    msg: "Lorem ipsum dolor set amet is a dummy announcement.",
                    instructor: "John Doe",
                    date: "08 March, 2024, 10:20 AM"
                },
                {
                    courseName: "UX Laws",
                    msg: "Lorem ipsum dolor set amet is a dummy announcement.",
                    instructor: "ABCD",
                    date: "08 March, 2024, 10:20 AM"
                },
                {
                    courseName: "Fundamentals of UI",
                    msg: "Lorem ipsum dolor set amet is a dummy announcement.",
                    instructor: "John Doe",
                    date: "08 March, 2024, 10:20 AM"
                }

            ]
                
        }),
        getters: {
        },
        actions: {
            sort(sortType, obj){
                if(sortType == "All"){return obj}
                else {return obj.filter(a => a.status == sortType)}
            },
            categorize(sortType, obj){
                if(sortType == "All"){return obj}
                else {return obj.filter(a => a.courseName == sortType)}
            }
        }
})