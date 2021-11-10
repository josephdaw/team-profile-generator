function Employee(name, id, email) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
  
    if (typeof id !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }

    if (typeof email !== "string" || !email.trim().length) {
        throw new Error("Expected parameter 'email' to be a non-empty string");
      }
  
    this.name = name;
    this.id = id;
    this.email = email
    this.role = "Employee"
  }

  Employee.prototype.getName = function() {
    console.log(`Employee's name is ${this.name}.`);
    return this.name;
  };

  Employee.prototype.getId = function() {
    console.log(`Employee's ID is ${this.id}.`);
    return this.id;
  };

  Employee.prototype.getEmail = function() {
    console.log(`Employee's email is ${this.email}.`);
    return this.email;
  };

  Employee.prototype.getRole = function() {
    console.log(`Employee's role is ${this.role}.`);
    return this.role;
  };
  
  module.exports = Employee;