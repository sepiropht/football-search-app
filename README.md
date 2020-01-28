# football-search-app

[![Demo](https://img.shields.io/badge/demo-online-blue.svg)](https://football-search-app.herokuapp.com/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

For the front run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
For the backend just run npm start and it will start at `http://localhost:8080/`

In developpement mode, we use proxy to avoid cors issue


## Build

Run `ng build` to build the frontend. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

When the server run it take the front code in /dist.

this demo is hosted on [Heroku](https://www.heroku.com/)


## Database

The mongodb is hosted in cloud [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)



## Doc Api

* Search League: `GET api/v1/leagues/search/:search`
* Get Team: `GET api/v1/team/id/:id`
* GEt Player : `GET api/v1/player/id/:id`