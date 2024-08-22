
export default class Assignment {
    id = 0;
    assignmentName = "";
    courseName = "";
    uploadDate ="";
    dueDate = "";
    status = "";
    students =[];

    constructor(id, assignmentName, courseName, dueDate, status) {
        this.id = id;
        this.assignmentName = assignmentName;
        this.courseName = courseName;
        this.dueDate = dueDate;
        this.status = status;
    }
    constructor(id, assignmentName, courseName, uploadDate,  dueDate, students) {
        this.id = id;
        this.assignmentName = assignmentName;
        this.courseName = courseName;
        this.dueDate = dueDate;
        this.uploadDate = uploadDate;
        this.students = students;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getAssignmentName() {
        return this.assignmentName;
    }

    setAssignmentName(assignmentName) {
        this.assignmentName = assignmentName;
    }

    getCourseName() {
        return this.courseName;
    }

    setCourseName(courseName) {
        this.courseName = courseName;
    }

    getDueDate() {
        return this.dueDate;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }
}