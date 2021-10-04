// create Manager Card
const createManagerCard  = (employee) => {
    return `<div class="card text-center bg-info" style="width: 18rem;">
    <div class="card-body">
        <h4 class="card-title">${employee.name}</h4>
        <h5 class="card-subtitle mb-2 text-warning">${employeeInfo.role}</h5>
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
        <h5 class="card-subtitle mb-2 text-warning">${employeeInfo.role}</h5>
        <h6 class="card-subtitle mb-2 text-dark">ID: ${employee.id}</h6>
        <a href="https://github.com/${employee.gitHub}" target="_blank" class="text-dark">GitHub: ${employee.gitHub}</a>
        <a href="mailto:${employee.email}" class="text-dark">Email: ${employee.email}</a>
    </div>
</div>`;
}

// create Intern Card
const createInternCard = (employee) => {
    return `<div class="card text-center bg-secondary" style="width: 18rem;">
    <div class="card-body">
        <h4 class="card-title">${employee.name}</h4>
        <h5 class="card-subtitle mb-2 text-warning">${employeeInfo.role}</h5>
        <h6 class="card-subtitle mb-2 text-dark">ID: ${employee.id}</h6>
        <p class="card-text">School: ${employee.school}</p>
        <a href="mailto:${employee.email}" class="card-link text-dark">Email: ${employee.email}</a>
    </div>
</div>`;
}

module.exports = generateHTML;