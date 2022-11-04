const Manager = require ("../src/lib/Manager");

describe("Manager", () =>{
    const testManager ={
        name : "Arnol",
        id : 456,
        email : "25sparnol@gmail.com",
        officeNumber : "123"
    };
    describe("Creation Test",() =>{
        test("Should create a new instance from Manager class",()=>{
            const manager = new Manager(testManager);
            expect(manager).toBeInstanceOf(testManager);
        });
        test("Should create a new instance from Manager class with their values", ()=>{
            const manager = new Intern(testManager);
            expect(manager).toEqual({
                name : "Arnol",
                id : 456,
                email: "25sparnol@gmail.com",
                officeNumber : "123"
            });
        });
    });
    describe("method tests", ()=>{
        test("Should return Name with the getName method",()=>{
            const manager = new Manager(testManager);
            expect(manager.getName()).toEqual("Arnol");
        });
        test("Should return id with the getId method", ()=>{
            const manager = new Manager(testManager);
            expect(manager.getId()).toEqual(456);
        });
        test("Should return Email with the getEmail method",()=>{
            const manager = new Manager(testManager);
            expect(manager.getEmail()).toEqual("25sparnol@gmail.com");
        });
        test("Should return Office Number with the getOfficdNumber method", ()=>{
            const manager = new Manager(testManager);
            expect(manager.getOfficeNumber()).toEqual("123");
        });
    });
});