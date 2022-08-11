const makeHTML = [];

const everything = (team) => {
  const generateManager = managerQuestions => {
    return `<div class="column is-3">
    <div class="card" id="managerCard">

        <div class="card-content">
          <div class="media">
            <div class="media-content">
            <p class="title is-4 is-bold">Manager</p>
              <p class="title is-5">${managerQuestions.name.managerName}</p>
            </div>
          </div>
      
          <div class="content">
            <p>Email:<a href="#">${managerQuestions.name.managerID}</a></p>
            <p>Email:<a href="#">${managerQuestions.name.managerNumber}</a></p>
            <footer><p class="subtitle is-6">${managerQuestions.name.managerEmail}</p></footer>
        </div>
        </div>
      </div>
</div>`;
  }

  const generateEngineer = engineerQuestions => {
    console.log(engineerQuestions)
    return `<div class="column is-3">
<div class="card" id="engineerCard">

    <div class="card-content">
      <div class="media">
        <div class="media-content">
        <p class="title is-4 is-bold">Engineer</p>
          <p class="title is-5">${engineerQuestions.name.engineerName}</p>
        </div>
      </div>
  
      <div class="content">
        <p>Email:<a href="#">${engineerQuestions.name.engineerEmail}</a></p>
        <p>Github:<a href="#">${engineerQuestions.name.engineerGithub}</a></p>
        <footer><p class="subtitle is-6">${engineerQuestions.name.engineerID}</p></footer>
    </div>
    </div>
  </div>
</div>`;
  }

  const generateIntern = internQuestions => {
    console.log(internQuestions)
    return `<div class="column is-3">
<div class="card" id="internCard">

    <div class="card-content">
      <div class="media">
        <div class="media-content">
        <p class="title is-4 is-bold">Intern</p>
          <p class="title is-5">${internQuestions.name.internName}</p>
        </div>
      </div>
  
      <div class="content">
        <p>Email:<a href="#">${internQuestions.name.internEmail}</a></p>
        <p>School:<a href="#">${internQuestions.name.internSchool}</a></p>
        <footer><p class="subtitle is-6">${internQuestions.name.internID}</p></footer>
    </div>
    </div>
  </div>
</div>`;
  }

  makeHTML.push(team.filter(employee => employee.getRole() === 'Manager')
    .map(managerQuestions => generateManager(managerQuestions)));

  makeHTML.push(team.filter(employee => employee.getRole() === 'Engineer')
    .map(engineerQuestions => generateEngineer(engineerQuestions)));

  makeHTML.push(team.filter(employee => employee.getRole() === 'Intern')
    .map(internQuestions => generateIntern(internQuestions)));

  return makeHTML.join('');
};

module.exports = (team) => {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
        <!-- BULMA CSS StyleSheet -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <title>Document</title>
    </head>

    <body>
        <section class="hero">
            <div class="hero-body">
              <p class="title" id="nav">
                My Team
              </p>
            </div>
          </section>
    
    <div class="columns" style="flex-wrap: wrap">

    <div>
    ${everything(team)}
    </div>

    </body>
    
    </html>`
}
