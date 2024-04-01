# **seleniumjs4all - demo**

Simple hello world tests usign selenium and seleniumjs4all

More technical details can be found here https://github.com/usil/seleniumjs4all

## Requirements

- nodejs >= 16
- Chrome or firefox. If you have problems with chrome, you can use [chromium](https://github.com/usil/seleniumjs4all/wiki/Chromium)

## Run tests with chrome

```bash
npm uninstall chromedriver
npm install chromedriver --detect_chromedriver_version
npm install
npm run start
```

- For firefox check [this](https://github.com/usil/seleniumjs4all/wiki/Firefox)
- For chromium check [this](https://github.com/usil/seleniumjs4all/wiki/Chromium)

## Run tests with linux & docker & chrome

```
docker build --progress=plain -t acme-tests .
```

If your tests has variables, add them in this line **#ENV_VAR_HERE** of Dockerfile in format `ENV foo=bar` 

## Result

If you don't have any error, you should have this log in the shell or cmd:

![image](https://github.com/usil/seleniumjs4all-demo/assets/77288944/aa6e9c41-a9a8-48bb-953d-11ea8c875959)

and in the **report** folder you will find a folder with the execution id:

![image](https://user-images.githubusercontent.com/3322836/225386312-2c3dfcb8-4c93-4b87-9cbc-39943b7f91de.png)

![image](https://github.com/usil/seleniumjs4all-demo/assets/77288944/61b0035d-76dc-4007-8c84-55915e6400c9)

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
    <td>
      <img src="https://avatars.githubusercontent.com/u/77288944?v=4" width="100px;"/>
      <br />
      <label><a href="https://github.com/madeliyricra">Madeliy Ricra</a></label>
      <br />
    </td>  
  </tbody>
</table>
