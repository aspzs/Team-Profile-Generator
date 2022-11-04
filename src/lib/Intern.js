const Employee = require ("./Employee");

class Intern extends Employee{
    constructor(name, email, school){
        super (name, email);
        this.school = school;
        this.role = "Intern";
    };
    getRole(){
        return this.role;
    };
    getSchool(){
        return this.school;
    };
};

module.exports = Intern;