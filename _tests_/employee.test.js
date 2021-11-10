const Employee = require("../lib/employee");

describe("Employee", () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
        it("should create an object with a name if provided valid arguments", () => {
            const employee = new Employee("Sarah", 1, "sarah@email.com");

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Sarah");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("sarah@email.com");
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Employee();

            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
        });

        it("should throw an error if not provided an id", () => {
            const cb = () => new Employee("Sarah");

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided an email", () => {
            const cb = () => new Employee("Sarah", 2);

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(3, 2);
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("Sarah", "2");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Employee("Sarah", -1);
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Employee("Sarah", 2, 3);
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });

    // method tests
    describe("getName", () => {
        it("should return the employee's name", () => {
            const employee = new Employee("Sarah", 1, "sarah@email.com");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const nameReturned = employee.getName();

            expect(nameReturned).toBe("Sarah");
            expect(mock).toBeCalledWith(`Employee's name is Sarah.`);
            mock.mockRestore();
        });
    });

    describe("getId", () => {
        it("should return the employee's id", () => {
            const employee = new Employee("Sarah", 1, "sarah@email.com");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const idReturned = employee.getId();

            expect(idReturned).toBe(1);
            expect(mock).toBeCalledWith(`Employee's ID is 1.`);
            mock.mockRestore();
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email", () => {
            const employee = new Employee("Sarah", 1, "sarah@email.com");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const emailReturned = employee.getEmail();

            expect(emailReturned).toBe("sarah@email.com");
            expect(mock).toBeCalledWith(`Employee's email is sarah@email.com.`);
            mock.mockRestore();
        });
    });

    describe("getRole", () => {
        it("should return the employee's role", () => {
            const employee = new Employee("Sarah", 1, "sarah@email.com");
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            const roleReturned = employee.getRole();

            expect(roleReturned).toBe("Employee");
            expect(mock).toBeCalledWith(`Employee's role is Employee.`);
            mock.mockRestore();
        });
    });


});