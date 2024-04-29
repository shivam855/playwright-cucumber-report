import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./world";
// import { expect } from "@playwright/test";

const username = '';
const password = '';
const user = '';
const pass = '';


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
  await page.getByPlaceholder("Username").type(user);
  await page.getByPlaceholder("Password").type(pass);
  // await page.waitForTimeout(100000);
});


