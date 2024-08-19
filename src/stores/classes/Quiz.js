

export default class Quiz {
    id = 0;
    quizName = "";
    courseName = "";
    dueDate = "";
    status = "";

    constructor(id, quizName, courseName, dueDate, status) {
        this.id = id;
        this.quizName = quizName;
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

    getQuizName() {
        return this.quizName;
    }

    setQuizName(quizName) {
        this.quizName = quizName;
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