const db = require('../config/connection');


 function showAll() {
  const queryPromise = db.many(`
    SELECT *
    FROM sleep
    ORDER BY sleep_start ASC
    `);
  return queryPromise;

};

function findByDate(id) {
  const queryPromise = db.one(`
    SELECT *
    FROM sleep
    WHERE id = $1;`, [id]);
  return queryPromise;
};


function findByMonthJan(month) {
  const queryPromise = db.many(`
    SELECT *
    FROM sleep
    WHERE sleep_start
    LIKE '2018-01%'
    `, month);
  return queryPromise;
};



function save(log) {
    const queryPromise = db.one(`INSERT INTO sleep
     (sleep_start, sleep_end, minutes_asleep, number_of_awakenings, minutes_rem, minutes_light, minutes_deep)
      VALUES
      ($/sleep_start/,$/sleep_end/,$/minutes_asleep/,$/number_of_awakenings/,$/minutes_rem/,$/minutes_light/,$/minutes_deep/)
      RETURNING *
    `, log);
    return queryPromise;
  };

function update(log) {
    return db.one(`
      UPDATE sleep
      SET
      sleep_start = $/sleep_start/,
      sleep_end = $/sleep_end/,
      minutes_asleep = $/minutes_asleep/,
      number_of_awakenings = $/number_of_awakenings/,
      time_in_bed = $/time_in_bed/,
      minutes_rem = $/minutes_rem/,
      minutes_light = $/minutes_light/,
      minutes_deep = $/minutes_deep/
      WHERE id = $/id/
      RETURNING *
    `, log);
      };


  function destroy(id) {
      return db.none(`
      DELETE
      FROM sleep
      WHERE id = $1
    `, id);


  }

    module.exports = {
      showAll,
      findByDate,
      save,
      update,
      destroy
    };
