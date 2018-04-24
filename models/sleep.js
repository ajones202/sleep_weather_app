const db = require('../config/connection');

//show all entries
 function showAll() {
  const queryPromise = db.many(`
    SELECT *
    FROM sleep
    ORDER BY sleep_start ASC
    `);
  return queryPromise;

};

// show only the date specified
function findByDate(id) {
  const queryPromise = db.one(`
    SELECT *
    FROM sleep
    WHERE id = $1;`, [id]);
  return queryPromise;
};


// add the new entry into the database
function save(log) {
    const queryPromise = db.one(`INSERT INTO sleep
     (sleep_start, sleep_end, minutes_asleep, number_of_awakenings, minutes_rem, minutes_light, minutes_deep)
      VALUES
      ($/sleep_start/,$/sleep_end/,$/minutes_asleep/,$/number_of_awakenings/,$/minutes_rem/,$/minutes_light/,$/minutes_deep/)
      RETURNING *
    `, log);
    return queryPromise;
  };

//change an entry
function update(log) {
    return db.one(`
      UPDATE sleep
      SET
      sleep_start = $/sleep_start/,
      sleep_end = $/sleep_end/
      WHERE id = $/id/
      RETURNING *
    `, log);
      };

// delete an entry
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
