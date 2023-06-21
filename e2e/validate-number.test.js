/**
 * @jest-environment node
 */

import puppeteer from "puppeteer";

jest.setTimeout(10000);

describe("validate is number of credit card or not", () => {
  let browser = null;
  let page = null;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: 'new',
      devtools: false,
      slowMo: 100,
    });
    page = await browser.newPage();
  });

  test("tooltip should add .valid if card number is valid", async () => {
    await page.goto("http://localhost:8080");
    await page.waitForSelector(".card-validator");

    const form = await page.$(".card-validator");
    const input = await form.$(".input");
    const button = await form.$(".button");

    await input.type("4716715717238562");
    await button.click();

    await page.waitForSelector(".card-validator .tooltip.valid");
  });

  test("tooltip should add .not-valid if card number is invalid", async () => {
    await page.goto("http://localhost:8080");
    await page.waitForSelector(".card-validator");

    const form = await page.$(".card-validator");
    const input = await form.$(".input");
    const button = await form.$(".button");

    await input.type("53556555656322656232");
    await button.click();

    await page.waitForSelector(".card-validator .tooltip.not-valid");
  });

  afterEach(async () => {
    await browser.close();
  });
});
