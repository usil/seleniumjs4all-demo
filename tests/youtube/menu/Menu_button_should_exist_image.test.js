const { getVariable } = require("selenium4all/src/helpers/testHelpers");
const { getBrowserDriver } = require("selenium4all/src/lib");
const { until, By } = require("selenium-webdriver");
const { expect } = require("chai");

const URL_BASE = getVariable("youtube.base_url");
describe('Youtube - Init', () => {
    let driver
    beforeAll(async () => {
        driver = await getBrowserDriver();
        global.driver = driver;
        await driver.get(URL_BASE);
      });
    test('Debe encontrar el boton de menu de youtube ', async () => {
        const condition = await until.elementLocated(By.id("guide-button"));
        const menuButton = await driver.wait( async driver => condition.fn(driver));
        expect(menuButton, "Menu button not exist").to.be.exist;
    });
    afterAll(async () => {
        await driver.quit()
    })
});