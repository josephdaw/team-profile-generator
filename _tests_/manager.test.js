const Manager = require("../lib/manager");

describe("Manager", () => {
    // Test for all use cases when initializing a new Manager object
    describe("Initialization", () => {
      it("should create an object with a name if provided valid arguments", () => {
        const manager = new Manager("Sarah", 1, "sarah@email.com", 33);
  
        // Verify that the new object has the correct properties
        expect(manager.name).toEqual("Sarah");
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual("sarah@email.com");
        expect(manager.officeNumber).toEqual(33);
      });
  
      it("should throw an error if provided no arguments", () => {
        // Wrap the object initialization in a callback function that Jest will run
        const cb = () => new Manager();
  
        // Verify that an error was thrown in the callback function
        expect(cb).toThrow();
      });

      it("should throw an error if not provided an id", () => {
        const cb = () => new Manager("Sarah");
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'id' to be a non-negative number");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError(err);
      });

      it("should throw an error if not provided an email", () => {
        const cb = () => new Manager("Sarah", 2);
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'email' to be a non-empty string");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError(err);
      });

      it("should throw an error if not provided an office number", () => {
        const cb = () => new Manager("Sarah", 2, "sarah@email.com");
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Manager(3, 2);
        const err = new Error("Expected parameter 'name' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'id' is not a number", () => {
        const cb = () => new Manager("Sarah", "2");
        const err = new Error("Expected parameter 'id' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });
  
      it("should throw an error if 'id' is less than 0", () => {
        const cb = () => new Manager("Sarah", -1);
        const err = new Error("Expected parameter 'id' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'email' is not a string", () => {
        const cb = () => new Manager("Sarah", 2, 3);
        const err = new Error("Expected parameter 'email' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'officeNumber' is not a number", () => {
        const cb = () => new Manager("Sarah", 1, "sarah@email.com", "1");
        const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });
  
      it("should throw an error if 'officeNumber' is less than 0", () => {
        const cb = () => new Manager("Sarah", 1, "sarah@email.com", -33);
        const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });

    });
});