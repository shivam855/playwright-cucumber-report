import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./world";
// import { expect } from "@playwright/test";

const username = 'shivam.rathour@maersk.com';
const password = 'Amarsingh@12345';

Given("User is able to navigate to the home page", async function () {
  // await page.goto("https://demo.maersk.com/book/");
});

When("User is able to enter the username and password", async function () {
  await page.fill('input[type="email"]', username);
  await page.locator('[type="submit"]').click();
  await page.fill('input[type="password"]', password);
  await page.locator('[type="submit"]').click();
});

Then("User is able to click on the login button", async function () {
  await page.locator('[type="submit"]').click();
  await page.waitForTimeout(10000);
  await page.locator('[data-test="coi-allow-all-button"]').click();
  await page.goto("https://demo.maersk.com/book/", { timeout: 500000 });
  await page.getByPlaceholder("Username").type("cypressintuser");
  await page.getByPlaceholder("Password").type("Cypress@123");
  // await page.waitForTimeout(100000);
});


