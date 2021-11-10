const Intern = require("../lib/intern");

describe("Intern", () => {
    // Test for all use cases when initializing a new Intern object
    describe("Initialization", () => {
      it("should create an object with a name if provided valid arguments", () => {
        const intern = new Intern("Sarah", 1, "sarah@email.com", "Adelaide Uni");
  
        // Verify that the new object has the correct properties
        expect(intern.name).toEqual("Sarah");
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual("sarah@email.com");
        expect(intern.school).toEqual("Adelaide Uni");
      });
  
      it("should throw an error if provided no arguments", () => {
        // Wrap the object initialization in a callback function that Jest will run
        const cb = () => new Intern();
  
        // Verify that an error was thrown in the callback function
        expect(cb).toThrow();
      });

      it("should throw an error if not provided an id", () => {
        const cb = () => new Intern("Sarah");
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'id' to be a non-negative number");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError(err);
      });

      it("should throw an error if not provided an email", () => {
        const cb = () => new Intern("Sarah", 2);
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'email' to be a non-empty string");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError(err);
      });

      it("should throw an error if not provided a school", () => {
        const cb = () => new Intern("Sarah", 2, "sarah@email.com");
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'school' to be a non-empty string");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Intern(3, 2);
        const err = new Error("Expected parameter 'name' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'id' is not a number", () => {
        const cb = () => new Intern("Sarah", "2");
        const err = new Error("Expected parameter 'id' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });
  
      it("should throw an error if 'id' is less than 0", () => {
        const cb = () => new Intern("Sarah", -1);
        const err = new Error("Expected parameter 'id' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'email' is not a string", () => {
        const cb = () => new Intern("Sarah", 2, 3);
        const err = new Error("Expected parameter 'email' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });

      it("should throw an error if 'school' is not a string", () => {
        const cb = () => new Intern("Sarah", 2, "sarah@email.com", 2);
        const err = new Error("Expected parameter 'school' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });

    });

    // method tests
    describe("getName", () => {
        it("should return the intern's name", () => {
            const intern = new Intern("Sarah", 1, "sarah@email.com", "Adelaide Uni");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const nameReturned = intern.getName();

            expect(nameReturned).toBe("Sarah");
            expect(mock).toBeCalledWith(`Intern's name is Sarah.`);
            mock.mockRestore();
        });
    });

    describe("getId", () => {
        it("should return the intern's id", () => {
            const intern = new Intern("Sarah", 1, "sarah@email.com", "Adelaide Uni");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const idReturned = intern.getId();

            expect(idReturned).toBe(1);
            expect(mock).toBeCalledWith(`Intern's ID is 1.`);
            mock.mockRestore();
        });
    });

    describe("getEmail", () => {
        it("should return the intern's email", () => {
            const intern = new Intern("Sarah", 1, "sarah@email.com", "Adelaide Uni");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const emailReturned = intern.getEmail();

            expect(emailReturned).toBe("sarah@email.com");
            expect(mock).toBeCalledWith(`Intern's email is sarah@email.com.`);
            mock.mockRestore();
        });
    });

    describe("getRole", () => {
        it("should return the intern's role", () => {
            const intern = new Intern("Sarah", 1, "sarah@email.com", "Adelaide Uni");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const roleReturned = intern.getRole();

            expect(roleReturned).toBe("Intern");
            expect(mock).toBeCalledWith(`Intern's role is Intern.`);
            mock.mockRestore();
        });
    });

    describe("getSchool", () => {
        it("should return the intern's school.", () => {
            const intern = new Intern("Sarah", 1, "sarah@email.com", "Adelaide Uni");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const schoolReturned = intern.getSchool();

            expect(schoolReturned).toBe("Adelaide Uni");
            expect(mock).toBeCalledWith(`Intern's school is Adelaide Uni.`);
            mock.mockRestore();
        });
    });

});