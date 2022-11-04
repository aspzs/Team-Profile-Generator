const Intern = require ("../src/lib/Intern");

test("Should set School name via constructor", () => {
    const testSchool = "test";
    const intern = new Intern("Arnol", "25sparnol@gmail.com", testSchool);
    expect(intern.school).toBe(testSchool);
  });
  
  test("Should return the Intern role with the getRole method", () => {
    const testRole = "Intern";
    const intern = new Intern("Arnol", "25sparnol@gmail.com", "test");
    expect(intern.getRole()).toBe(testRole);
  });
  
  test("Should return the School name with the getSchool method", () => {
    const testSchool = "test";
    const intern = new Intern("Arnol", "25sparnol@gmail.com", testSchool);
    expect(intern.getSchool()).toBe(testSchool);
  });