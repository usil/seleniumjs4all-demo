const { By, until, Key } = require("selenium-webdriver");
const { getVariable } = require("selenium4all/src/helpers/testHelpers");
const { getBrowserDriver } = require("selenium4all/src/lib");

describe('Wikipedia - portal', () => {
    let driver
    const URL_BASE = getVariable("wikipedia.base_url");
    const wikiSearch = getVariable("wikipedia.wordSearch");
    const expectColumnName = getVariable("wikipedia.usil.infobox.columnName");
    const expectColumnValue = getVariable("wikipedia.usil.infobox.columnValue");
    beforeAll(async () => {
        driver = await getBrowserDriver();
        global.driver = driver;
        await driver.get(URL_BASE);
    });
    test('search keyword in wikipedia summary table and validate content', async () => {
        const searchBox = await driver.findElement(By.name("search"));
        await searchBox.sendKeys(wikiSearch, Key.RETURN);
        let el = await driver.findElement(By.className("mw-search-results"));
        const conition = until.elementIsVisible(el);
        await driver.wait(driver => conition.fn(driver), 3000);
        const searchList = await driver.findElement(By.className("mw-search-results"));
        const linksContainers = await searchList.findElements(
            By.className("mw-search-result")
        );
        //get the first child of the option list
        const firstResult = await linksContainers[0].findElement(
            By.className("mw-search-result-heading")
        );
        //validate if exist and added click function
        const conditionFirstResult = until.elementIsVisible(firstResult);
        await driver.wait(driver => conditionFirstResult.fn(driver), 3000);
        const firstResultLink = await firstResult.findElement(By.xpath("./a"));
        await firstResultLink.click();
        // await driver.executeScript("arguments[0].click();", firstResultLink);
        //get box
        const box = await driver.findElement(By.className("infobox"));
        //valite if box exist and get ths and tds
        const conditionBox = until.elementIsVisible(box);
        await driver.wait(driver => conditionBox.fn(driver), 3000);
        let ths = await box.findElements(By.xpath("./tbody/tr/th[@scope='row']"));
        let tds = await box.findElements(By.xpath("./tbody/tr/td[@colspan='2']"));
        let columnNameResult = null;
        let columnValueResult = null;
        for (let i = 0; i < tds.length; i++) {
            const columnNameResultLoop = await ths[i].getText();
            const columnValueResultLoop = await tds[i].getText();
            if (columnNameResultLoop === expectColumnName ) {
                columnNameResult = columnNameResultLoop;
                columnValueResult = columnValueResultLoop
                break;
            }
        }
        expect(columnNameResult).not.toBeNull;
        expect(columnValueResult).not.toBeNull;

        expect(expectColumnValue).toEqual(columnValueResult, "The column is not equal to expect");
    });

    afterAll(async () => {
        await driver.quit()
    })
});