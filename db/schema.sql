-- DROP DATABASE IF EXISTS sleep_activity_db;
-- CREATE DATABASE sleep_activity_db;
-- \c sleep_activity_db

DROP TABLE IF EXISTS sleep;

CREATE TABLE sleep (
  id SERIAL PRIMARY KEY,
  sleep_start VARCHAR(64),
  sleep_end   VARCHAR(64),
  minutes_asleep VARCHAR(64),
  minutes_awake VARCHAR(64),
  number_of_awakenings VARCHAR(64),
  time_in_bed VARCHAR(64),
  minutes_rem VARCHAR(64),
  minutes_light VARCHAR(64),
  minutes_deep VARCHAR(64),
  notes VARCHAR(225)
);

\copy sleep (sleep_start,sleep_end,minutes_asleep,minutes_awake,number_of_awakenings,time_in_bed,minutes_rem,minutes_light,minutes_deep) FROM './sleep_data.csv' DELIMITER ',';



