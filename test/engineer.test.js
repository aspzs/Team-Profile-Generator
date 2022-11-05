const Engineer = require ("../src/src/lib/Engineer");

test("Should set GitHUb account via constructor", () => {
    const testGitHub = "aspzs";
    const engineer = new Engineer("Arnol", 123, "25sparnol@gmail.com", testGitHub);
    expect(engineer.gitHub).toBe(testGitHub);
  });
  
  test("Should return the Engineer role with the getRole method", () => {
    const testRole = "Engineer";
    const engineer = new Engineer("Arnol", 123, "25sparnol@gmail.com", "aspzs");
    expect(engineer.getRole()).toBe(testRole);
  });
  
  test("Should return the GitHub username  with the getGitHub method", () => {
    const testUsername = "aspzs";
    const engineer = new Engineer("Arnol", 123, "25sparnol@gmail.com", testUsername);
    expect(engineer.getGitHub()).toBe(testUsername);
  });
