// create Manager Card
const createManagerCard = (employee) => {
    return `<div class="card text-center bg-info" style="width: 18rem;">
    <div class="card-body">
        <h4 class="card-title">${employee.name}</h4>
        <h5 class="card-subtitle mb-2 text-warning">Manager</h5>
        <h6 class="card-subtitle mb-2 text-dark">ID: ${employee.id}</h6>
        <p class="card-text">Office Number: ${employee.officeNumber}</p>
        <a href="mailto:${employee.email}" class="card-link text-dark">Email: ${employee.email}</a>
    </div>
</div>`;
}

// create Engineer Card
const createEngineerCard = (employee) => {
    return `<div class="card text-center bg-success" style="width: 18rem;">
    <div class="card-body">
        <h4 class="card-title">${employee.name}</h4>
        <h5 class="card-subtitle mb-2 text-warning">Engineer</h5>
        <h6 class="card-subtitle mb-2 text-dark">ID: ${employee.id}</h6>
        <a href="https://github.com/${employee.gitHub}" target="_blank" class="text-dark">GitHub: ${employee.gitHub}</a><br>
        <a href="mailto:${employee.email}" class="text-dark">Email: ${employee.email}</a>
    </div>
</div>`;
}

// create Intern Card
const createInternCard = (employee) => {
    return `<div class="card text-center bg-secondary" style="width: 18rem;">
    <div class="card-body">
        <h4 class="card-title">${employee.name}</h4>
        <h5 class="card-subtitle mb-2 text-warning">Intern</h5>
        <h6 class="card-subtitle mb-2 text-dark">ID: ${employee.id}</h6>
        <p class="card-text">School: ${employee.school}</p>
        <a href="mailto:${employee.email}" class="card-link text-dark">Email: ${employee.email}</a>
    </div>
</div>`;
}

// Function to generate the cards that are placed into the HTML page using a switch case statement
// Also calls the generateTeamHtml function after the cards have been generated
generateHtmlCards = (data) => {
    const cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        switch (role) {
            case "Manager":
                const managerCard = createManagerCard(employee);
                cardArray.push(managerCard);
                break;
            case "Engineer":
                const engineerCard = createEngineerCard(employee);
                cardArray.push(engineerCard);
                break;
            case "Intern":
                const internCard = createInternCard(employee);
                cardArray.push(internCard);
                break;
            default:
                break;
        }
    }

    const employeeCards = cardArray.join("");
    console.log(cardArray);

    const generateTeam = generateTeamHtml(employeeCards)
    return generateTeam;
}

// Generates the boilerplate of the HTML page and has a spot at line 106 to add the HTML cards generated above
generateTeamHtml = (employeeCards) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200;600;700&family=Montserrat:wght@400;500&display=swap"
            rel="stylesheet">
        <link rel="stylesheet" href="../css/style.css">
    </head>
    
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid text-center bg-danger">
                <div class="container">
                    <h1 class="display-4 meetTeam">Our Team!</h1>
    
                </div>
            </div>
        </header>
    
        <div class="container">
            <div class="row justify-content-center">
                ${employeeCards}    
                </div>
            </div>
    
    
    
        </div>
    
    
    </body>
    
    </html>`
}


module.exports = generateHtmlCards;