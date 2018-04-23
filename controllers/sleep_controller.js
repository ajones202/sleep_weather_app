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
    console.log(`These are your req.params =>${req.params.id}`);
    sleepDB.findByDate(req.params.id)
    .then((data) => {
      res.locals.data = data;
      next();
    })
    .catch(err => next('error in show by date'));
  },

  getByMonthJan(req,res,next) {
    sleepDB.findByMonthJan(req.params.month)
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
    console.log(req.body, 'update controller');
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


