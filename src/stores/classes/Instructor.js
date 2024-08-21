export default class Instructor {
    id = "";
    username = "";
    email = "";
    password = "";
    designation = "";
    status = "";
    
    constructor(id, username, email, password, designation, status) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.designation = designation;
        this.status = status;
    }

    getId() {
        return this.id;
    }

    getUsername() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getDesignation() {
        return this.designation;
    }

    getStatus() {
        return this.status;
    }


    setId(id) {
        this.id = id;
    }

    setUsername(username) {
        this.username = username;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    setDesignation(designation) {
        this.designation = designation;
    }

    setStatus(status) {
        this.status = status;
    }

}