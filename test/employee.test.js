const Employee = require ("../src/lib/Employee");

describe("Employee", () => {
    it("Should set name via constructor argument", () => {
        const name = "Arnol";
        const empleado = new Employee(name);
        expect(empleado.name).toBe(name);
    });

    it("Should set id via constructor argument", () => {
        const testId = 123;
        const empleado = new Employee("Arnol", testId);
        expect(empleado.id).toBe(testId);
    });

    it("Should set email via constructor argument", () => {
        const testEmail = "25sparnol@gmail.com";
        const empleado = new Employee("Arnol", 123, testEmail);
        expect(empleado.email).toBe(testEmail);
    });

    describe("getName", () => {
        it("Should return Name with the getName method", () => {
            const testName = "Arnol";
            const empleado = new Employee(testName);
            expect(empleado.getName()).toBe(testName);
        });
    });
        
    describe("getId", () => {
        it("Should return id with the getId method", () => {
            const testId = 123;
            const empleado = new Employee("Arnol", testId);
            expect(empleado.getId()).toBe(testId);
        });
    });
        
    describe("getEmail", () => {
        it("Should return email with the getEmail method", () => {
            const testEmail = "25sparnol@gmail.com";
            const empleado = new Employee("Foo", 123, testEmail);
            expect(empleado.getEmail()).toBe(testEmail);
        });
    });
        
    describe("getRole", () => {
        it("Should return Role with the getRole method", () => {
            const testRole = "Employee";
            const empleado = new Employee("Arnol", 123, "25sparnol@gmail.com");
            expect(empleado.getRole()).toBe(testRole);
        });
    });
    
});