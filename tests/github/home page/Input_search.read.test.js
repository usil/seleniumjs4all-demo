const { until, By, Key } = require("selenium-webdriver");
const { getVariable } = require("selenium4all/src/helpers/testHelpers");
const { getBrowserDriver } = require("selenium4all/src/lib");
const { expect } = require("chai");

const URL_BASE = getVariable("github.base_url");
const SEARCH = getVariable("github.wordSearch");
describe('GitHub - Inicio', () => {
    let driver, twitterResult, urlResult

    beforeAll(async () => {
        driver = await getBrowserDriver();
        global.driver = driver;
        await driver.get(URL_BASE);
      });

    test('[] - Debe mostrar la url pagina web y twitter de la busqueda encontrada', async () => {
        const searchContainer = driver.findElement(By.className('header-search-button'));
        await searchContainer.click();
    
        const searchInput = await driver.findElement(By.id("query-builder-test"));
        await searchInput.sendKeys(SEARCH, Key.ENTER);

        //List
        const condition = await until.elementsLocated(By.className("has-location"));
        await driver.wait(async driver => condition.fn(driver) , 4 * 1000, "Resultado de lista no encontrado", 5 * 100);
      
        const containerList = await driver.findElement(By.className('has-location'));
        const itemsList = await containerList.findElements(By.tagName('li'));

        for (let i = 2; i <= 3 && i < itemsList.length; i++) {
            const text = await itemsList[i].getText();
            if(i == 2){
                twitterResult = text;
            }
            if(i == 3){
                urlResult= text;
            }
        }

        expect(twitterResult, "Resultado de Twitter no encontrado").to.exist;
        expect(urlResult, "Resultado de sitio web no encontrado").to.exist;
    });
    afterAll(async () => {
        await driver.quit()
    })
});