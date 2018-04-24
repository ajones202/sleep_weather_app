const sleepDB = require('../models/sleep');
const fetch = require('node-fetch');
const kelvinToFahrenheit = require('kelvin-to-fahrenheit');


module.exports = {


  getAll(req, res, next) {
    sleepDB.showAll()
    .then((sleep) => {
      res.locals.sleep = sleep;
      next();
    })
    .catch(err => next('error in get all'));
  },

  getByDate(req, res, next) {
    sleepDB.findByDate(req.params.id)
    .then((data) => {
      res.locals.data = data;
      next();
    })
    .catch(err => next('error in show by date'));
  },


    create(req, res, next) {
    sleepDB.save(req.body)
      .then((data) => {
        res.locals.data = data;
        next();
      })
      .catch(err => next(err));
  },

    update(req, res, next) {
    sleepDB.update(req.body)
      .then((data) => {
        res.locals.data = data;
        next();
      })
      .catch(err => next(err));
  },

    destroy(req, res, next) {
    sleepDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },

  // weather fetch and promise. Weather returned in Fahrenheit

    showWeather(req, res, next){
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=11231&APPID=cf8043db11d980a89be428b1c87735b0')
      .then((resp) => {
       return resp.json()
      })
      .then((resp) => {
        res.locals.weather = kelvinToFahrenheit(resp.main.temp);

        next()

  })
},


};


