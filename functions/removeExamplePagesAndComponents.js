const fs = require('fs-extra');

async function removeExamplePagesAndComponents(projectName) {
  console.log(`Removing example pages and components from ${projectName}...`);
  try {
    // remove the example pages directory
    await fs.remove(`./Projects/${projectName}/src/example-pages`);
    console.log(`Removed example pages from ${projectName}`);
    // remove the example components directory
    await fs.remove(`./Projects/${projectName}/src/example-components`);
    console.log(`Removed example components from ${projectName}`);
  } catch (error) {
    console.error(`Error removing example pages and components from ${projectName}: ${error}`);
  }
}

module.exports = removeExamplePagesAndComponents;
