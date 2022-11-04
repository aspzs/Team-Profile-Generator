const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require ("./src/lib/Engineer");
const Intern = require ("./src/lib/Intern");
const Manager = require ("./src/lib/Manager");

const employees = [];

function initApp() {
    startHtml();
    addEmployee();
}


function addEmployee() {
    inquirer.prompt([{
        message: "Employee's name: ",
        name: "name"
    },
    {
        type: "list",
        message: "Employee's role, select one",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    {
        message: "Employee's id: ",
        name: "id"
    },
    {
        message: "Employee's email: ",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let employeeInfo = "";
        if (role === "Manager") {
            employeeInfo = "Office Number: ";
        } else if (role === "Engineer") {
            employeeInfo = "GitHub: ";
        } else {
            employeeInfo = "School: ";
        }
        inquirer.prompt([{
            message: `Employee's ${employeeInfo}`,
            name: "employeeInfo"
        },
        {
            type: "list",
            message: "Want to add more members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newEmployee;
            if (role === "Manager") {
                newEmployee = new Manager(name, id, email, roleInfo);
            } else if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, roleInfo);
            } else {
                newEmployee = new Intern(name, id, email, roleInfo);
            }
            employees.push(newEmployee);
            addHtml(newEmployee)
            .then(function() {
                if (moreMembers === "yes") {
                    addEmployee();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}

////AQUI EMPIEZA EL HTML

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./src/css/style.css" />
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

// addMember();
// startHtml();
// addHtml("hi")
// .then(function() {
// finishHtml();
// });
initApp();