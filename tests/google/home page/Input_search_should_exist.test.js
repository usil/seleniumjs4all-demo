const { until, By } = require("selenium-webdriver");
const { getVariable } = require("selenium4all/src/helpers/testHelpers");
const { getBrowserDriver } = require("selenium4all/src/lib");
const { expect } = require("chai");

const URL_BASE = getVariable("google.base_url");
describe('Google - Inicio', () => {
    let driver

    beforeAll(async () => {
        driver = await getBrowserDriver();
        global.driver = driver;
        await driver.get(URL_BASE);
      });
    test('Debe mostrar el search en el inicio', async () => {
        const condition = await until.elementLocated(By.name("q"));
        const searchInput = await driver.wait( async driver => condition.fn(driver) , 4 * 1000, "There isn't search input", 5 * 100);
        expect(searchInput).to.exist;
    });
    afterAll(async () => {
        await driver.quit()
    })
});