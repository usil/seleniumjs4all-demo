# **seleniumjs4all - demo**

Collection of tests, more technical details can be found here https://github.com/usil/seleniumjs4all/blob/fix-windows/README.md

## Requirements

- nodejs >= 16
- Google Chrome 110.0.5481.177-1 ( Desktop and Docker)
- Chromium <= 110.0.5481 ( Windows )

## Config

```
- Config your browserOptions.json
- Config your testOptions.json
```

# One click usage (chrome & linux)

```bash
npm uninstall chromedriver
npm install chromedriver --detect_chromedriver_version
npm install
npm run start
```

# One click usage (chromium & windows)
- List of chromium versions to download https://chromium.cypress.io/

```bash
npm uninstall chromedriver
npm install chromedriver --include_chromium --detect_chromedriver_version
npm install
npm run start
```

# One click usage (docker & chrome)

Add the required variables in this line **#ENV_VAR_HERE** of Dockerfile in format `ENV foo=bar` 

```
docker build --progress=plain -t seleniumjs4all-demo-selenium-automations-nodejs .
```

## Send report by mail

https://github.com/usil/seleniumjs4all/wiki/Send-report-by-mail
<br>
<br>

# RESULTS

### - Bash report
![image](https://user-images.githubusercontent.com/3322836/200095302-3f7c81d9-239e-41c7-bfd9-36ccdb5203dd.png)

### - Web report

![image](https://user-images.githubusercontent.com/3322836/200892976-c2c0ad2c-a5a3-4c33-bb21-23de94e64316.png)

<br>
<br>
<br>

# Advances configurations

https://github.com/usil/seleniumjs4all/blob/fix-CustomEnviroment/README.md


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