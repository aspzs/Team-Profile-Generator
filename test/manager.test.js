const Manager = require ("../src/src/lib/Manager");

test("Should set Office Number via constructor", () => {
    const testNumber = "000";
    const manager = new Manager("Arnol", 123, "25sparnol@gmail.com", testNumber);
    expect(manager.officeNumber).toBe(testNumber);
  });
  
  test("Should return the Manager role with the getRole method", () => {
    const testRole = "Manager";
    const manager = new Manager("Arnol", 123, "25sparnol@gmail.com", "aspzs");
    expect(manager.getRole()).toBe(testRole);
  });
  
  test("Should return the Office Number with the getOfficeNumber method", () => {
    const testNumber = "000";
    const manager = new Manager("Arnol", 123, "25sparnol@gmail.com", testNumber);
    expect(manager.getOfficeNumber()).toBe(testNumber);
  });