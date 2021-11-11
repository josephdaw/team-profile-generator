const Team = require('./lib/team');
const Html = require('./src/html');
const fs = require('fs');

const team = new Team();

const createTeam = async () => {
    await team.create();
    let htmlTeam = ""
    team.members.forEach(member => {
        htmlTeam += member.getHTML();
    });
    const htmlDoc = Html.htmlStart + htmlTeam + Html.htmlEnd;

    console.log(htmlDoc);

    // function to create the HTML file
    fs.writeFile('./dist/index.html', htmlDoc, (err) =>
        err ? console.error('Error: ',err) : console.log('File created'))
};

createTeam();
