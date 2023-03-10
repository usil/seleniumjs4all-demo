const { By, until } = require("selenium-webdriver");
const { getVariable } = require("selenium4all/src/helpers/testHelpers");
const { getBrowserDriver } = require("selenium4all/src/lib");
const initGoogle = require("../helpers/init.google");

const URL_BASE = getVariable("google.base_url");
describe('Google - Inicio', () => {
    let driver

    beforeAll(async () => {
        driver = await getBrowserDriver();
        global.driver = driver;
        await driver.get(URL_BASE);
      });
    test('Debe mostrar el search en el inicio', async () => {
        await initGoogle.checkSearchInput(driver);
    });
    afterAll(async () => {
        await driver.quit()
    })
});