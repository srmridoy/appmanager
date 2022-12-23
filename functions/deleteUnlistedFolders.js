const fs = require('fs');

async function deleteUnlistedFolders() {
  // get the list of projects in the projects.json file
  const projects = require('../projects.json');
  const projectNames = projects.map((project) => project.name);
  // read the contents of the Projects directory
  const files = fs.readdirSync('./Projects');
  // filter the list of files to only include directories
  const directories = files.filter((file) => fs.lstatSync(`./Projects/${file}`).isDirectory());
  // delete any directories that are not listed in the projects.json file
  directories.forEach((directory) => {
    if (!projectNames.includes(directory)) {
      fs.rmdirSync(`./Projects/${directory}`, { recursive: true });
      console.log(`Deleted unlisted directory ${directory}`);
    }
  });
}

module.exports = deleteUnlistedFolders;
