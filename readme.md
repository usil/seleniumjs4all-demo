# **seleniumjs4all - demo**

Simple hello world tests using selenium and seleniumjs4all on this pages:

- google
- wikipedia
- youtube
- github

More technical details can be found here https://github.com/usil/seleniumjs4all

## Requirements

- nodejs >= 16

## Run tests manually

```bash
npm install
npm run start
```

Just wait until the end

## Run tests with docker

```
docker build -t acme-tests .
```

If your tests has variables, add them in this line **#ENV_VAR_HERE** of Dockerfile in format `ENV foo=bar` 

## Result

If you don't have any error, you should have this log in the shell or cmd:

![image](https://github.com/usil/seleniumjs4all-demo/assets/77288944/aa6e9c41-a9a8-48bb-953d-11ea8c875959)

and in the **report** folder you will find a folder with the execution id:

![image](https://user-images.githubusercontent.com/3322836/225386312-2c3dfcb8-4c93-4b87-9cbc-39943b7f91de.png)

![image](https://github.com/usil/seleniumjs4all-demo/assets/77288944/61b0035d-76dc-4007-8c84-55915e6400c9)

## Error report

To force a failure you can change some expected values in the settings.json file. For example change the CEO name here

![image](https://github.com/usil/seleniumjs4all-demo/assets/3322836/2157f856-2eb3-4737-b1e5-cb6dfeda83d0)

and run again the tests with 

```bash
npm run start
```

You will see all the error log and an html report with the error and a screenshot of the error.


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
