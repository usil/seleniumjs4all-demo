const { expect } = require("chai");
const { until, By, Key } = require("selenium-webdriver");

const initGoogle = {
    async checkSearchInput(driver) {
        const searchInput = await driver.wait(until.elementLocated(By.name("q")), 4 * 1000, "There isn't search input", 5 * 100);
        expect(searchInput).to.exist;
    },
    async failCheckSearchInput(driver) {
        const searchInput = await driver.wait(until.elementLocated(By.name("qs")), 4 * 1000, "There isn't search input", 5 * 100);
        expect(searchInput).to.exist;
    },
    async searchNodeJs(driver) {
        const searchInput = await driver.wait(until.elementLocated(By.name("q")), 4 * 1000, "There isn't search input", 5 * 100);
        await searchInput.sendKeys("NODEJS", Key.RETURN);
        const listOfResults = await driver.wait(until.elementsLocated(By.className("g")));
        expect(listOfResults.length).to.greaterThan(0)
    }
}

module.exports = initGoogle;