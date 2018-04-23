

  module.exports = {


   showMonthsInaList(req,res,next) {
    res.render('all_days',{monthsSleep:res.locals.sleep});

    },

    showOne(req, res) {
    res.render('log-single', {
      data: res.locals.data, weather: res.locals.weather
    });

  },

    showAddForm(req, res) {
    res.render('log-add')

  },

    showEditForm(req, res) {
     res.render('log-edit')
  },



    handleCreate(req, res) {
      res.redirect('/all_days');
    },
    handleUpdate(req, res) {
       res.redirect('/all_days')
    },
    handleDelete(req, res) {
        res.redirect('/all_days')
    }


};
