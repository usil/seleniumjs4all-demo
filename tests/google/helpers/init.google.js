const { expect } = require("chai");
const { until, By, Key } = require("selenium-webdriver");

const initGoogle = {
    async checkSearchInput(driver) {
        const condition = until.elementLocated(By.name("q"));

        const searchInput = await driver.wait( async driver => condition.fn(driver) , 4 * 1000, "There isn't search input", 5 * 100);
        expect(searchInput).to.exist;
    },
    async failCheckSearchInput(driver) {
        const condition = until.elementLocated(By.name("qs"));
        const searchInput = await driver.wait(async driver => condition.fn(driver) , 4 * 1000, "There isn't search input", 5 * 100);
        expect(searchInput).to.exist;
    },
    async searchNodeJs(driver) {
        const condition = until.elementLocated(By.name("q"));
        const condition2 = until.elementsLocated(By.className("g"));
        const searchInput = await driver.wait( async driver => condition.fn(driver) , 4 * 1000, "There isn't search input", 5 * 100);
        await searchInput.sendKeys("NODEJS", Key.RETURN);
        const listOfResults = await driver.wait(async driver => condition2.fn(driver));
        expect(listOfResults.length).to.greaterThan(0)
    }
}

module.exports = initGoogle;