import UserConfig from "./Userconfig.js";

class User {
    constructor(name, surname, password) {
        let nameRegex = /^[A-Za-z]+$/;
        let passwordRegex = /^[A-Za-z0-9]{6,}$/;

        if (nameRegex.test(name) && nameRegex.test(surname) && passwordRegex.test(password)) {
            this.name = name;
            this.surname = surname;
            this.password = password;
            this.role = UserConfig.role;
            this.married = UserConfig.married;
        }
    }

    getFullName() {
        return this.name + " " + this.surname;
    }

    isMarried() {
        return this.married;
    }
}

export default User;