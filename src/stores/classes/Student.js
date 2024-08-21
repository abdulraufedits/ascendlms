export default class Student {
    username = '';
    email = '';
    password = '';
    achievements = [];

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getAchievements() {
        return this.achievements;
    }

    getUserName() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    setAchievements(achievements) {
        this.achievements = achievements;
    }

    setUserName(username) {
        this.username = username;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }
}