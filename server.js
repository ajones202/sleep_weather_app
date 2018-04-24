const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const sleepRouter = require('./routes/sleep-routes');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', sleepRouter);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})


//index page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Sleep Log',
    year: ['2017','2018'],
    monthsList2017: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'],
    monthsList2018: ['January', 'February', 'March', 'April'],


  })

});

