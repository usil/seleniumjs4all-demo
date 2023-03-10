const { expect } = require("chai");
const { until, By } = require("selenium-webdriver")

const initYoutube = {
    async checkMenuButton(driver) {
        const menuButton = await driver.wait(until.elementLocated(By.id("guide-button")));
        expect(menuButton, "Menu button not exist").to.be.exist;
        return menuButton;
    },
    async checkIfMenuIsDisplay(driver) {
        const menuButton = await this.checkMenuButton(driver);
        await menuButton.click();
        const menuDisplayed = await driver.wait(until.elementLocated(By.id("contentContainer")), 6 * 1000, "There isnt menu content", 4 * 100);
        expect(menuDisplayed, "Menu content is not visible").to.exist;
    }
}


module.exports = initYoutube;