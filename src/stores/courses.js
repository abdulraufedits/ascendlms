import { defineStore } from "pinia";

export const useCoursesStore = defineStore('courses', {
    state: () => {
        return {
            courses: [{
                id: 1,
                courseName: "Software Engineering",
                courseDesc: "Dive deeper into Software Engineering",
                percentage: 0,
                status: "Not completed",
                category: "Programming",
                lectureNotes: [
                    {
                        id: 1,
                        lectureName: "Intro to Software Engineering",
                        courseName: "Software Engineering",
                        createdOn: "2021-10-01",
                        status: "Completed"
                    },
                    {
                        id: 2,
                        lectureName: "Agile Methodologies",
                        courseName: "Software Engineering",
                        createdOn: "2021-10-05",
                        status: "Completed"
                    },
                    {
                        id: 3,
                        lectureName: "Scrum",
                        courseName: "Software Engineering",
                        createdOn: "2021-10-08",
                        status: "Completed"
                    },
                ],
                assignments: [
                    {
                        id: 1,
                        assignmentName: "Assignment 1",
                        courseName: "Introduction to Software Engineering",
                        dueDate: "2021-10-01",
                        status: "Completed"
                    },
                    {
                        id: 2,
                        assignmentName: "Assignment 2",
                        courseName: "Agile Methodologies",
                        dueDate: "2021-10-05",
                        status: "Completed"
                    },
                    {
                        id: 3,
                        assignmentName: "Assignment 3",
                        courseName: "Scrum",
                        dueDate: "2021-10-08",
                        status: "Completed"
                    },
                ],
                quizzes: [
                    {
                        id: 1,
                        quizName: "Quiz 1",
                        courseName: "Introduction to Software Engineering",
                        dueDate: "2021-10-01",
                        status: "Completed"
                    },
                    {
                        id: 2,
                        quizName: "Quiz 2",
                        courseName: "Agile Methodologies",
                        dueDate: "2021-10-05",
                        status: "Completed"
                    },
                    {
                        id: 3,
                        quizName: "Quiz 3",
                        courseName: "Scrum",
                        dueDate: "2021-10-08",
                        status: "Completed"
                    },
                ],
                announcements: [
                    {
                        id: 1,
                        msg: "Announcement 1",
                        courseName: "Software Engineering",
                        date: "2021-10-01",
                        instructor: "Falana"
                    },
                    {
                        id: 2,
                        msg: "Announcement 2",
                        courseName: "Software Engineering",
                        date: "2021-10-05",
                        instructor: "Dimaka"
                    },
                    {
                        id: 3,
                        msg: "Announcement 3",
                        courseName: "Software Engineering",
                        date: "2021-10-08",
                        instructor: "Falana"
                    },
                ],
                miscellaneous: [
                    {
                        id: 1,
                        miscName: "Misc 1",
                        courseName: "Introduction to Software Engineering",
                        createdOn: "2021-10-01",
                        status: "Completed"
                    },
                    {
                        id: 2,
                        miscName: "Misc 2",
                        courseName: "Agile Methodologies",
                        createdOn: "2021-10-05",
                        status: "Completed"
                    },
                    {
                        id: 3,
                        miscName: "Misc 3",
                        courseName: "Scrum",
                        createdOn: "2021-10-08",
                        status: "Completed"
                    },
                ],
                mentors: [
                    {
                        id: 1,
                        username: "Mentor 1",
                        courseName: "Software Engineering",
                        email: "abcd@abcd",
                        status: "Active"
                    }
                ]
            }]
            
        }
    },
        getters: {
        },
        actions: {
            getCoursesData(crs){
                if((crs.id-1) != 0){
                    this.courses.push(crs)
                } else {
                    this.courses[0] = crs;
                }
            },
            sort(sortType, obj, type){
                var sorted = []
                if(sortType == "All"){
                    obj.forEach(a => type == 'assignments' ? sorted = [...sorted,...a.assignments] : type == 'quizzes' ? sorted = [...sorted,...a.quizzes] : type == 'announcements' ? sorted = [...sorted,...a.announcements]  : null)
                }
                else { obj.forEach(a => type == 'assignments' ? sorted = [...sorted,...a.assignments.filter(b => b.status == sortType)] : type == 'quizzes' ? sorted = [...sorted,...a.quizzes.filter(b => b.status == sortType)] : sorted = [...sorted,...a.announcements.filter(b => b.courseName == sortType)])}
                return sorted
            },
            contentFilter(obj, type){
                var sorted = []
                obj.forEach(a => type == 'content' ? sorted = [...sorted,...a.lectureNotes] : type == 'assignments' ? sorted = [...sorted,...a.assignments] : type == 'quizzes' ? sorted = [...sorted,...a.quizzes] : type == 'announcements' ? sorted = [...sorted,...a.announcements] : type == 'mentors' ? sorted = [...sorted,...a.mentors] : type == 'misc' ? sorted = [...sorted,...a.miscellaneous] : null )
                return sorted
            }
                
        }
})