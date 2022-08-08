const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {

        super(name, id, email);

        this.gitHub = gitHub;
    };

    // Overridden to return "Engineer"
    getRole() {
        return 'Engineer';
    };

    getgitHub() {
        return this.gitHub;
    };
};

module.exports = Engineer;
