
const Employee = require("./Employee");
class Intern extends Employee {
  constructor({ name, id, email, school }) {
    super({ name, id, email, school });
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
  generateCard() {
    return `<div class="card my-3" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${this.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${this.id}</h6>
    <p class="card-text">Email: ${this.email}</p>
    <p class="card-text">School: ${this.school}</p>
  </div>
</div>`;
  }
}

module.exports = Intern;
