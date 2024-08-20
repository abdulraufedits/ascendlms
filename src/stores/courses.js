import { defineStore } from "pinia";

export const useCoursesStore = defineStore('courses', {
    state: () => {
        return {
            courses: [{}]
            
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