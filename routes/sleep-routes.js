const sleepRouter = require('express').Router();
const sleepController = require('../controllers/sleep_controller');
const sleepViewController = require('../controllers/views_controller');

const sleepDb = require('../models/sleep');

sleepRouter.get('/day/:id/edit', sleepController.getByDate, sleepViewController.showEditForm);

sleepRouter.get('/new', sleepViewController.showAddForm);

sleepRouter.get('/all_days',sleepController.getAll, sleepViewController.showMonthsInaList);


sleepRouter.route('/day/:id')
    .get(sleepController.getByDate, sleepController.showWeather,sleepViewController.showOne )
    .put(sleepController.update, sleepViewController.handleUpdate)
    .delete(sleepController.destroy, sleepViewController.handleDelete);


sleepRouter.route('/')
    .get(sleepController.getAll)
    .post(sleepController.create, sleepViewController.handleCreate);



// sleepRouter.get('/test', sleepController.showWeather);

module.exports = sleepRouter;
