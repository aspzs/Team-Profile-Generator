const Employee = require ("../src/lib/Employee");

describe("Employee", () =>{
    const testEmployee ={
        name : "Arnol",
        id : 123,
        email : "25sparnol@gmail.com"
    };
    describe("Creation Test",() =>{
        test("Should create a new instance from employee class",()=>{
            const empleado = new Employee(testEmployee);
            expect(empleado).toBeInstanceOf(Employee);
        });
        test("Should create a new instance from employee class with their values", ()=>{
            const empleado = new Employee(testEmployee);
            expect(empleado).toEqual({
                name : "Arnol",
                id : 123,
                email: "25sparnol@gmail.com" 
            });
        });
    });
    describe("method tests", ()=>{
        test("Should return Name with the getName method",()=>{
            const empleado = new Employee(testEmployee);
            expect(empleado.getName()).toEqual("Arnol");
        });
        test("Should return id with the getId method", ()=>{
            const empleado = new Employee(testEmployee);
            expect(empleado.getId()).toEqual(123);
        });
        test("Should return Email with the getEmail method",()=>{
            const empleado = new Employee(testEmployee);
            expect(empleado.getEmail()).toEqual("25sparnol@gmail.com");
        });
    });
});