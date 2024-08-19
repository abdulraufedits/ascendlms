
export default class LectureNote {
    id = 0;
    lectureName = "";
    courseName = "";
    createdOn = "";
    status = "";

    constructor(id, lectureName, courseName, createdOn, status) {
        this.id = id;
        this.lectureName = lectureName;
        this.courseName = courseName;
        this.createdOn = createdOn;
        this.status = status;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getLectureName() {
        return this.lectureName;
    }

    setLectureName(lectureName) {
        this.lectureName = lectureName;
    }

    getCourseName() {
        return this.courseName;
    }

    setCourseName(courseName) {
        this.courseName = courseName;
    }

    getCreatedOn() {
        return this.createdOn;
    }

    setCreatedOn(createdOn) {
        this.createdOn = createdOn;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    
}