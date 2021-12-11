// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return`
  ![License](https://img.shields.io/badge/License-${license}-blue.svg)
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return`* [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License`;
}

// Function to generate markdown for readme
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  ${renderLicenseLink(data.license)}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions

  GitHub: https://github.com/${data.githubUser}

  For any additional questions or information, please contact me.
  [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
