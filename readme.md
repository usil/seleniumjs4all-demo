# **seleniumjs4all - demo**

Simple hello world tests usign selenium and seleniumjs4all

More technical details can be found here https://github.com/usil/seleniumjs4all

## Requirements

- nodejs >= 16

**For Linux**

- Google Chrome 110.0.5481.177-1 . How to install a custom version [here](https://github.com/usil/seleniumjs4all/wiki/Browsers#chrome--linux)
- Docker (optional)

**For Windows**

- Chromium <= 110.0.5481 (Tested on 2023 march)
  - Installer link: https://chromium.cypress.io/win64/beta/110.0.5481.38 
  - More versions here: https://chromium.cypress.io/

**For server executions with docker & headless**

- Docker

## Config

By default these files are already configured.

```
- Config your browserOptions.json
- Config your testOptions.json
```

For complex escenarios check this: https://github.com/usil/seleniumjs4all/tree/fix-windows#advanced-configurations or to send email notifications https://github.com/usil/seleniumjs4all/wiki/Send-report-by-mail

## Run tests with chrome & linux

```bash
npm uninstall chromedriver
npm install chromedriver --detect_chromedriver_version
npm install
npm run start
```

## Run tests with linux & docker

```
docker build --progress=plain -t seleniumjs4all-demo-selenium-automations-nodejs .
```

If your tests has variables, add them in this line **#ENV_VAR_HERE** of Dockerfile in format `ENV foo=bar` 

## Run tests with chrome & windows

For windows user, check this https://github.com/usil/seleniumjs4all/wiki/Unknown_error_cannot_find_chrome_binary

```bash
npm uninstall chromedriver
npm install chromedriver --include_chromium --detect_chromedriver_version
npm install
npm run start
```

## Result

If you don't have any error, you should have this log in the shell or cmd:

![image](https://user-images.githubusercontent.com/3322836/225386044-ac7f7faa-1aef-474a-8b4f-7faaa7e0c025.png)

and in the **report** folder you will find a folder with the execution id:

![image](https://user-images.githubusercontent.com/3322836/225386312-2c3dfcb8-4c93-4b87-9cbc-39943b7f91de.png)

![image](https://user-images.githubusercontent.com/3322836/225387370-57ecdf8c-929b-49fa-8178-3dfa62ffcab6.png)


# Contributors

<table>
  <tbody>
    <td>
      <img src="https://avatars0.githubusercontent.com/u/3322836?s=460&v=4" width="100px;"/>
      <br />
      <label><a href="http://jrichardsz.github.io/">JRichardsz</a></label>
      <br />
    </td>  
    <td>
      <img src="https://avatars.githubusercontent.com/u/66818290?s=400&u=d2f95a7497efd7fa830cf96fc2dc01120f27f3c5&v=4" width="100px;"/>
      <br />
      <label><a href="https://github.com/iSkyNavy">Diego Ramos</a></label>
      <br />
    </td>
  </tbody>
</table>