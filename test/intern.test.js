const Intern = require ("../src/lib/Intern");

describe("Intern", () =>{
    const testIntern ={
        name : "Arnol",
        id : 345,
        email : "25sparnol@gmail.com",
        school : "bootcamp"
    };
    describe("Creation Test",() =>{
        test("Should create a new instance from Intern class",()=>{
            const intern = new Intern(testIntern);
            expect(intern).toBeInstanceOf(testIntern);
        });
        test("Should create a new instance from Engineer class with their values", ()=>{
            const intern = new Intern(testIntern);
            expect(intern).toEqual({
                name : "Arnol",
                id : 345,
                email: "25sparnol@gmail.com",
                school : "bootcamp"
            });
        });
    });
    describe("method tests", ()=>{
        test("Should return Name with the getName method",()=>{
            const intern = new Intern(testIntern);
            expect(intern.getName()).toEqual("Arnol");
        });
        test("Should return id with the getId method", ()=>{
            const intern = new Intern(testIntern);
            expect(intern.getId()).toEqual(345);
        });
        test("Should return Email with the getEmail method",()=>{
            const intern = new Intern(testIntern);
            expect(intern.getEmail()).toEqual("25sparnol@gmail.com");
        });
        test("Should return School name with the getSchool method", ()=>{
            const intern = new Intern(testIntern);
            expect(intern.getGitHub()).toEqual("bootcamp");
        });
    });
});