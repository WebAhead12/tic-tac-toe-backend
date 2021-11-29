BEGIN;

DROP TABLE IF EXISTS users, guests, scores CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  password VARCHAR(25) NOT NULL,
);

CREATE TABLE guests (
  id SERIAL PRIMARY KEY,
  guest VARCHAR(25) NOT NULL,
  user_id INTEGER REFERENCES users(id),
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