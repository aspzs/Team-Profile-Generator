const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require ("./src/src/lib/Engineer");
const Intern = require ("./src/src/lib/Intern");
const Manager = require ("./src/src/lib/Manager");

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
        .then(function({employeeInfo, moreMembers}) {
            let newEmployee;
            if (role === "Manager") {
                newEmployee = new Manager(name, id, email, employeeInfo);
            } else if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, employeeInfo);
            } else {
                newEmployee = new Intern(name, id, email, employeeInfo);
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
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar mb-5 " style="background-color: #E3D7A0;">
            <span class="navbar-brand mb-0 h1 w-100 text-center"">Team Overview</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./teamprofile/profile.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
        if (role === "Engineer") {
            //const gitHub = employee.getGitHub();
            data = `        <div class="col">
            <div class="card text-white bg-success mb-3 d-flex justify-content-center" style="width: 18rem">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                  </svg>            
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: ${employee.getGitHub()}</li>
            </ul>
            </div>
        </div>`;


        } else if (role === "Intern") {
            const school = employee.getSchool();
            data = `        <div class="col">
            <div class="card text-white bg-warning mb-3 d-flex justify-content-center" style="width: 18rem">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                  </svg>
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            //const officePhone = employee.getOfficeNumber();
            data = `                <div class="col">
            <div class="card text-white bg-primary mb-3 d-flex justify-content-center" style="width: 18rem">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
                    <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"/>
                  </svg>
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("Added!");
        fs.appendFile("./teamprofile/profile.html", data, function (err) {
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

    fs.appendFile("./teamprofile/profile.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Thank you for using me");
}

initApp();