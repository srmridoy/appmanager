const fs = require('fs');
const simpleGit = require('simple-git/promise');
const colors = require('colors');
const projects = require('./projects.json');

// import the functions from the functions directory
const cloneRepository = require('./functions/cloneRepository');
const deleteUnlistedFolders = require('./functions/deleteUnlistedFolders');

async function executeFunction(project) {
  console.log('');
  console.log('');
  console.log('');
  console.log(`Executing functions for project ${project.name}...`);
  // check if the repository is already cloned
  if (!fs.existsSync(`./Projects/${project.name}`)) {
    await cloneRepository(project);
  } else {
    console.log(`Repository for ${project.name} already cloned, skipping...`);
  }
  console.log(colors.blue(`Finished executing functions for project ${project.name}`));
  console.log('');
  console.log('');
  console.log('');
}


async function main() {
  await deleteUnlistedFolders();
  projects.forEach(async (project) => {
    await executeFunction(project);
  });
}

main();
