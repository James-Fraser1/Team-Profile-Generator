const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school;
    };

    // Overridden to return "Intern"
    getRole() {
        return 'Intern';
    };

    getschool() {
        return this.school;
    };
};

module.exports = Intern;