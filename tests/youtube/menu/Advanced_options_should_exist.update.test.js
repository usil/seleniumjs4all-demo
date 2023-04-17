const { getVariable } = require("selenium4all/src/helpers/testHelpers");
const { getBrowserDriver } = require("selenium4all/src/lib");
const { until, By } = require("selenium-webdriver");
const { expect } = require("chai");
const { scriptClick, fluentWaitElement } = require("selenium4all/src/lib/utils");

const URL_BASE = getVariable("youtube.base_url");
describe('Youtube - Init', () => {
    let driver
    beforeAll(async () => {
        driver = await getBrowserDriver();
        global.driver = driver;
        await driver.get(URL_BASE);
      });
    test('20803bcd4ada - Debe mostrar el contenido del menu ', async () => {
        const condition = await until.elementLocated(By.id("contentContainer"));
        const menuButtonCondition = until.elementLocated(By.id("guide-button"));
        // const menuButton = await driver.wait( async driver => menuButtonCondition.fn(driver));
        const menuButton = await fluentWaitElement(driver, menuButtonCondition, 5000, "There ins't menu button", 3 * 100 );
        
        expect(menuButton, "Menu button not exist").to.be.exist;
        await scriptClick(driver, menuButton)
        const menuDisplayed = await driver.wait( async driver => condition.fn(driver), 6 * 1000, "There isnt menu content", 4 * 100);
        expect(menuDisplayed, "Menu content is not visible").to.exist;
    });
    afterAll(async () => {
        await driver.quit()
    })
});