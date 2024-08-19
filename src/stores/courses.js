import { defineStore } from "pinia";

export const useCoursesStore = defineStore('courses', {
    state: () => {
        return {
            courses: [{}]
            
        }
    },
        getters: {
            async getCourses(){
                return this.courses
           }
        },
        actions: {
            getCoursesData(crs){
                if((crs.id-1) != 0){
                    this.courses.push(crs)
                } else {
                    this.courses[0] = crs;
                }
            },
            async sort(sortType, obj, type){
                const sorted = []
                if(sortType == "All"){

                    obj.forEach(a => type == 'assignments' ? sorted.push(a.assignments) : type == 'quizzes' ? sorted.push(a.quizzes) : sorted.push(a.announcements))
                }
                else { obj.forEach(a => type == 'assignments' ? sorted.push(a.assignments.filter(b => b.status == sortType)) : type == 'quizzes' ? sorted.push(a.quizzes.filter(b => b.status == sortType)) : sorted.push(a.announcements.filter(b => b.courseName == sortType)))}
                console.log(sorted)
                return sorted
            },
        }
})