BEGIN;

DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  password VARCHAR(25) NOT NULL,
);

CREATE TABLE scores (
 id SERIAL PRIMARY KEY,
 wins VARCHAR(25),
 total VARCHAR(25),
 user_id INTEGER REFERENCES users(id),
);

INSERT INTO users (username, password)  VALUES
  ('xo', '123');

COMMIT;