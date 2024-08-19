
export default class Assignment {
    id = 0;
    assignmentName = "";
    courseName = "";
    dueDate = "";
    status = "";

    constructor(id, assignmentName, courseName, dueDate, status) {
        this.id = id;
        this.assignmentName = assignmentName;
        this.courseName = courseName;
        this.dueDate = dueDate;
        this.status = status;
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