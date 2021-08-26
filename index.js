
const generate = require('./src/HTMLGenerator');
const fs = require('fs');
const inquirer = require ('inquirer');
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern');
const Engineer = require ('./lib/engineer');
const { ENGINE_METHOD_RAND } = require('constants');
const teamArray = [];

// create team profiles for constuctors




// data input
const addManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What's the manager's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What's the manager's ID?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What's the manager's email?`
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What's the manager's office number?`
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        teamArray.push(manager);
        // console.log(manager);
    })
}

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: `Please choose your employee's role. `,
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: `What's the name of the employee?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What's the employee ID?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What's the employee's email?`
        },
        {
            type: 'input',
            name: 'github',
            message: `Please enter the employee's github username.`
        },
        {
            type: 'input',
            name: 'school',
            message: `Please enter the intern's school.`,
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: `Would you like to add more team members?`,
            default: false
        }
    ])
    .then(employeeData => {
        let{ name, id, email, role, github, school, confirm } = employeeData;
        let employee;

        if (role === "Engineer"){
            employee = new Engineer (name, id, email, github);
            // console.log(employee);
        }
        else if (role === "Intern"){
            employee = new Intern (name, id, email, school);
            // console.log(employee);
        }
        teamArray.push(employee);

        if(confirm){
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

// generate HTML with data provided
const writeFile = data => {
    fs.writeFile('dist/index.html', data, err => {
        if (err) { 
            console.log(err);
            // return;
        } else {
            console.log("Profile succesfully created. Please open index.html")
        }
    })
}

addManager()
    .then (addEmployee)
    .then (teamArray => {
        return generate (teamArray);
    })
    .then (pageHTML => {
        return writeFile (pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
