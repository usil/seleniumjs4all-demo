const { getVariable } = require("selenium4all/src/helpers/testHelpers");
const { getBrowserDriver } = require("selenium4all/src/lib");
const initYoutube = require("../helpers/init.youtube");

const URL_BASE = getVariable("youtube.base_url");
describe('Youtube - Init', () => {
    let driver
    beforeAll(async () => {
        driver = await getBrowserDriver();
        global.driver = driver;
        await driver.get(URL_BASE);
      });
    test('Debe mostrar el contenido del menu ', async () => {
        await initYoutube.checkIfMenuIsDisplay(driver);
    });
    afterAll(async () => {
        await driver.quit()
    })
});