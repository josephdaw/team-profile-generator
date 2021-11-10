const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    // Test for all use cases when initializing a new Engineer object
    describe("Initialization", () => {
        it("should create an object with a name if provided valid arguments", () => {
            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "sarah");

            // Verify that the new object has the correct properties
            expect(engineer.name).toEqual("Sarah");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("sarah@email.com");
            expect(engineer.github).toEqual("sarah");
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Engineer();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        });

        it("should throw an error if not provided an id", () => {
            const cb = () => new Engineer("Sarah");

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an email", () => {
            const cb = () => new Engineer("Sarah", 2);

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided a github username", () => {
            const cb = () => new Engineer("Sarah", 2, "sarah@email.com");

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'github' to be a non-empty string");

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Engineer(3, 2);
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Engineer("Sarah", "2");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Engineer("Sarah", -1);
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Engineer("Sarah", 2, 3);
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'github' is not a string", () => {
            const cb = () => new Engineer("Sarah", 2, "sarah@email.com", 2);
            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

    });

    // method tests
    describe("getName", () => {
        it("should return the engineer's name", () => {
            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "sarah");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const nameReturned = engineer.getName();

            expect(nameReturned).toBe("Sarah");
            expect(mock).toBeCalledWith(`Engineer's name is Sarah.`);
            mock.mockRestore();
        });
    });

    describe("getId", () => {
        it("should return the engineer's id", () => {
            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "sarah");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const idReturned = engineer.getId();

            expect(idReturned).toBe(1);
            expect(mock).toBeCalledWith(`Engineer's ID is 1.`);
            mock.mockRestore();
        });
    });

    describe("getEmail", () => {
        it("should return the engineer's email", () => {
            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "sarah");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const emailReturned = engineer.getEmail();

            expect(emailReturned).toBe("sarah@email.com");
            expect(mock).toBeCalledWith(`Engineer's email is sarah@email.com.`);
            mock.mockRestore();
        });
    });

    describe("getRole", () => {
        it("should return the engineer's role", () => {
            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "sarah");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const roleReturned = engineer.getRole();

            expect(roleReturned).toBe("Engineer");
            expect(mock).toBeCalledWith(`Engineer's role is Engineer.`);
            mock.mockRestore();
        });
    });

    describe("getGithub", () => {
        it("should return the engineer's GitHub username.", () => {
            const engineer = new Engineer("Sarah", 1, "sarah@email.com", "sarah");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const githubReturned = engineer.getGithub();

            expect(githubReturned).toBe("sarah");
            expect(mock).toBeCalledWith(`Engineer's GitHub Username is sarah.`);
            mock.mockRestore();
        });
    });

});