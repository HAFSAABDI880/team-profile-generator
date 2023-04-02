const inquirer = require("inquirer");

const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./lib/questions");
const manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const {
  categorisedTeams,
  generateCards,
  generateHtml,
  writeToFile,
} = require("../utils");
