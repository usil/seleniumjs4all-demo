const { getVariable } = require("selenium4all/src/helpers/testHelpers");
const { getBrowserDriver } = require("selenium4all/src/lib");
const { until, By, Key } = require("selenium-webdriver");
const { expect } = require("chai");

const URL_BASE = getVariable("google.base_url");
describe('Google - Inicio', () => {
    let driver
    beforeAll(async () => {
        driver = await getBrowserDriver();
        global.driver = driver;
        await driver.get(URL_BASE);
      });
    test('Debe encontear los resultados de nodejs ', async () => {
        const condition = await until.elementLocated(By.name("q"));
        const condition2 = await until.elementsLocated(By.className("g"));
        const searchInput = await driver.wait( async driver => condition.fn(driver) , 4 * 1000, "There isn't search input", 5 * 100);
        await searchInput.sendKeys("NODEJS", Key.RETURN);
        const listOfResults = await driver.wait(async driver => condition2.fn(driver));
        expect(listOfResults.length).to.greaterThan(0)
    });
    afterAll(async () => {
        await driver.quit()
    })
});