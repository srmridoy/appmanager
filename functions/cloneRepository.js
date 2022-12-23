const simpleGit = require('simple-git/promise');

async function cloneRepository(project) {
  console.log(`Cloning repository for ${project.name}...`);
  try {
    await simpleGit().clone('https://github.com/ridz1396/template', `Projects/${project.name}`);
    console.log(`Repository for ${project.name} successfully cloned.`);
  } catch (error) {
    console.error(`Error cloning repository for ${project.name}: ${error}`);
  }
}

module.exports = cloneRepository;
