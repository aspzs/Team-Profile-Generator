const Engineer = require ("../src/lib/Engineer");

describe("Engineer", () =>{
    const testEngineer ={
        name : "Arnol",
        id : 234,
        email : "25sparnol@gmail.com",
        gitHub : "https://github.com/aspzs"
    };
    describe("Creation Test",() =>{
        test("Should create a new instance from Engineer class",()=>{
            const inge = new Engineer(testEngineer);
            expect(inge).toBeInstanceOf(testEngineer);
        });
        test("Should create a new instance from Engineer class with their values", ()=>{
            const inge = new Engineer(testEngineer);
            expect(empleado).toEqual({
                name : "Arnol",
                id : 234,
                email: "25sparnol@gmail.com",
                gitHub : "https://github.com/aspzs"
            });
        });
    });
    describe("method tests", ()=>{
        test("Should return Name with the getName method",()=>{
            const inge = new Engineer(testEngineer);
            expect(inge.getName()).toEqual("Arnol");
        });
        test("Should return id with the getId method", ()=>{
            const inge = new Engineer(testEngineer);
            expect(inge.getId()).toEqual(234);
        });
        test("Should return Email with the getEmail method",()=>{
            const inge = new Engineer(testEngineer);
            expect(inge.getEmail()).toEqual("25sparnol@gmail.com");
        });
        test("Should return github account with the getGitHub method", ()=>{
            const inge = new Engineer(testEngineer);
            expect(inge.getGitHub()).toEqual("https://github.com/aspzs");
        });
    });
});