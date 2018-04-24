

  module.exports = {


    showMonthsInaList(req,res,next) {
        res.render('all_days',{monthsSleep:res.locals.sleep});

    },
//this displays the ejs associated with one log entry, and the weather
    showOne(req, res) {
        res.render('log-single', {
        data: res.locals.data, weather: res.locals.weather
      });


    },

    showAddForm(req, res) {
    res.render('log-add')

    },

// this displays the edit form and the weather
    showEditForm(req, res) {
       res.render('log-edit', {
       data: res.locals.data, weather: res.locals.weather
      });

    },

//this redirects back to the all days page after the action is completed
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
